import React, { useState, useRef, useEffect } from 'react';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    
    const onScroll = () => {
      const index = Math.round(el.scrollLeft / el.clientWidth);
      setActiveIndex(index);
    };
    
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="hidden md:flex md:col-span-1 flex-col gap-3">
        {images.map((src, i) => (
          <button
            key={`thumb-${i}`}
            onClick={() => handleThumbnailClick(i)}
            className={`w-16 h-16 rounded-lg overflow-hidden transition-all ${
              i === activeIndex ? "ring-2 ring-[#00d1b3] scale-105" : "ring-1 ring-gray-200 hover:ring-gray-300"
            }`}
          >
            <img
              src={src}
              alt={`Product thumbnail ${i + 1}`}
              width={64}
              height={64}
              loading="lazy"
              decoding="async"
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>

      <div className="hidden md:block md:col-span-6">
        <div className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <img
            src={images[activeIndex]}
            alt="Product main view"
            width={800}
            height={800}
            loading="lazy"
            decoding="async"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="md:hidden w-screen relative">
        <div 
          ref={sliderRef} 
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((src, i) => (
            <div key={`mobile-img-${i}`} className="w-screen flex-shrink-0 snap-center aspect-square">
              <img
                src={src}
                alt={`Product view ${i+1}`}
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 flex gap-1.5">
          {images.map((_, i) => (
            <button 
              key={`dot-${i}`} 
              onClick={() => handleThumbnailClick(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeIndex ? "bg-[#00d1b3]" : "bg-gray-300"
              }`} 
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductGallery;