#!/usr/bin/env node
/**
 * Automatic Sitemap Generator for CWW
 * Scans all HTML files and generates sitemap.xml
 * 
 * Usage:
 *   node scripts/seo/generate-sitemap.js
 *   npm run sitemap (if added to package.json)
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  baseUrl: 'https://cinematicwebworks.com',
  rootDir: path.resolve(__dirname, '../..'),
  outputFile: 'sitemap.xml',
  excludePatterns: [
    /^_/,           // _next, _error, etc.
    /^node_modules/,
    /^scripts/,
    /^templates/,
    /^\./, 
    /404\.html$/,
    /test\.html$/
  ],
  // Priority based on page type
  priorityRules: [
    { pattern: /^index\.html$/, priority: 1.0, changefreq: 'weekly' },
    { pattern: /^blog\.html$/, priority: 0.9, changefreq: 'weekly' },
    { pattern: /^blog\//, priority: 0.8, changefreq: 'monthly' },
    { pattern: /web-development-bahrain/, priority: 0.9, changefreq: 'monthly' },
    { pattern: /web-design-bahrain/, priority: 0.9, changefreq: 'monthly' },
    { pattern: /cinematic-websites/, priority: 0.9, changefreq: 'monthly' },
    { pattern: /ecommerce/, priority: 0.8, changefreq: 'monthly' },
    { pattern: /restaurant|real-estate|corporate/, priority: 0.8, changefreq: 'monthly' },
    { pattern: /services\//, priority: 0.8, changefreq: 'monthly' },
    { pattern: /industries/, priority: 0.8, changefreq: 'monthly' },
    { pattern: /web-development-/, priority: 0.7, changefreq: 'monthly' }, // Location pages
    { pattern: /\.html$/, priority: 0.7, changefreq: 'monthly' } // Default for HTML
  ]
};

/**
 * Recursively find all HTML files
 */
function findHtmlFiles(dir, baseDir = dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.relative(baseDir, fullPath);
    
    // Check exclusions
    if (CONFIG.excludePatterns.some(pattern => pattern.test(relativePath))) {
      continue;
    }
    
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findHtmlFiles(fullPath, baseDir, files);
    } else if (item.endsWith('.html')) {
      files.push(relativePath);
    }
  }
  
  return files;
}

/**
 * Get priority and changefreq for a file
 */
function getUrlProperties(relativePath) {
  for (const rule of CONFIG.priorityRules) {
    if (rule.pattern.test(relativePath)) {
      return { priority: rule.priority, changefreq: rule.changefreq };
    }
  }
  return { priority: 0.5, changefreq: 'monthly' };
}

/**
 * Get last modified date from file
 */
function getLastModified(filePath) {
  try {
    const stat = fs.statSync(filePath);
    return stat.mtime.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

/**
 * Convert file path to URL
 */
function fileToUrl(relativePath) {
  // Convert to URL format
  let url = relativePath.replace(/\\/g, '/');
  
  // index.html -> /
  if (url === 'index.html') {
    return CONFIG.baseUrl + '/';
  }
  
  return `${CONFIG.baseUrl}/${url}`;
}

/**
 * Generate sitemap XML
 */
function generateSitemap(files) {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Sort files: index first, then by priority, then alphabetically
  const sortedFiles = files
    .map(file => ({
      file,
      url: fileToUrl(file),
      ...getUrlProperties(file),
      lastmod: getLastModified(path.join(CONFIG.rootDir, file))
    }))
    .sort((a, b) => {
      if (a.file === 'index.html') return -1;
      if (b.file === 'index.html') return 1;
      if (a.priority !== b.priority) return b.priority - a.priority;
      return a.url.localeCompare(b.url);
    });

  for (const item of sortedFiles) {
    xml += `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>
`;
  }

  xml += '</urlset>\n';
  return xml;
}

/**
 * Main execution
 */
function main() {
  console.log('🗺️  Generating sitemap for CWW...\n');
  
  const files = findHtmlFiles(CONFIG.rootDir);
  console.log(`📄 Found ${files.length} HTML files:\n`);
  
  // Group by priority for display
  const grouped = {};
  for (const file of files) {
    const { priority } = getUrlProperties(file);
    if (!grouped[priority]) grouped[priority] = [];
    grouped[priority].push(file);
  }
  
  for (const priority of Object.keys(grouped).sort((a, b) => b - a)) {
    console.log(`  Priority ${priority}:`);
    for (const file of grouped[priority].slice(0, 5)) {
      console.log(`    - ${file}`);
    }
    if (grouped[priority].length > 5) {
      console.log(`    ... and ${grouped[priority].length - 5} more`);
    }
  }
  
  const sitemap = generateSitemap(files);
  const outputPath = path.join(CONFIG.rootDir, CONFIG.outputFile);
  
  fs.writeFileSync(outputPath, sitemap);
  console.log(`\n✅ Sitemap written to ${CONFIG.outputFile}`);
  console.log(`   Total URLs: ${files.length}`);
  
  // Verify
  const stats = fs.statSync(outputPath);
  console.log(`   File size: ${(stats.size / 1024).toFixed(1)} KB`);
}

main();
