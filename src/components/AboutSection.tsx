import React from 'react';
import { MapPin, Phone, MessageCircle, ExternalLink, ShieldCheck, Hammer, Layers, Ruler } from 'lucide-react';
import { BUSINESS_INFO } from '../data/stoneData';

export const AboutSection: React.FC = () => {
  const services = [
    {
      icon: Layers,
      title: 'Direct Slab Supply',
      desc: 'Top-grade natural marble, granite, quartz, and onyx slabs imported from Italy, Spain, Brazil, and India.'
    },
    {
      icon: Ruler,
      title: 'Custom Cutting & Sizing',
      desc: 'Precision bridge saw cutting to your exact architectural drawings and room dimensions with minimal waste.'
    },
    {
      icon: Hammer,
      title: 'Edge Profiling',
      desc: 'Finished edges including 45-degree mitered waterfall drops, bullnose, bevel, and polished straight profiles.'
    },
    {
      icon: ShieldCheck,
      title: 'On-Site Fitting & Polishing',
      desc: 'Skilled stonemasons handle delivery, leveling, anchoring, and protective sealing across Lagos and nationwide.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#E5E3DF] border-b border-[#C8BBA8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: About Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#9B7954]">
              About Us
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525] tracking-tight text-balance">
              Quality Natural Stone, Expertly Cut &amp; Installed
            </h2>

            <p className="text-[#404040] text-sm sm:text-base leading-relaxed">
              <strong>K-Tech Marbles and Granites Ventures</strong> is an established natural stone supplier and fabrication company based in Lagos, Nigeria. Located at Shop 13/14, Block K in the famous Olaniyonu Modern Marble Market, we provide builders, interior designers, and homeowners with authentic natural stone.
            </p>

            <p className="text-[#404040] text-sm leading-relaxed">
              Whether you are renovating a single kitchen with a waterfall island, paving an entire duplex with mirror-polished marble floors, or installing grand staircase steps, we provide the full slabs, skilled cutting, and professional on-site installation.
            </p>

            {/* Location & Quick Contact */}
            <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#C8BBA8] space-y-3 shadow-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9B7954] shrink-0 mt-0.5" />
                <div className="text-xs text-[#404040]">
                  <span className="font-semibold text-[#252525] block">Showroom Address:</span>
                  {BUSINESS_INFO.address}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#252525] hover:text-[#9B7954] inline-flex items-center gap-1 transition-colors"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[#C8BBA8]">|</span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="font-semibold text-[#252525] hover:text-[#9B7954] transition-colors"
                >
                  Call: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Clean 4-card Services Grid in Warm White */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#F7F5F0] border border-[#C8BBA8] shadow-xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E5E3DF] flex items-center justify-center text-[#9B7954]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-[#252525] text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
