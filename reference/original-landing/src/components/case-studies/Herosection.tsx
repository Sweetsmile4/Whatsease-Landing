'use client'
import React from 'react'
import { InteractiveHoverButton } from '../ui/InteractiveHoverButton'





function Herosection({ content}:{content:any}) {
  return (
    <div>
      <div className='bg-[#04B851] px-4 sm:px-6 md:px-8 mt-[30px] sm:mt-[50px]'>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Text content */}
          <div className="md:col-span-5 order-2 md:order-1 py-8 md:py-0">
            <div className="pt-sans-bold mt-[20px] md:mt-[30px]">
            <div
  className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl text-white"
  dangerouslySetInnerHTML={{ __html: content?.headingHtml }}
></div>

            </div>

            <div className="mt-4 sm:mt-6 md:mt-8">
              <p className="pt-sans-regular text-base sm:text-xl md:text-2xl text-white md:pe-[50px]">
                {content.description}
              </p>
            </div>

            <div className='mt-10'>
              <div className='flex flex-row md:space-x-10 space-x-2 md:justify-start justify-between'>
                {content.stats.map((item:any, index:any) => (
                  <div key={index} className='text-center'>
                    <h1 className='text-black pt-sans-bold md:text-3xl text-xl'>{item.value}</h1>
                    <h2 className='text-white pt-sans-normal md:text-xl text-md'>{item.label1}</h2>
                    <h2 className='text-white md:text-xl text-md'>{item.label2}</h2>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 mb-8 md:mb-0">
              <InteractiveHoverButton onClick={() => { window.location.href = 'https://wa.link/r2hk09' }}>
                <p>{content.buttonText}</p>
              </InteractiveHoverButton>
            </div>
          </div>

          {/* Image content */}
          <div className="md:col-span-7 order-1 md:order-2 relative">
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src={content.mainImage}
                  alt="Computer illustration"
                  className="w-full relative z-10 max-w-[400px] md:max-w-none  border-[4px] border-black md:rounded-[20px] rounded-[8px]"
                />
                <div className="absolute bottom-[-32px] sm:bottom-[-60px] md:bottom-[-92px] left-[-37px] sm:left-[-60px] md:left-[-92px] w-[80px] sm:w-[120px] md:w-auto">
                  <img src={content.cornerImage} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection
