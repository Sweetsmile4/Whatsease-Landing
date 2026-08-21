'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import NavDropdown from './NavDropdown';
import { menuItems, navLinks } from './navData';

interface NavLinksProps {
  darkMode?: boolean;
  onCloseMenu?: () => void;
}

export default function NavLinks({
  darkMode = false,
  onCloseMenu,
}: NavLinksProps) {
  const router = useRouter();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
    setActiveItem(null);
  };

  const handleItemHover = (itemName: string) => {
    setActiveItem(itemName);
  };

  const handleNavClick = (label: string, e: React.MouseEvent) => {
    // For items with dropdowns, only navigate if explicitly clicking the main link
    if (menuItems[label as keyof typeof menuItems]) {
      e.preventDefault();
      router.push(menuItems[label as keyof typeof menuItems].href);
      setHoveredMenu(null);
      if (onCloseMenu) onCloseMenu();
    }
  };

  return (
    <div className="hidden md:flex md:items-center md:gap-1 lg:gap-1">
      {Object.entries(navLinks).map(([label, href]) => (
        <div
          key={label}
          className="relative"
          onMouseEnter={() => handleMouseEnter(label)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={href}
            onClick={(e) =>
              menuItems[label as keyof typeof menuItems] &&
              handleNavClick(label, e)
            }
            className={`group flex items-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
              hoveredMenu === label
                ? ` ${darkMode ? 'bg-[#1b1b24] text-white' : 'bg-white'}`
                : darkMode
                  ? 'text-white'
                  : 'text-foreground'
            }`}
          >
            {label}
          </Link>

          <AnimatePresence>
            {menuItems[label as keyof typeof menuItems] &&
              hoveredMenu === label && (
                <NavDropdown
                  darkMode={darkMode}
                  menuItem={menuItems[label as keyof typeof menuItems]}
                  activeItem={activeItem}
                  onItemHover={handleItemHover}
                  onClose={() => {
                    setHoveredMenu(null);
                    if (onCloseMenu) onCloseMenu();
                  }}
                  label={label}
                />
              )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
