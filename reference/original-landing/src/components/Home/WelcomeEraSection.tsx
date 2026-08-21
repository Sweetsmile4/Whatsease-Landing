"use client"
import React, { useRef, useState, useEffect } from 'react';
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";

const WelcomeEraSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Update height on resize and initial load
  useEffect(() => {
    const updateHeight = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    // Initial update
    updateHeight();

    // Add resize listener
    window.addEventListener('resize', updateHeight);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Use different scroll offsets for different screen sizes
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  
  // Adjust opacity animation to be more responsive
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const features = [
    {
      title: "Seamless Communication & Engagement",
      description: "Enhance attendee experience with WhatsApp integration, personalized notifications, interactive polls, live Q&As, and networking tools.",
      image: "/svg/card3.svg",
      alt: "Communication features illustration"
    },
    {
      title: "Reliable Offline Support & Cost Efficiency",
      description: "Ensure accessibility with offline schedules, maps, FAQs via SMS backup, instantaneous response time as our automation strategies reduces costs and effort, for you.",
      image: "/svg/card2.svg",
      alt: "Offline support illustration"
    },
    {
      title: "Smart Insights for Better Event Outreach",
      description: "Leverage real-time analytics to optimize event planning and engagement and easily measure user metrics throughout the course of your event.",
      image: "/svg/card1.svg",
      alt: "Analytics insights illustration"
    }
  ];

  return (
    <div ref={containerRef} className="px-4 sm:px-6 lg:px-8 relative">
      <div className="mt-8 lg:mt-[100px]">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black pt-sans-bold">
            <i> Welcome to a </i>
          </h1>
          <h1 className="text-[#04B851] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold pt-sans-bold">
            new era of ticketing
          </h1>
        </div>

        <div ref={timelineRef} className="mt-8 lg:mt-[80px] relative pb-8">
          <div className="flex flex-col gap-16 sm:gap-24 lg:gap-28">
            {/* Single continuous line container - adjusted positioning for mobile */}
            <div className="absolute left-4 sm:left-5 w-1.5 h-full">
              <div className="absolute inset-0 w-1.5 bg-[#04B851]/20"></div>
              <motion.div 
                className="absolute inset-0 w-1.5 bg-[#04B851] origin-top"
                style={{ 
                  height: heightTransform,
                  opacity: opacityTransform
                }}
              ></motion.div>
            </div>

            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className={`flex flex-col lg:flex-row items-start gap-6 lg:gap-8 relative ${index===2 ? "pb-[150px]" : ""} ${index===0 ? "" : "mt-[100px]"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex flex-row gap-4 sm:gap-6 w-full">
                  <div className="relative w-10 flex-shrink-0">
                    {/* Icon positioned on the continuous line - adjusted for mobile */}
                    <div className="absolute w-[40px] h-[40px] left-0 top-0 z-10">
                      <img 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                        src="/svg/welcomesecrighticon.svg" 
                        alt="" 
                      />
                      <img 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                        src="/svg/welcomesecrightinside.svg" 
                        alt="" 
                      />
                    </div>
                  </div>
                  <div className="text-black text-left flex-grow">
                    <h1 className="text-xl sm:text-2xl pt-sans-bold">{feature.title}</h1>
                    <div className="w-full sm:w-11/12 lg:w-5/6 mt-3">
                      <p className="break-words text-base sm:text-lg lg:text-xl whitespace-pre-wrap pt-sans-regular">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 mt-4 lg:mt-0 mx-auto lg:mx-0 max-w-[300px]">
                  {/* <img className="w-full" src={feature.image} alt={feature.alt} /> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeEraSection;