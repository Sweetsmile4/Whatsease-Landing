'use client';
import { InteractiveHoverButton } from '@/components/ui/InteractiveHoverButton';
import React from 'react';

function Herosection({ content }: { content: any }) {
  return (
    <div>
      <div className="mt-[30px] bg-[#04B851] px-4 sm:mt-[50px] sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Text content */}
          <div className="order-2 py-8 pt-0 md:col-span-7 md:py-0 lg:order-1">
            <div className="pt-sans-bold mt-[20px] md:mt-[30px]">
              <h1
                className="text-2xl text-white sm:text-3xl md:text-3xl lg:text-5xl"
                dangerouslySetInnerHTML={{ __html: content?.headingHtml }}
              />
            </div>

            <div className="mt-4 sm:mt-6 md:mt-8">
              <p className="pt-sans-regular text-base text-white sm:text-xl md:pe-[50px] md:text-2xl">
                {content?.description}
              </p>
            </div>

            <div className="mb-8 mt-6 sm:mt-8 md:mb-0">
              <InteractiveHoverButton
                onClick={() => {
                  window.location.href = 'https://wa.link/r2hk09';
                }}
              >
                <p>{content.buttonText}</p>
              </InteractiveHoverButton>
            </div>
          </div>

          {/* Image content */}
          <div className="relative order-1 md:col-span-5 lg:order-2">
            <div className="flex flex-row items-end">
              <div className="flex w-[500px] justify-end">
                <img
                  className="w-full object-cover md:mt-[100px] md:scale-150"
                  src={'/images/devicescreen2.png'}
                  alt="Hero Visual"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
