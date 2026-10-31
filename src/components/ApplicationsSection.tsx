import React from 'react';
import { APPLICATIONS, BUSINESS_INFO } from '../data/stoneData';
import { MessageCircle } from 'lucide-react';

export const ApplicationsSection: React.FC = () => {
  return (
    <section id="applications" className="py-20 bg-[#E5E3DF] border-b border-[#C8BBA8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#9B7954] mb-2">
            Applications
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525] tracking-tight text-balance">
            Where Our Marble &amp; Granite is Used
          </h2>
          <p className="mt-3 text-[#555555] text-sm sm:text-base leading-relaxed">
            From modern kitchen waterfall islands to grand floating stairs and living room floors, see how our stone brings durability and beauty to interior spaces.
          </p>
        </div>

        {/* 2x2 Clean Visual Application Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {APPLICATIONS.map((app) => (
            <div
              key={app.id}
              className="bg-[#F7F5F0] rounded-xl overflow-hidden border border-[#C8BBA8] shadow-xs hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E5E3DF]">
                <img
                  src={app.image}
                  alt={app.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-[#252525] text-xl">
                    {app.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C8BBA8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[#555555]">Popular Stones: </span>
                    <span className="text-[#252525] font-semibold">{app.idealStones}</span>
                  </div>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=Hello%20K-Tech%2C%20I%20am%20interested%20in%20stone%20for%20${encodeURIComponent(app.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Get Quote</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
