import React, { useState } from 'react';
import { PRODUCTS, BUSINESS_INFO } from '../data/stoneData';
import { MessageCircle } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

export const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Marble', 'Granite', 'Quartz'];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const getWhatsAppMessage = (name: string) => {
    return encodeURIComponent(
      `Hello K-Tech Marbles, I would like to inquire about the pricing and availability of your "${name}" slabs.`
    );
  };

  return (
    <section id="products" className="py-20 bg-[#F7F5F0] border-b border-[#E5E3DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#9B7954] mb-2">
              Our Products
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525] tracking-tight">
              Natural Marble, Granite &amp; Quartz Slabs
            </h2>
            <p className="mt-2 text-[#555555] text-sm max-w-xl">
              Browse our inventory of premium natural stone varieties. Available in full slabs or cut to order for your specific project.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#E5E3DF] rounded-lg border border-[#C8BBA8] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#9B7954] text-white shadow-xs'
                    : 'text-[#252525] hover:text-[#9B7954]'
                }`}
              >
                {cat === 'All' ? 'All Varieties' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#E5E3DF] rounded-xl overflow-hidden border border-[#C8BBA8] hover:border-[#9B7954] transition-all duration-300 flex flex-col shadow-xs hover:shadow-md"
            >
              {/* Product Photo with OptimizedImage */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#DDD5C9]">
                <OptimizedImage
                  src={product.image}
                  alt={product.name}
                  fallbackText={product.name}
                  aspectRatioClass="aspect-[4/3]"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#F7F5F0]/90 backdrop-blur-md text-[11px] font-semibold text-[#252525] border border-[#C8BBA8] shadow-xs pointer-events-none">
                  {product.category} · {product.origin}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-[#E5E3DF]">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#252525] group-hover:text-[#9B7954] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#555555] mt-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C8BBA8] text-xs">
                  <span className="text-[#555555]">Ideal for: </span>
                  <span className="text-[#252525] font-semibold">{product.bestFor}</span>
                </div>

                {/* WhatsApp Action */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=${getWhatsAppMessage(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire Price on WhatsApp</span>
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
