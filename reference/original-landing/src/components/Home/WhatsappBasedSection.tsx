'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, easeInOut } from 'framer-motion';
import { InteractiveHoverButton } from '../ui/InteractiveHoverButton';

function WhatsappBasedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const topRowControls = useAnimation();
  const hrRowControls = useAnimation();
  const eventRowControls = useAnimation();
  const trainRowControls = useAnimation();
  const ainRowControls = useAnimation();
  const managementRowControls = useAnimation();
  const downloadRowControls = useAnimation();
  const queryRowControls = useAnimation();
  const festivalRowControls = useAnimation();
  const chatRemoveRowControls = useAnimation();

  // Different random movement variants for each icon
  const movementVariants = {
    top: {
      move: {
        x: [0, 40, -20, 30, -10, 0],
        y: [0, -30, 20, -40, 10, 0],
        rotate: [0, 8, -4, 6, -2, 0],
        transition: {
          duration: 16,
          repeat: Infinity,
          repeatType: 'mirror' as const,
          ease: easeInOut,
        },
      },
    },
    hr: {
      move: {
        x: [0, 30, -40, 10, -30, -20],
        y: [0, 25, -35, 15, -20, 0],
        rotate: [0, -6, 3, -8, 4, 0],
        transition: {
          duration: 17,
          repeat: Infinity,
          repeatType: 'mirror' as const,
          ease: easeInOut,
        },
      },
    },
    event: {
      move: {
        x: [0, -35, 25, -15, 30, 15],
        y: [0, 30, -10, 40, -25, -20],
        rotate: [0, 5, -7, 3, -5, 0],
        transition: {
          duration: 19,
          repeat: Infinity,
          repeatType: 'mirror' as const,
          ease: easeInOut,
        },
      },
    },
    train: {
      move: {
        x: [0, 20, -40, 35, -15, -30],
        y: [0, -15, 35, -20, 30, 25],
        rotate: [0, -4, 6, -3, 5, 0],
        transition: {
          duration: 18,
          repeat: Infinity,
          repeatType: 'mirror' as const,
          ease: easeInOut,
        },
      },
    },
    ain: {
      move: {
        x: [0, -30, 40, -20, 10, 20],
        y: [0, 35, -25, 15, -30, -15],
        rotate: [0, 7, -5, 4, -6, 0],
        transition: {
          duration: 17,
          repeat: Infinity,
          repeatType: 'mirror' as const,
          ease: easeInOut,
        },
      },
    },
    management: {
      move: {
        x: [0, 35, -15, 40, -20, -25],
        y: [0, -20, 40, -10, 25, 30],
        rotate: [0, -5, 8, -3, 6, 0],
        transition: {
          duration: 18,
          repeat: Infinity,
          repeatType: 'mirror' as const,
          ease: easeInOut,
        },
      },
    },
    download: {
      move: {
        x: [0, -20, 35, -25, 15, 30],
        y: [0, 15, -35, 20, -30, -25],
        rotate: [0, 6, -4, 7, -3, 0],
        transition: {
          duration: 19,
          repeat: Infinity,
          repeatType: 'mirror' as const,
          ease: easeInOut,
        },
      },
    },
    query: {
      move: {
        x: [0, 25, -30, 20, -35, -15],
        y: [0, -30, 15, -40, 25, 20],
        rotate: [0, -7, 5, -6, 4, 0],
        transition: {
          duration: 19,
          repeat: Infinity,
          repeatType: 'mirror' as const,
          ease: easeInOut,
        },
      },
    },
    festival: {
      move: {
        x: [0, -35, 15, -40, 20, 25],
        y: [0, 20, -40, 10, -25, -30],
        rotate: [0, 4, -6, 8, -5, 0],
        transition: {
          duration: 12,
          repeat: Infinity,
          repeatType: 'mirror' as const,
          ease: easeInOut,
        },
      },
    },
    chatRemove: {
      move: {
        x: [0, 30, -25, 35, -15, -20],
        y: [0, -35, 25, -20, 30, 15],
        rotate: [0, -6, 4, -7, 5, 0],
        transition: {
          duration: 17,
          repeat: Infinity,
          repeatType: 'mirror' as const,
          ease: easeInOut,
        },
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      const animateIcons = async () => {
        await new Promise((resolve) => setTimeout(resolve, 400));

        await Promise.all([
          topRowControls.start({
            opacity: 1,
            scale: 1,
            top: '0%',
            left: '37%',
            transition: {
              type: 'tween',
              stiffness: 100,
              damping: 10,
              duration: 0.5,
              delay: 0,
            },
          }),
          hrRowControls.start({
            opacity: 1,
            scale: 1,
            top: '3%',
            right: '25%',
            left: 'auto',
            transition: {
              type: 'tween',
              stiffness: 100,
              damping: 10,
              duration: 0.5,
              delay: 0.03,
            },
          }),
          eventRowControls.start({
            opacity: 1,
            scale: 1,
            top: '14%',
            left: '8%',
            right: 'auto',
            transition: {
              type: 'tween',
              stiffness: 100,
              damping: 10,
              duration: 0.5,
              delay: 0.06,
            },
          }),
          trainRowControls.start({
            opacity: 1,
            scale: 1,
            top: '22%',
            right: '8%',
            left: 'auto',
            transition: {
              type: 'tween',
              stiffness: 100,
              damping: 10,
              duration: 0.5,
              delay: 0.12,
            },
          }),
          ainRowControls.start({
            opacity: 1,
            scale: 1,
            top: '50%',
            right: 'auto',
            left: '0%',
            transition: {
              type: 'tween',
              stiffness: 100,
              damping: 10,
              duration: 0.5,
              delay: 0.15,
            },
          }),
          managementRowControls.start({
            opacity: 1,
            scale: 1,
            top: '54%',
            right: '0%',
            left: 'auto',
            transition: {
              type: 'tween',
              stiffness: 100,
              damping: 10,
              duration: 0.5,
              delay: 0.18,
            },
          }),
          downloadRowControls.start({
            opacity: 1,
            scale: 1,
            top: 'auto',
            bottom: '15%',
            right: 'auto',
            left: '3%',
            transition: {
              type: 'tween',
              stiffness: 100,
              damping: 10,
              duration: 0.5,
              delay: 0.21,
            },
          }),
          queryRowControls.start({
            opacity: 1,
            scale: 1,
            top: 'auto',
            right: '3%',
            left: 'auto',
            bottom: '14%',
            transition: {
              type: 'tween',
              stiffness: 100,
              damping: 10,
              duration: 0.5,
              delay: 0.24,
            },
          }),
          festivalRowControls.start({
            opacity: 1,
            scale: 1,
            left: '25%',
            top: 'auto',
            right: 'auto',
            bottom: '0%',
            transition: {
              type: 'tween',
              stiffness: 100,
              damping: 10,
              duration: 0.5,
              delay: 0.27,
            },
          }),
          chatRemoveRowControls.start({
            opacity: 1,
            scale: 1,
            top: 'auto',
            right: '20%',
            left: 'auto',
            bottom: '0%',
            transition: {
              type: 'tween',
              stiffness: 100,
              damping: 10,
              duration: 0.5,
              delay: 0.3,
            },
          }),
        ]);

        // Start random movement after initial animation with different variants
        await Promise.all([
          topRowControls.start('move'),
          hrRowControls.start('move'),
          eventRowControls.start('move'),
          trainRowControls.start('move'),
          ainRowControls.start('move'),
          managementRowControls.start('move'),
          downloadRowControls.start('move'),
          queryRowControls.start('move'),
          festivalRowControls.start('move'),
          chatRemoveRowControls.start('move'),
        ]);
      };

      animateIcons();
    }
  }, [
    isInView,
    topRowControls,
    hrRowControls,
    eventRowControls,
    trainRowControls,
    managementRowControls,
    festivalRowControls,
    chatRemoveRowControls,
  ]);

  return (
    <>
      <div className="py-10 sm:py-0 md:py-20">
        <motion.div className="circleImg relative min-h-screen md:min-h-[calc(100vh+200px)]">
          {/* Top row icons */}
          <motion.div
            initial={{
              opacity: 0,
              top: '50%',
              left: '50%',
            }}
            animate={topRowControls}
            variants={movementVariants.top}
            className="absolute z-10 hidden rounded-[8px] p-1 sm:block md:p-2"
          >
            <img
              src="/svg/plane.svg"
              className="w-full md:w-auto"
              alt="Plane icon"
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              top: '50%',
              right: '33%',
            }}
            animate={hrRowControls}
            variants={movementVariants.hr}
            className="absolute z-10 hidden rounded-[8px] p-1 sm:block md:p-2"
          >
            <img src="/svg/hr.svg" className="w-full md:w-auto" alt="HR icon" />
          </motion.div>

          <div>
            <motion.div
              initial={{
                opacity: 0,
                top: '50%',
                left: '50%',
              }}
              animate={eventRowControls}
              variants={movementVariants.event}
              className="absolute z-10 hidden rounded-[8px] p-1 sm:block md:p-2"
            >
              <img
                src="/svg/event.png"
                className="w-full md:w-auto"
                alt="Event icon"
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                top: '50%',
                left: '37%',
              }}
              animate={trainRowControls}
              variants={movementVariants.train}
              className="absolute z-10 hidden rounded-[8px] p-1 sm:block md:p-2"
            >
              <img
                src="/svg/ticket.svg"
                className="w-full md:w-auto"
                alt="Ticket icon"
              />
            </motion.div>
          </div>

          {/* Middle row icons */}
          <div>
            <motion.div
              initial={{
                opacity: 0,
                top: '50%',
                left: '50%',
              }}
              animate={ainRowControls}
              variants={movementVariants.ain}
              className="absolute left-0 top-[50%] z-10 hidden -translate-y-1/2 rounded-[8px] p-1 sm:block md:p-2"
            >
              <img
                src="/svg/ai.svg"
                className="w-full md:w-auto"
                alt="AI icon"
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                top: '50%',
                left: '50%',
              }}
              animate={managementRowControls}
              variants={movementVariants.management}
              className="absolute right-0 top-[54%] z-10 hidden -translate-y-1/2 rounded-[8px] p-1 sm:block md:p-2"
            >
              <img
                src="/svg/management.svg"
                className="w-full md:w-auto"
                alt="Management icon"
              />
            </motion.div>
          </div>

          {/* Lower middle row icons */}
          <div>
            <motion.div
              initial={{
                opacity: 0,
                top: '50%',
                left: '50%',
              }}
              animate={downloadRowControls}
              variants={movementVariants.download}
              className="absolute bottom-[15%] left-[3%] z-10 hidden rounded-[8px] p-1 sm:block md:left-[6%] md:p-2"
            >
              <img
                src="/svg/download.svg"
                className="w-full md:w-auto"
                alt="Download icon"
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                top: '50%',
                right: '37%',
              }}
              animate={queryRowControls}
              variants={movementVariants.query}
              className="absolute bottom-[14%] right-[3%] z-10 hidden rounded-[8px] p-1 sm:block md:right-[11%] md:p-2"
            >
              <img
                src="/svg/query.svg"
                className="w-full md:w-auto"
                alt="Query icon"
              />
            </motion.div>
          </div>

          {/* Bottom row icons */}
          <div>
            <motion.div
              initial={{
                opacity: 0,
                top: '50%',
                left: '50%',
              }}
              animate={festivalRowControls}
              variants={movementVariants.festival}
              className="absolute bottom-[0%] left-[25%] z-10 hidden rounded-[8px] p-1 sm:block md:p-2"
            >
              <img
                src="/svg/festival.svg"
                className="w-full md:w-auto"
                alt="Festival icon"
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                top: '50%',
                left: '50%',
              }}
              animate={chatRemoveRowControls}
              variants={movementVariants.chatRemove}
              className="absolute bottom-[0%] right-[25%] z-10 hidden rounded-[8px] p-1 sm:block md:p-2"
            >
              <img
                src="/svg/chatremove.svg"
                className="w-full md:w-auto"
                alt="Chat Remove icon"
              />
            </motion.div>
          </div>

          {/* Rest of the code remains the same */}
          <div className="absolute left-1/2 top-1/2 aspect-square w-[300px] -translate-x-1/2 -translate-y-1/2 sm:w-[400px] md:w-[500px] lg:w-[648px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 648 648"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <g filter="url(#filter0_f_368_1741)">
                <circle
                  cx="324"
                  cy="324"
                  r="204"
                  fill="#00D426"
                  fillOpacity="0.32"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_368_1741"
                  x="0"
                  y="0"
                  width="648"
                  height="648"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="60"
                    result="effect1_foregroundBlur_368_1741"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div
            ref={ref}
            className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 px-4 md:px-6 lg:px-0"
          >
            <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
              <h1 className="pt-sans-bold text-center text-3xl text-black sm:text-4xl md:text-5xl lg:text-6xl">
                <i>WhatsApp-based</i>
              </h1>
              <h1 className="pt-sans-bold mt-3 text-center text-3xl text-[#03B015] sm:text-4xl md:mt-5 md:text-5xl lg:text-6xl">
                event automation with booking and check-ins.
              </h1>
              <p className="pt-sans-normal start-animate mt-3 px-4 text-center text-base text-black sm:text-lg md:mt-5 md:text-xl">
                Whatsease simplifies event management with WhatsApp
                integration—enabling ticket bookings, real-time check-ins,
                automated updates, and post-event analytics for a seamless
                experience.
              </p>
              <div className="mx-auto mt-4 flex justify-center md:mt-5">
                <InteractiveHoverButton
                  className="mx-auto"
                  onClick={() => {
                    window.location.href = 'https://wa.link/r2hk09';
                  }}
                >
                  Book A Demo
                </InteractiveHoverButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default WhatsappBasedSection;
