'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Brand Film',
    category: 'Film Production',
    image: '/logo-white.png',
    description: 'Cinematic brand storytelling',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '/logo-white.png',
    description: 'Custom-built shopping experience',
  },
  {
    id: 3,
    title: 'Corporate Documentary',
    category: 'Film Production',
    image: '/logo-white.png',
    description: 'Behind-the-scenes narrative',
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'Web Development',
    image: '/logo-white.png',
    description: 'Real-time analytics platform',
  },
];

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="work"
      ref={ref}
      className="relative py-32 px-6 bg-[#0a0a0a]"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm text-white/50 tracking-widest uppercase"
        >
          Selected Projects
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mt-4 text-gradient"
        >
          Our Work
        </motion.h2>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            data-hover
            className="group relative aspect-[4/3] bg-[#111] overflow-hidden cursor-pointer"
          >
            {/* Background Image/Video placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            
            {/* Overlay */}
            <motion.div
              animate={{
                opacity: hoveredId === project.id ? 0.7 : 0.5,
              }}
              className="absolute inset-0 bg-black transition-opacity duration-500"
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <motion.span
                animate={{
                  y: hoveredId === project.id ? 0 : 10,
                  opacity: hoveredId === project.id ? 1 : 0.5,
                }}
                className="text-sm text-white/50 uppercase tracking-wider mb-2"
              >
                {project.category}
              </motion.span>
              <motion.h3
                animate={{
                  y: hoveredId === project.id ? 0 : 10,
                }}
                className="text-2xl md:text-3xl font-bold text-white mb-2"
              >
                {project.title}
              </motion.h3>
              <motion.p
                animate={{
                  y: hoveredId === project.id ? 0 : 20,
                  opacity: hoveredId === project.id ? 1 : 0,
                }}
                className="text-white/60"
              >
                {project.description}
              </motion.p>

              {/* Arrow */}
              <motion.div
                animate={{
                  x: hoveredId === project.id ? 0 : -20,
                  opacity: hoveredId === project.id ? 1 : 0,
                }}
                className="absolute top-8 right-8"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Border on hover */}
            <motion.div
              animate={{
                opacity: hoveredId === project.id ? 1 : 0,
              }}
              className="absolute inset-0 border border-white/20 pointer-events-none"
            />
          </motion.div>
        ))}
      </div>

      {/* View All CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-7xl mx-auto mt-16 text-center"
      >
        <a
          href="#contact"
          data-hover
          className="inline-flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300 tracking-wider uppercase"
        >
          <span>Start Your Project</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
