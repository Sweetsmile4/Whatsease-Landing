'use client';
import React from 'react';
import { InteractiveHoverButton } from '../ui/InteractiveHoverButton';

function Herosection() {
  return (
    <div className="pt-sans-bold px-4 pb-6 md:px-6 md:pb-0 lg:px-8">
      <div className="mt-12 flex flex-col items-center font-sans sm:mt-16 md:mt-20 lg:mt-[70px]">
        {/* Heading with responsive text sizes */}
        <h1 className="pt-sans-bold text-center text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          automate your
        </h1>

        <div className="pt-sans-bold relative flex flex-row items-center justify-between">
          {/* Rounded icons container with responsive positioning */}
          <div className="relative top-[35px] hidden w-[60px] sm:top-[45px] sm:w-[80px] md:top-[55px] md:block md:w-[100px] lg:top-[73px]">
            <img
              className="absolute right-0 top-[0px]"
              src="/svg/roundeicon1.svg"
              alt=""
            />
            <img
              className="absolute right-[2px] top-[0px]"
              src="/svg/roundicon2.svg"
              alt=""
            />
            <img
              className="absolute right-[10px] top-[0px] w-[40px] sm:right-[15px] sm:w-[50px] md:right-[20px] md:w-[60px] lg:w-[70px]"
              src="/svg/roundicon3.svg"
              alt=""
            />
          </div>

          {/* Responsive text for the emphasized part */}
          <h1 className="text-center text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <i className="text-center text-black">business</i>{' '}
            <span className="">
              via <br /> WhatsApp Smart solutions
            </span>
          </h1>
        </div>

        {/* Final heading line */}
        {/* <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white pb-3 text-center'>
          your time.
        </h1> */}

        {/* Responsive paragraph */}
        <p className="pt-sans-regular mt-3 px-4 text-center text-lg text-white sm:text-xl md:mt-5 md:w-1/2 md:text-xl">
          - Empower your business with seamless WhatsApp automation from
          customer engagement to streamlined operations, all in one platform
        </p>

        {/* Button container */}
        <div className="mt-4 sm:mt-5 md:mt-6">
          {/* Commented out original button */}
          {/* <div className="group md:w-[250px] flex justify-end gap-x-1">
            <div className="flex items-center justify-center border-white border-[3px] rounded-[20px] px-[20px] bg-transparent hover:bg-amber-950 transition-all duration-400 ease-in-out group-hover:pr-[20px] group-hover:pl-[30px] overflow-hidden relative">
              <p className="px-4 py-3 text-white group-hover:text-white transition-colors duration-300">Book Your Demo</p>
              
              <div className="w-[10px] h-[10px] rounded-full bg-white group-hover:opacity-0 group-hover:-translate-x-4 transition-all duration-400 absolute right-[20px]"></div>
              
              <div className="absolute right-[10px] opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400">
                <div className=''>
                <ArrowRightAltIcon sx={{color:'white'}}/>
                </div>
              
              </div>
            </div>
          </div> */}

          <InteractiveHoverButton
            onClick={() => {
              window.location.href = 'https://wa.link/r2hk09';
            }}
          >
            <p className="pt-sans-bold">Try Now</p>
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
