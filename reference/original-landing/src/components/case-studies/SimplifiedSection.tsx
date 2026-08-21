import React from 'react'
import ThreeDCardDemo from '../ThreeDCardDemo'
function SimplifiedSection({ content, headline, title1, title2 }: { content: any, headline?: string, title1?: string, title2?: string }) {
  return (
    <div>
           <div className='text-center'>
          <h1 className='text-black pt-sans-bold text-3xl md:text-4xl xl:text-4xl relative'> <i> {title1 || 'Simplified Ticketing with'} </i>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block'>
                  {/* <img className='w-full' src='/svg/comp/gradientbg.svg' alt="Gradient Background" /> */}
                </div>
          </h1>
          <h1 className='pt-sans-bold text-green-500 text-3xl md:text-4xl xl:text-4xl mt-2'>{title2 || 'Seamless Event Management with WhatsEase'}</h1>
          <p className='w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto text-lg md:text-xl pt-sans-normal text-black mt-2'>
            {headline||'Discover how WhatsEase transformed event ticketing for Waves Food Festival, streamlining sales, enhancing customer engagement, and boosting brand visibility through WhatsApp'}
          </p>
        </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-8 md:mt-12'>
         

                 {
                   content?.map((elm:any,id:any)=>{
                    return(
                      <>
                       <ThreeDCardDemo key={elm?.title} className='bg-green-500 rounded-3xl relative'>
        
                
        <div className='  p-8'>

      
        <div className=' '>

           
           <div className=''>
            <h1 className='text-white xl:text-4xl lg:text-4xl md:text-3xl text-2xl pt-sans-bold'> <i> {elm?.title} </i></h1>

            <div className="flex flex-row gap-x-1 md:gap-x-2 overflow-hidden mt-5">
                {Array.from({ length: 8 }).map((_, id) => (
                  <div key={id + "" + new Date()} className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] relative">
                    <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/svg/rightCool1.svg" alt="" />
                    <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/svg/rightCool2.svg" alt="" />
                  </div>
                ))}
              </div>
           </div>

           <div className=''>
            <p className='pt-sans-regular mt-5 text-white md:text-xl text-md md:pe-[100px] pe-3'>{elm?.description}</p>
           </div>
        </div>

        </div>
        <div className="absolute bottom-0 right-2">
              <img src="/svg/arrowCool.svg" alt="" className="w-6 md:w-auto" />
            </div>

        </ThreeDCardDemo>
                      </>
                    )
                   })
                 }
                  
        
                </div>
    </div>
  )
}

export default SimplifiedSection
