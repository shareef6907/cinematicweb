'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, Globe, Code, Smartphone, Cloud, Shield, Clock, DollarSign, Users, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Web Development Services in Qatar | Cinematic Web Works',
  description: 'Professional web development for Qatar businesses. Custom websites, enterprise applications, and digital solutions for organizations across Qatar.',
  openGraph: {
    title: 'Web Development Services in Qatar | Cinematic Web Works',
    description: 'Professional web development for Qatar businesses and enterprises.',
    url: 'https://cinematicwebworks.com/locations/qatar',
  },
};

const services = [
  { icon: Code, title: 'Custom Web Development', description: 'Bespoke websites and web applications built to meet the high standards expected by Qatar\'s business community.' },
  { icon: Smartphone, title: 'Mobile Solutions', description: 'Native and cross-platform mobile applications serving Qatar\'s connected population.' },
  { icon: Cloud, title: 'Enterprise Platforms', description: 'Large-scale digital platforms for Qatar\'s government entities and major corporations.' },
  { icon: Shield, title: 'Secure Applications', description: 'Security-first development for Qatar\'s sensitive industries including finance and energy.' },
];

const advantages = [
  { icon: DollarSign, title: 'Cost Effective', description: 'Significant savings compared to Qatar rates while maintaining enterprise quality.' },
  { icon: Clock, title: 'Same Timezone', description: 'Bahrain and Qatar share the same timezone for seamless collaboration.' },
  { icon: Users, title: 'Regional Understanding', description: 'Deep knowledge of Qatar business culture and market requirements.' },
  { icon: Globe, title: 'Global Quality', description: 'International standards with regional expertise.' },
];

const faqs = [
  {
    question: 'Do you work with Qatar-based companies?',
    answer: 'Yes, we serve clients throughout Qatar including Doha, Al Wakrah, Al Rayyan, and other areas. Our Bahrain location provides easy access and same-timezone collaboration, making remote work seamless.',
  },
  {
    question: 'What are the cost benefits of working with you?',
    answer: 'Qatar businesses typically save 40-60% compared to local Doha agencies. Our Bahrain base has lower operational costs, and we pass these savings to clients while maintaining the same quality standards.',
  },
  {
    question: 'Can you handle enterprise-scale projects?',
    answer: 'Absolutely. We have experience with large-scale projects for government entities and major corporations. Our team can scale to meet enterprise requirements while maintaining quality and security standards.',
  },
  {
    question: 'Do you support Arabic language websites?',
    answer: 'Yes, we build fully bilingual Arabic/English websites with proper RTL support, Arabic typography, and localized content. Our team includes Arabic speakers who ensure quality across all aspects.',
  },
  {
    question: 'How do meetings and communication work?',
    answer: 'We\'re in the same timezone, so scheduling is easy. We use video conferencing for meetings, provide dedicated project managers, and maintain real-time communication via chat. Some clients also appreciate occasional in-person meetings in Doha.',
  },
];

export default function QatarPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/20 mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Qatar
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional Web Development for <span className="gradient-text">Qatar</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Qatar's ambition for global excellence extends to digital. Cinematic Web Works delivers world-class web development for Qatar businesses and organizations, with the strategic advantage of our neighboring Bahrain base.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all duration-300"
              >
                Our Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Digital Excellence for Qatar
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Qatar has established itself as a regional leader in innovation, infrastructure, and global events. From the iconic skyline of Doha to world-class sporting venues, the nation exemplifies excellence. Your digital presence should reflect this same standard of quality.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                At Cinematic Web Works, we bring enterprise-grade web development capabilities to Qatar businesses with the unique advantage of our Bahrain location. We're neighbors – sharing the same timezone, cultural context, and regional understanding – while offering significant cost advantages over Doha-based agencies.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our team has extensive experience serving the GCC market and understands the expectations of Qatar's discerning business community. Whether you're a Doha-based corporation, a Qatar Free Zone company, a government entity, or an SME anywhere in Qatar, we deliver solutions that meet your standards.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We've helped Qatar organizations across sectors build impressive digital presences, from corporate websites for West Bay businesses to e-commerce platforms for retailers, from educational platforms for universities to enterprise systems for major institutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-b from-emerald-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/20 mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Web Solutions for Qatar Businesses
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital services tailored for Qatar's business requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/20 mb-4">
              Why CWW
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Neighbor for Digital Excellence
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Strategic advantages of working with your Bahrain-based neighbor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{advantage.title}</h3>
                <p className="text-gray-500 text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gradient-to-b from-emerald-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/20 mb-4">
                Industries
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Serving Qatar's Key Sectors
              </h2>
              <p className="text-gray-400 mb-8">
                From energy giants to innovative startups, we serve organizations across Qatar's diverse economic landscape.
              </p>
              <ul className="space-y-4">
                {['Oil, Gas & Energy', 'Financial Services', 'Government & Public Sector', 'Sports & Entertainment', 'Education & Research', 'Healthcare & Medical', 'Real Estate & Construction', 'Tourism & Hospitality'].map((industry) => (
                  <li key={industry} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    {industry}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 p-8 border border-emerald-500/20">
                <div className="h-full rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Award className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    <p className="text-white font-semibold text-xl mb-2">Qatar Excellence</p>
                    <p className="text-gray-400">Digital solutions matching Qatar's standards</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/20 mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions from Qatar Organizations
            </h2>
            <p className="text-gray-400">
              Common questions about our services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-emerald-950/10 to-transparent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Elevate Your Qatar Business?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Partner with your neighbor for world-class digital solutions. Let's discuss how we can help your organization succeed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all duration-300"
              >
                About CWW
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
