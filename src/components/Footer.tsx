'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-white.png"
                alt="Cinematic Web Works"
                width={40}
                height={40}
                className="opacity-90"
              />
              <span className="text-sm font-semibold tracking-wider">
                CINEMATIC WEB WORKS
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Where code meets cinema. Crafting digital experiences that captivate
              through custom development and professional film production.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Work', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    data-hover
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              {['Instagram', 'LinkedIn', 'Twitter', 'Vimeo'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    data-hover
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Cinematic Web Works. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Crafted with precision in Bahrain
          </p>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </footer>
  );
}
