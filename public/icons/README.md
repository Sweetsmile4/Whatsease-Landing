# PWA Icon Generation Guide

## Quick Setup

You need to generate PWA icons from your existing logo. Here are the required sizes:

- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png
- icon-384x384.png
- icon-512x512.png

## Option 1: Using Online Tools (Easiest)

1. Visit: https://www.pwabuilder.com/imageGenerator
2. Upload your logo file: `/public/whatsease_favicon.png` or `/public/whatsease_favicon.svg`
3. Download the generated icons
4. Extract and place them in `/public/icons/` directory

## Option 2: Using ImageMagick (Command Line)

If you have ImageMagick installed:

```bash
# Install ImageMagick (if not already installed)
brew install imagemagick

# Run the icon generation script
npm run generate-icons
```

## Option 3: Manual Creation

Use any image editing tool (Photoshop, Figma, etc.) to resize your logo to each required size.

## Verify Installation

After generating icons, check that all files exist in `/public/icons/`:

- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png
- icon-384x384.png
- icon-512x512.png

## Screenshot Recommendations

For a complete PWA experience, add screenshots in `/public/screenshots/`:

- **Desktop**: 1280x720px (landscape)
- **Mobile**: 750x1334px (portrait)

These screenshots will appear when users install your app from the browser.
