import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Cinematic Web Works — Premium Web Development in Bahrain',
    template: '%s | Cinematic Web Works',
  },
  description: 'Award-quality web development agency based in Bahrain. We build cinematic, high-performance websites for businesses across Dubai, Saudi Arabia, Qatar, Oman, and the UK.',
  keywords: ['web development bahrain', 'web development dubai', 'web development saudi arabia', 'web design gcc', 'website design bahrain'],
  authors: [{ name: 'Cinematic Web Works' }],
  creator: 'Cinematic Web Works',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cinematicwebworks.com',
    siteName: 'Cinematic Web Works',
    title: 'Cinematic Web Works — Premium Web Development',
    description: 'Premium web development agency in Bahrain serving the entire GCC and UK.',
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cinematic Web Works',
    description: 'Premium web development agency in Bahrain serving the entire GCC.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
