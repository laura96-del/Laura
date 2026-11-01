import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  containerClassName?: string;
  aspectRatioClass?: string;
}

// Ultra-fast inline SVG patterned marble textures as instant fallbacks
const MARBLE_TEXTURE_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23EAE6DF"/><stop offset="50%" stop-color="%23DDD7CD"/><stop offset="100%" stop-color="%23ECE7DF"/></linearGradient><filter id="f"><feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" result="noise"/><feColorMatrix type="matrix" values="0 0 0 0 0.6  0 0 0 0 0.52  0 0 0 0 0.42  0 0 0 0.25 0" in="noise" result="coloredNoise"/><feComposite in="SourceGraphic" in2="coloredNoise" operator="over"/></filter></defs><rect width="600" height="450" fill="url(%23g)" filter="url(%23f)"/><path d="M-50,80 Q200,120 400,90 T650,220" stroke="%239B7954" stroke-width="3" fill="none" opacity="0.35"/><path d="M-20,240 Q180,180 350,320 T620,380" stroke="%23846442" stroke-width="2" fill="none" opacity="0.3"/><path d="M50,400 Q280,310 520,390" stroke="%23B2906C" stroke-width="2.5" fill="none" opacity="0.25"/></svg>`;

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt = 'K-Tech Natural Stone Slab',
  className = '',
  containerClassName = '',
  aspectRatioClass = 'aspect-[4/3]',
  fallbackText,
  loading = 'lazy',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [hasTriedFallback, setHasTriedFallback] = useState(false);

  // If initial src changes, reset state
  React.useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
    setHasTriedFallback(false);
  }, [src]);

  const handleError = () => {
    // If the path was /images/..., try /src/assets/images/... or vice versa
    if (!hasTriedFallback && typeof src === 'string') {
      setHasTriedFallback(true);
      if (src.startsWith('/src/assets/images/')) {
        setCurrentSrc(src.replace('/src/assets/images/', '/images/'));
        return;
      } else if (src.startsWith('/images/')) {
        setCurrentSrc(src.replace('/images/', '/src/assets/images/'));
        return;
      }
    }
    // If all fail, use the rich SVG marble fallback
    setCurrentSrc(MARBLE_TEXTURE_SVG);
    setIsLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden bg-[#DDD5C9] ${aspectRatioClass} ${containerClassName}`}>
      {/* Instant Skeleton loader while fetching */}
      {!isLoaded && (
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-gradient-to-r from-[#E5E3DF] via-[#ECEAE6] to-[#E5E3DF] animate-pulse" 
        />
      )}

      {/* Main Image with smooth fade-in */}
      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />

      {/* Fallback label overlay if fallback texture is displayed */}
      {currentSrc === MARBLE_TEXTURE_SVG && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center pointer-events-none bg-black/10">
          <span className="text-xs font-serif font-bold text-[#252525] bg-white/80 px-2.5 py-1 rounded shadow-xs">
            {fallbackText || alt}
          </span>
          <span className="text-[10px] text-[#555555] font-medium mt-1">
            Natural Stone Gallery
          </span>
        </div>
      )}
    </div>
  );
};
