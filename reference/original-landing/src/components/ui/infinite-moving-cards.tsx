'use client';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils'; // Make sure you have this utility function

interface InfiniteMovingCardsProps {
  items: {
    quote: string;
    name: string;
    role?: string;
    title?: string;
    image?: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 h-full min-h-[300px] w-full overflow-hidden',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-xl md:w-[450px]"
            key={idx}
          >
            <blockquote>
              <div className="relative z-10">
                <p className="text-[13px] text-base leading-relaxed text-slate-800">
                  {item.quote}
                </p>
                <div className="mt-6 flex items-center gap-x-4">
                  {item.image && (
                    <div className="h-14 w-14 overflow-hidden rounded-md">
                      <img
                        className="h-full w-full object-cover"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#04B851]">
                      {item.name}
                    </span>
                    <span className="max-w-[250px] text-xs italic text-gray-700">
                      {item.role || item.title}
                    </span>
                  </div>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
