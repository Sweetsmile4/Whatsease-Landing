'use client'
import React from 'react'
import { InteractiveHoverButton } from '../ui/InteractiveHoverButton'

function MoreThanJustSection() {
  const features = [
    {
      image: '/svg/comp/d2cCentric.svg',
      title: 'D2C-Centric Expertise',
      description:
        'Leverage tailored campaign playbooks designed specifically for D2C brands, backed by deep industry insights to drive seamless execution and higher customer engagement.',
    },
    {
      image: '/svg/comp/comprehensive.svg',
      title: 'Comprehensive Event Coverage',
      description:
        'From pre-event strategies to on-ground execution and post-event analytics, we cover it all with precision and dedication.',
    },
    {
      image: '/svg/comp/realtimeas.svg',
      title: 'Real-Time Assistance',
      description:
        'Stay on top of your event with live dashboards, immediate support, and agile adjustments that respond to real-time developments.',
    },
  ]

  return (
    <div className='px-4 py-10 md:px-10 lg:px-20'>
      <div className='text-center'>
        <h1 className='text-black pt-sans-bold text-3xl sm:text-4xl md:text-5xl'>
          <i>more than just support,,</i>
        </h1>
        <h1 className='pt-sans-bold text-[#04B851] text-3xl sm:text-4xl md:text-5xl mt-2'>
          we tailor solutions to empower your events
        </h1>
        <p className='w-full sm:w-3/4 md:w-1/2 mx-auto text-base sm:text-lg md:text-xl pt-sans-normal text-black mt-2'>
          At Whatsease, we don't just assist; we empower your events with tailored strategies and hands-on guidance to drive success.
        </p>
      </div>

      <div className='mt-10 md:mt-[50px]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5'>
          {features.map((feature, index) => (
            <div key={index} className='w-full max-w-[300px] mx-auto text-center'>
              <div className='sm:w-[250px] sm:h-[250px] w-[230px] h-[230px] mx-auto'>
                <img className='w-full h-full object-cover' src={feature.image} alt={feature.title} />
              </div>
              <div className='mt-5'>
                <h1 className='text-2xl pt-sans-bold'>{feature.title}</h1>
                <p className='pt-sans-regular text-base sm:text-lg md:text-xl mt-6'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-10'>
          <InteractiveHoverButton className='relative z-20' onClick={() => { window.location.href = 'https://wa.link/r2hk09' }}>
            <p>Book a Demo</p>
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  )
}

export default MoreThanJustSection
