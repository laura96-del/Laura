import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Box } from 'lucide-react';
import { BUSINESS_INFO } from '../data/stoneData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E5E3DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Brand with Official Logo Attached */}
          <a href="#" className="flex items-center gap-3.5 group shrink-0">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="K-Tech Marbles and Granites Ventures Official Logo"
              className="h-11 w-auto rounded border border-[#C8BBA8] shadow-xs object-contain bg-white p-0.5 group-hover:border-[#9B7954] transition-colors"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#252525] whitespace-nowrap">
                K-Tech Marbles &amp; Granites
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#555555] font-sans font-semibold">
                Ventures · {BUSINESS_INFO.estYear} · Lagos
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#252525]">
            <a href="#about" className="hover:text-[#9B7954] transition-colors whitespace-nowrap">
              About Us
            </a>
            <a href="#visualizer-3d" className="hover:text-[#9B7954] transition-colors whitespace-nowrap flex items-center gap-1.5 text-[#252525] font-semibold">
              <Box className="w-3.5 h-3.5 text-[#9B7954]" />
              <span>3D Slab Studio</span>
            </a>
            <a href="#products" className="hover:text-[#9B7954] transition-colors whitespace-nowrap">
              Stone Products
            </a>
            <a href="#applications" className="hover:text-[#9B7954] transition-colors whitespace-nowrap">
              Applications
            </a>
            <a href="#gallery" className="hover:text-[#9B7954] transition-colors whitespace-nowrap">
              Project Gallery
            </a>
            <a href="#contact" className="hover:text-[#9B7954] transition-colors whitespace-nowrap">
              Map &amp; Location
            </a>
          </nav>

          {/* Contact Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-3 py-2 text-xs font-semibold text-[#252525] hover:text-[#9B7954] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#9B7954]" />
              <span className="tabular-nums">{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-md transition-colors flex items-center gap-2 whitespace-nowrap shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-md transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#252525] hover:text-[#9B7954] rounded-md border border-[#E5E3DF]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F5F0] border-b border-[#E5E3DF] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#252525]">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9B7954]"
            >
              About Us
            </a>
            <a
              href="#visualizer-3d"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 font-semibold text-[#252525] flex items-center gap-2"
            >
              <Box className="w-4 h-4 text-[#9B7954]" />
              <span>3D Stone Slab Studio</span>
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9B7954]"
            >
              Stone Products
            </a>
            <a
              href="#applications"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9B7954]"
            >
              Applications
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9B7954]"
            >
              Project Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#9B7954]"
            >
              Location &amp; Map
            </a>
          </nav>

          <div className="pt-4 border-t border-[#E5E3DF] flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#E5E3DF] text-[#252525] text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#9B7954]" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2 px-4 rounded border border-[#C8BBA8] text-[#555555] text-xs font-medium"
            >
              <MapPin className="w-3.5 h-3.5 text-[#9B7954]" />
              <span>View Interactive Map</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
