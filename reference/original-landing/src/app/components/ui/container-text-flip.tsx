'use client';

import React, { useState, useEffect, useId } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export interface ContainerTextFlipProps {
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

type SocialPlatform = {
  name: string;
  image: {
    src: string;
    alt: string;
  };
};

export function ContainerTextFlip({
  interval = 3000,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const socialPlatforms: SocialPlatform[] = [
    {
      name: 'WhatsApp',
      image: {
        src: 'https://img.icons8.com/color/48/000000/whatsapp--v1.png',
        alt: 'WhatsApp logo',
      },
    },
    {
      name: 'Instagram',
      image: {
        src: 'https://img.icons8.com/color/48/000000/instagram-new--v1.png',
        alt: 'Instagram logo',
      },
    },
    {
      name: 'Facebook',
      image: {
        src: 'https://img.icons8.com/color/48/000000/facebook-new.png',
        alt: 'Facebook logo',
      },
    },
    {
      name: 'Twitter',
      image: {
        src: 'https://img.icons8.com/color/48/000000/twitter--v1.png',
        alt: 'Twitter logo',
      },
    },
    {
      name: 'LinkedIn',
      image: {
        src: 'https://img.icons8.com/color/48/000000/linkedin.png',
        alt: 'LinkedIn logo',
      },
    },
    {
      name: 'Telegram',
      image: {
        src: 'https://img.icons8.com/color/48/000000/telegram-app--v1.png',
        alt: 'Telegram logo',
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % socialPlatforms.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, socialPlatforms.length]);

  return (
    <motion.div
      className="inline-flex items-center text-xl font-bold text-black dark:text-white md:text-5xl"
      key={`platform-${currentIndex}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: animationDuration / 2000 }}
    >
      <motion.div
        className={cn('inline-block', textClassName)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: animationDuration / 1000 }}
        layoutId={`word-div-${socialPlatforms[currentIndex].name}-${id}`}
      >
        <motion.div className="inline-block">
          {socialPlatforms[currentIndex].name.split('').map((letter, index) => (
            <motion.span
              className="font-Pangea"
              key={index}
              initial={{
                opacity: 0,
                filter: 'blur(10px)',
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
              }}
              transition={{
                delay: index * 0.03,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      <span className="ml-2">
        <Image
          src={socialPlatforms[currentIndex].image.src}
          alt={socialPlatforms[currentIndex].image.alt}
          width={40}
          height={40}
          className="mb-1 inline-block"
        />
      </span>
    </motion.div>
  );
}
