import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog — Web Development Insights | Cinematic Web Works',
  description: 'Expert insights on web development, design trends, and digital strategy for businesses in the GCC and UK. Tips from our Bahrain-based web agency.',
  keywords: ['web development blog', 'website design tips', 'GCC web development', 'Bahrain tech blog'],
  openGraph: {
    title: 'Blog — Web Development Insights | Cinematic Web Works',
    description: 'Expert insights on web development, design trends, and digital strategy.',
    type: 'website',
    url: 'https://cinematicwebworks.com/blog',
  },
  alternates: {
    canonical: 'https://cinematicwebworks.com/blog',
  },
};

const blogPosts = [
  {
    slug: 'website-cost-gcc-2025',
    title: 'How Much Does a Website Cost in the GCC in 2025?',
    excerpt: 'A comprehensive breakdown of website costs in Bahrain, Dubai, Saudi Arabia, and Qatar. Learn what factors affect pricing and how to budget for your project.',
    date: '2025-02-06',
    readTime: '8 min read',
    category: 'Business',
    image: '/blog/website-cost.jpg',
  },
  {
    slug: 'next-js-vs-wordpress-business-websites',
    title: 'Next.js vs WordPress: Which Is Better for Your Business Website?',
    excerpt: 'Should you build your business website with Next.js or WordPress in 2025? We compare performance, cost, and scalability for GCC businesses.',
    date: '2025-02-04',
    readTime: '10 min read',
    category: 'Technology',
    image: '/blog/nextjs-wordpress.jpg',
  },
  {
    slug: 'seo-tips-arabic-websites',
    title: 'SEO for Arabic Websites: 7 Tips for GCC Rankings',
    excerpt: 'How to optimize bilingual Arabic-English websites for search engines. Practical SEO strategies for businesses targeting the Middle East market.',
    date: '2025-02-01',
    readTime: '7 min read',
    category: 'SEO',
    image: '/blog/arabic-seo.jpg',
  },
];

export default function BlogPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-6">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
          <div className="relative max-w-5xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-6">
              📚 Insights & Expertise
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Web Development{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert insights, tutorials, and industry trends from our team in Bahrain. 
              Helping GCC businesses navigate the digital landscape.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.slug}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all group"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl">
                      {post.category === 'Business' && '💰'}
                      {post.category === 'Technology' && '⚡'}
                      {post.category === 'SEO' && '🔍'}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                      <span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded text-xs">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-amber-400 text-sm font-medium hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-3xl p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8">
              Get the latest web development insights delivered to your inbox. 
              No spam, just valuable content for GCC businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
