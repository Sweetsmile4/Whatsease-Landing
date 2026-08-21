'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { scroller } from 'react-scroll';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, User, Settings, LogOut } from 'lucide-react';

interface NavButtonsProps {
  darkMode?: boolean;
}

export default function NavButtons({ darkMode = false }: NavButtonsProps) {
  const { user, logout, isLoading: authLoading } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleContactScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    scroller.scrollTo('contact-us-section', {
      duration: 600,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80,
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getUserInitials = () => {
    if (!user?.name) return 'U';
    return user.name
      .split(' ')
      .map((n: string) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="flex items-center gap-2 relative z-[60]">
      {authLoading || !user ? (
        <Link
          href="/login"
          className={`hidden rounded-md px-4 py-2 text-sm font-semibold transition-colors md:block pointer-events-auto ${
            darkMode
              ? 'text-white hover:bg-white/10'
              : 'hover:bg-foreground/[0.05] text-foreground'
          }`}
        >
          Login
        </Link>
      ) : (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
              darkMode
                ? 'hover:bg-white/10 text-white'
                : 'hover:bg-foreground/[0.05] text-foreground'
            } ${isDropdownOpen ? (darkMode ? 'bg-white/10' : 'bg-foreground/[0.05]') : ''}`}
          >
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#04b851] to-[#039943] ring-2 ring-white/20">
              {user?.profile_picture ? (
                <Image
                  src={
                    typeof user.profile_picture === 'string' &&
                    user.profile_picture.length > 0
                      ? user.profile_picture
                      : '/default-avatar.png'
                  }
                  alt={user.name || 'Profile'}
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              ) : (
                <span className="text-xs font-semibold text-white">
                  {getUserInitials()}
                </span>
              )}
            </div>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-2 w-64 origin-top-right transform transition-all duration-200 ${
              isDropdownOpen
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-95 opacity-0'
            }`}
          >
            <div
              className={`rounded-xl border shadow-lg ${
                darkMode
                  ? 'border-white/10 bg-[#0c0c1a] shadow-black/20'
                  : 'border-gray-200 bg-white shadow-gray-200'
              }`}
            >
              {/* User Info Section */}
              <div className={`border-b p-4 ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#04b851] to-[#039943] ring-2 ring-white/20">
                    {user?.profile_picture ? (
                      <Image
                        src={
                          typeof user.profile_picture === 'string' &&
                          user.profile_picture.length > 0
                            ? user.profile_picture
                            : '/default-avatar.png'
                        }
                        alt={user.name || 'Profile'}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-base font-semibold text-white">
                        {getUserInitials()}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p
                      className={`truncate text-sm font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {user.name || 'User'}
                    </p>
                    <p
                      className={`truncate text-xs ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                      title={user.email}
                    >
                      {user.email || 'email@example.com'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-1">
                <Link
                  href="/dashboard"
                  onClick={() => setIsDropdownOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    darkMode
                      ? 'text-gray-300 hover:bg-white/10 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <User className="h-4 w-4" />
                  Dashboard
                </Link>
              </div>

              {/* Logout Section */}
              <div className={`border-t p-1 ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    logout();
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    darkMode
                      ? 'text-red-400 hover:bg-red-500/10'
                      : 'text-red-600 hover:bg-red-50'
                  }`}
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Link
        href="/#contact-us"
        // onClick={handleContactScroll}
        className={`me-2 hidden whitespace-nowrap rounded-lg border px-4 py-2 text-sm font-semibold shadow-inner-and-outer transition-all hover:shadow-lg md:block ${
          darkMode
            ? 'border-white/10 bg-[#0c0c1a] text-white shadow-white/5 hover:bg-white/5'
            : 'border-foreground/[0.1] shadow-foreground/[0.09] bg-white text-foreground hover:bg-gray-50'
        }`}
      >
        Contact Sales
      </Link>
     {!user && <Link
        href="/signup"
        className="whitespace-nowrap rounded-lg border border-[#04b851]/[0.5] bg-[#04b851] px-3 py-1.5 text-xs font-semibold text-white shadow-inner shadow-white/[0.3] transition-transform hover:scale-[1.03] hover:bg-[#039943] active:scale-[0.98] sm:px-4 sm:py-2 sm:text-sm"
      >
        Try for free
      </Link>}
    </div>
  );
}