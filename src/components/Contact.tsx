'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - CTA */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm text-white/50 tracking-widest uppercase"
            >
              Let&apos;s Work Together
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 mb-8"
            >
              <span className="text-gradient">Ready to create</span>
              <br />
              <span className="text-white">something extraordinary?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-lg max-w-md mb-12"
            >
              Tell us about your vision. We&apos;ll bring the code and the cameras.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <a
                href="mailto:hello@cinematicwebworks.com"
                data-hover
                className="block text-xl md:text-2xl text-white hover:text-gradient transition-all duration-300"
              >
                hello@cinematicwebworks.com
              </a>
            </motion.div>
          </div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="space-y-8">
              <div>
                <label className="block text-sm text-white/50 uppercase tracking-wider mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-white/50 uppercase tracking-wider mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-white/50 uppercase tracking-wider mb-3">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="What are you looking to create?"
                />
              </div>

              <button
                type="submit"
                data-hover
                className="w-full py-5 bg-white text-black font-semibold text-sm tracking-wider uppercase hover:bg-white/90 transition-all duration-300 mt-8"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
