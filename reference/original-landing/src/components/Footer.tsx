import React from 'react'



function Footer() {
  return (
    <div>
      <div className='bg-[#04B851]'>
        <div className='lg:px-20 md:px-12 sm:px-6 px-3 py-12 md:py-24'>
          {/* Main content grid - made responsive */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Left column */}
            <div className='w-full md:mx-0 mx-auto max-w-[410px]'>
              <div className=''>
                <img className='w-full' src='/svg/wpimagefooter.svg' alt='Whatsease logo'/>
              </div>
              <div className=''>
                <h1 className='text-2xl sm:text-3xl md:text-4xl pt-sans-bold text-center mt-5 text-white'>
                  easily automate your next event!
                </h1>
              </div>
            </div>
            
            {/* Right column */}
            <div className=''>
              <div className='w-full max-w-[480px] md:mx-0 mx-auto mt-8 md:mt-[50px]'>
                <div className=''>
                  <h1 className='pt-sans-bold text-2xl md:text-3xl text-white'>CONTACT OUR TEAM AT:</h1>
                  <div className='flex flex-row items-center gap-x-4 mt-5'>
                    <div className='w-[36px] md:w-[48px]'>
                      <img className='w-full' src='/svg/call.svg' alt='Phone icon'/>
                    </div>
                    <h1 className='pt-sans-bold text-xl md:text-2xl text-white'>+91 - 95104 68956</h1>
                  </div>
                  <div className='flex flex-row items-center gap-x-4 mt-5'>
                    <div className='w-[36px] md:w-[48px]'>
                      <img className='w-full' src='/svg/connect.svg' alt='Email icon'/>
                    </div>
                    <h1 className='pt-sans-bold text-base sm:text-xl md:text-2xl text-white overflow-hidden text-ellipsis'>
                    help@whatsease.in
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom section */}
          <div className='mt-12 md:mt-16'>
            <div className='flex flex-col md:flex-row md:justify-end gap-y-4 md:gap-y-0 md:gap-x-3 items-center'>
            <h1 className="text-xl md:text-2xl font-sans font-bold text-white order-2 md:order-1">
  © 2025 WhatsEase.™ All rights reserved.
</h1>

              <div className='hidden md:block w-[5px] rounded-full h-[50px] bg-white order-2'></div>
              <h1 className='text-xl md:text-2xl pt-sans-bold text-white order-1 md:order-3'>JOIN US</h1>
              <div className='flex items-center gap-x-4 order-3 md:order-4'>
                <div className='w-[36px] md:w-[48px]'>
                  <a href='https://www.instagram.com/whatsease.in?igsh=cHJicHJucHBua3pl' target='_blank' rel="noreferrer">
                    <img src='/svg/insta.svg' alt='Instagram icon'/>
                  </a>    
                </div>
              
                <div className='w-[36px] md:w-[48px]'>
                  <a href='https://www.linkedin.com/company/whatsease/' target='_blank' rel="noreferrer">
                    <img src='/svg/linkdin.svg' alt='LinkedIn icon'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer