'use client';

import { useState, useRef, useEffect } from 'react';

interface ImageCarouselProps {
  children?: React.ReactNode;
}

export function ImageCarousel({ children }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const cardWidth = scrollContainer.offsetWidth * 0.85 + 16; // 85% width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), 2));
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="md:hidden">
      {/* Scrollable carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="snap-center flex-shrink-0 w-[85%]"
          >
            <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/50 rounded-xl border border-white/10 p-6 aspect-[4/3]">
              <div className="h-full flex flex-col justify-end">
                <div className="h-2 bg-white/10 rounded w-2/3 mb-2" />
                <div className="h-2 bg-white/5 rounded w-1/2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const scrollContainer = scrollRef.current;
              if (scrollContainer) {
                const cardWidth = scrollContainer.offsetWidth * 0.85 + 16;
                scrollContainer.scrollTo({
                  left: cardWidth * index,
                  behavior: 'smooth',
                });
              }
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              activeIndex === index ? 'bg-white' : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

