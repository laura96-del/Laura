import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS, GalleryItem, BUSINESS_INFO } from '../data/stoneData';
import { MapPin, X, MessageCircle, Maximize2, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const categories = [
    { label: 'All Projects', value: 'All' },
    { label: 'Kitchens & Islands', value: 'Kitchens' },
    { label: 'Bathrooms & Vanities', value: 'Bathrooms' },
    { label: 'Polished Flooring', value: 'Flooring' },
    { label: 'Grand Staircases', value: 'Staircases' },
    { label: 'Commercial & Receptions', value: 'Commercial' },
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const activeProject = activeModalIndex !== null ? GALLERY_ITEMS[activeModalIndex] : null;

  const handleNext = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) => (prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
  }, [activeModalIndex]);

  const handlePrev = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
  }, [activeModalIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === 'Escape') setActiveModalIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, handleNext, handlePrev]);

  const getWhatsAppMessage = (item: GalleryItem) => {
    return encodeURIComponent(
      `Hello K-Tech Marbles, I saw your completed project "${item.title}" in ${item.location} featuring ${item.stoneUsed}. I would like to inquire about a similar fabrication and installation.`
    );
  };

  return (
    <section id="gallery" className="py-24 bg-[#F7F5F0] border-b border-[#E5E3DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#9B7954] mb-2">
              <span>Completed Works Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Lagos &amp; Nationwide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#252525] tracking-tight text-balance">
              Architectural Installations in Natural Stone
            </h2>
            <p className="mt-3 text-[#555555] text-sm sm:text-base max-w-2xl leading-relaxed">
              Explore our showcase of completed residential villas, luxury kitchens, and corporate offices across Lagos, Abuja, and beyond. Every piece is fabricated with laser accuracy and finished with Italian diamond polish.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="text-xs font-semibold text-[#252525] bg-[#E5E3DF] px-3 py-1.5 rounded-md border border-[#C8BBA8]">
              {GALLERY_ITEMS.length} Featured Installations
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const count = cat.value === 'All'
              ? GALLERY_ITEMS.length
              : GALLERY_ITEMS.filter(i => i.category === cat.value).length;

            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-[#9B7954] text-white shadow-xs'
                    : 'bg-[#E5E3DF] text-[#252525] hover:bg-[#DDD5C9] hover:text-[#9B7954] border border-[#C8BBA8]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.value
                    ? 'bg-[#846442] text-white'
                    : 'bg-[#C8BBA8] text-[#252525]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const globalIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);

            return (
              <div
                key={item.id}
                onClick={() => setActiveModalIndex(globalIndex)}
                className="group cursor-pointer rounded-xl overflow-hidden border border-[#C8BBA8] bg-[#E5E3DF] hover:border-[#9B7954] hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Visual Image Container with OptimizedImage */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#DDD5C9]">
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    fallbackText={item.title}
                    aspectRatioClass="aspect-[4/3]"
                    className="transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none" />

                  {/* Top Location & Category Chips */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded bg-[#F7F5F0]/90 backdrop-blur-md text-[11px] font-semibold text-[#252525] border border-[#C8BBA8] shadow-xs">
                      {item.category}
                    </span>
                    <div className="p-1.5 rounded-full bg-[#F7F5F0]/90 backdrop-blur-md text-[#252525] shadow-xs group-hover:bg-[#9B7954] group-hover:text-white transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                    <div className="flex items-center gap-1.5 text-xs text-stone-200 font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-200" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-serif font-bold text-white text-base leading-snug line-clamp-1 group-hover:text-amber-100 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-[#E5E3DF]">
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-[#404040]">
                      <span className="text-[#555555]">Natural Stone:</span>
                      <span className="font-semibold text-[#252525] text-right truncate max-w-[180px]">
                        {item.stoneUsed}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#404040]">
                      <span className="text-[#555555]">Edge Detail:</span>
                      <span className="font-medium text-[#404040] text-right truncate max-w-[180px]">
                        {item.edgeDetail}
                      </span>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-2 border-t border-[#C8BBA8] flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#252525] group-hover:text-[#9B7954] flex items-center gap-1 transition-colors">
                      <span>Inspect Details</span>
                      <span aria-hidden="true">→</span>
                    </span>

                    <a
                      href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=${getWhatsAppMessage(item)}`}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors flex items-center gap-1.5 px-2.5 text-[11px] font-semibold shadow-xs"
                      title="Quote for this style on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#E5E3DF] border border-[#C8BBA8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#9B7954]">
              Bespoke Fabrication Guarantee
            </div>
            <h3 className="font-serif font-bold text-[#252525] text-xl">
              Have an Architectural Drawing or Custom Room Dimension?
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] max-w-xl">
              Send us your floor plan or kitchen dimensions on WhatsApp. We will match the ideal stone slabs, provide 3D layout options, and provide a comprehensive itemized quote.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Send Plans on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalIndex(null)}
        >
          <div 
            className="bg-[#F7F5F0] rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#C8BBA8] relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-[#E5E3DF] bg-[#E5E3DF]">
              <div className="flex items-center gap-2.5 text-xs text-[#555555]">
                <MapPin className="w-3.5 h-3.5 text-[#9B7954]" />
                <span className="font-semibold text-[#252525]">{activeProject.location}</span>
                <span aria-hidden="true">·</span>
                <span>{activeProject.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#555555]">{activeModalIndex! + 1} of {GALLERY_ITEMS.length}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-1.5 rounded-full hover:bg-white text-[#252525] transition-colors border border-[#C8BBA8] cursor-pointer"
                  title="Previous (Left Arrow)"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-1.5 rounded-full hover:bg-white text-[#252525] transition-colors border border-[#C8BBA8] cursor-pointer"
                  title="Next (Right Arrow)"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalIndex(null)}
                  className="p-1.5 rounded-full hover:bg-white text-[#252525] transition-colors border border-[#C8BBA8] ml-2 cursor-pointer"
                  title="Close (Escape)"
                  aria-label="Close Lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#252525] overflow-hidden flex items-center justify-center">
              <OptimizedImage
                src={activeProject.image}
                alt={activeProject.title}
                fallbackText={activeProject.title}
                aspectRatioClass="w-full h-full"
                loading="eager"
                className="w-full h-full object-cover"
              />

              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Previous installation"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Next installation"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Project Details Dossier */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#252525]">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-[#404040] mt-2 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* 3-Pillar Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#E5E3DF] border border-[#C8BBA8] text-xs">
                <div>
                  <div className="text-[#555555] font-medium">Natural Stone Variety</div>
                  <div className="font-bold text-[#252525] text-sm mt-0.5">{activeProject.stoneUsed}</div>
                </div>
                <div>
                  <div className="text-[#555555] font-medium">Surface Finish</div>
                  <div className="font-semibold text-[#252525] mt-0.5">{activeProject.finish}</div>
                </div>
                <div>
                  <div className="text-[#555555] font-medium">Edge &amp; Joint Profile</div>
                  <div className="font-semibold text-[#252525] mt-0.5">{activeProject.edgeDetail}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=${getWhatsAppMessage(activeProject)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Request Quote for This Project on WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="w-full sm:w-auto py-3.5 px-5 bg-white hover:bg-[#E5E3DF] text-[#252525] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 border border-[#C8BBA8]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9B7954]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
