#!/usr/bin/env node
/**
 * SEO Validator for CWW
 * Checks all HTML pages for required SEO elements
 * 
 * Usage:
 *   node scripts/seo/validate-seo.js
 *   node scripts/seo/validate-seo.js --fix (auto-fix simple issues)
 *   npm run seo:validate (if added to package.json)
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  baseUrl: 'https://cinematicwebworks.com',
  rootDir: path.resolve(__dirname, '../..'),
  excludePatterns: [
    /^_/,
    /^node_modules/,
    /^scripts/,
    /^templates/,
    /^\./,
    /404\.html$/
  ]
};

// SEO requirements
const REQUIREMENTS = {
  title: {
    required: true,
    maxLength: 60,
    minLength: 20,
    pattern: /<title>([^<]+)<\/title>/i,
    description: 'Page title'
  },
  metaDescription: {
    required: true,
    maxLength: 160,
    minLength: 50,
    pattern: /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i,
    description: 'Meta description'
  },
  h1: {
    required: true,
    maxCount: 1,
    pattern: /<h1[^>]*>(.+?)<\/h1>/gis, // Allow inner HTML like <em>
    description: 'H1 heading'
  },
  canonical: {
    required: true,
    pattern: /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i,
    description: 'Canonical URL'
  },
  ogTitle: {
    required: true,
    pattern: /<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i,
    description: 'Open Graph title'
  },
  ogDescription: {
    required: true,
    pattern: /<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i,
    description: 'Open Graph description'
  },
  ogImage: {
    required: true,
    pattern: /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i,
    description: 'Open Graph image'
  },
  schemaMarkup: {
    required: true,
    pattern: /<script\s+type=["']application\/ld\+json["']>/i,
    description: 'Schema.org JSON-LD markup'
  },
  viewport: {
    required: true,
    pattern: /<meta\s+name=["']viewport["']/i,
    description: 'Viewport meta tag'
  },
  charset: {
    required: true,
    pattern: /<meta\s+charset=["']UTF-8["']/i,
    description: 'UTF-8 charset'
  },
  langAttribute: {
    required: true,
    pattern: /<html[^>]*\s+lang=["']([^"']+)["']/i,
    description: 'HTML lang attribute'
  }
};

// Additional checks
const CONTENT_CHECKS = {
  internalLinks: {
    minCount: 3,
    pattern: /<a\s+href=["'](?!https?:\/\/|mailto:|tel:|#)([^"']+)["']/gi,
    description: 'Internal links'
  },
  images: {
    requireAlt: true,
    pattern: /<img[^>]+>/gi,
    altPattern: /alt=["']([^"']*)["']/i,
    description: 'Images with alt text'
  },
  whatsappCta: {
    required: true,
    pattern: /wa\.me\/97339007750/i,
    description: 'WhatsApp CTA (+973 39007750)'
  }
};

/**
 * Find all HTML files
 */
function findHtmlFiles(dir, baseDir = dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.relative(baseDir, fullPath);
    
    if (CONFIG.excludePatterns.some(pattern => pattern.test(relativePath))) {
      continue;
    }
    
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findHtmlFiles(fullPath, baseDir, files);
    } else if (item.endsWith('.html')) {
      files.push({ path: fullPath, relative: relativePath });
    }
  }
  
  return files;
}

/**
 * Validate a single HTML file
 */
function validateFile(filePath, content) {
  const issues = [];
  const warnings = [];
  const passed = [];

  // Check required elements
  for (const [key, req] of Object.entries(REQUIREMENTS)) {
    const match = content.match(req.pattern);
    
    if (!match) {
      if (req.required) {
        issues.push(`❌ Missing ${req.description}`);
      }
    } else {
      const value = match[1] || '';
      
      // Length checks
      if (req.maxLength && value.length > req.maxLength) {
        warnings.push(`⚠️  ${req.description} too long (${value.length}/${req.maxLength} chars)`);
      } else if (req.minLength && value.length < req.minLength) {
        warnings.push(`⚠️  ${req.description} too short (${value.length}/${req.minLength} chars)`);
      }
      
      // Count checks (for H1)
      if (req.maxCount) {
        const allMatches = content.match(req.pattern);
        if (allMatches && allMatches.length > req.maxCount) {
          issues.push(`❌ Multiple ${req.description} found (${allMatches.length}) - should have only ${req.maxCount}`);
        } else {
          passed.push(`✅ ${req.description}`);
        }
      } else {
        passed.push(`✅ ${req.description}`);
      }
    }
  }

  // Content checks
  // Internal links
  const internalLinks = content.match(CONTENT_CHECKS.internalLinks.pattern) || [];
  if (internalLinks.length < CONTENT_CHECKS.internalLinks.minCount) {
    warnings.push(`⚠️  Only ${internalLinks.length} internal links (recommend ${CONTENT_CHECKS.internalLinks.minCount}+)`);
  } else {
    passed.push(`✅ ${internalLinks.length} internal links`);
  }

  // Images with alt
  const images = content.match(CONTENT_CHECKS.images.pattern) || [];
  let imagesWithoutAlt = 0;
  for (const img of images) {
    const altMatch = img.match(CONTENT_CHECKS.images.altPattern);
    if (!altMatch || altMatch[1].trim() === '') {
      imagesWithoutAlt++;
    }
  }
  if (imagesWithoutAlt > 0) {
    warnings.push(`⚠️  ${imagesWithoutAlt} image(s) missing alt text`);
  } else if (images.length > 0) {
    passed.push(`✅ All ${images.length} images have alt text`);
  }

  // WhatsApp CTA
  if (!CONTENT_CHECKS.whatsappCta.pattern.test(content)) {
    warnings.push(`⚠️  Missing WhatsApp CTA link`);
  } else {
    passed.push(`✅ WhatsApp CTA present`);
  }

  // Check for sister site cross-links
  const sisterSites = ['bahrainnights.com', 'filmproductionbahrain.com', 'eventsbahrain.com'];
  const hasSisterLink = sisterSites.some(site => content.includes(site));
  if (!hasSisterLink) {
    warnings.push(`⚠️  No cross-links to sister sites`);
  } else {
    passed.push(`✅ Sister site cross-links present`);
  }

  return { issues, warnings, passed };
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  const verbose = args.includes('--verbose') || args.includes('-v');
  
  console.log('🔍 SEO Validation for CWW\n');
  console.log('═'.repeat(60) + '\n');

  const files = findHtmlFiles(CONFIG.rootDir);
  console.log(`📄 Scanning ${files.length} HTML files...\n`);

  let totalIssues = 0;
  let totalWarnings = 0;
  let perfectPages = 0;
  const problemFiles = [];

  for (const file of files) {
    const content = fs.readFileSync(file.path, 'utf-8');
    const { issues, warnings, passed } = validateFile(file.path, content);

    totalIssues += issues.length;
    totalWarnings += warnings.length;

    if (issues.length === 0 && warnings.length === 0) {
      perfectPages++;
      if (verbose) {
        console.log(`✅ ${file.relative}`);
      }
    } else {
      problemFiles.push({ file: file.relative, issues, warnings, passed });
    }
  }

  // Report problem files
  if (problemFiles.length > 0) {
    console.log('\n📋 PAGES WITH ISSUES:\n');
    
    for (const { file, issues, warnings } of problemFiles) {
      console.log(`\n📄 ${file}`);
      console.log('─'.repeat(50));
      
      for (const issue of issues) {
        console.log(`   ${issue}`);
      }
      for (const warning of warnings) {
        console.log(`   ${warning}`);
      }
    }
  }

  // Summary
  console.log('\n' + '═'.repeat(60));
  console.log('\n📊 SUMMARY\n');
  console.log(`   Total pages:     ${files.length}`);
  console.log(`   Perfect pages:   ${perfectPages} (${Math.round(perfectPages/files.length*100)}%)`);
  console.log(`   Pages w/ issues: ${problemFiles.length}`);
  console.log(`   Total errors:    ${totalIssues}`);
  console.log(`   Total warnings:  ${totalWarnings}`);
  
  if (totalIssues === 0) {
    console.log('\n✅ All pages pass required SEO checks!');
  } else {
    console.log(`\n❌ ${totalIssues} critical issues need fixing`);
  }

  if (totalWarnings > 0) {
    console.log(`⚠️  ${totalWarnings} warnings to review`);
  }

  console.log('\n');
  
  // Exit with error code if issues found
  process.exit(totalIssues > 0 ? 1 : 0);
}

main();
