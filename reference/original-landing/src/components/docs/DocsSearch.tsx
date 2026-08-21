'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Sample search results data structure
const searchResults = [
  {
    category: 'API Reference',
    items: [
      {
        title: 'Authentication',
        href: '#authentication',
        excerpt: 'Learn how to authenticate your API requests...',
      },
      {
        title: 'Sending Messages',
        href: '#message-api',
        excerpt: 'Send text, media, or interactive messages to your users...',
      },
    ],
  },
  {
    category: 'Guides',
    items: [
      {
        title: 'QR Code Validation',
        href: '#qr-validation',
        excerpt: 'Implement QR code scanning functionality...',
      },
      {
        title: 'Building a WhatsApp Bot',
        href: '#building-bot',
        excerpt:
          'Create interactive WhatsApp bots that respond to user inputs...',
      },
    ],
  },
];

export default function DocsSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleSearchClose();
    }
  };

  // Only show results if search is open and there's a query
  const showResults = isSearchOpen && searchQuery.length > 1;

  return (
    <div className="relative z-50">
      {/* Search trigger button */}
      <div className="relative flex w-full max-w-md items-center">
        <input
          type="text"
          placeholder="Search documentation..."
          className="w-full rounded-lg border border-white/10 bg-[#141526] py-3 pl-4 pr-10 text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#04b851]"
          onClick={handleSearchOpen}
          readOnly
        />
        <div className="absolute right-3 text-gray-400">
          <Search className="h-5 w-5" />
        </div>
      </div>

      {/* Full-screen search overlay with blur effect */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-32 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClickOutside}
          >
            <motion.div
              className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#11111e] shadow-2xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {/* Search input */}
              <div className="relative flex items-center border-b border-white/10">
                <Search className="absolute left-4 h-5 w-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search documentation..."
                  className="w-full bg-transparent py-4 pl-12 pr-12 text-white focus:outline-none"
                  autoFocus
                />
                <button
                  className="absolute right-4 rounded-full p-1 text-gray-400 hover:bg-white/10 hover:text-white"
                  onClick={handleSearchClose}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Search results */}
              <div className="max-h-[60vh] overflow-y-auto p-4">
                {showResults ? (
                  searchResults.map((category, idx) => (
                    <div key={idx} className="mb-6">
                      <h3 className="mb-2 text-sm font-medium uppercase text-[#828ca1]">
                        {category.category}
                      </h3>
                      <div className="space-y-2">
                        {category.items.map((item, itemIdx) => (
                          <Link
                            href={item.href}
                            key={itemIdx}
                            onClick={handleSearchClose}
                            className="block rounded-lg p-3 transition-colors hover:bg-white/5"
                          >
                            <h4 className="text-lg font-medium text-[#04b851]">
                              {item.title}
                            </h4>
                            <p className="mt-1 text-sm text-gray-300">
                              {item.excerpt}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center text-gray-400">
                    {searchQuery ? (
                      <p>No results found. Try a different search term.</p>
                    ) : (
                      <p>Start typing to search documentation</p>
                    )}
                  </div>
                )}
              </div>

              {/* Quick tips */}
              <div className="border-t border-white/10 bg-[#0e0e1c] p-4">
                <p className="text-xs text-gray-400">
                  Press{' '}
                  <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-xs font-semibold">
                    Esc
                  </kbd>{' '}
                  to close or{' '}
                  <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-xs font-semibold">
                    ↵
                  </kbd>{' '}
                  to select
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
