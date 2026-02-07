import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cinematic Web Works | Where Code Meets Cinema",
  description: "Premium web development and film production agency. Custom-coded websites and cinematic storytelling for brands that demand excellence.",
  keywords: ["web development", "film production", "videography", "custom websites", "cinematography", "Bahrain"],
  authors: [{ name: "Cinematic Web Works" }],
  openGraph: {
    title: "Cinematic Web Works | Where Code Meets Cinema",
    description: "Premium web development and film production agency.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <CustomCursor />
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
