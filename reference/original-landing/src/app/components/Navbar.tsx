'use client';

import React, { useState } from 'react';
import { HiBars2 } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import NavLogo from './navbar/NavLogo';
import NavLinks from './navbar/NavLinks';
import NavButtons from './navbar/NavButtons';
import MobileMenu from './navbar/MobileMenu';

interface NavbarProps {
  darkMode?: boolean;
}

const Navbar = ({ darkMode = false }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full border-b ${
        darkMode
          ? 'border-white/10 bg-gradient-to-r from-[#0b0c17] via-[#0b0c17]/[0.2] to-[#0b0c17]/[0.2] backdrop-blur-3xl'
          : 'border-black/[0.1] bg-white/[0.5] backdrop-blur-md'
      } font-sans md:px-10`}
    >
      {/* Main navbar container with centering */}
      <div className="mx-auto flex h-[75px] max-w-7xl items-center justify-between px-4 font-figtreeSemibold sm:px-6 lg:px-8">
        {/* Left side with logo and navigation */}
        <nav className="flex items-center gap-4 lg:gap-8">
          <NavLogo darkMode={darkMode} />
          <NavLinks darkMode={darkMode} onCloseMenu={handleCloseMenu} />
        </nav>

        {/* Right side with buttons */}
        <div className="flex items-center">
          <NavButtons darkMode={darkMode} />

          {/* Mobile menu button */}
          <button
            className={`ml-4 flex h-10 w-10 items-center justify-center rounded-md transition-colors duration-200 md:hidden ${
              darkMode
                ? 'text-white hover:bg-white/10'
                : 'text-foreground hover:bg-gray-100'
            }`}
            onClick={handleToggleMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="transition-all duration-300 ease-in-out">
              {mobileMenuOpen ? (
                <IoClose className="h-7 w-7 rotate-90 transition-transform duration-300" />
              ) : (
                <HiBars2 className="h-6 w-6 transition-transform duration-300" />
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={handleCloseMenu}
        darkMode={darkMode}
      />
    </div>
  );
};

export default Navbar;
