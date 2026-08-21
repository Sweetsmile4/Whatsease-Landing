"use client";
import React from "react";
import { InteractiveHoverButton } from "../ui/InteractiveHoverButton";
import { CheckCheck } from "lucide-react";

// Default data structure that matches the exact layout

function YourCustomerSection({ data }: { data: any }) {
  return (
    <div className="lg:px-20 md:px-12 sm:px-6 px-3 py-6 mt-[50px]">
      {/* Hero Section */}
      <div className={`${data.hero.bgColor} lg:p-8 md:p-6 p-4 rounded-3xl`}>
        <div className="text-center">
          <h1 className="text-black pt-sans-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
            <i>{data.hero.titleItalic}</i>
          </h1>
          <h1 className="text-white pt-sans-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl mt-3">
            {data.hero.titleWhite}
          </h1>
          <p className="text-white mt-5 pt-sans-regular md:w-3/4 lg:w-1/2 mx-auto">
            {data.hero.description}
          </p>
          <div className="mt-5">
            <InteractiveHoverButton
              onClick={() => {
                window.location.href =
                  "https://www.consultanubhav.com/book-a-call";
              }}
            >
              <p>{data.hero.buttonText}</p>
            </InteractiveHoverButton>
          </div>
        </div>
      </div>

      <div className="mt-[80px]">
        {data.sections.map((section: any, index: any) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-y-10 gap-x-5 items-center ${
              index > 0 ? "mt-16" : ""
            }`}
          >
            {/* Image Section */}
            {section.layout === "image-text" && (
              <div className="lg:col-span-5 flex justify-center">
                {section.image?.type === "chat" ? (
                  <div className="w-full max-w-[300px]">
                    <div className="w-full relative pt-sans-regular">
                      <img
                        className="w-full"
                        src={section.image?.mainImage}
                        alt=""
                      />
                      <div className="w-[85%] absolute top-[10px] left-1/2 -translate-x-1/2">
                        <img
                          className="w-full"
                          src={section.image?.innerImage}
                          alt=""
                        />
                        <div className="text-black mt-3 pt-sans-regular text-sm">
                          {section?.image?.chatMessages?.map(
                            (message: any, idx: any) => (
                              <p key={idx} className={idx > 0 ? "mt-3" : ""}>
                                {message}
                              </p>
                            )
                          )}
                        </div>
                      </div>
                      <div className="ps-3">
                        <div className="mt-3 w-full bg-[#F9F8F9] rounded-[5px] p-2">
                          <a href="#">
                            <div className="flex flex-row items-center justify-center gap-2 cursor-pointer">
                              <img src={section.image?.ctaImage} alt="" />
                              <p className="text-[#0096DE]">
                                {section?.image.ctaText}
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Thank You Message */}
                    {section?.image?.thankyouImage && (
                      <div className="flex justify-end mt-3">
                        <div className="w-full max-w-[250px] min-h-[100px] relative">
                          <img
                            className="w-full h-full"
                            src={section.image.thankyouImage}
                            alt=""
                          />
                          <div className="absolute top-0 ps-3 pe-3 pb-2">
                            <p className="text-black mt-3 pe-3 pt-sans-regular">
                              {section.image.thankyouText}
                            </p>
                            <div className="flex justify-end pe-[15px]">
                              <CheckCheck className="text-blue-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full max-w-[400px]">
                    <img
                      className="w-full h-auto"
                      src={section.image?.mainImage}
                      alt=""
                    />
                  </div>
                )}
              </div>
            )}

            {/* Text Section for Image-Text Layout */}
            {section.layout === "image-text" && (
              <div className="lg:col-span-5 lg:col-start-7 text-center lg:text-left px-4">
                <h1 className="text-black pt-sans-bold text-2xl md:text-3xl">
                  {section.content.title}
                </h1>
                <p className="text-black mt-5 pt-sans-regular text-justify">
                  {section.content.description}
                </p>
                <div className="mt-5">
                  <InteractiveHoverButton
                    onClick={() => {
                      window.location.href =
                        "https://www.consultanubhav.com/book-a-call";
                    }}
                  >
                    <p>{section.content.buttonText}</p>
                  </InteractiveHoverButton>
                </div>
              </div>
            )}

            {/* Text Section for Text-Image Layout */}
            {section.layout === "text-image" && (
              <div className="lg:col-span-5 text-center lg:text-left px-4">
                <h1 className="text-black pt-sans-bold text-2xl md:text-3xl">
                  {section.content.title}
                </h1>
                <p className="text-black mt-5 pt-sans-regular text-justify">
                  {section.content.description}
                </p>
                <div className="mt-5">
                  <InteractiveHoverButton
                    onClick={() => {
                      window.location.href =
                        "https://www.consultanubhav.com/book-a-call";
                    }}
                  >
                    <p>{section.content.buttonText}</p>
                  </InteractiveHoverButton>
                </div>
              </div>
            )}

            {/* Image Section for Text-Image Layout */}
            {section.layout === "text-image" && (
              <div className="lg:col-span-5 lg:col-start-7 flex justify-end">
                <div className="w-full max-w-[400px]">
                  <img
                    className="w-full h-auto"
                    src={section.image?.mainImage}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourCustomerSection;
