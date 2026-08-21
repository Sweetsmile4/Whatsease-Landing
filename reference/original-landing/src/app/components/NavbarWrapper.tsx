'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

// Add routes where you want the navbar to appear
const ROUTES_WITH_NAVBAR = ['/'];

// For routes that start with specific paths (useful for nested routes)
const PATH_STARTS_WITH_NAVBAR = ['/blog', '/resources'];

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Check if current route should have navbar
  const showNavbar =
    ROUTES_WITH_NAVBAR.includes(pathname) ||
    PATH_STARTS_WITH_NAVBAR.some((path) => pathname.startsWith(path));

  // Only render navbar if route is in the list
  return showNavbar ? <Navbar /> : null;
}
