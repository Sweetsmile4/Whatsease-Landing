'use client';
import React, { useState, useRef } from 'react';
import { ContainerTextFlip } from '../ui/container-text-flip';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  FiInbox,
  FiLink,
  FiMessageSquare,
  FiPieChart,
  FiUsers,
} from 'react-icons/fi';
import { HiOutlineDocumentText, HiOutlineLightningBolt } from 'react-icons/hi';
import { MdOutlineContactPhone, MdOutlineSmartToy } from 'react-icons/md';
import Marquee from '../Marquee';
import { Router } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Feature options structured array with professional icons
const featureOptions = [
  {
    name: 'Inbox',
    icon: <FiInbox className="text-2xl text-[#a8a8b3]" />,
    category: 'messaging',
  },
  {
    name: 'AI Chatbot',
    icon: <MdOutlineSmartToy className="text-2xl text-[#a8a8b3]" />,
    category: 'automation',
  },
  {
    name: 'Quick Replies',
    icon: <HiOutlineLightningBolt className="text-2xl text-[#a8a8b3]" />,
    category: 'productivity',
  },
  {
    name: 'Integrations',
    icon: <FiLink className="text-2xl text-[#a8a8b3]" />,
    category: 'connectivity',
  },
  {
    name: 'Web Chat',
    icon: <FiMessageSquare className="text-2xl text-[#a8a8b3]" />,
    category: 'channels',
  },
  {
    name: 'Newsletters',
    icon: <HiOutlineDocumentText className="text-2xl text-[#a8a8b3]" />,
    category: 'marketing',
  },
  {
    name: 'Analytics',
    icon: <FiPieChart className="text-2xl text-[#a8a8b3]" />,
    category: 'reporting',
  },
  {
    name: 'Team Chat',
    icon: <FiUsers className="text-2xl text-[#a8a8b3]" />,
    category: 'collaboration',
  },
  {
    name: 'CRM',
    icon: <MdOutlineContactPhone className="text-2xl text-[#a8a8b3]" />,
    category: 'management',
  },
];

const Landing = () => {
  // State to track which features are selected
  const router = useRouter();
  const [selectedFeatures, setSelectedFeatures] = useState<boolean[]>(
    Array(featureOptions.length).fill(false),
  );

  // Reference for the carousel scroll container
  const carouselRef = useRef<HTMLDivElement>(null);

  // Toggle feature selection
  const toggleFeature = (index: number) => {
    const newSelectedFeatures = [...selectedFeatures];
    newSelectedFeatures[index] = !newSelectedFeatures[index];
    setSelectedFeatures(newSelectedFeatures);
  };

  // Scroll carousel left or right
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const scrollAmount = 200; // Adjust based on your card width
    const currentScroll = carouselRef.current.scrollLeft;

    carouselRef.current.scrollTo({
      left:
        direction === 'left'
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount,
      behavior: 'smooth',
    });
  };

  // Feature selection component for desktop
  const FeatureSelectionCard = ({ className = '' }) => (
    <div
      className={`rounded-xl border border-white bg-white/[0.3] p-2 shadow-lg backdrop-blur-md sm:p-3 ${className}`}
    >
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white p-3 shadow-md sm:gap-4 sm:p-4 md:gap-5 md:p-5">
        <h1 className="font-figtreeSemibold text-base font-semibold leading-tight tracking-tight sm:text-lg">
          Select features and get started
        </h1>

        <div className="grid w-full grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
          {featureOptions.map((feature, idx) => (
            <div
              key={idx}
              className={`flex cursor-pointer flex-col items-start justify-center rounded-xl border ${
                selectedFeatures[idx] ? 'border-primary' : 'border-black/[.1]'
              } bg-transparent p-2 shadow-sm transition-colors duration-200 hover:bg-gray-50`}
              onClick={() => toggleFeature(idx)}
            >
              <div className="flex w-full flex-row items-start justify-between">
                <div className="flex items-start justify-start">
                  {React.cloneElement(feature.icon, {
                    className: selectedFeatures[idx]
                      ? 'text-xl text-primary sm:text-2xl'
                      : 'text-xl text-[#a8a8b3] sm:text-2xl',
                  })}
                </div>
                <div className="relative h-4 w-4 sm:h-5 sm:w-5">
                  <input
                    type="checkbox"
                    checked={selectedFeatures[idx]}
                    onChange={() => toggleFeature(idx)}
                    className="h-4 w-4 appearance-none rounded border border-gray-300 bg-white transition-all duration-150 checked:border-primary checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/30 sm:h-5 sm:w-5"
                  />
                  {selectedFeatures[idx] && (
                    <FiCheck className="pointer-events-none absolute left-0 top-0 h-4 w-4 text-white sm:h-5 sm:w-5" />
                  )}
                </div>
              </div>
              <p
                className={`mt-1 text-xs font-normal sm:text-sm ${
                  selectedFeatures[idx]
                    ? 'font-medium text-primary'
                    : 'text-[#86868e]'
                } transition-colors duration-200`}
              >
                {feature.name}
              </p>
            </div>
          ))}
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary bg-primary py-2 text-sm font-semibold text-white shadow-inner shadow-white/[.6] sm:gap-3 sm:py-3 sm:text-base"
        onClick={()=>{router.push('/signup')}}>
          Try for free <GoArrowRight className="text-lg sm:text-2xl" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-[600px] w-full overflow-visible bg-gradient-to-b from-white via-primary/[0.2] to-primary md:mt-10 md:min-h-[1250px] xl:min-h-[1400px]">
      {/* Hero content - MORE PADDING at bottom to prevent overlap */}
      <div className="relative z-20 mx-auto flex w-full flex-col items-center justify-center gap-4 px-4 text-center sm:px-6 sm:pb-32 md:gap-5 md:pt-10">
        <div className="flex flex-col items-center justify-center space-y-3 md:space-y-4">
          <h1 className="pt-32 font-Pangea text-3xl font-bold text-black sm:text-4xl md:pt-20 md:text-5xl lg:text-6xl">
            Smart AI for sales and support on
          </h1>
          <ContainerTextFlip />
        </div>
        <p className="max-w-xl text-base text-[#7d7d8a] md:max-w-2xl md:text-lg">
          Smarter Customer Support, Powered by AI With WhatsEase, engage
          customers instantly across all channels — securely and effortlessly.
        </p>
        <button className="hover:bg-primary-dark mt-2 rounded-xl border border-primary/[0.1] bg-primary px-5 py-2.5 font-sans text-base font-medium text-white shadow-inner shadow-white/[0.5] transition-all duration-300 hover:scale-95 sm:mt-4 sm:px-6 sm:py-3 md:text-xl"
         onClick={()=>{router.push('/signup')}}>
          Get Started
        </button>
      </div>

      {/* White background for desktop layout */}
      <div className="absolute left-0 right-0 z-0 hidden h-[45vh] bg-white md:bottom-0 md:block"></div>

      {/* DESKTOP LAYOUT (hidden on smaller screens) */}
      <div className="absolute -bottom-[10vh] left-1/2 z-10 hidden w-full max-w-6xl -translate-x-1/2 transform px-4 sm:px-6 md:block xl:bottom-[10vh]">
        <div className="relative mx-auto rounded-2xl border border-white bg-white/[0.5] px-1 py-3 backdrop-blur-xl sm:p-3">
          {/* Responsive image container */}
          <div className="relative mx-auto aspect-video w-full max-w-xs overflow-hidden rounded-xl px-3 sm:max-w-md md:max-w-full">
            <Image
              src="/Inbox.jpg"
              alt="WhatsApp dashboard"
              fill
              className="object-center"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/6 bg-gradient-to-t from-white/[0.8] to-white/[0.5]"></div>
          </div>

          {/* Feature selection card for desktop - overlapping the image */}
          <div className="absolute -right-3 -top-3 z-20 hidden sm:-right-5 sm:-top-5 md:-right-16 md:-top-16 md:flex">
            <FeatureSelectionCard />
          </div>
        </div>
        {/* Companies marquee section */}
        <Marquee />
      </div>

      {/* MOBILE IMAGE AT BOTTOM, 2/3 VISIBLE */}
      <div className="md:hidden">
        <div className="absolute bottom-0 left-1/2 z-10 w-full max-w-[320px] -translate-x-1/2 translate-y-1/4">
          <div className="mt-20 h-[220px] w-full rounded-lg border border-white/50 bg-white/[0.5] shadow-lg backdrop-blur-3xl">
            <div className="aspect-video h-[90%] w-[90%] overflow-hidden rounded-lg shadow-sm">
              <Image
                src="/Inbox.jpg"
                alt="WhatsApp dashboard"
                fill
                className="h-[90%] w-[90%] rounded-lg object-fill object-center p-1"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Extra space at the bottom for desktop layout */}
      <div className="hidden h-[35vh] w-full md:block"></div>
    </div>
  );
};

export default Landing;
