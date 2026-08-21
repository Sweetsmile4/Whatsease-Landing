import React from 'react';

function SeamlessIntegration() {
  return (
    <div>
      <div className="bg-[#04B851] p-6 md:min-h-screen md:p-16">
        <div className="text-center">
          <h1 className="pt-sans-bold text-3xl text-black lg:text-4xl xl:text-5xl">
            {' '}
            <i> Seamless Integrations</i>
          </h1>
          <h1 className="pt-sans-bold mt-2 text-3xl text-white lg:text-5xl xl:text-6xl">
            Designed to Enhance Your Workflow
          </h1>
          <p className="text-md pt-sans-normal mx-auto mt-2 w-full text-white md:w-1/2 md:text-xl">
            Whatsease seamlessly connects with the tools you already trust,
            enhancing efficiency and streamlining event management at every
            stage.
          </p>
        </div>

        <div className="rounded-4xl relative mx-auto mt-[80px] bg-white shadow-2xl md:w-[90%] lg:w-[1100px]">
          <div className="absolute left-[-80px] top-[-70px] w-[85px]">
            <img className="w-full" src="/svg/comp/seamless.svg" alt="" />
          </div>
          <img src="/svg/all/seamless.svg" alt="" />
        </div>
      </div>

      {/* <div className='relative w-full md:flex justify-end bg-[#04B851] lg:pl-20 md:pl-16 sm:pl-6  overflow-hidden'>
        <div className='absolute bg-[#013819] mg:block hidden md:w-full w-full  h-[200px] bottom-0'>

        </div>
        <div className='md:w-[400px] w-full mt-[100px] p-3'>
          <h1 className='text-white xl:text-5xl lg:text-4xl md:text-3xl text-2xl m pt-sans-bold'>
          Whatsease VFF Holi: Fusing Brand Experience with <i className='text-black'> D2C Community.</i>
          </h1>
          <div className='w-[250px] mx-auto'>
            <img className='w-full' src='/svg/all/arrup.svg' alt=''/>
          </div>
        </div>
         <div className='flex-1 md:h-[800px] relative z-30'>
          <img className='w-full h-full lg:object-cover object-fill' src='/svg/all/laptops.svg' alt=''/>
         </div>
         </div> */}
    </div>
  );
}

export default SeamlessIntegration;
