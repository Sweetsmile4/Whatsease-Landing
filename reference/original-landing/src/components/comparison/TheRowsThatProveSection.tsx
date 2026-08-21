"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ThreeDCardDemo from "../ThreeDCardDemo";
import { InteractiveHoverButton } from "../ui/InteractiveHoverButton";

function TheRowsThatProveSection() {
  // Create state to track which FAQ is open (if any)
  const [openFAQ, setOpenFAQ] = useState(null);

  // Toggle function to handle opening/closing FAQs
  const toggleFAQ = (index: any) => {
    if (openFAQ === index) {
      setOpenFAQ(null); // Close if already open
    } else {
      setOpenFAQ(index); // Open if closed
    }
  };

  // FAQ data for easier management
  const faqItems = [
    {
      question: "Why is Whatsease better for events?",
      answer:
        "Whatsease is built specifically for events, covering everything from registrations to check-ins and on-ground support, unlike QuickReply which focuses mainly on eCommerce workflows.",
    },
    {
      question: "Does Whatsease offer live support?",
      answer:
        "Yes, Whatsease provides 24/7 live support through WhatsApp groups and call access, ensuring issues are resolved instantly—no bots-only reliance.",
    },
    {
      question: "How does Whatsease personalize better?",
      answer:
        "Whatsease uses dynamic fields, language options, and segmentation to personalize messages at scale, boosting engagement and results across event audiences.",
    },
    {
      question: "What if I lack a full team?",
      answer:
        "No worries—Whatsease acts as your extended team, offering setup help, chatbot creation, and on-ground coordination for seamless execution.",
    },
    {
      question: "Can I track ROI in real time?",
      answer:
        "Absolutely. Whatsease offers full revenue attribution, real-time tracking, and ticket usage insights—empowering smarter decisions throughout your event.",
    },
  ];

  return (
    <div>
      <div className="p-4 md:p-8 lg:p-16 xl:p-20">
        <div className="text-center">
          <h1 className="text-black pt-sans-bold text-3xl md:text-4xl xl:text-5xl relative">
            {" "}
            <i> The ROAS That Proves </i>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <img
                className="w-full"
                src="/svg/comp/gradientbg.svg"
                alt="Gradient Background"
              />
            </div>
          </h1>
          <h1 className="pt-sans-bold text-green-500 text-3xl md:text-4xl xl:text-5xl mt-2">
            Whatsease Drives Real Results!
          </h1>
          <p className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto text-lg md:text-xl pt-sans-normal text-black mt-2">
            Event organizers are turning to WhatsApp as their new growth engine.
            With higher open rates, real-time responses, and frictionless
            checkouts, Whatsease helps you drive measurable revenue—beyond just
            reach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-8 md:mt-24">
          <ThreeDCardDemo className="relative bg-green-500 rounded-3xl">
            <div className="relative">
              <div className="p-8 ">
                <div className="flex space-x-5 justify-between items-center">
                  <h1 className="text-white xl:text-5xl lg:text-4xl md:text-3xl text-2xl pt-sans-bold">
                    {" "}
                    <i> reduced cac </i>
                  </h1>

                  <div className="flex flex-row gap-x-1 md:gap-x-2 overflow-hidden">
                    {Array.from({ length: 8 }).map((_, id) => (
                      <div
                        key={id + "" + new Date()}
                        className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] relative"
                      >
                        <img
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          src="/svg/rightCool1.svg"
                          alt=""
                        />
                        <img
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          src="/svg/rightCool2.svg"
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="">
                  <p className="pt-sans-regular mt-5 text-white md:text-xl text-md pe-[100px]">
                    Decreased significantly, bringing the total down by 80
                    percent.
                  </p>
                </div>
              </div>
     
            </div>
            <div className="absolute bottom-0 right-2">
                <img
                  src="/svg/arrowCool.svg"
                  alt=""
                  className="w-6 md:w-auto"
                />
              </div>
          </ThreeDCardDemo>
          <ThreeDCardDemo className="relative bg-green-500 rounded-3xl">
            <div className="relative">
              <div className="  p-8">
                <div className="flex space-x-5 justify-between items-center">
                  <h1 className="text-white xl:text-5xl lg:text-4xl md:text-3xl text-2xl pt-sans-bold">
                    {" "}
                    <i> Contacts Grown </i>
                  </h1>

                  <div className="flex flex-row gap-x-1 md:gap-x-2 overflow-hidden">
                    {Array.from({ length: 8 }).map((_, id) => (
                      <div
                        key={id + "" + new Date()}
                        className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] relative"
                      >
                        <img
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          src="/svg/rightCool1.svg"
                          alt=""
                        />
                        <img
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          src="/svg/rightCool2.svg"
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="">
                  <p className="pt-sans-regular mt-5 text-white text-xl pe-[100px]">
                    Contacts reached full capacity, achieving a total of 100
                    percent.
                  </p>
                </div>
              </div>
       
            </div>
            <div className="absolute bottom-0 right-2">
                <img
                  src="/svg/arrowCool.svg"
                  alt=""
                  className="w-6 md:w-auto"
                />
              </div>
          </ThreeDCardDemo>
          <ThreeDCardDemo className="relative bg-green-500 rounded-3xl">
            <div className="relative">
              <div className="p-8">
                <div className="flex space-x-5 justify-between items-center">
                  <h1 className="text-white xl:text-5xl lg:text-4xl md:text-3xl text-2xl pt-sans-bold">
                    {" "}
                    <i> Boosted ROAS </i>
                  </h1>

                  <div className="flex flex-row gap-x-1 md:gap-x-2 overflow-hidden">
                    {Array.from({ length: 8 }).map((_, id) => (
                      <div
                        key={id + "" + new Date()}
                        className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] relative"
                      >
                        <img
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          src="/svg/rightCool1.svg"
                          alt=""
                        />
                        <img
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          src="/svg/rightCool2.svg"
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="">
                  <p className="pt-sans-regular mt-5 text-white text-xl pe-[100px]">
                    Return on ad spend increased eight times the original
                    amount.
                  </p>
                </div>
              </div>

            </div>
            <div className="absolute bottom-0 right-2">
                <img
                  src="/svg/arrowCool.svg"
                  alt=""
                  className="w-6 md:w-auto"
                />
              </div>
          </ThreeDCardDemo>
          <ThreeDCardDemo className="relative bg-green-500 rounded-3xl">
            <div className="relative">
              <div className="  p-8">
                <div className="flex space-x-5 justify-between items-center">
                  <h1 className="text-white xl:text-5xl lg:text-4xl md:text-3xl text-2xl pt-sans-bold">
                    {" "}
                    <i> Daily Engagement </i>
                  </h1>

                  <div className="flex flex-row gap-x-1 md:gap-x-2 overflow-hidden">
                    {Array.from({ length: 8 }).map((_, id) => (
                      <div
                        key={id + "" + new Date()}
                        className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] relative"
                      >
                        <img
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          src="/svg/rightCool1.svg"
                          alt=""
                        />
                        <img
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          src="/svg/rightCool2.svg"
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="">
                  <p className="pt-sans-regular mt-5 text-white text-xl pe-[100px]">
                    Over 1000 WhatsApp messages sent daily to customers.
                  </p>
                </div>
              </div>

            </div>
            <div className="absolute bottom-0 right-2">
                <img
                  src="/svg/arrowCool.svg"
                  alt=""
                  className="w-6 md:w-auto"
                />
              </div>
          </ThreeDCardDemo>
        </div>

        <div className="mt-16 md:mt-24 lg:mt-32 xl:mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 hidden md:block">
                  <img
                    className="w-full"
                    src="/svg/comp/gradientbg.svg"
                    alt="Gradient Background"
                  />
                </div>
                <h1 className="text-black pt-sans-bold text-3xl md:text-4xl xl:text-5xl mt-5">
                  <i> got questions? </i>
                </h1>
                <h1 className="pt-sans-bold text-green-500 text-3xl md:text-4xl xl:text-5xl mt-2">
                  We've Got Answers.
                </h1>
                <p className="text-lg md:text-xl pt-sans-normal mt-6 md:mt-10 w-full md:w-4/5">
                  Find quick, clear answers to the most common questions about
                  how Whatsease compares to QuickReply.ai — from features and
                  support to ROI and real-time event management.
                </p>
                <div className="md:mt-10 mt-5">
                  <InteractiveHoverButton onClick={() => { window.location.href = 'https://wa.link/r2hk09' }}>
                    <p>Book a Demo</p>
                  </InteractiveHoverButton>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="bg-green-100 shadow-xl rounded-3xl p-4 md:p-5 mt-4 md:mt-5 first:mt-0"
                >
                  <div
                    className="flex justify-between cursor-pointer items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h1 className="pt-sans-bold text-lg md:text-xl pr-2">
                      {faq.question}
                    </h1>
                    {openFAQ === index ? (
                      <Minus className="flex-shrink-0" />
                    ) : (
                      <Plus className="flex-shrink-0" />
                    )}
                  </div>

                  <div
                    className={`min-h-0 overflow-hidden transition-all duration-300 ${
                      openFAQ === index ? "mt-3 md:mt-4" : "h-0"
                    }`}
                  >
                    <p className="text-sm md:text-md pt-sans-regular">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheRowsThatProveSection;
