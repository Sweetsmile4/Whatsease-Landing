// src/app/components/FallbackImage.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

interface FallbackImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
}

export default function FallbackImage({
  src,
  alt,
  fallbackSrc,
  className,
  fill = false,
  sizes,
  width,
  height,
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      onError={() => {
        if (fallbackSrc) {
          setImgSrc(fallbackSrc);
        } else if (alt) {
          // Generate avatar with the alt text
          setImgSrc(
            `https://ui-avatars.com/api/?name=${alt.replace(/\s+/g, '+')}&background=eaeaea&color=999999&size=128`,
          );
        } else {
          // Generic fallback
          setImgSrc(
            `https://ui-avatars.com/api/?name=Image&background=eaeaea&color=999999&size=128`,
          );
        }
      }}
    />
  );
}
