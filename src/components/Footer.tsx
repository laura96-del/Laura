import React from 'react';
import { BUSINESS_INFO } from '../data/stoneData';
import { Phone, MessageCircle, MapPin, Box } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F7F5F0] border-t border-[#E5E3DF] text-[#555555] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand with Official Logo */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="K-Tech Marbles Logo"
                className="h-10 w-auto rounded border border-[#C8BBA8] object-contain bg-white p-0.5"
              />
              <div>
                <span className="font-serif text-[#252525] font-bold text-base tracking-tight block">
                  K-Tech Marbles &amp; Granites
                </span>
                <span className="text-[10px] text-[#9B7954] font-semibold">{BUSINESS_INFO.estYear}</span>
              </div>
            </div>
            <p className="text-[#555555] leading-relaxed">
              Wholesale natural slabs, custom cutting, and turnkey installation. Shop 13/14, Block K, Olaniyonu Modern Marble Market, Lagos, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-serif font-bold text-[#252525] text-sm">
              Quick Links
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[#9B7954] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#visualizer-3d" className="hover:text-[#9B7954] transition-colors font-semibold text-[#252525]">
                  3D Stone Slab Studio
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#9B7954] transition-colors">
                  Stone Products
                </a>
              </li>
              <li>
                <a href="#applications" className="hover:text-[#9B7954] transition-colors">
                  Applications
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#9B7954] transition-colors">
                  Project Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#9B7954] transition-colors">
                  Interactive Map &amp; Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Stones */}
          <div className="space-y-3">
            <div className="font-serif font-bold text-[#252525] text-sm">
              Stone Varieties
            </div>
            <ul className="space-y-2 text-[#555555]">
              <li>Calacatta Gold Italian Marble</li>
              <li>Black Galaxy Granite</li>
              <li>Bianco Carrara White Marble</li>
              <li>Nero Marquina Black Marble</li>
              <li>Emerald Green Quartzite</li>
              <li>Solid Quartz Slabs</li>
            </ul>
          </div>

          {/* Contact & Map */}
          <div className="space-y-3">
            <div className="font-serif font-bold text-[#252525] text-sm">
              Contact &amp; Location
            </div>
            <p className="text-[#555555] leading-relaxed">
              Shop 13/14, Block K, Olaniyonu Market, Coker Bus Stop, Lagos - Badagry Expy.
            </p>
            <div className="pt-1 space-y-1.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="text-[#252525] hover:text-[#9B7954] font-bold block tabular-nums transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9B7954] hover:text-[#846442] font-semibold block transition-colors"
              >
                Chat on WhatsApp
              </a>
              <a
                href="#contact"
                className="text-[#555555] hover:text-[#252525] font-medium block"
              >
                View on Live Map
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#E5E3DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#555555]">
          <p>© {new Date().getFullYear()} K-Tech Marbles and Granites Ventures. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#9B7954] transition-colors font-medium">
              Google Maps Location
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
