'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { IconItem, ImageItem, Section } from './navData';

interface NavDropdownProps {
  menuItem: {
    sections: Section[];
    href: string;
  };
  darkMode?: boolean;
  activeItem: string | null;
  onItemHover: (name: string) => void;
  onClose: () => void;
  label: string;
}

export default function NavDropdown({
  menuItem,
  activeItem,
  darkMode,
  onItemHover,
  onClose,
  label,
}: NavDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<'left' | 'center' | 'right'>('left');
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);

  // Calculate optimal positioning on mount and window resize
  useEffect(() => {
    const calculatePosition = () => {
      if (!dropdownRef.current) return;

      // Get the parent element (nav item) and its position
      const navItem = dropdownRef.current.parentElement;
      if (!navItem) return;

      const navItemRect = navItem.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      // Set width based on viewport with minimum 800px on md devices
      let newWidth;
      if (viewportWidth < 768) {
        // Mobile: Full width minus padding
        newWidth = viewportWidth - 32;
      } else {
        // Tablet and above: Minimum 800px, maximum 900px or 90% of viewport width
        newWidth = Math.min(
          Math.max(800, viewportWidth * 0.7),
          Math.min(900, viewportWidth * 0.9),
        );
      }

      setDropdownWidth(newWidth);

      // Special handling for navigation items near the right edge
      // "Case Studies" and "Comparison" are typically rightmost items
      if (label === 'Case Studies' || label === 'Comparison') {
        // Always right-align these dropdowns
        setPosition('right');
      } else {
        // For other items, calculate optimal position
        const navItemCenterX = navItemRect.left + navItemRect.width / 2;

        if (navItemCenterX - newWidth / 2 < 20) {
          // Too close to left edge
          setPosition('left');
        } else if (navItemCenterX + newWidth / 2 > viewportWidth - 20) {
          // Too close to right edge
          setPosition('right');
        } else {
          // Enough space on both sides
          setPosition('center');
        }
      }
    };

    // Calculate position immediately and on resize
    calculatePosition();
    window.addEventListener('resize', calculatePosition);

    return () => {
      window.removeEventListener('resize', calculatePosition);
    };
  }, [label]);

  // Apply different positioning styles based on calculated position
  const positionStyles = {
    left: {
      left: '0',
      right: 'auto',
      transform: 'translateX(0)',
    },
    center: {
      left: '50%',
      right: 'auto',
      transform: 'translateX(-50%)',
    },
    right: {
      left: 'auto',
      right: '0',
      transform: 'translateX(0)',
    },
  };

  return (
    <motion.div
      ref={dropdownRef}
      initial={{
        opacity: 0,
        y: 15,
        clipPath: 'inset(10% 50% 90% 50% round 16px)',
      }}
      animate={{
        opacity: 1,
        y: 0,
        clipPath: 'inset(0% 0% 0% 0% round 16px)',
      }}
      exit={{
        opacity: 0,
        y: 10,
        clipPath: 'inset(10% 50% 90% 50% round 16px)',
      }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className="absolute top-full z-50"
      style={{
        width: dropdownWidth || 'auto',
        maxWidth: 'min(80vw, 700px)',
        perspective: '1000px',
        ...positionStyles[position],
      }}
    >
      <div
        className={`mt-1 overflow-hidden rounded-md border shadow-2xl shadow-black/[0.5] ${darkMode ? 'border-white/[0.1] bg-[#1b1b24]' : 'border-black/[0.1] bg-white shadow-2xl shadow-black'} backdrop-blur-sm`}
      >
        <div className="relative p-4 sm:p-6">
          {/* Updated subtle glow effect with grayscale colors */}
          <div className="pointer-events-none absolute -left-20 top-20 h-40 w-40 rounded-full bg-gray-200/10 blur-[50px]"></div>
          <div className="pointer-events-none absolute -right-20 bottom-10 h-40 w-40 rounded-full bg-gray-200/10 blur-[50px]"></div>

          {menuItem.sections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: sectionIndex * 0.1,
                duration: 0.4,
                ease: [0.23, 1, 0.32, 1],
              }}
              className={`relative ${sectionIndex > 0 ? 'mt-8' : ''}`}
            >
              <h3
                className={`mb-4 inline-block text-sm font-semibold uppercase tracking-wide ${
                  darkMode ? 'text-gray-400' : 'text-gray-400'
                } after:ml-2 after:h-px after:w-10 after:bg-gray-200 after:content-['']`}
              >
                {section.title}
              </h3>

              {section.type === 'icons' ? (
                <IconItems
                  darkMode={darkMode}
                  items={section.items as IconItem[]}
                  sectionIndex={sectionIndex}
                  activeItem={activeItem}
                  onItemHover={onItemHover}
                  onClose={onClose}
                />
              ) : (
                <ImageItems
                  darkMode={darkMode}
                  items={section.items as ImageItem[]}
                  sectionIndex={sectionIndex}
                  activeItem={activeItem}
                  onItemHover={onItemHover}
                  onClose={onClose}
                />
              )}
            </motion.div>
          ))}

          {/* Bottom call to action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className={`mt-6 border-t ${
              darkMode ? 'border-white/[0.1]' : 'border-gray-100'
            } pt-4`}
          >
            <div className="flex flex-col space-y-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <Link
                href={menuItem.href}
                className={`flex items-center gap-1 font-medium ${
                  darkMode
                    ? 'text-white hover:text-gray-300'
                    : 'text-gray-900 hover:text-gray-600'
                } hover:underline`}
                onClick={onClose}
              >
                <span>Explore all {label.toLowerCase()}</span>
                <ArrowRightIcon className="h-3 w-3" />
              </Link>

              <span
                className={`${darkMode ? 'text-gray-400' : 'text-gray-400'}`}
              >
                {label === 'Product'
                  ? 'New features available'
                  : label === 'Resources'
                    ? 'Updated weekly'
                    : label === 'Industries'
                      ? 'Tailored solutions'
                      : ''}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Icon Items Component
function IconItems({
  items,
  sectionIndex,
  activeItem,
  onItemHover,
  darkMode,
  onClose,
}: {
  items: IconItem[];
  sectionIndex: number;
  activeItem: string | null;
  onItemHover: (name: string) => void;
  darkMode?: boolean;
  onClose: () => void;
}) {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {items.map((item, itemIndex) => {
        const IconComponent = item.icon;
        const isActive = activeItem === item.name;

        return (
          <motion.div
            key={itemIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: sectionIndex * 0.1 + itemIndex * 0.05 + 0.2,
              duration: 0.3,
            }}
            onMouseEnter={() => onItemHover(item.name)}
            onMouseLeave={() => onItemHover('')}
            className="w-full sm:w-[calc(50%-4px)]"
          >
            <Link
              href={item.href}
              className={`group relative flex items-start gap-3 rounded-md p-3 transition-all duration-200 ${
                isActive
                  ? darkMode
                    ? 'bg-white/10'
                    : 'bg-black/5'
                  : darkMode
                    ? 'hover:bg-white/[0.05]'
                    : 'hover:bg-gray-50/80'
              }`}
              onClick={onClose}
            >
              {/* Line indicator for active item - updated to black/white */}
              <div
                className={`absolute left-0 top-0 h-full w-1 rounded-l-xl ${
                  darkMode ? 'bg-white' : 'bg-black'
                } transition-opacity duration-200 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>

              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md transition-colors ${
                  isActive
                    ? darkMode
                      ? 'bg-white/20 text-white'
                      : 'bg-black/10 text-black'
                    : darkMode
                      ? 'bg-white/10 text-white group-hover:bg-white/20'
                      : 'bg-black/5 text-black group-hover:bg-black/10'
                }`}
              >
                <IconComponent className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h4
                    className={`truncate text-sm font-semibold transition-colors ${
                      isActive
                        ? darkMode
                          ? 'text-white'
                          : 'text-black'
                        : darkMode
                          ? 'text-white group-hover:text-white'
                          : 'text-gray-900 group-hover:text-black'
                    }`}
                  >
                    {item.name}
                  </h4>
                  <ArrowRightIcon
                    className={`h-4 w-4 flex-shrink-0 transform transition-all duration-300 ${
                      darkMode ? 'text-white' : 'text-black'
                    } ${
                      isActive
                        ? 'opacity-100'
                        : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}
                  />
                </div>
                <p
                  className={`mt-1 line-clamp-2 text-xs ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

// Image Items Component
function ImageItems({
  items,
  sectionIndex,
  activeItem,
  darkMode,
  onItemHover,
  onClose,
}: {
  items: ImageItem[];
  sectionIndex: number;
  activeItem: string | null;
  onItemHover: (name: string) => void;
  darkMode?: boolean;
  onClose: () => void;
}) {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {items.map((item, itemIndex) => {
        const isActive = activeItem === item.name;

        return (
          <motion.div
            key={itemIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: sectionIndex * 0.1 + itemIndex * 0.05 + 0.2,
              duration: 0.3,
            }}
            onMouseEnter={() => onItemHover(item.name)}
            onMouseLeave={() => onItemHover('')}
            className="w-full sm:w-[calc(50%-8px)]"
          >
            <Link
              href={item.href}
              className={`group relative flex h-full flex-row items-center gap-4 rounded-md p-3 transition-all duration-200 ${
                isActive
                  ? darkMode
                    ? 'bg-white/10'
                    : 'bg-black/5'
                  : darkMode
                    ? 'hover:bg-white/[0.05]'
                    : 'hover:bg-gray-50/80'
              }`}
              onClick={onClose}
            >
              {/* Line indicator for active item */}
              <div
                className={`absolute left-0 top-0 h-full w-1 rounded-l-xl ${
                  darkMode ? 'bg-white' : 'bg-black'
                } transition-opacity duration-200 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>

              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md sm:h-20 sm:w-20">
                <div className="relative h-full w-full transform transition-all duration-500 group-hover:scale-105">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      isActive
                        ? darkMode
                          ? 'bg-gradient-to-r from-white/20 to-transparent opacity-100'
                          : 'bg-gradient-to-r from-black/10 to-transparent opacity-100'
                        : 'opacity-0'
                    }`}
                  ></div>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h4
                    className={`text-sm font-semibold transition-colors ${
                      isActive
                        ? darkMode
                          ? 'text-white'
                          : 'text-black'
                        : darkMode
                          ? 'text-white group-hover:text-white'
                          : 'text-gray-900 group-hover:text-black'
                    }`}
                  >
                    {item.name}
                  </h4>
                  <ArrowRightIcon
                    className={`h-4 w-4 transform transition-all duration-300 ${
                      darkMode ? 'text-white' : 'text-black'
                    } ${
                      isActive
                        ? 'opacity-100'
                        : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}
                  />
                </div>
                <p
                  className={`mt-1 text-xs ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
