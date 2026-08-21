import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // Prevent the lockfile in C:\Users\ASUS from being inferred as this app's root.
  outputFileTracingRoot: process.cwd(),
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console logs in production
  },
  env: {
    NEXT_PUBLIC_USE_LAMBDA:
      process.env.NEXT_PUBLIC_USE_LAMBDA || process.env.USE_LAMBDA || 'false',
    NEXT_PUBLIC_INBOX_POLL_INTERVAL_MS:
      process.env.NEXT_PUBLIC_INBOX_POLL_INTERVAL_MS ||
      process.env.INBOX_POLL_INTERVAL_MS ||
      '3000',
  },
  // Experimental features for faster builds
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@ant-design/icons',
      '@heroicons/react',
      '@tabler/icons-react',
      'react-icons',
      'antd',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
    ],
  },
  // Image optimization - using remotePatterns instead of deprecated domains
  images: {
    remotePatterns: [

      {hostname : 'scontent-bom5-1.cdninstagram.com'},
      {hostname : 'scontent-bom5-2.cdninstagram.com'},
      {hostname : 'krosspost-dev.s3.ap-south-1.amazonaws.com'},
      { hostname: 'images.unsplash.com' },
      { hostname: 'cdn.jsdelivr.net' },
      { hostname: 'img.icons8.com' },
      { hostname: 'randomuser.me' },
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'framerusercontent.com' },
      { hostname: 'www.superchat.com' },
      { hostname: 'www.flaticon.com' },
      { hostname: 'd502jbuhuh9wk.cloudfront.net' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'logo.clearbit.com' },
      { hostname: 'i.pravatar.cc' },
      { hostname: 'ui-avatars.com' },
      { hostname: 'img.freepik.com' },
      { hostname: 'plus.unsplash.com' },
      { hostname: 'upload.wikimedia.org' },
      { hostname: 'www.gstatic.com' },
      { hostname: 'i.pinimg.com' },
      { hostname: 'placehold.co' },
      { hostname: 'img-prod-cms-rt-microsoft-com.akamaized.net' },
      { hostname: 'krosspost-dev.s3.amazonaws.com' },
      { hostname: 'krosspost-dev.s3.ap-south-1.amazonaws.com' },
      { hostname: 'krosspost-dev.s3.ap-south-1.amazonaws.com' },
      { hostname: 'krosspost-dev.s3.ap-south-1.amazonaws.com' },
      { hostname: 'cdn.whatsease.in' },
      { hostname: 'whatsease.s3.ap-south-1.amazonaws.com' },
      { hostname: 'whatsease-v2.s3.ap-south-1.amazonaws.com' }
    ],
    formats: ['image/avif', 'image/webp'], // Optimize image formats
  },
};


export default nextConfig;
