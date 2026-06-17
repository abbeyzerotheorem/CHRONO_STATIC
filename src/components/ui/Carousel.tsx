import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  showArrows?: boolean;
  showDots?: boolean;
  loop?: boolean;
  slidesToShow?: number;
}

export function Carousel({
  children,
  className,
  autoplay = false,
  autoplaySpeed = 4000,
  showArrows = true,
  showDots = true,
  loop = true,
  slidesToShow = 1,
}: CarouselProps) {
  const plugins = autoplay ? [Autoplay({ delay: autoplaySpeed, stopOnInteraction: true })] : [];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: 'start' }, plugins);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const childrenArray = React.Children.toArray(children);

  return (
    <div className={cn('relative group', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex" style={{ marginLeft: `calc(-1 * ${100 / (slidesToShow * 2)}%)` }}>
          {childrenArray.map((child, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 pl-4"
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && childrenArray.length > slidesToShow && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-sky-500/20 hover:border-sky-500/30 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-sky-500/20 hover:border-sky-500/30 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {showDots && scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                index === selectedIndex
                  ? 'bg-sky-500 w-6'
                  : 'bg-slate-700 hover:bg-slate-600'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}