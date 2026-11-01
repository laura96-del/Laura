import React from 'react';
import { MessageCircle, Phone, CheckCircle, Box } from 'lucide-react';
import { BUSINESS_INFO } from '../data/stoneData';
import { OptimizedImage } from './OptimizedImage';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F0] pt-10 pb-16 lg:py-24 border-b border-[#E5E3DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-[#9B7954]">
              <span className="font-bold text-[#252525]">{BUSINESS_INFO.estYear}</span>
              <span aria-hidden="true">·</span>
              <span>Marble &amp; Granite Supplier</span>
              <span aria-hidden="true">·</span>
              <span>Olaniyonu Market, Lagos</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#252525] tracking-tight leading-[1.15] text-balance">
              Premium Natural Marble &amp; Granite Slabs in Lagos
            </h1>

            <p className="text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed">
              Welcome to K-Tech Marbles and Granites Ventures. We supply first-choice imported marble, granite, and quartz slabs with precision custom cutting and professional installation for homes, offices, and luxury developments across Nigeria.
            </p>

            {/* Action Buttons: Bronze for Primary, Soft Grey/Stone Beige for Secondary */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded-md transition-all flex items-center gap-2.5 shadow-md shadow-[#25D366]/20 whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#visualizer-3d"
                className="px-5 py-3.5 bg-[#E5E3DF] hover:bg-[#DDD5C9] text-[#252525] font-semibold text-sm rounded-md transition-all flex items-center gap-2 whitespace-nowrap border border-[#C8BBA8] cursor-pointer"
              >
                <Box className="w-4 h-4 text-[#9B7954]" />
                <span>3D Slab Studio</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="px-5 py-3.5 bg-white hover:bg-[#E5E3DF] text-[#252525] font-semibold text-sm rounded-md transition-all flex items-center gap-2 whitespace-nowrap border border-[#C8BBA8] cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#9B7954]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Quick Trust Points */}
            <div className="pt-6 border-t border-[#E5E3DF] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#555555]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#9B7954] shrink-0" />
                <span>Full jumbo slabs &amp; custom cut-to-size</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#9B7954] shrink-0" />
                <span>On-site measurement &amp; white-glove installation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-[#C8BBA8] shadow-lg bg-[#E5E3DF] group">
              <OptimizedImage
                src="/images/hero_ktech_marble_showroom_1793469368860.jpg"
                alt="Luxury marble wall cladding and polished floor in modern residence"
                fallbackText="K-Tech Marble & Granite Showroom"
                aspectRatioClass="h-[400px] sm:h-[480px] w-full"
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#F7F5F0]/95 backdrop-blur-md border border-[#C8BBA8] shadow-sm text-xs flex items-center gap-3">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="K-Tech Logo"
                  className="h-10 w-auto rounded border border-[#C8BBA8] object-contain bg-white p-0.5 shrink-0"
                />
                <div>
                  <p className="font-serif font-bold text-[#252525] text-sm">
                    K-Tech Showroom &amp; Cutting Yard
                  </p>
                  <p className="text-[#555555] mt-0.5 font-medium">
                    Shop 13/14, Block K, Olaniyonu Modern Marble Market, Lagos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Clean Value Points */}
        <div className="mt-16 pt-10 border-t border-[#E5E3DF] grid grid-cols-2 md:grid-cols-4 gap-6">
          {BUSINESS_INFO.highlights.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-serif font-bold text-[#252525] text-lg">
                {item.title}
              </div>
              <div className="text-xs text-[#555555] leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
