'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, Globe, Code, Smartphone, Cloud, Shield, Clock, DollarSign, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Web Development Services in Doha | Cinematic Web Works',
  description: 'Expert web development for Doha businesses. Custom websites, enterprise applications, and digital solutions for Qatar\'s capital city.',
  openGraph: {
    title: 'Web Development Services in Doha | Cinematic Web Works',
    description: 'Expert web development for Doha businesses and organizations.',
    url: 'https://cinematicwebworks.com/locations/doha',
  },
};

const services = [
  { icon: Sparkles, title: 'Premium Websites', description: 'Stunning websites that match the sophistication and ambition of Doha\'s world-class business environment.' },
  { icon: Code, title: 'Web Applications', description: 'Custom business applications powering operations for Doha\'s leading organizations.' },
  { icon: Smartphone, title: 'Digital Commerce', description: 'E-commerce platforms optimized for Doha\'s affluent consumer market.' },
  { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure with regional compliance capabilities.' },
];

const advantages = [
  { icon: DollarSign, title: 'Smart Economics', description: 'Doha quality at Bahrain prices – 40-60% savings without compromise.' },
  { icon: Clock, title: 'Instant Access', description: 'Same timezone, short flight – practically next door when you need us.' },
  { icon: Users, title: 'Market Insight', description: 'Deep understanding of Doha\'s unique business landscape and expectations.' },
  { icon: Globe, title: 'World Standards', description: 'International methodologies adapted for the Doha market.' },
];

const faqs = [
  {
    question: 'Why should Doha businesses work with a Bahrain agency?',
    answer: 'We\'re essentially neighbors – same timezone, 45-minute flight, shared cultural context. You get premium quality at 40-60% lower rates than Doha agencies, with none of the communication challenges of distant offshore teams.',
  },
  {
    question: 'Do you understand Doha\'s business environment?',
    answer: 'Absolutely. We work extensively with GCC clients and understand the expectations of Doha\'s sophisticated business community. We know the standards expected by West Bay corporations, QFC companies, and Qatar Free Zone businesses.',
  },
  {
    question: 'Can you meet for in-person discussions?',
    answer: 'Yes, we can arrange in-person meetings in Doha when needed. The short flight makes it practical for project kickoffs, important presentations, or regular check-ins. Most day-to-day collaboration happens via video call.',
  },
  {
    question: 'What about ongoing support and maintenance?',
    answer: 'We provide comprehensive support packages including 24/7 monitoring, security updates, and feature enhancements. Our same-timezone location means we can respond quickly during business hours.',
  },
  {
    question: 'How do you handle payments?',
    answer: 'We can invoice in QAR, USD, or BHD based on your preference. We offer flexible payment terms including milestone-based payments for project work and monthly billing for retainer arrangements.',
  },
];

export default function DohaPage() {
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
              Doha, Qatar
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Premium Web Development for <span className="gradient-text">Doha</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Doha's gleaming skyline represents ambition without limits. Your digital presence should match. Cinematic Web Works delivers world-class web development for Doha's most demanding businesses, with the smart economics of our Bahrain base.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all duration-300"
              >
                View Solutions
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
                Your Neighbor for Digital Excellence
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Doha has transformed into one of the world's most impressive cities, with iconic architecture, world-class infrastructure, and businesses that operate at the highest international standards. The digital presence of Doha companies should reflect this same level of excellence.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                At Cinematic Web Works, we understand what Doha expects. Our team delivers the quality and sophistication demanded by West Bay corporations, QFC financial institutions, and Qatar Free Zone companies – but from our Bahrain base, just 45 minutes away, at significantly more competitive rates.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                This isn't offshore outsourcing to a distant team. We're your neighbors. We share the same timezone, understand the same business culture, and can meet you in person when the project requires it. You get all the benefits of premium local service with the economic advantages of our Bahrain location.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From corporate websites for Doha's business district to e-commerce platforms for Katara retailers, from enterprise applications for Qatar Foundation entities to digital platforms for Doha-based multinationals, we deliver solutions that meet and exceed expectations.
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
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Digital Solutions for Doha
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Premium web services matching the standards of Qatar's capital.
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
              Premium Quality, Smart Investment
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Why Doha's smartest businesses work with their Bahrain neighbors.
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
                Powering Doha's Diverse Economy
              </h2>
              <p className="text-gray-400 mb-8">
                From West Bay towers to Lusail developments, we serve businesses across Doha's dynamic economic landscape.
              </p>
              <ul className="space-y-4">
                {['Financial Services & Banking', 'Energy & Natural Resources', 'Real Estate & Development', 'Sports & Entertainment', 'Education & Research', 'Healthcare & Wellness', 'Retail & Luxury', 'Professional Services'].map((industry) => (
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
                    <Sparkles className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    <p className="text-white font-semibold text-xl mb-2">Doha Excellence</p>
                    <p className="text-gray-400">Digital sophistication for the capital</p>
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
              Questions from Doha Businesses
            </h2>
            <p className="text-gray-400">
              What Doha clients want to know.
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
              Ready to Elevate Your Doha Business?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Get premium web development with the smart economics of working with your Bahrain neighbors. Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center"
              >
                Request a Proposal
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all duration-300"
              >
                Why Choose CWW
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
