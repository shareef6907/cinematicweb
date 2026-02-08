'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, Globe, Code, Smartphone, Cloud, Shield, Clock, DollarSign, Users, Building } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Web Development Services in Riyadh | Cinematic Web Works',
  description: 'Expert web development for Riyadh businesses. Custom websites, enterprise applications, and digital solutions for the Saudi capital.',
  openGraph: {
    title: 'Web Development Services in Riyadh | Cinematic Web Works',
    description: 'Expert web development for Riyadh businesses and enterprises.',
    url: 'https://cinematicwebworks.com/locations/riyadh',
  },
};

const services = [
  { icon: Building, title: 'Corporate Websites', description: 'Professional web presence for Riyadh\'s corporations, capturing the city\'s ambition and professionalism.' },
  { icon: Code, title: 'Web Applications', description: 'Custom business applications that streamline operations and drive digital transformation.' },
  { icon: Smartphone, title: 'Startup Solutions', description: 'MVP development and scalable platforms for Riyadh\'s booming startup ecosystem.' },
  { icon: Cloud, title: 'Enterprise Systems', description: 'Large-scale solutions for government entities and major corporations in the capital.' },
];

const advantages = [
  { icon: DollarSign, title: '40-60% Cost Savings', description: 'Premium quality at a fraction of Riyadh agency rates, without compromising on results.' },
  { icon: Clock, title: 'Same Timezone', description: 'Real-time collaboration with no scheduling challenges – we work your hours.' },
  { icon: Users, title: 'Saudi Market Expertise', description: 'Deep understanding of Riyadh business culture and market expectations.' },
  { icon: Globe, title: 'Global Standards', description: 'International best practices with local market sensitivity.' },
];

const faqs = [
  {
    question: 'Can you compete with Riyadh-based agencies on quality?',
    answer: 'Absolutely. Our team includes senior developers with experience at international companies. We follow the same methodologies and quality standards as top global agencies. The difference is our Bahrain location allows us to offer these services at significantly lower rates.',
  },
  {
    question: 'How do you handle communication across borders?',
    answer: 'We\'re in the same timezone (GMT+3), so communication is seamless. We offer dedicated project managers, daily standups, real-time chat, and video conferencing. Most clients find working with us easier than with local teams due to our structured processes.',
  },
  {
    question: 'Do you understand Riyadh\'s tech and startup scene?',
    answer: 'Yes, we closely follow the developments in Riyadh\'s tech ecosystem, from KAUST initiatives to startup accelerators and the growing VC scene. We\'ve helped Riyadh startups build MVPs, scale platforms, and prepare for funding rounds.',
  },
  {
    question: 'Can you work with government and semi-government entities?',
    answer: 'We have experience with public sector projects and understand the compliance requirements, security standards, and procurement processes typical of Saudi government work.',
  },
  {
    question: 'What about Arabic language and RTL support?',
    answer: 'We build fully bilingual platforms with proper Arabic typography, RTL layout support, and culturally appropriate content. Our team includes Arabic speakers who ensure quality across all language aspects.',
  },
];

export default function RiyadhPage() {
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
              Riyadh, Saudi Arabia
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Premium Web Development for <span className="gradient-text">Riyadh</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              The Saudi capital demands digital excellence. Cinematic Web Works delivers world-class web development for Riyadh's ambitious businesses, from tech startups to enterprise corporations, with the cost advantages of our Bahrain base.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all duration-300"
              >
                Our Services
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
                Empowering Riyadh's Digital Ambitions
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Riyadh is rapidly becoming one of the world's most exciting tech hubs. With massive investments in digital infrastructure, a thriving startup ecosystem, and major corporations embracing digital transformation, the Saudi capital is at the forefront of the region's technological revolution.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                At Cinematic Web Works, we understand the pace and ambition of Riyadh. Whether you're a startup racing to launch your MVP, a scale-up ready to handle rapid growth, or an enterprise seeking to modernize legacy systems, we have the expertise and capacity to deliver.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our Bahrain base – just a short flight from Riyadh and in the same timezone – gives us unique advantages. We offer the same quality you'd expect from top Riyadh agencies at rates that make financial sense. No compromise on quality, communication, or delivery – just smarter economics.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From King Abdullah Financial District to the tech corridors of Northern Riyadh, from established businesses in Olaya to innovative startups in the digital zones, we serve the full spectrum of Riyadh's business community with tailored digital solutions.
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
              Web Solutions for the Capital
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital services for Riyadh's diverse business landscape.
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
              Smart Economics, Premium Results
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The intelligent choice for Riyadh businesses seeking value and quality.
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
                Serving Riyadh's Powerhouse Sectors
              </h2>
              <p className="text-gray-400 mb-8">
                From the financial district to the industrial zones, we serve the industries driving Riyadh's economic growth.
              </p>
              <ul className="space-y-4">
                {['Financial Services & Banking', 'Technology & Startups', 'Government & Public Sector', 'Healthcare & Medical', 'Real Estate & Development', 'Retail & E-commerce', 'Energy & Utilities', 'Professional Services'].map((industry) => (
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
                    <Building className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    <p className="text-white font-semibold text-xl mb-2">Capital Excellence</p>
                    <p className="text-gray-400">Digital solutions for Riyadh's ambitious businesses</p>
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
              Questions from Riyadh Businesses
            </h2>
            <p className="text-gray-400">
              Answers to common questions about our services.
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
              Ready to Build Something Great in Riyadh?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Join the growing list of Riyadh businesses who've discovered the smart way to get premium web development. Let's talk about your project.
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
                About Our Agency
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
