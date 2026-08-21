/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        // Now you can use: shadow-inner-and-outer
        'inner-and-outer':
          'inset 0 1px 2px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.05)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#04b851',
        secondary: '#828ca1',
        sidebar: {
          bg: 'var(--sidebar-bg)',
          surface: 'var(--sidebar-surface)',
          border: 'var(--sidebar-border)',
          muted: 'var(--sidebar-text-muted)',
          accent: 'var(--sidebar-active-accent)',
        },
      },
      fontFamily: {
        sans: ['var(--font-figtree)', 'system-ui', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
        Pangea: ['Pangea', 'sans-serif'],
        figtreeNormal: ['Figtree-Medium'],
        figtreeRegular: ['Figtree-Regular'],
        figtreeSemibold: ['Figtree-SemiBold'],
      },
      keyframes: {
  'fade-in': {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  'slide-in-from-top': {
    '0%': {
      transform: 'translateY(-8px) scale(0.98)',
      opacity: '0',
    },
    '100%': {
      transform: 'translateY(0) scale(1)',
      opacity: '1',
    },
  },
},

animation: {
  'in': 'slide-in-from-top 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
},
    },
  },
  plugins: [],
};
