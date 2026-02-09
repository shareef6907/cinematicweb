import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Cinematic Web Works
              </span>
            </h2>
            <p className="text-gray-400 mb-4 max-w-md">
              Premium web development agency based in Bahrain. We build cinematic, 
              high-performance websites for businesses across the GCC and UK.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/97333000000" 
                className="text-gray-400 hover:text-amber-400 transition-colors"
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a 
                href="https://instagram.com/hdvideos" 
                className="text-gray-400 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Locations</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/web-development-bahrain" className="hover:text-amber-400 transition-colors">Bahrain</Link></li>
              <li><Link href="/web-development-dubai" className="hover:text-amber-400 transition-colors">Dubai</Link></li>
              <li><Link href="/web-development-saudi-arabia" className="hover:text-amber-400 transition-colors">Saudi Arabia</Link></li>
              <li><Link href="/web-development-qatar" className="hover:text-amber-400 transition-colors">Qatar</Link></li>
              <li><Link href="/web-development-oman" className="hover:text-amber-400 transition-colors">Oman</Link></li>
              <li><Link href="/web-development-uk" className="hover:text-amber-400 transition-colors">UK</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:ceo@bahrainnights.com" className="hover:text-amber-400 transition-colors">
                  ceo@bahrainnights.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/97333000000" className="hover:text-amber-400 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>Manama, Bahrain</li>
            </ul>
            
            <h3 className="text-lg font-bold mb-4 mt-6 text-white">Sister Companies</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://www.bahrainnights.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors">
                  🌙 BahrainNights.com
                </a>
              </li>
              <li>
                <a href="https://www.eventsbahrain.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  🎪 EventsBahrain.com
                </a>
              </li>
              <li>
                <a href="https://www.filmproductionbahrain.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                  🎬 FilmProductionBahrain.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sister Companies Banner */}
        <div className="border-t border-white/10 pt-8 pb-4 mb-4">
          <p className="text-center text-sm text-gray-500 mb-4">Part of the Bahrain Nights family</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="https://www.bahrainnights.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-400 transition-colors">
              🌙 Events & Nightlife Guide
            </a>
            <a href="https://www.eventsbahrain.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              🎪 Event Equipment Rental
            </a>
            <a href="https://www.filmproductionbahrain.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
              🎬 Video Production
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Cinematic Web Works. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms</Link>
            <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
