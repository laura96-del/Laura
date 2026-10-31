/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { StoneViewer3D } from './components/StoneViewer3D';
import { ProductCatalog } from './components/ProductCatalog';
import { ApplicationsSection } from './components/ApplicationsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from './data/stoneData';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#252525] flex flex-col font-sans selection:bg-[#9B7954] selection:text-[#F7F5F0]">
      {/* Navigation with Official Logo */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <StoneViewer3D />
        <ProductCatalog />
        <ApplicationsSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Contacts */}
      <aside aria-label="Quick contact actions" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white border border-[#C8BBA8] text-[#252525] hover:bg-[#E5E3DF] hover:text-[#9B7954] flex items-center justify-center shadow-md transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-105"
          aria-label="Chat with K-Tech Marbles on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
        </a>
      </aside>
    </div>
  );
}
