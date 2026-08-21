'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks, menuItems } from './navData';
import NavDropdown from './NavDropdown';

import { Transition } from 'framer-motion';

const transition: Transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export default function AnimatedNavbar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoveredDropdownItem, setHoveredDropdownItem] = useState<string | null>(
    null,
  );

  const handleItemHover = (name: string) => {
    setHoveredDropdownItem(name);
  };

  const handleClose = () => {
    setActiveItem(null);
  };

  return (
    <nav className="relative flex items-center justify-center gap-8">
      {Object.entries(navLinks).map(([label, href]) => (
        <div
          key={label}
          className="relative"
          onMouseEnter={() => setActiveItem(label)}
        >
          <motion.span
            className="cursor-pointer font-medium text-black hover:opacity-[0.9] dark:text-white"
            transition={{ duration: 0.3 }}
          >
            {label}
          </motion.span>

          {activeItem === label &&
            menuItems[label as keyof typeof menuItems] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={transition}
                className="absolute left-1/2 z-50 -translate-x-1/2 transform"
              >
                <NavDropdown
                  menuItem={menuItems[label as keyof typeof menuItems]}
                  activeItem={hoveredDropdownItem}
                  onItemHover={handleItemHover}
                  onClose={handleClose}
                  label={label}
                />
              </motion.div>
            )}
        </div>
      ))}
    </nav>
  );
}
