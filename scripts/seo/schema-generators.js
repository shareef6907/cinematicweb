#!/usr/bin/env node
/**
 * Schema Generators for CWW
 * Reusable JSON-LD schema markup generators
 * 
 * Usage:
 *   const { generateServiceSchema, generateFAQSchema } = require('./schema-generators');
 *   console.log(generateServiceSchema({ name: 'Web Development', ... }));
 */

const COMPANY_INFO = {
  name: 'Cinematic Web Works',
  url: 'https://cinematicwebworks.com',
  logo: 'https://cinematicwebworks.com/logo.png',
  telephone: '+97339007750',
  email: 'ceo@bahrainnights.com',
  address: {
    streetAddress: 'Manama',
    addressLocality: 'Manama',
    addressCountry: 'BH'
  },
  sameAs: [
    'https://wa.me/97339007750'
  ],
  // Sister companies for cross-promotion
  sisterSites: [
    { name: 'BahrainNights', url: 'https://bahrainnights.com' },
    { name: 'Film Production Bahrain', url: 'https://filmproductionbahrain.com' },
    { name: 'Events Bahrain', url: 'https://eventsbahrain.com' }
  ]
};

/**
 * Generate LocalBusiness schema
 */
function generateLocalBusinessSchema(overrides = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${COMPANY_INFO.url}/#organization`,
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.url,
    logo: COMPANY_INFO.logo,
    telephone: COMPANY_INFO.telephone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      ...COMPANY_INFO.address
    },
    sameAs: COMPANY_INFO.sameAs,
    priceRange: '$$',
    ...overrides
  };
}

/**
 * Generate Service schema
 * @param {Object} options
 * @param {string} options.name - Service name
 * @param {string} options.description - Service description
 * @param {string} options.url - Service page URL
 * @param {string} options.serviceType - Type of service
 * @param {string} [options.areaServed] - Area served (default: Bahrain)
 */
function generateServiceSchema({ name, description, url, serviceType, areaServed = 'Bahrain' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    serviceType,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_INFO.name,
      telephone: COMPANY_INFO.telephone,
      email: COMPANY_INFO.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: COMPANY_INFO.address.addressLocality,
        addressCountry: COMPANY_INFO.address.addressCountry
      }
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed
    }
  };
}

/**
 * Generate FAQ schema
 * @param {Array<{question: string, answer: string}>} faqs - Array of FAQ items
 */
function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer
      }
    }))
  };
}

/**
 * Generate Breadcrumb schema
 * @param {Array<{name: string, url: string}>} items - Breadcrumb items (in order)
 */
function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Generate Article schema (for blog posts)
 * @param {Object} options
 * @param {string} options.headline - Article title
 * @param {string} options.description - Article description
 * @param {string} options.url - Article URL
 * @param {string} options.image - Article image URL
 * @param {string} options.datePublished - ISO date string
 * @param {string} [options.dateModified] - ISO date string (defaults to datePublished)
 * @param {string} [options.author] - Author name (defaults to company)
 */
function generateArticleSchema({ headline, description, url, image, datePublished, dateModified, author }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author || COMPANY_INFO.name,
      url: COMPANY_INFO.url
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.url,
      logo: {
        '@type': 'ImageObject',
        url: COMPANY_INFO.logo
      }
    }
  };
}

/**
 * Generate WebPage schema
 * @param {Object} options
 * @param {string} options.name - Page title
 * @param {string} options.description - Page description
 * @param {string} options.url - Page URL
 */
function generateWebPageSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.url
    }
  };
}

/**
 * Generate Review/AggregateRating schema
 * @param {Object} options
 * @param {string} options.itemReviewed - Name of item being reviewed
 * @param {number} options.ratingValue - Average rating
 * @param {number} options.reviewCount - Number of reviews
 */
function generateAggregateRatingSchema({ itemReviewed, ratingValue, reviewCount }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: itemReviewed
    },
    ratingValue,
    bestRating: 5,
    worstRating: 1,
    reviewCount
  };
}

/**
 * Generate HowTo schema (for tutorial/process pages)
 * @param {Object} options
 * @param {string} options.name - How-to title
 * @param {string} options.description - How-to description
 * @param {Array<{name: string, text: string}>} options.steps - Steps
 */
function generateHowToSchema({ name, description, steps }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text
    }))
  };
}

/**
 * Wrap schema in script tag for HTML embedding
 * @param {Object} schema - Schema object
 * @returns {string} HTML script tag with JSON-LD
 */
function wrapInScriptTag(schema) {
  return `<script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
</script>`;
}

/**
 * Generate multiple schemas wrapped in script tags
 * @param {Array<Object>} schemas - Array of schema objects
 * @returns {string} Multiple HTML script tags
 */
function generateMultipleSchemas(schemas) {
  return schemas.map(schema => wrapInScriptTag(schema)).join('\n\n');
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];

  if (command === 'service') {
    const schema = generateServiceSchema({
      name: args[1] || 'Web Development',
      description: args[2] || 'Professional web development services',
      url: args[3] || 'https://cinematicwebworks.com/web-development-bahrain.html',
      serviceType: args[4] || 'Web Development'
    });
    console.log(wrapInScriptTag(schema));
  } else if (command === 'faq') {
    // Example usage
    const schema = generateFAQSchema([
      { question: 'How much does a website cost?', answer: 'Prices start from BD 300.' }
    ]);
    console.log(wrapInScriptTag(schema));
  } else if (command === 'breadcrumb') {
    const schema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://cinematicwebworks.com/' },
      { name: 'Services', url: 'https://cinematicwebworks.com/services/' },
      { name: args[1] || 'Service', url: args[2] || 'https://cinematicwebworks.com/service.html' }
    ]);
    console.log(wrapInScriptTag(schema));
  } else {
    console.log(`
Schema Generator CLI

Usage:
  node schema-generators.js service "Service Name" "Description" "URL" "ServiceType"
  node schema-generators.js faq
  node schema-generators.js breadcrumb "Page Name" "Page URL"

Or require as module:
  const { generateServiceSchema } = require('./schema-generators');
`);
  }
}

module.exports = {
  COMPANY_INFO,
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateWebPageSchema,
  generateAggregateRatingSchema,
  generateHowToSchema,
  wrapInScriptTag,
  generateMultipleSchemas
};
