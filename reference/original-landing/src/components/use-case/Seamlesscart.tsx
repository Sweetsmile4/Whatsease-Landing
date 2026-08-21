"use client";
import React from "react";
import { InteractiveHoverButton } from "../ui/InteractiveHoverButton";

// Default data for the component

function Seamlesscart({ data }: { data: any }) {
  return (
    <div>
      <div className={`${data.background} md:mt-[50px] mt-3`}>
        <div className="lg:px-20 md:px-12 sm:px-6 px-3">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 px-4">
            {/* Text Section */}
            <div className="lg:col-span-6 col-span-12">
              <h1 className="md:text-3xl text-lg pt-sans-bold">
                {data.content.heading}
              </h1>
              <p className="md:text-lg text-md pt-sans-regular mt-5"  dangerouslySetInnerHTML={{ __html:data.content.description }}>
                
              </p>
              <div className="mt-5">
                <InteractiveHoverButton
                  onClick={() => {
                    window.location.href = "https://wa.link/r2hk09";
                  }}
                >
                  <p>{data.content.buttonText}</p>
                </InteractiveHoverButton>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:col-span-6 col-span-12 flex justify-center lg:justify-end">
              <div className="w-full max-w-[400px]">
                <img
                  className="w-full"
                  src={data.image.src}
                  alt={data.image.alt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seamlesscart;
