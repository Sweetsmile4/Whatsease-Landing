import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Marquee = ({ darkMode }: { darkMode?: boolean }) => {
  return (
    <div className="relative hidden w-full max-w-7xl bg-transparent py-16 md:block">
      <div className="mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col items-start justify-between gap-8 pt-10 md:flex-row md:items-center">
          {/* Heading */}
          <motion.div
            className="max-w-xs"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className={`text-xs font-semibold sm:text-2xl md:text-sm ${
                darkMode ? 'text-white' : 'text-[#4a4a53]'
              }`}
            >
              20+ companies <br /> already trust us
            </h2>
          </motion.div>

          {/* Marquee container with blur effects */}
          <div className="relative w-full flex-1 overflow-hidden md:ml-8">
            {/* Left blur gradient */}
            <div
              className={`absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r ${
                darkMode
                  ? 'from-[#020210] to-transparent'
                  : 'from-white to-transparent'
              }`}
            ></div>

            {/* Right blur gradient */}
            <div
              className={`absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l ${
                darkMode
                  ? 'from-[#020210] to-transparent'
                  : 'from-white to-transparent'
              }`}
            ></div>

            {/* Scrolling marquee */}
            <div className="animate-marquee flex items-center gap-12 py-4">
              {/* Company logos - using reliable CDN images */}
              {[
                {
                  name: 'Urban Forest',
                  path: '/Companies/urbanforest.jpg',
                  width: 80,
                  height: 50,
                },
                {
                  name: 'Vadodara Fun Fiesta',
                  path: '/Companies/vff.png',
                  width: 60,
                  height: 32,
                },
                {
                  name: 'Train With Shubham',
                  path: '/Companies/tws.png',
                  width: 60,
                  height: 32,
                },
                {
                  name: 'The Hackers Meetup',
                  path: '/Companies/thm.png',
                  width: 60,
                  height: 32,
                },
                {
                  name: 'Weekend Bazaar',
                  path: '/Companies/weekend.jpg',
                  width: 60,
                  height: 60,
                },
                {
                  name: 'Cii',
                  path: '/Companies/cii.jpg',
                  width: 60,
                  height: 60,
                },
                {
                  name: 'Indie',
                  path: '/Companies/indie.png',
                  width: 60,
                  height: 60,
                },
                {
                  name: 'Waves Club',
                  path: '/Companies/wavesclub.webp',
                  width: 60,
                  height: 60,
                },
                // Duplicate logos for continuous scrolling
                {
                  name: 'Vadodara Fun Fiesta',
                  path: '/Companies/vff.png',
                  width: 60,
                  height: 32,
                },
                {
                  name: 'Train With Shubham',
                  path: '/Companies/tws.png',
                  width: 60,
                  height: 32,
                },
                {
                  name: 'The Hackers Meetup',
                  path: '/Companies/thm.png',
                  width: 60,
                  height: 60,
                },
                {
                  name: 'Weekend Bazaar',
                  path: '/Companies/weekend.jpg',
                  width: 60,
                  height: 60,
                },
                {
                  name: 'Cii',
                  path: '/Companies/cii.jpg',
                  width: 60,
                  height: 60,
                },
              ].map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex h-auto w-auto flex-shrink-0 items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    filter: 'grayscale(0%)',
                    opacity: 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* SVG Icons with dark mode support */}
                  <div
                    className={`relative mx-5 flex items-center justify-center`}
                    style={{
                      height: logo.height,
                      width: logo.width,
                      filter: darkMode ? 'invert(1)' : 'none',
                    }}
                  >
                    <Image
                      src={logo.path}
                      alt={`${logo.name} logo`}
                      width={logo.width}
                      height={logo.height}
                      unoptimized
                      className="transition-all duration-300"
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                        background: 'transparent',
                        borderRadius: 6,
                        boxShadow: 'none',
                        filter: darkMode
                          ? 'invert(1) grayscale(1) brightness(1)'
                          : 'grayscale(1) brightness(1)',
                        height: logo.height,
                        width: logo.width,
                        maxWidth: '100%',
                        maxHeight: '100%',
                        minWidth: logo.width,
                        minHeight: logo.height,
                        display: 'block',
                        transition: 'filter 0.3s, opacity 0.3s',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.filter = darkMode
                          ? 'invert(1) grayscale(0) brightness(1)'
                          : 'grayscale(0) brightness(1)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.filter = darkMode
                          ? 'invert(1) grayscale(1) brightness(1)'
                          : 'grayscale(1) brightness(1)';
                      }}
                      onError={(
                        e: React.SyntheticEvent<HTMLImageElement, Event>,
                      ) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<div class="${
                          darkMode
                            ? 'bg-gray-800 text-gray-200'
                            : 'bg-gray-100 text-gray-500'
                        } flex items-center justify-center rounded text-xs" style="height:${logo.height}px;width:${logo.width}px">${logo.name}</div>`;
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
