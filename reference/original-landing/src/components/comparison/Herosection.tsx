'use client'
import { InteractiveHoverButton } from "../ui/InteractiveHoverButton"



function Herosection({content}:{content:any}) {
  return (
    <div>
      <div className="bg-[#04B851] px-4 sm:px-6 md:px-8 mt-[30px] sm:mt-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Text content - full width on mobile, 5 columns on larger screens */}
          <div className="md:col-span-5 order-2 md:order-1 py-8 md:py-0">
          <div className="pt-sans-bold mt-[20px] md:mt-[30px]">
            <div
  className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl text-white"
  dangerouslySetInnerHTML={{ __html: content?.headingHtml }}
></div>

            </div>
            {/* <div className="mt-4 sm:mt-6 md:mt-8">
              <p className="pt-sans-regular text-base sm:text-xl md:text-2xl text-white md:pe-[50px]">
                Why settle for less when Whatsease boosts your ROAS and delivers better event outcomes?
              </p>
            </div> */}
            <div className="mt-6 sm:mt-8 mb-8 md:mb-0">
              <InteractiveHoverButton onClick={() => { window.location.href = 'https://wa.link/r2hk09' }}>
                <p>Try Now</p>
              </InteractiveHoverButton>
            </div>
          </div>

          {/* Image content - full width on mobile, 7 columns on larger screens */}
          <div className="md:col-span-7 order-1 md:order-2 relative">
          <div className="md:col-span-7 order-1 md:order-2 relative">
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src={content?.mainImage}
                  alt="Computer illustration"
                  className="w-full relative z-30 max-w-[400px] md:rounded-[25px] rounded-[10px] md:max-w-none border-black border-[5px]"
                />
                <div className="absolute z-10 bottom-[-40px] sm:bottom-[-60px] md:bottom-[-92px] left-[-40px] sm:left-[-60px] md:left-[-92px] w-[80px] sm:w-[120px] md:w-auto">
                  <img src={content?.cornerImage} alt="" className="w-full" />
                </div>
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
