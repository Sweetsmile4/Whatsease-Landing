"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.2"],
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  // Smoother transition values
  const rotate = useTransform(
    scrollYProgress, 
    [0, 0.5, 0.5, 0.75, 1], 
    [20, 15, 10, 5, 0], 
    { clamp: false }
  );
  
  const scale = useTransform(
    scrollYProgress, 
    [0, 0.5, 0.5, 0.75, 0.85, 1], 
    [...scaleDimensions(), 0.99, 0.98 , 0.98 , 0.98], 
    { clamp: false }
  );
  
  const translate = useTransform(
    scrollYProgress, 
    [0, 0.5, 0.5, 0.75, 1], 
    [0, -25, -50, -75, -100], 
    { clamp: false }
  );

  return (
    <div
      className="lg:min-h-[calc(100vh-100px)]   flex items-center justify-center relative"
      ref={containerRef}
    >
      <div
        className="w-full relative top-[-50px]"
        style={{
          perspective: "2000px",    
        }}
      >
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        transition: "all 0.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
        transformOrigin: "50% 50%",
      }}
    >
      {children}
    </motion.div>
  );
};