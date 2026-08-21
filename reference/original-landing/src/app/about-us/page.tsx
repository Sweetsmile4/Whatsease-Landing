'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageTemplate from '@/app/components/PageTemplate';
import { CheckIcon } from '@heroicons/react/24/solid';
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';

// Removed metadata export because it's not allowed in a "use client" component.

const team = [
  {
    name: 'Anubhav Chaturvedi',
    role: 'Founder & CEO',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop',
    bio: 'Anubhav has over 15 years of experience in SaaS and AI. Previously led product at Microsoft.',
  },
  {
    name: 'Aditya Singh',
    role: 'CTO',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    bio: 'Expert in AI and natural language processing with previous experience at Google AI.',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Product',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    bio: 'Product visionary with deep expertise in customer engagement technologies.',
  },
  {
    name: 'Raj Patel',
    role: 'VP of Sales',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'Sales leader with 10+ years experience scaling B2B SaaS companies.',
  },
];

const values = [
  {
    title: 'Customer Obsession',
    description:
      'We start with the customer and work backwards. We work vigorously to earn and keep customer trust.',
  },
  {
    title: 'Innovation',
    description:
      'We push boundaries to create solutions that surprise and delight our customers.',
  },
  {
    title: 'Integrity',
    description:
      'We are transparent, honest, and ethical in all our interactions.',
  },
  {
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standards and continuously improve.',
  },
];

const timeline = [
  {
    year: '2018',
    title: 'Founded',
    description:
      'WhatsEase was founded with a vision to transform business messaging.',
  },
  {
    year: '2019',
    title: 'First Product Launch',
    description: 'Launched our WhatsApp Business API integration solution.',
  },
  {
    year: '2021',
    title: 'AI Integration',
    description: 'Introduced AI-powered chatbots and analytics.',
  },
  {
    year: '2022',
    title: 'Series A Funding',
    description: 'Raised $15M to accelerate product development and expansion.',
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Opened offices in Europe and Southeast Asia.',
  },
];

export default function AboutUsPage() {
  // Add a ref for the line element
  const lineRef = useRef(null);
  const [isLineVisible, setIsLineVisible] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Add intersection observer logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        console.log('Line visibility:', entry.isIntersecting);
        setIsLineVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }, // Trigger when 20% of the element is visible
    );

    if (lineRef.current) {
      console.log('Line ref attached');
      observer.observe(lineRef.current);
    } else {
      console.log('Line ref not found');
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://whatsease.in/continue');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Add these refs and state
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);
  const para4Ref = useRef(null);
  const [visibleElements, setVisibleElements] = useState({
    para1: false,
    para2: false,
    para3: false,
    para4: false,
  });

  // Add another useEffect for paragraphs
  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const paragraphObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setVisibleElements((prev) => ({ ...prev, [id]: true }));
        }
      });
    }, observerOptions);

    if (para1Ref.current) paragraphObserver.observe(para1Ref.current);
    if (para2Ref.current) paragraphObserver.observe(para2Ref.current);
    if (para3Ref.current) paragraphObserver.observe(para3Ref.current);
    if (para4Ref.current) paragraphObserver.observe(para4Ref.current);

    return () => {
      if (para1Ref.current) paragraphObserver.unobserve(para1Ref.current);
      if (para2Ref.current) paragraphObserver.unobserve(para2Ref.current);
      if (para3Ref.current) paragraphObserver.unobserve(para3Ref.current);
      if (para4Ref.current) paragraphObserver.unobserve(para4Ref.current);
    };
  }, []);

  const cards = [
    {
      title: 'Customer Obsession',
      description:
        'We start with the customer and work backwards. We work vigorously to earn and keep customer trust.',
      Image: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 shrink-0 px-1 md:h-20 md:w-20"
        >
          <path
            d="M23.3899 75.5184C22.931 75.5184 22.4854 75.2808 22.2394 74.8584C21.8736 74.2248 22.0864 73.4196 22.7182 73.0567L36.0784 65.3547C36.7168 64.9851 37.5281 65.2029 37.8939 65.8299C38.2596 66.4569 38.0468 67.2686 37.4151 67.6316L24.0549 75.3336C23.8421 75.4524 23.616 75.5118 23.3899 75.5118V75.5184Z"
            fill="#373B42"
          ></path>
          <path
            d="M10.3098 68.6409C9.85091 68.6409 9.40535 68.4033 9.15929 67.9809C8.79353 67.3474 9.00634 66.5422 9.6381 66.1792L22.9983 58.4773C23.6367 58.1077 24.4481 58.3255 24.8138 58.9525C25.1796 59.5794 24.9668 60.3912 24.335 60.7542L10.9748 68.4561C10.762 68.5749 10.5359 68.6343 10.3098 68.6343V68.6409Z"
            fill="#373B42"
          ></path>
          <path
            d="M38.9377 41.3117L38.8579 68.087L15.3828 54.6366L15.456 27.8613L38.9377 41.3117Z"
            fill="white"
            stroke="#373B42"
            stroke-width="0.695486"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M38.9372 41.3117L61.6476 28.2178L61.5678 54.9865L38.8574 68.087L38.9372 41.3117Z"
            fill="url(#paint0_linear_2174_15477)"
            stroke="#373B42"
            stroke-width="0.695486"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15.4551 27.8613L38.1654 14.7607L61.6472 28.2177L38.9369 41.3116L15.4551 27.8613Z"
            fill="white"
            stroke="#373B42"
            stroke-width="0.695486"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M41.4984 11.2957C40.7934 11.0911 40.0553 11.487 39.8491 12.1866L37.2289 20.9775L26.8813 15.0443L29.5812 5.97623C29.7874 5.27665 29.3884 4.54408 28.6835 4.33949C27.9785 4.13489 27.2404 4.53088 27.0342 5.23046L19.5195 30.4812C19.473 30.5934 19.4331 30.7056 19.4198 30.8178L8.62652 67.0506C8.42036 67.7501 8.81937 68.4827 9.52429 68.6873C9.65065 68.7269 9.777 68.7401 9.90335 68.7401C10.4753 68.7401 11.0073 68.3705 11.1802 67.7963L12.5102 63.3349L22.8579 69.2681L21.4481 74.0067C21.2419 74.7063 21.6409 75.4389 22.3458 75.6435C22.4722 75.6831 22.5985 75.6963 22.7249 75.6963C23.2968 75.6963 23.8288 75.3267 24.0017 74.7525L42.3961 12.939C42.6023 12.2394 42.2033 11.5068 41.4984 11.3023V11.2957ZM36.4509 23.5844L34.908 28.7653L24.5603 22.8321L26.1032 17.6512L36.4509 23.5844ZM32.6603 36.3154L22.3126 30.3822L23.7823 25.4324L34.13 31.3656L32.6603 36.3088V36.3154ZM30.4125 43.8656L20.0648 37.9324L21.5345 32.9825L31.8822 38.9157L30.4125 43.8656ZM28.0982 51.6533L17.7506 45.7201L19.2934 40.5393L29.6411 46.4725L28.0982 51.6533ZM25.8505 59.2034L15.5028 53.2702L16.9725 48.327L27.3202 54.2602L25.8505 59.21V59.2034ZM13.2816 60.728L14.7247 55.8772L25.0724 61.8103L23.6293 66.6612L13.2816 60.728Z"
            fill="#1FB6FF"
            stroke="#373B42"
            stroke-width="0.695486"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M38.8574 68.0866H48.1943L70.0002 55.745L61.6476 50.5972L61.5678 54.986L38.8574 68.0866Z"
            fill="#373B42"
          ></path>
          <path
            d="M40.2148 28.2176L48.4744 18.4565L48.5542 32.9958L40.2148 28.2176Z"
            fill="white"
          ></path>
          <path
            d="M40.2148 28.2176L48.4744 18.4565L48.5542 32.9958L40.2148 28.2176Z"
            stroke="#373B42"
            stroke-width="0.695486"
            stroke-linejoin="round"
          ></path>
          <path
            d="M56.8874 28.2176L48.6345 18.4565L48.5547 32.9959L56.8874 28.2176Z"
            fill="url(#paint1_linear_2174_15477)"
          ></path>
          <path
            d="M56.8874 28.2176L48.6345 18.4565L48.5547 32.9959L56.8874 28.2176Z"
            stroke="#373B42"
            stroke-width="0.695486"
            stroke-linejoin="round"
          ></path>
          <path
            d="M48.5547 32.9957H53.3894L61.6489 28.2175L52.6578 23.2148L56.8874 28.2175L48.5547 32.9957Z"
            fill="#373B42"
            stroke="#373B42"
            stroke-width="0.695486"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M55.1179 71.167C55.1249 68.6556 51.5906 66.61 47.2236 66.5979C42.8567 66.5858 39.3109 68.6118 39.3038 71.1232C39.2967 73.6345 42.8311 75.6802 47.198 75.6923C51.565 75.7044 55.1108 73.6784 55.1179 71.167Z"
            fill="#373B42"
          ></path>
          <path
            d="M43.3211 75.3071C47.6881 75.3071 51.2282 71.7938 51.2282 67.4599C51.2282 63.1261 47.6881 59.6128 43.3211 59.6128C38.9542 59.6128 35.4141 63.1261 35.4141 67.4599C35.4141 71.7938 38.9542 75.3071 43.3211 75.3071Z"
            fill="url(#paint2_radial_2174_15477)"
            stroke="#373B42"
            stroke-width="0.695486"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_2174_15477"
              x1="38.8574"
              y1="48.1491"
              x2="61.6476"
              y2="48.1491"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEC4CD"></stop>
              <stop offset="1" stop-color="#F0F2F5"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_2174_15477"
              x1="48.5547"
              y1="25.7295"
              x2="56.8874"
              y2="25.7295"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEC4CD"></stop>
              <stop offset="1" stop-color="#F0F2F5"></stop>
            </linearGradient>
            <radialGradient
              id="paint2_radial_2174_15477"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(39.9761 62.6091) scale(12.6021 12.5066)"
            >
              <stop stop-color="white"></stop>
              <stop offset="0.44" stop-color="#F8F9FC"></stop>
              <stop offset="0.78" stop-color="#CFD3DA"></stop>
              <stop offset="1" stop-color="#BEC4CD"></stop>
            </radialGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description:
        'We push boundaries to create solutions that surprise and delight our customers.',
      Image: (
        <svg
          width="64"
          height="60"
          viewBox="0 0 64 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 shrink-0 px-1 md:h-20 md:w-20"
        >
          <g id="Graphic">
            <path
              id="Vector"
              d="M61.6165 37.5842C64.4926 39.2534 64.5143 41.9605 61.6525 43.6297L37.2735 57.8906C34.419 59.5599 29.7767 59.5599 26.9006 57.8906L2.38464 43.6369C-0.49153 41.9677 -0.513155 39.2607 2.3486 37.5915L26.7276 23.3305C29.5821 21.6613 34.2244 21.6613 37.1005 23.3305L61.6309 37.5915L61.6165 37.5842Z"
              fill="#373B42"
            ></path>
            <path
              id="Vector_2"
              d="M38.3267 17.8878C38.6452 17.8878 38.9034 17.6278 38.9034 17.3072C38.9034 16.9865 38.6452 16.7266 38.3267 16.7266C38.0082 16.7266 37.75 16.9865 37.75 17.3072C37.75 17.6278 38.0082 17.8878 38.3267 17.8878Z"
              fill="#1FB6FF"
            ></path>
            <path
              id="Vector_3"
              d="M29.1001 43.1724C29.4186 43.1724 29.6768 42.9125 29.6768 42.5918C29.6768 42.2712 29.4186 42.0112 29.1001 42.0112C28.7816 42.0112 28.5234 42.2712 28.5234 42.5918C28.5234 42.9125 28.7816 43.1724 29.1001 43.1724Z"
              fill="white"
            ></path>
            <path
              id="Vector_4"
              d="M47.9126 36.0967C48.2311 36.0967 48.4893 35.8368 48.4893 35.5161C48.4893 35.1955 48.2311 34.9355 47.9126 34.9355C47.5941 34.9355 47.3359 35.1955 47.3359 35.5161C47.3359 35.8368 47.5941 36.0967 47.9126 36.0967Z"
              fill="white"
            ></path>
            <path
              id="Vector_5"
              d="M16.925 46.2644L13.5298 35.2548L2.86133 31.0818L13.7965 27.6708L17.9414 16.9297L21.3294 27.9393L32.0051 32.1123L21.0699 35.5233L16.925 46.2644Z"
              fill="white"
              stroke="#373B42"
              stroke-width="0.77853"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              id="Vector_6"
              d="M42.0895 49.6754L41.0443 46.2717L37.75 44.9871L41.1236 43.9275L42.4067 40.6108L43.4519 44.0146L46.7461 45.2992L43.3726 46.3588L42.0895 49.6754Z"
              fill="white"
            ></path>
            <path
              id="Vector_7"
              d="M45.4619 9.63588L44.4167 6.23212L41.1152 4.94029L44.496 3.88796L45.7719 0.571289L46.8243 3.97504L50.1186 5.25962L46.7378 6.31195L45.4619 9.63588Z"
              fill="#1FB6FF"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      title: 'Integrity',
      description:
        'We are transparent, honest, and ethical in all our interactions.',
      Image: (
        <svg
          width="70"
          height="64"
          viewBox="0 0 70 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 shrink-0 px-1 md:h-20 md:w-20"
        >
          <g id="Graphic">
            <path
              id="Vector"
              d="M35.5684 62.6273H45.6697L69.2852 49.0827L60.2422 43.4331L55.9871 45.8088L35.5684 62.6273Z"
              fill="#373B42"
              stroke="#373B42"
              stroke-width="1.01053"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <g id="Group">
              <g id="Group_2">
                <path
                  id="Vector_2"
                  d="M0.714844 42.6583L25.2951 28.2808L60.1208 48.3369L35.5333 62.7144L0.714844 42.6583Z"
                  fill="url(#paint0_linear_2980_3542)"
                  stroke="#373B42"
                  stroke-width="0.757895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  id="Vector_3"
                  d="M0.714844 40.2028L25.2951 25.8325L60.1208 45.8814L35.5333 60.2589L0.714844 40.2028Z"
                  fill="url(#paint1_linear_2980_3542)"
                  stroke="#373B42"
                  stroke-width="0.757895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  id="Vector_4"
                  d="M0.714844 37.7472L25.2951 23.377L60.1208 43.4258L35.5333 57.8033L0.714844 37.7472Z"
                  fill="url(#paint2_linear_2980_3542)"
                  stroke="#373B42"
                  stroke-width="0.757895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  id="Vector_5"
                  d="M0.714844 35.2921L25.2951 20.9219L60.1208 40.978L35.5333 55.3482L0.714844 35.2921Z"
                  fill="url(#paint3_linear_2980_3542)"
                  stroke="#373B42"
                  stroke-width="0.757895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  id="Vector_6"
                  d="M0.714844 32.8366L25.2951 18.4663L60.1208 38.5224L35.5333 52.8927L0.714844 32.8366Z"
                  fill="url(#paint4_linear_2980_3542)"
                  stroke="#373B42"
                  stroke-width="0.757895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  id="Vector_7"
                  d="M0.714844 30.3883L25.2951 16.0107L60.1208 36.0668L35.5333 50.4371L0.714844 30.3883Z"
                  fill="url(#paint5_linear_2980_3542)"
                  stroke="#373B42"
                  stroke-width="0.757895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  id="Vector_8"
                  d="M0.714844 27.9327L25.2951 13.5552L60.1208 33.6113L35.5333 47.9815L0.714844 27.9327Z"
                  fill="url(#paint6_linear_2980_3542)"
                  stroke="#373B42"
                  stroke-width="0.757895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  id="Vector_9"
                  d="M0.714844 25.4776L25.2951 11.1001L60.1208 31.1562L35.5333 45.5265L0.714844 25.4776Z"
                  fill="url(#paint7_linear_2980_3542)"
                  stroke="#373B42"
                  stroke-width="0.757895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  id="Vector_10"
                  d="M0.714844 23.022L25.2951 8.64453L60.1208 28.7006L35.5333 43.0781L0.714844 23.022Z"
                  fill="url(#paint8_linear_2980_3542)"
                  stroke="#373B42"
                  stroke-width="0.757895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  id="Vector_11"
                  d="M0.714844 20.5665L25.2951 6.18896L60.1208 26.2451L35.5333 40.6226L0.714844 20.5665Z"
                  fill="url(#paint9_linear_2980_3542)"
                  stroke="#373B42"
                  stroke-width="0.757895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  id="Vector_12"
                  d="M0.714844 18.1114L25.2951 3.73389L60.1208 23.79L35.5333 38.1675L0.714844 18.1114Z"
                  fill="url(#paint10_linear_2980_3542)"
                  stroke="#373B42"
                  stroke-width="0.757895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  id="Vector_13"
                  d="M0.714844 15.6559L25.2951 1.28564L60.1208 21.3345L35.5333 35.712L0.714844 15.6559Z"
                  fill="url(#paint11_linear_2980_3542)"
                  stroke="#373B42"
                  stroke-width="0.757895"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
              <path
                id="Vector_14"
                d="M25.2949 1.28564L30.414 18.4952L60.1206 21.3345L30.414 18.4952"
                stroke="#373B42"
                stroke-width="0.757895"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
            <g id="Group_3">
              <path
                id="Vector_15"
                d="M36.3242 14.2686C32.6708 12.5757 27.0646 13.0917 23.8071 15.4274C20.5496 17.763 20.8645 21.0219 24.518 22.7148C28.1714 24.4076 33.7776 23.8916 37.0351 21.556C40.2927 19.2204 39.9777 15.9615 36.3332 14.2686H36.3242Z"
                fill="#1FB6FF"
              ></path>
              <path
                id="Vector_16"
                d="M25.0215 17.1201C23.9776 18.5957 24.5356 20.2705 26.5963 21.2301C28.423 22.081 30.9426 22.1444 33.0753 21.5197"
                stroke="#373B42"
                stroke-width="0.757895"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                id="Vector_17"
                d="M34.8578 18.4327C34.3179 18.1792 33.49 18.2607 33.0131 18.6047C32.5361 18.9487 32.5811 19.4285 33.1211 19.682C33.661 19.9355 34.4889 19.854 34.9658 19.51C35.4427 19.166 35.3977 18.6862 34.8578 18.4327Z"
                fill="#373B42"
              ></path>
              <path
                id="Vector_18"
                d="M29.9906 16.2237C29.4507 15.9703 28.6228 16.0517 28.1459 16.3957C27.669 16.7397 27.714 17.2195 28.2539 17.473C28.7938 17.7265 29.6217 17.645 30.0986 17.301C30.5755 16.957 30.5305 16.4772 29.9906 16.2237Z"
                fill="#373B42"
              ></path>
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2980_3542"
              x1="37.0885"
              y1="58.919"
              x2="32.349"
              y2="49.4967"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEC4CD"></stop>
              <stop offset="1" stop-color="#F0F2F5"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_2980_3542"
              x1="0.44125"
              y1="56.4635"
              x2="32.4244"
              y2="47.1221"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEC4CD"></stop>
              <stop offset="1" stop-color="#F0F2F5"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_2980_3542"
              x1="0.441249"
              y1="54.0079"
              x2="32.4244"
              y2="44.6737"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEC4CD"></stop>
              <stop offset="1" stop-color="#F0F2F5"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_2980_3542"
              x1="0.441249"
              y1="51.5529"
              x2="32.4244"
              y2="42.2186"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEC4CD"></stop>
              <stop offset="1" stop-color="#F0F2F5"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_2980_3542"
              x1="0.44125"
              y1="49.1045"
              x2="1.16986"
              y2="39.6602"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEC4CD"></stop>
              <stop offset="1" stop-color="#F0F2F5"></stop>
            </linearGradient>
            <linearGradient
              id="paint5_linear_2980_3542"
              x1="0.44125"
              y1="46.649"
              x2="1.16986"
              y2="37.2047"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEC4CD"></stop>
              <stop offset="1" stop-color="#F0F2F5"></stop>
            </linearGradient>
            <linearGradient
              id="paint6_linear_2980_3542"
              x1="0.44125"
              y1="44.1934"
              x2="32.4244"
              y2="34.852"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEC4CD"></stop>
              <stop offset="1" stop-color="#F0F2F5"></stop>
            </linearGradient>
            <linearGradient
              id="paint7_linear_2980_3542"
              x1="0.44125"
              y1="41.7383"
              x2="32.4244"
              y2="32.3969"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEC4CD"></stop>
              <stop offset="1" stop-color="#F0F2F5"></stop>
            </linearGradient>
            <linearGradient
              id="paint8_linear_2980_3542"
              x1="0.44125"
              y1="39.2828"
              x2="32.4244"
              y2="29.9414"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEC4CD"></stop>
              <stop offset="1" stop-color="#F0F2F5"></stop>
            </linearGradient>
            <linearGradient
              id="paint9_linear_2980_3542"
              x1="0.44125"
              y1="36.8272"
              x2="1.16986"
              y2="27.3829"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEC4CD"></stop>
              <stop offset="1" stop-color="#F0F2F5"></stop>
            </linearGradient>
            <linearGradient
              id="paint10_linear_2980_3542"
              x1="0.44125"
              y1="34.3721"
              x2="1.16986"
              y2="24.9278"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEC4CD"></stop>
              <stop offset="1" stop-color="#F0F2F5"></stop>
            </linearGradient>
            <linearGradient
              id="paint11_linear_2980_3542"
              x1="-18.2783"
              y1="18.3938"
              x2="32.398"
              y2="22.4234"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BEC4CD"></stop>
              <stop offset="0.690953" stop-color="#F0F2F5"></stop>
              <stop offset="1" stop-color="#FBFCFD"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div
        className={`flex h-screen w-full items-center justify-center bg-[#0b0c17] text-white`}
      >
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-white"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#0b0c17]">
        <main className="relative flex min-h-screen w-full max-w-6xl flex-col items-center justify-center">
          {/* Radial gradient overlay at the top */}
          <div
            className="absolute left-0 top-0 h-[300px] w-full"
            style={{
              background:
                'radial-gradient(circle at center top, #1a1b2b 20%, #0b0c17 70%)',
              zIndex: 0,
            }}
          />

          <Navbar darkMode />
          {/* Content with navbar */}
          <div className="relative z-10 w-full pt-20 md:pt-28">
            {/* About Us Content */}
            <div className="container mx-auto px-4 py-12">
              <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Creating authentic relationships between brands and individuals
                via chat.
              </h1>

              <div className="flex w-full items-center justify-start xl:pt-10">
                <Image
                  src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="WhatsEase Logo"
                  width={1200}
                  height={700}
                  className="mb-8 rounded-xl"
                />
              </div>

              {/* Our history section */}
              <section className="flex w-full flex-col items-center justify-center px-4 py-10 md:px-20">
                <h2 className="mb-4 text-center text-2xl font-bold text-white md:text-3xl">
                  OUR HISTORY
                </h2>
                <p className="text-4xl text-white/[0.2]">.</p>

                {/* Simpler vertical line that's always visible but animates on scroll */}
                <div className="relative mt-2 h-[250px] w-[1px] rounded-b-full bg-gradient-to-b from-white/10 to-white/70">
                  {/* Animated overlay that grows from bottom to top */}
                  <div
                    className="duration-1500 absolute bottom-0 left-0 w-full bg-white transition-all ease-out"
                    style={{
                      height: isLineVisible ? '100%' : '0%',
                      opacity: isLineVisible ? 1 : 0,
                    }}
                  ></div>
                </div>

                {/* Always visible paragraphs that fade in when line is visible */}
                <div className="mt-10 max-w-3xl">
                  <p className="mb-6 text-center text-lg text-white">
                    The inspiration for WhatsEase came from recognizing a
                    fundamental gap between how people prefer to communicate and
                    how businesses operate.
                  </p>

                  <p className="mb-6 text-center text-lg text-white">
                    While organizing a major tech conference, Anubhav (Founder &
                    CEO) faced enormous challenges managing registrations,
                    sending reminders, and coordinating with attendees. Despite
                    spending thousands on fancy tools, most communication ended
                    up happening over WhatsApp anyway – but in a chaotic, manual
                    way that consumed hours of valuable time.
                  </p>

                  <p className="mb-6 text-center text-lg text-white">
                    WhatsApp is where people already spend their time – with
                    over 2 billion users globally, it&apos;s the world&apos;s
                    most popular messaging app. Yet most businesses struggle to
                    leverage it effectively for operations. This realization
                    sparked our vision to build a platform that would transform
                    WhatsApp from a simple chat app into a powerful business
                    automation tool.
                  </p>

                  <p className="mb-6 text-center text-lg text-white">
                    This idea evolved into WhatsEase – a comprehensive no-code
                    platform that empowers businesses to automate customer
                    interactions through WhatsApp. Our mission is to help brands
                    create seamless, personalized customer experiences at scale,
                    without writing a single line of code.
                  </p>
                </div>
              </section>

              <div className="my-20 flex w-full flex-row items-center justify-center md:px-20">
                <h1 className="text-center font-Pangea text-2xl font-semibold text-white">
                  &quot;We empower businesses and individuals to communicate
                  more effectively by equipping them with the right tools.&quot;
                </h1>
              </div>
            </div>
          </div>
        </main>
        <section className="flex min-h-screen w-full flex-col items-center justify-start border-y border-white/[0.1] bg-[#020210]">
          <div className="flex h-full w-full max-w-7xl flex-col items-start justify-start px-4 py-32 md:px-10 lg:px-20">
            <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-5xl">
              3 reasons for <br /> WhatsEase
            </h1>
            <p className="font-figtreeNormal text-xl text-[#a8a8b3]">
              At WhatsEase you get everything you need to grow online. We are by{' '}
              <br />
              your side to help you succeed with WhatsEase!
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start rounded-lg border border-white/[0.1] bg-[#11111e] p-6"
                >
                  <div className="mb-4 flex items-center justify-center">
                    {card.Image}
                  </div>
                  <h2 className="mb-2 mt-10 font-Pangea text-lg font-semibold text-white md:text-2xl">
                    {card.title}
                  </h2>
                  <p className="md:text-md font-figtreeRegular text-sm text-[#a8a8b3]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <Marquee darkMode />

       
          </div>
        </section>
      </div>
    </>
  );
}
