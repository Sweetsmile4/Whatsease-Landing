'use client'
import React from 'react'
import { InteractiveHoverButton } from '../ui/InteractiveHoverButton'

function BoostSection() {
  return (
    <div>
          <div className='bg-[#04B851] lg:p-10 md:p-4 p-3 rounded-3xl'>
           <div className='text-center'>
            <h1 className='text-black pt-sans-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl'><i> Boosted by WhatsEase. </i></h1>
            <h1 className='text-white pt-sans-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl mt-3'>10x+ Growth Stories from Real Events</h1>
            <p className='text-white mt-5 text-2xl pt-sans-regular pt-sans-regular md:w-2/3 mx-auto'>Discover how teams boost ROI by up to 11.6x using WhatsEase’s WhatsApp automation—streamlining bookings, driving engagement, and delivering impact.</p>
            <div className='md:mt-10 mt-3'>
              <InteractiveHoverButton onClick={() => { window.location.href = 'https://www.consultanubhav.com/book-a-call' }}>
                <p>Book Now</p>
              </InteractiveHoverButton>
            </div>
           </div>
           
      
           
          </div>
    </div>
  )
}

export default BoostSection
