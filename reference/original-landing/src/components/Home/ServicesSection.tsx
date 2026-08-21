'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { InteractiveHoverButton } from '../ui/InteractiveHoverButton';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function ServicesSection() {
  const firstCardRef = useRef<HTMLDivElement>(null);
  const secondCardRef = useRef<HTMLDivElement>(null);
  const thirdCardRef = useRef<HTMLDivElement>(null);
  const fourthCardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !firstCardRef.current ||
      !secondCardRef.current ||
      !thirdCardRef.current ||
      !fourthCardRef.current
    )
      return;

    const cards = [
      firstCardRef.current,
      secondCardRef.current,
      thirdCardRef.current,
      fourthCardRef.current,
    ];

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    cards.forEach((card, index) => {
      if (index === cards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          endTrigger: containerRef.current,
          end: 'bottom bottom',
          onEnter: () => {
            gsap.to(cards[index - 1], {
              opacity: 0.8,
              scale: 0.8,
            });
          },
          onLeaveBack: () => {
            gsap.to(cards[index - 1], {
              opacity: 1,
              scale: 1,
            });
          },
        });
      } else {
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          onEnter: () => {
            gsap.to(cards[index - 1], {
              y: 0,
              duration: 0.5,
              ease: 'power2.inOut',
              opacity: 0.8,
              scale: 0.8,
            });
          },
          onLeaveBack: () => {
            gsap.to(cards[index - 1], {
              y: 0,
              duration: 0.5,
              ease: 'power2.inOut',
              opacity: 1,
              scale: 1,
            });
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative pb-10" id="services-section">
      <div className="mx-auto w-full px-4 py-6 text-black md:w-2/3 md:py-10">
        <h1 className="pt-sans-bold text-center text-3xl md:text-6xl">
          <i>trusted by many,</i>
        </h1>
        <h1 className="pt-sans-bold mt-2 break-words text-center text-4xl text-[#04B851] md:text-7xl">
          all served with whatsease.
        </h1>
        <p className="pt-sans-normal mx-auto mt-2 max-w-3xl text-center text-sm md:text-lg">
          - hear from our customers and find out how whatsease is
          revolutionizing the industry with whatsapp-powered events and
          receiving highly satisfactory customer experiences..
        </p>
      </div>

      {/* First Card */}
      <div
        ref={firstCardRef}
        className="cards md:rounded-4xl mx-4 w-full justify-between overflow-hidden rounded-3xl bg-[#178246] sm:grid sm:grid-cols-12 md:mx-0"
      >
        <div className="p-6 sm:col-span-5 md:p-10">
          <h1 className="pt-sans-bold mt-2 text-2xl text-[#00FF6E] md:text-4xl lg:text-5xl xl:text-7xl">
            settle your
          </h1>
          <h1 className="pt-sans-bold mt-2 text-2xl text-[#00FF6E] md:text-4xl lg:text-5xl xl:text-7xl">
            due bills
          </h1>
          <h1 className="pt-sans-bold mt-2 text-2xl text-white md:text-4xl lg:text-5xl xl:text-7xl">
            <i>in no time!</i>
          </h1>
          <p className="text-md pt-sans-normal mt-4 text-white md:mt-8 md:text-xl lg:text-lg">
            Enroll in coaching institutes with ease. Manage applications,
            payments, and admissions seamlessly on a single platform with
            Whatsease.
          </p>
          <InteractiveHoverButton
            className="mt-6 bg-[#className] px-4 md:mt-10 lg:px-6"
            onClick={() => {
              window.location.href = 'https://wa.link/r2hk09';
            }}
          >
            Book Your Demo
          </InteractiveHoverButton>
        </div>
        <div className="relative w-full sm:col-span-7">
          <div className="relative bottom-0 sm:absolute lg:absolute lg:bottom-0 lg:right-0 lg:h-[80%] lg:w-[90%]">
            <div className="absolute left-[-20px] top-[-20px] w-16 md:left-[-30px] md:top-[-30px] md:w-auto">
              <img src="/svg/homeImg.svg" alt="" />
            </div>
            <img className="h-full w-full" src="/svg/homesideImg1.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div
        ref={secondCardRef}
        className="cards md:rounded-4xl mx-4 mt-8 flex flex-col justify-between overflow-hidden rounded-3xl bg-[#08CD74] sm:grid sm:grid-cols-12 md:mx-0 md:mt-16"
      >
        <div className="p-6 sm:col-span-5 md:p-10">
          <h1 className="pt-sans-bold mt-2 text-3xl text-black md:text-4xl lg:text-5xl xl:text-7xl">
            pay the
          </h1>
          <h1 className="pt-sans-bold mt-2 text-3xl text-black md:text-4xl lg:text-5xl xl:text-7xl">
            school fees
          </h1>
          <h1 className="pt-sans-bold mt-2 text-3xl text-white md:text-4xl lg:text-5xl xl:text-7xl">
            <i>with ease!</i>
          </h1>
          <p className="text-md pt-sans-normal mt-4 text-lg text-white md:mt-8 md:text-xl">
            Enroll your children in schools institutes with ease. Manage
            applications, payments, and admissions seamlessly on an integrated,
            single platform with Whatsease..
          </p>
          <InteractiveHoverButton
            className="mt-6 bg-[#className] px-4 md:mt-10 lg:px-6"
            onClick={() => {
              window.location.href = 'https://wa.link/r2hk09';
            }}
          >
            Learn More
          </InteractiveHoverButton>
        </div>
        <div className="relative w-full sm:col-span-7">
          <div className="relative bottom-0 sm:absolute lg:right-0 lg:h-[80%] lg:w-[90%]">
            <div className="absolute left-[-20px] top-[-20px] w-16 md:left-[-30px] md:top-[-30px] md:w-auto">
              <img src="/svg/home2Img.svg" alt="" />
            </div>
            <img className="h-full w-full" src="/svg/homesideImg2.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div
        ref={thirdCardRef}
        className="cards md:rounded-4xl mx-4 mt-8 justify-between overflow-hidden rounded-3xl bg-[#26D953] sm:grid sm:grid-cols-12 md:mx-0 md:mt-16"
      >
        <div className="p-6 sm:col-span-5 md:p-10">
          <h1 className="pt-sans-bold mt-2 text-3xl text-black md:text-4xl lg:text-5xl xl:text-7xl">
            Book
          </h1>
          <h1 className="pt-sans-bold mt-2 text-3xl text-black md:text-4xl lg:text-5xl xl:text-7xl">
            Flights & Buses
          </h1>
          <h1 className="pt-sans-bold mt-2 text-3xl text-white md:text-4xl lg:text-5xl xl:text-7xl">
            <i>in a click!</i>
          </h1>
          <p className="text-md pt-sans-normal mt-4 text-lg text-white md:mt-8 md:text-xl">
            Enroll in coaching institutes with ease. Manage applications,
            payments, and admissions seamlessly on a single platform with
            Whatsease.
          </p>
          <InteractiveHoverButton
            className="mt-6 bg-[#className] px-4 md:mt-10 lg:px-6"
            onClick={() => {
              window.location.href = 'https://wa.link/r2hk09';
            }}
          >
            Learn More
          </InteractiveHoverButton>
        </div>
        <div className="relative w-full sm:col-span-7">
          <div className="relative bottom-0 sm:absolute lg:right-0 lg:h-[80%] lg:w-[90%]">
            <div className="absolute left-[-20px] top-[-20px] w-16 md:left-[-30px] md:top-[-30px] md:w-auto">
              <img src="/svg/home3Icon.svg" alt="" />
            </div>
            <img className="h-full w-full" src="/svg/homesideImg3.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Fourth Card */}
      <div
        ref={fourthCardRef}
        className="cards md:rounded-4xl mx-4 mt-8 justify-between overflow-hidden rounded-3xl bg-[#28BD4D] sm:grid sm:grid-cols-12 md:mx-0 md:mt-16"
      >
        <div className="p-6 sm:col-span-5 md:p-10">
          <h1 className="pt-sans-bold mt-2 text-3xl text-black md:text-4xl lg:text-5xl xl:text-7xl">
            set up your
          </h1>
          <h1 className="pt-sans-bold mt-2 text-3xl text-black md:text-4xl lg:text-5xl xl:text-7xl">
            hospital visits
          </h1>
          <h1 className="pt-sans-bold mt-2 text-3xl text-white md:text-4xl lg:text-5xl xl:text-7xl">
            <i>effortlessly!</i>
          </h1>
          <p className="text-md pt-sans-normal mt-4 text-lg text-white md:mt-8 md:text-xl">
            Enroll in coaching institutes with ease. Manage applications,
            payments, and admissions seamlessly on a single platform with
            Whatsease.
          </p>
          <InteractiveHoverButton
            className="mt-6 bg-[#className] px-4 md:mt-10 lg:px-6"
            onClick={() => {
              window.location.href = 'https://wa.link/r2hk09';
            }}
          >
            Book Your Demo
          </InteractiveHoverButton>
        </div>
        <div className="relative w-full sm:col-span-7">
          <div className="relative bottom-0 right-0 sm:absolute lg:h-[80%] lg:w-[90%]">
            <div className="absolute left-[-20px] top-[-20px] w-16 md:left-[-30px] md:top-[-30px] md:w-auto">
              <img src="/svg/home4Icon.svg" alt="" />
            </div>
            <img className="h-full w-full" src="/svg/homesideImg4.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
