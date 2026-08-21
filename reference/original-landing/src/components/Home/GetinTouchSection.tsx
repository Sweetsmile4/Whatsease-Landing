'use client';
import React, { useState } from 'react';
import { InteractiveHoverButton } from '../ui/InteractiveHoverButton';

function GetinTouchSection() {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="md:mt-20 md:py-40 lg:mt-[150px]">
        <div className="flex flex-col gap-x-6 lg:grid lg:grid-cols-2 lg:gap-x-10">
          {/* Left side */}
          <div className="relative mx-auto h-[300px] w-full max-w-sm md:h-[400px] md:max-w-md lg:h-[450px] lg:w-[450px]">
            <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden sm:overflow-auto md:scale-[1.5]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 648 648"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <g filter="url(#filter0_f_368_1741)">
                  <circle
                    cx="324"
                    cy="324"
                    r="204"
                    fill="#00D426"
                    fillOpacity="0.32"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_368_1741"
                    x="0"
                    y="0"
                    width="648"
                    height="648"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="60"
                      result="effect1_foregroundBlur_368_1741"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2">
              <h1 className="pt-sans-bold text-center text-5xl text-white sm:text-6xl md:text-7xl lg:text-9xl">
                <i> let's </i>
              </h1>
              <h1 className="pt-sans-bold text-center text-5xl text-white sm:text-6xl md:text-7xl lg:text-9xl">
                {' '}
                <i> get in </i>
              </h1>
              <h1 className="pt-sans-bold text-center text-5xl text-[#04B851] sm:text-6xl md:text-7xl lg:text-9xl">
                touch.
              </h1>
            </div>
          </div>

          {/* Right side with form */}
          <div className="relative mt-8 px-4 sm:px-6 lg:mt-0 lg:px-0">
            <form className="mx-auto w-full max-w-sm md:max-w-md lg:mx-0 lg:w-[450px]">
              <div>
                <input
                  className="pt-sans-bold w-full border-b-[4px] border-green-700 py-4 text-lg transition-all duration-300 focus:border-green-900 focus:outline-none md:text-xl"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={contactData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mt-5">
                <input
                  className="pt-sans-bold w-full border-b-[4px] border-green-700 py-4 text-lg transition-all duration-300 focus:border-green-900 focus:outline-none md:text-xl"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={contactData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mt-5">
                <input
                  className="pt-sans-bold w-full border-b-[4px] border-green-700 py-4 text-lg transition-all duration-300 focus:border-green-900 focus:outline-none md:text-xl"
                  type="text"
                  placeholder="Your Message"
                  name="message"
                  value={contactData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex justify-center lg:justify-start">
                <InteractiveHoverButton type="submit" className="mt-8">
                  Submit
                </InteractiveHoverButton>
              </div>
              {submitted && (
                <p className="mt-4 text-center text-green-600">
                  Thank you! Your message has been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetinTouchSection;
