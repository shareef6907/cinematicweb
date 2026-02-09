import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap | Cinematic Web Works',
  description: 'Complete sitemap of Cinematic Web Works - Premium web development services across the Middle East and UK.',
};

const pages = {
  main: [
    { name: 'Home', href: '/', description: 'Cinematic Web Works - Premium Web Development' },
    { name: 'Blog', href: '/blog', description: 'Latest insights and articles' },
  ],
  middleEast: [
    { name: 'Web Development Bahrain', href: '/web-development-bahrain', description: 'Web development services in Bahrain' },
    { name: 'Web Development Dubai', href: '/web-development-dubai', description: 'Web development services in Dubai' },
    { name: 'Web Development Abu Dhabi', href: '/web-development-abu-dhabi', description: 'Web development services in Abu Dhabi' },
    { name: 'Web Development Sharjah', href: '/web-development-sharjah', description: 'Web development services in Sharjah' },
    { name: 'Web Development Saudi Arabia', href: '/web-development-saudi-arabia', description: 'Web development services in Saudi Arabia' },
    { name: 'Web Development Riyadh', href: '/web-development-riyadh', description: 'Web development services in Riyadh' },
    { name: 'Web Development Qatar', href: '/web-development-qatar', description: 'Web development services in Qatar' },
    { name: 'Web Development Doha', href: '/web-development-doha', description: 'Web development services in Doha' },
    { name: 'Web Development Oman', href: '/web-development-oman', description: 'Web development services in Oman' },
  ],
  uk: [
    { name: 'Web Development London', href: '/web-development-london', description: 'Web development services in London' },
    { name: 'Web Development UK', href: '/web-development-uk', description: 'Web development services in the UK' },
  ],
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Sitemap</h1>
        <p className="text-gray-400 mb-12">
          Find all pages on Cinematic Web Works - premium web development services across the Middle East and UK.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-6">Main Pages</h2>
            <div className="grid gap-4">
              {pages.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-6">Middle East</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {pages.middleEast.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-6">United Kingdom</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {pages.uk.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <h3 className="text-white font-medium">{item.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>
            <Link href="/sitemap.xml" className="text-purple-400 hover:text-purple-300">
              View XML Sitemap
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
