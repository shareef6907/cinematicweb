'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, Globe, Code, Smartphone, Cloud, Shield, Clock, DollarSign, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Web Development Services in Saudi Arabia | Cinematic Web Works',
  description: 'Professional web development for Saudi Arabian businesses. Custom websites, Vision 2030 digital solutions, and enterprise applications across KSA.',
  openGraph: {
    title: 'Web Development Services in Saudi Arabia | Cinematic Web Works',
    description: 'Professional web development for Saudi Arabian businesses supporting Vision 2030.',
    url: 'https://cinematicwebworks.com/locations/saudi-arabia',
  },
};

const services = [
  { icon: TrendingUp, title: 'Vision 2030 Digital Solutions', description: 'Supporting Saudi Arabia\'s digital transformation with modern web applications and platforms.' },
  { icon: Code, title: 'Enterprise Development', description: 'Large-scale web applications for Saudi corporations, government entities, and growing businesses.' },
  { icon: Cloud, title: 'Cloud & SaaS Solutions', description: 'Scalable cloud platforms with options for Saudi-based data residency and compliance.' },
  { icon: Smartphone, title: 'E-commerce Platforms', description: 'Online stores optimized for the Saudi market with local payment gateway integration.' },
];

const advantages = [
  { icon: DollarSign, title: 'Competitive Pricing', description: 'Significant cost advantages compared to local Saudi rates while maintaining quality.' },
  { icon: Clock, title: 'Same Timezone', description: 'Bahrain shares the same timezone as Saudi Arabia for seamless collaboration.' },
  { icon: Users, title: 'Cultural Understanding', description: 'Deep familiarity with Saudi business culture, practices, and market requirements.' },
  { icon: Globe, title: 'Regional Expertise', description: 'GCC-wide experience with specific focus on Saudi market dynamics.' },
];

const faqs = [
  {
    question: 'Do you serve clients throughout Saudi Arabia?',
    answer: 'Yes, we serve clients across all regions of Saudi Arabia including Riyadh, Jeddah, Dammam, and emerging cities like NEOM. Our remote-first approach enables seamless collaboration regardless of your location in KSA.',
  },
  {
    question: 'How do you support Vision 2030 digital initiatives?',
    answer: 'We help Saudi organizations digitize their operations, create citizen-facing digital services, build e-commerce capabilities, and develop modern web applications aligned with Vision 2030 objectives. Our experience spans both private and public sector digital transformation.',
  },
  {
    question: 'Can you ensure compliance with Saudi regulations?',
    answer: 'Yes, we\'re familiar with Saudi digital regulations including CITC requirements, data localization considerations, and industry-specific compliance. We can deploy on Saudi-region cloud infrastructure when required.',
  },
  {
    question: 'What languages do you support?',
    answer: 'We build fully bilingual Arabic/English platforms with proper RTL support, Arabic typography, and localization. Our team includes Arabic speakers who ensure content is culturally appropriate for the Saudi market.',
  },
  {
    question: 'How do pricing and payments work?',
    answer: 'We provide detailed quotes in SAR and can accept payments in SAR, USD, or BHD. Our pricing is typically 40-60% lower than comparable Saudi-based agencies while maintaining the same quality standards.',
  },
];

export default function SaudiArabiaPage() {
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
              Saudi Arabia (KSA)
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Web Development Services for <span className="gradient-text">Saudi Arabia</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Supporting the Kingdom's Vision 2030 digital transformation. Cinematic Web Works delivers enterprise-grade web development for Saudi businesses and organizations, combining regional expertise with international standards.
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
                Your Digital Partner for Vision 2030
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Saudi Arabia is undergoing one of the most ambitious digital transformations in the world. Vision 2030 has set the stage for a new era of technology adoption, digital services, and online commerce across the Kingdom. Businesses that embrace this digital future will thrive; those that don't risk being left behind.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                At Cinematic Web Works, we are positioned to be your trusted digital partner in this transformation. Our location in neighboring Bahrain gives us unique advantages: we share the same timezone, understand the cultural nuances, speak the language, and offer significant cost savings compared to local Saudi agencies – all while delivering world-class quality.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                We've helped Saudi organizations across sectors build their digital presence, from e-commerce platforms for Jeddah retailers to enterprise applications for Riyadh corporations, from educational platforms for universities to citizen-facing digital services for government entities.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether you're a startup in Riyadh's tech scene, an established business in Jeddah, an industrial company in the Eastern Province, or an organization anywhere in the Kingdom, we have the expertise and understanding to deliver exceptional results.
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
              Services for KSA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Digital Solutions for Saudi Arabia
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive web development services aligned with the Kingdom's digital ambitions.
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
              The CWW Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Saudi Organizations Choose CWW
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Regional proximity with global capabilities.
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
                Serving Saudi Arabia's Key Sectors
              </h2>
              <p className="text-gray-400 mb-8">
                From traditional industries undergoing digital transformation to new economy sectors driving Vision 2030, we serve the breadth of Saudi Arabia's evolving economy.
              </p>
              <ul className="space-y-4">
                {['Oil, Gas & Petrochemicals', 'Financial Services & FinTech', 'Healthcare & Medical', 'Retail & E-commerce', 'Tourism & Entertainment', 'Education & Training', 'Real Estate & Construction', 'Government & Public Sector'].map((industry) => (
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
                    <TrendingUp className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    <p className="text-white font-semibold text-xl mb-2">Vision 2030</p>
                    <p className="text-gray-400">Powering Saudi Arabia's digital future</p>
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
              Questions from Saudi Organizations
            </h2>
            <p className="text-gray-400">
              Common questions about working with our team.
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
              Ready to Transform Your Saudi Business?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Join the Vision 2030 digital revolution. Let's discuss how we can help your organization build a powerful digital presence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all duration-300"
              >
                Learn About CWW
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
