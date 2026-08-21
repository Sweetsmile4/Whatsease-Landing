'use client';
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';
import { useOutsideClick } from '@/app/hooks/use-outside-click';
import { createPortal } from 'react-dom';

interface CarouselProps {
  items: React.JSX.Element[];
  initialScroll?: number;
  showNavButtons?: boolean;
}

interface CarouselRef {
  scrollLeft: () => void;
  scrollRight: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = forwardRef<CarouselRef, CarouselProps>(
  ({ items, initialScroll = 0, showNavButtons = true }, ref) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = initialScroll;
        checkScrollability();
      }
    }, [initialScroll]);

    const checkScrollability = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
      }
    };

    const scrollLeft = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      }
    };

    const scrollRight = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    };

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
      scrollLeft,
      scrollRight,
      canScrollLeft,
      canScrollRight,
    }));

    const handleCardClose = (index: number) => {
      if (carouselRef.current) {
        const cardWidth = isMobile() ? 230 : 384;
        const gap = isMobile() ? 4 : 8;
        const scrollPosition = (cardWidth + gap) * (index + 1);
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
        setCurrentIndex(index);
      }
    };

    const isMobile = () => {
      return window && window.innerWidth < 768;
    };

    // If showNavButtons is true, render only the navigation buttons
    if (showNavButtons) {
      return (
        <div className="flex gap-2">
          <button
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      );
    }

    return (
      <CarouselContext.Provider
        value={{ onCardClose: handleCardClose, currentIndex }}
      >
        <div className="relative w-full">
          <div
            className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
            ref={carouselRef}
            onScroll={checkScrollability}
          >
            <div className="flex flex-row justify-start gap-4">
              {items.map((item, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2 * index,
                      ease: 'easeOut',
                    },
                  }}
                  key={'card' + index}
                  className={cn(
                    'flex-shrink-0',
                    index === 0 &&
                      'pl-20 sm:pl-[200px] md:pl-[300px] lg:pl-[350px] xl:pl-[400px]', // Add padding-left of 20 only to the first card
                  )}
                  style={{ zIndex: 10 + index }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </CarouselContext.Provider>
    );
  },
);

Carousel.displayName = 'Carousel';

// Navigation buttons component
export const CarouselNavButtons = ({
  carouselRef,
}: {
  carouselRef: React.RefObject<CarouselRef>;
}) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const updateScrollState = () => {
      if (carouselRef.current) {
        setCanScrollLeft(carouselRef.current.canScrollLeft);
        setCanScrollRight(carouselRef.current.canScrollRight);
      }
    };

    const interval = setInterval(updateScrollState, 100);
    return () => clearInterval(interval);
  }, [carouselRef]);

  const scrollLeft = () => {
    carouselRef.current?.scrollLeft();
  };

  const scrollRight = () => {
    carouselRef.current?.scrollRight();
  };

  return (
    <div className="flex gap-2">
      <button
        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 disabled:opacity-50"
        onClick={scrollLeft}
        disabled={!canScrollLeft}
      >
        <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
      </button>
      <button
        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 disabled:opacity-50"
        onClick={scrollRight}
        disabled={!canScrollRight}
      >
        <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
      </button>
    </div>
  );
};

// Rest of the components remain the same...
export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  // Make sure we're running in browser environment
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleClose = React.useCallback(() => {
    setOpen(false);
    onCardClose(index);
  }, [onCardClose, index]);

  // Simplified handleOpen function
  const handleOpen = () => {
    console.log('Opening modal');
    setOpen(true);
  };

  // Body overflow handling
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('modal-open');
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, handleClose]);

  useOutsideClick(containerRef, () => handleClose());

  return (
    <>
      {/* Render the modal portal if open and mounted */}
      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-[99999] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/[0.1] backdrop-blur-lg"
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              ref={containerRef}
              className="relative z-[100000] h-fit w-[95%] max-w-5xl overflow-auto rounded-xl bg-white p-4 font-sans dark:bg-neutral-900 md:p-10"
              style={{ maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>

              <p className="text-base font-medium text-black dark:text-white">
                {card.category}
              </p>

              <p className="mt-4 text-xl font-semibold text-neutral-700 dark:text-white md:text-5xl">
                {card.title}
              </p>

              <div className="py-6 md:py-10">{card.content}</div>
            </motion.div>
          </div>,
          document.body,
        )}

      {/* Card button */}
      <button
        onClick={handleOpen}
        className="group relative flex h-72 w-52 flex-col items-end justify-end overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 dark:bg-neutral-900 sm:h-80 sm:w-56 md:h-[28rem] md:w-80"
        style={{ zIndex: 10 + index }}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[35%] bg-gradient-to-b from-black/40 via-black/60 to-black/80 backdrop-blur-md transition-all duration-300" />

        <div className="relative z-40 flex w-full flex-col items-start justify-center gap-1 px-3 py-4 sm:px-4 sm:py-6 md:gap-3 md:px-5 md:py-8">
          <p className="font-sans text-xs font-medium text-white sm:text-sm md:text-base lg:text-xl">
            {card.category}
          </p>
          <p className="max-w-xs font-sans text-xs font-medium text-white/90 [text-wrap:balance] sm:text-sm md:text-sm">
            {card.title}
          </p>

          <div className="bg-white/15 mt-4 flex items-center rounded-full font-sans text-xs font-medium text-white transition-all duration-300 sm:text-sm">
            Read More
            <IconArrowNarrowRight className="ml-1.5 h-3 w-3 text-white transition-transform duration-300 group-hover:translate-x-1 sm:ml-2 sm:h-4 sm:w-4" />
          </div>
        </div>

        <motion.div
          className="absolute inset-0 z-10"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <BlurImage
            src={card.src}
            alt={card.title}
            fill
            className="h-full w-full object-cover"
          />
        </motion.div>
      </button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        'h-full w-full transition duration-300',
        isLoading ? 'blur-sm' : 'blur-0',
        className,
      )}
      onLoadingComplete={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={typeof src === 'string' ? src : undefined}
      alt={alt ? alt : 'Background of a beautiful view'}
      {...rest}
    />
  );
};
