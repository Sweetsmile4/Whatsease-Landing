import React from "react";

function HighlightCard({ data }: { data: any }) {
  return (
    <div>
      <div className="md:mt-16 mt-6">
        <div className="mt-16">
          <div className="text-center">
            <h1 className="text-black pt-sans-bold text-3xl md:text-4xl xl:text-5xl relative">
              {" "}
              <i> Client Testimonials: </i>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                <img
                  className="w-full"
                  src="/svg/comp/gradientbg.svg"
                  alt="Gradient Background"
                />
              </div>
            </h1>
            <h1 className="pt-sans-bold text-green-500 text-3xl md:text-4xl xl:text-5xl mt-2">
              Real Success Stories with WhatsEase
            </h1>
            <p className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto text-lg md:text-xl pt-sans-normal text-black mt-2">
              Hear directly from event organizers who transformed their
              operations with WhatsEase’s powerful WhatsApp automation.{" "}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-white via-[#13D960]/20 to-white from-[10%] via-[50%] to-[90%] px-4 sm:px-8 md:px-12 lg:px-20 py-10 lg:py-20 mt-10">
          <div className="lg:w-[940px] md:w-[600px] w-full mx-auto   border-white/20 border-2 gap-4 bg-white rounded-xl md:p-8 p-4 shadow-lg">
            <div className="grid grid-cols-12">
              <div className="col-span-2 ">
                <img
                  className="md:w-[40px] w-[20px]"
                  src="/svg/all/quatstart.svg"
                  alt=""
                />
              </div>
              <div className="col-span-8">
                <p className="md:text-2xl text-md pt-sans-bold  text-black md:text-center text-start">
                  {data?.description}
                </p>
              </div>
              <div className="col-span-2 flex items-end justify-end">
                <img
                  className="md:w-[40px] w-[20px]"
                  src="/svg/all/quatend.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="text-center mt-10 pt-sans-bold">
              <h1 className="text-[#04B851] md:text-2xl text-md">
                -{data?.author}
              </h1>
              <h1 className="text-black md:text-2xl text-md">
                <i>{data?.role}</i>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightCard;
