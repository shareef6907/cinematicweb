#!/usr/bin/env node
/**
 * Lighthouse Audit Runner for CWW
 * Runs Lighthouse audits on all pages and generates report
 * 
 * Prerequisites:
 *   npm install -g lighthouse
 *   (or uses npx if not installed globally)
 * 
 * Usage:
 *   node scripts/seo/lighthouse-audit.js
 *   node scripts/seo/lighthouse-audit.js --url https://cinematicwebworks.com/web-development-bahrain.html
 *   npm run lighthouse (if added to package.json)
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const CONFIG = {
  baseUrl: 'https://cinematicwebworks.com',
  outputDir: path.resolve(__dirname, '../../reports/lighthouse'),
  // Pages to audit (prioritized)
  priorityPages: [
    '/',
    '/web-development-bahrain.html',
    '/web-design-bahrain.html',
    '/cinematic-websites.html',
    '/ecommerce-website-bahrain.html',
    '/restaurant-website-bahrain.html',
    '/blog.html'
  ],
  // Thresholds for pass/fail
  thresholds: {
    performance: 80,
    accessibility: 90,
    bestPractices: 80,
    seo: 90
  }
};

/**
 * Check if Lighthouse is available
 */
function checkLighthouse() {
  try {
    execSync('npx lighthouse --version', { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

/**
 * Run Lighthouse on a single URL
 */
function runLighthouse(url, outputPath) {
  return new Promise((resolve, reject) => {
    const args = [
      'lighthouse',
      url,
      '--output=json',
      '--output=html',
      `--output-path=${outputPath}`,
      '--chrome-flags="--headless --no-sandbox"',
      '--quiet',
      '--only-categories=performance,accessibility,best-practices,seo'
    ];

    console.log(`   Auditing ${url}...`);
    
    const child = spawn('npx', args, {
      shell: true,
      stdio: ['pipe', 'pipe', 'pipe']
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data) => { stdout += data; });
    child.stderr.on('data', (data) => { stderr += data; });

    child.on('close', (code) => {
      if (code === 0) {
        resolve({ success: true, output: stdout });
      } else {
        resolve({ success: false, error: stderr });
      }
    });

    child.on('error', (err) => {
      resolve({ success: false, error: err.message });
    });
  });
}

/**
 * Parse Lighthouse JSON results
 */
function parseResults(jsonPath) {
  try {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    return {
      performance: Math.round(data.categories.performance.score * 100),
      accessibility: Math.round(data.categories.accessibility.score * 100),
      bestPractices: Math.round(data.categories['best-practices'].score * 100),
      seo: Math.round(data.categories.seo.score * 100),
      lcp: data.audits['largest-contentful-paint']?.displayValue || 'N/A',
      fid: data.audits['max-potential-fid']?.displayValue || 'N/A',
      cls: data.audits['cumulative-layout-shift']?.displayValue || 'N/A',
      ttfb: data.audits['server-response-time']?.displayValue || 'N/A'
    };
  } catch (err) {
    return null;
  }
}

/**
 * Score emoji
 */
function getScoreEmoji(score, threshold) {
  if (score >= threshold) return '✅';
  if (score >= threshold - 10) return '⚠️';
  return '❌';
}

/**
 * Generate summary report
 */
function generateReport(results) {
  let report = `# Lighthouse Audit Report - CWW
Generated: ${new Date().toISOString()}

## Summary

| Page | Performance | Accessibility | Best Practices | SEO |
|------|-------------|--------------|----------------|-----|
`;

  for (const r of results) {
    if (r.scores) {
      const perf = `${getScoreEmoji(r.scores.performance, CONFIG.thresholds.performance)} ${r.scores.performance}`;
      const a11y = `${getScoreEmoji(r.scores.accessibility, CONFIG.thresholds.accessibility)} ${r.scores.accessibility}`;
      const bp = `${getScoreEmoji(r.scores.bestPractices, CONFIG.thresholds.bestPractices)} ${r.scores.bestPractices}`;
      const seo = `${getScoreEmoji(r.scores.seo, CONFIG.thresholds.seo)} ${r.scores.seo}`;
      report += `| ${r.page} | ${perf} | ${a11y} | ${bp} | ${seo} |\n`;
    } else {
      report += `| ${r.page} | ❌ Error | - | - | - |\n`;
    }
  }

  report += `
## Core Web Vitals

| Page | LCP | FID | CLS | TTFB |
|------|-----|-----|-----|------|
`;

  for (const r of results) {
    if (r.scores) {
      report += `| ${r.page} | ${r.scores.lcp} | ${r.scores.fid} | ${r.scores.cls} | ${r.scores.ttfb} |\n`;
    }
  }

  report += `
## Thresholds

- Performance: ${CONFIG.thresholds.performance}+
- Accessibility: ${CONFIG.thresholds.accessibility}+
- Best Practices: ${CONFIG.thresholds.bestPractices}+
- SEO: ${CONFIG.thresholds.seo}+

## Files

HTML reports saved to: \`reports/lighthouse/\`
`;

  return report;
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);
  const singleUrl = args.find(a => a.startsWith('--url='))?.split('=')[1];

  console.log('🔦 Lighthouse Audit Runner\n');
  console.log('═'.repeat(60) + '\n');

  // Check Lighthouse
  if (!checkLighthouse()) {
    console.log('❌ Lighthouse not found. Installing...');
    try {
      execSync('npm install -g lighthouse', { stdio: 'inherit' });
    } catch {
      console.log('Failed to install Lighthouse. Please run: npm install -g lighthouse');
      process.exit(1);
    }
  }

  // Create output directory
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  // Pages to audit
  const pages = singleUrl 
    ? [singleUrl.replace(CONFIG.baseUrl, '') || '/']
    : CONFIG.priorityPages;

  console.log(`📄 Auditing ${pages.length} page(s)...\n`);

  const results = [];

  for (const page of pages) {
    const url = page.startsWith('http') ? page : `${CONFIG.baseUrl}${page}`;
    const safeName = page.replace(/\//g, '_').replace(/\.html$/, '') || 'index';
    const outputPath = path.join(CONFIG.outputDir, safeName);

    const result = await runLighthouse(url, outputPath);
    
    if (result.success) {
      const jsonPath = `${outputPath}.report.json`;
      const scores = parseResults(jsonPath);
      
      if (scores) {
        console.log(`   ✅ ${page}: P:${scores.performance} A:${scores.accessibility} BP:${scores.bestPractices} SEO:${scores.seo}`);
        results.push({ page, scores });
      } else {
        console.log(`   ⚠️  ${page}: Completed but couldn't parse results`);
        results.push({ page, scores: null });
      }
    } else {
      console.log(`   ❌ ${page}: ${result.error?.substring(0, 50) || 'Failed'}`);
      results.push({ page, scores: null });
    }
  }

  // Generate report
  const report = generateReport(results);
  const reportPath = path.join(CONFIG.outputDir, 'REPORT.md');
  fs.writeFileSync(reportPath, report);

  console.log('\n' + '═'.repeat(60));
  console.log('\n📊 RESULTS\n');

  // Summary stats
  const successful = results.filter(r => r.scores);
  const avgPerf = successful.length > 0 
    ? Math.round(successful.reduce((a, b) => a + b.scores.performance, 0) / successful.length)
    : 0;
  const avgSeo = successful.length > 0
    ? Math.round(successful.reduce((a, b) => a + b.scores.seo, 0) / successful.length)
    : 0;

  console.log(`   Pages audited: ${results.length}`);
  console.log(`   Successful:    ${successful.length}`);
  console.log(`   Avg Performance: ${avgPerf}`);
  console.log(`   Avg SEO Score:   ${avgSeo}`);
  console.log(`\n   Report saved: ${reportPath}`);
  console.log(`   HTML reports: ${CONFIG.outputDir}/`);
  console.log('\n');
}

main().catch(console.error);
