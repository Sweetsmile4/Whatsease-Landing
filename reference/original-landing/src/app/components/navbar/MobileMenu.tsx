'use client';

import React from 'react';
import Link from 'next/link';
import { navLinks } from './navData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode?: boolean;
}

export default function MobileMenu({
  isOpen,
  onClose,
  darkMode = false,
}: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-x-0 top-[75px] z-50 transform overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
        isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
      } ${darkMode ? 'bg-[#0c0c1a] shadow-white/5' : 'bg-white shadow-lg'}`}
    >
      <div className="p-4">
        <div className="flex flex-col space-y-4">
          {Object.entries(navLinks).map(([label, href], index) => (
            <Link
              key={label}
              href={href}
              className={`block transform py-2 text-sm font-semibold transition-all duration-300 ease-in-out ${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              } ${darkMode ? 'text-white' : 'text-foreground'}`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
              onClick={onClose}
            >
              {label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/login"
              className={`block transform py-2 text-sm font-semibold transition-all duration-300 ease-in-out ${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              } ${darkMode ? 'text-white' : 'text-foreground'}`}
              style={{
                transitionDelay: '350ms',
              }}
              onClick={onClose}
            >
              Login
            </Link>
            <Link
              href="/contact"
              className={`block transform py-2 text-sm font-semibold transition-all duration-300 ease-in-out ${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              } ${darkMode ? 'text-white' : 'text-foreground'}`}
              style={{
                transitionDelay: '400ms',
              }}
              onClick={onClose}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
