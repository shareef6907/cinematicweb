'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Custom-coded websites and applications. No templates. No limits. Every line of code crafted for performance, scalability, and visual impact.',
    features: ['Next.js & React', 'E-commerce Solutions', 'Web Applications', 'API Development'],
  },
  {
    number: '02',
    title: 'Film Production',
    description:
      'Cinematic storytelling that captures attention. From concept to final cut, we deliver broadcast-quality content for brands that demand excellence.',
    features: ['Commercial Films', 'Brand Documentaries', 'Event Coverage', 'Aerial Cinematography'],
  },
  {
    number: '03',
    title: 'Digital Strategy',
    description:
      'Where technology meets creativity. We architect digital experiences that convert visitors into customers and brands into legends.',
    features: ['UX/UI Design', 'Brand Identity', 'SEO & Performance', 'Analytics & Insights'],
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 px-6 bg-black"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm text-white/50 tracking-widest uppercase"
        >
          What We Do
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mt-4 text-gradient"
        >
          Services
        </motion.h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="group border-t border-white/10 py-12 md:py-16"
          >
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              {/* Number */}
              <div className="md:col-span-1">
                <span className="text-sm text-white/30 font-mono">
                  {service.number}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="md:col-span-3">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-white/40 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-white/40 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
