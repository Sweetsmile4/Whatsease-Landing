"use client";
import React, { useState } from "react";
import { InteractiveHoverButton } from "../ui/InteractiveHoverButton";
import {
  Menu,
  X,
  Briefcase,
  BarChart2,
  Layers,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleMouseEnter = (dropdown: any) => {
    setHoveredDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
  };

  const caseStudiesRoutes = [
    "photograph-distribution",
    "milk-distribution",
    "prayogshala",
    "sir-gangaram-hospital",
    "sandhya-aquax",
    "the-hackers-meetup",
    "train-with-shubham",
    "urban-savitri",
    "Vadodara Fun Fiesta",
    "weekend-bazaar",
  ];
  // wherever you’re defining your routes
  const caseStudies = [
    {
      slug: "photograph-distribution",
      label: "Photograph Distribution",
    },
    {
      slug: "milk-distribution",
      label: "Milk‑Distribution Program",
    },
    {
      slug: "prayogshala",
      label: "Prayogshala",
    },
    {
      slug: "shri-gangaram-hospital",
      label: "Shri Gangaram Hospital",
    },
    {
      slug: "sandhya-aquax",
      label: "Sandhya Aquax",
    },
    {
      slug: "the-hackers-meetup",
      label: "The Hackers Meetup",
    },
    {
      slug: "train-with-shubham",
      label: "Train with Shubham",
    },
    {
      slug: "urban-food-forest",
      label: "Urban food forest",
    },
    {
      slug: "vff",
      label: "Vadodara Fun Fiesta",
    },
    {
      slug: "weekend-bazaar",
      label: "Weekend Bazaar",
    },
  ];

  const comparisonRoutes = [
    "whatsease-vs-bitespeed",
    "whatsease-vs-business-on-bot",
    "whatsease-vs-contlo",
    "whatsease-vs-Gallabox",
    "whatsease-vs-interakt",
    "whatsease-vs-kwikchat",
    "whatsease-vs-limechat",
    "whatsease-vs-sinch",
    "whatsease-vs-superlemon",
    "whatsease-vs-wati",
    "whatsease-vs-zoko",
  ];

  const useCaseRoutes = [
    "chatbot",
    "cod-to-prepaid-conversion",
    "customer-support",
    "event-management",
    "new-product-launch-compaigns",
    "order-alert-and-notification",
    "repeat-purchase",
    "retail",
    "upselling-campaigns",
    "whatsApp-marketing-campaigns",
  ];

  const formatRouteName = (route: any) => {
    return route
      .split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="px-4 py-3 md:px-6 md:py-4  ">
      <div className="flex flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex gap-x-3 me-5 items-center">
          <div className="w-[40px]  h-[40px] md:w-[50px] md:h-[50px] relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/svg/wplogo.svg"
              alt=""
            />
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/svg/wplogoinside.svg"
              alt=""
            />
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/svg/wplogoinside2.svg"
              alt=""
            />
          </div>
          <div className="relative w-[140px] md:w-[180px]">
            <img
              className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/svg/whatseaseText.svg"
              alt=""
            />
            <img
              className="w-[85%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="/svg/whatseasetext2.svg"
              alt=""
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="m-0 p-0 flex justify-center items-start gap-x-6">
            <a href="/">
              <li className="relative text-nowrap font-semibold font-sans text-base lg:text-[20px] text-white group cursor-pointer">
                Home
                <span className="absolute w-full opacity-0 left-0 bottom-0 h-[2px] bg-white transition-all duration-300 group-hover:opacity-100"></span>
              </li>
            </a>

            {/* Case Studies Dropdown */}
            <li
              className="relative text-nowrap font-semibold text-base lg:text-[20px] text-white group cursor-pointer"
              onMouseEnter={() => handleMouseEnter("case-studies")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1">
                Case Studies
                <ChevronDown size={16} />
              </div>
              <span className="absolute w-full opacity-0 left-0 bottom-0 h-[2px] bg-white transition-all duration-300 group-hover:opacity-100"></span>

              {hoveredDropdown === "case-studies" && (
                <AnimatePresence>
                  <motion.div
                    className="absolute top-full left-0 bg-white rounded-xl shadow-2xl p-6 z-50 w-[400px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="text-blue-600" size={20} />
                      <h3 className="text-gray-800 font-bold text-lg">
                        Case Studies
                      </h3>
                    </div>
                    <motion.div
                      className="grid grid-cols-1 gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {caseStudies.map(({ slug, label }, index) => (
                        <motion.a
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * index }}
                          key={slug}
                          href={`/case-studies/${slug}`}
                          className="block text-black text-sm py-1"
                        >
                          {label}
                        </motion.a>
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              )}
            </li>

            {/* Comparison Dropdown */}
            <li
              className="relative font-semibold text-base lg:text-[20px] text-white group cursor-pointer"
              onMouseEnter={() => handleMouseEnter("comparison")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1">
                Comparison
                <ChevronDown size={16} />
              </div>
              <span className="absolute w-full opacity-0 left-0 bottom-0 h-[2px] bg-white transition-all duration-300 group-hover:opacity-100"></span>

              {hoveredDropdown === "comparison" && (
                <AnimatePresence>
                  <motion.div
                    className="absolute top-full left-0 bg-white rounded-xl shadow-2xl p-6 z-50 w-[400px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart2 className="text-blue-600" size={20} />
                      <h3 className="text-gray-800 font-bold text-lg">
                        Comparison
                      </h3>
                    </div>
                    <motion.div
                      className="grid grid-cols-1 gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {comparisonRoutes.map((route, index) => (
                        <motion.a
                          key={route}
                          href={`/comparision/${route}`}
                          className="text-gray-700 hover:text-blue-600 transition-colors text-sm flex items-center gap-1 hover:bg-gray-100 rounded-md px-2 py-1"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * index }}
                        >
                          {formatRouteName(route)}
                        </motion.a>
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              )}
            </li>

            {/* Use Case Dropdown */}
            <li
              className="relative text-nowrap font-semibold text-base lg:text-[20px] text-white group cursor-pointer"
              onMouseEnter={() => handleMouseEnter("use-case")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1">
                Use Case
                <ChevronDown size={16} />
              </div>
              <span className="absolute w-full opacity-0 left-0 bottom-0 h-[2px] bg-white transition-all duration-300 group-hover:opacity-100"></span>

              {hoveredDropdown === "use-case" && (
                <AnimatePresence>
                  <motion.div
                    className="absolute top-full left-0 bg-white rounded-xl shadow-2xl p-6 z-50 w-[400px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Layers className="text-blue-600" size={20} />
                      <h3 className="text-gray-800 font-bold text-lg">
                        Use Cases
                      </h3>
                    </div>
                    <motion.div
                      className="grid grid-cols-1 gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {useCaseRoutes.map((route, index) => (
                        <motion.a
                          key={route}
                          href={`/use-case/${route}`}
                          className="text-gray-700 hover:text-blue-600 transition-colors text-sm flex items-center gap-1 hover:bg-gray-100 rounded-md px-2 py-1"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * index }}
                        >
                          {formatRouteName(route)}
                        </motion.a>
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              )}
            </li>
            <a href="/pricing">
              <li className="relative font-semibold text-base lg:text-[20px] text-white group cursor-pointer">
                Pricing
                <span className="absolute w-full opacity-0 left-0 bottom-0 h-[2px] bg-white transition-all duration-300 group-hover:opacity-100"></span>
              </li>
            </a>

            <a
              href="/privacy"
              className="relative font-semibold text-base lg:text-[20px] text-white group cursor-pointer"
            >
              Privacy
              <span className="absolute w-full opacity-0 left-0 bottom-0 h-[2px] bg-white transition-all duration-300 group-hover:opacity-100"></span>
            </a>
          </ul>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <InteractiveHoverButton
            onClick={() => {
              window.location.href = "https://wa.link/r2hk09";
            }}
          >
            <p className="pt-sans-bold">Try Now</p>
          </InteractiveHoverButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden py-4 mt-2">
          <ul className="flex flex-col gap-y-4">
            <a href="/">
              <li className="font-semibold text-lg text-white">Home</li>
            </a>
            {/* Mobile Case Studies Dropdown */}
            <li className="font-semibold text-lg text-white">
              <div
                className="flex items-center justify-between"
                onClick={() =>
                  handleMouseEnter(
                    hoveredDropdown === "mobile-case-studies"
                      ? null
                      : "mobile-case-studies"
                  )
                }
              >
                <span>Case Studies</span>
                <ChevronDown size={16} />
              </div>
              <AnimatePresence initial={false}>
                {hoveredDropdown === "mobile-case-studies" && (
                  <motion.div
                    className="pl-4 mt-2 space-y-2 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {caseStudies.map(({ slug, label }) => (
                      <a
                        key={slug}
                        href={`/case-studies/${slug}`}
                        className="block  text-sm py-1"
                      >
                        {label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Mobile Comparison Dropdown */}
            <li className="font-semibold text-lg text-white">
              <div
                className="flex items-center justify-between"
                onClick={() =>
                  handleMouseEnter(
                    hoveredDropdown === "mobile-comparison"
                      ? null
                      : "mobile-comparison"
                  )
                }
              >
                <span>Comparison</span>
                <ChevronDown size={16} />
              </div>
              <AnimatePresence initial={false}>
                {hoveredDropdown === "mobile-comparison" && (
                  <motion.div
                    className="pl-4 mt-2 space-y-2 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {comparisonRoutes.map((route) => (
                      <a
                        key={route}
                        href={`/comparision/${route}`}
                        className="block text-white text-sm py-1"
                      >
                        {formatRouteName(route)}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Mobile Use Case Dropdown */}
            <li className="font-semibold text-lg text-white">
              <div
                className="flex items-center justify-between"
                onClick={() =>
                  handleMouseEnter(
                    hoveredDropdown === "mobile-use-case"
                      ? null
                      : "mobile-use-case"
                  )
                }
              >
                <span>Use Case</span>
                <ChevronDown size={16} />
              </div>
              <AnimatePresence initial={false}>
                {hoveredDropdown === "mobile-use-case" && (
                  <motion.div
                    className="pl-4 mt-2 space-y-2 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {useCaseRoutes.map((route) => (
                      <a
                        key={route}
                        href={`/use-case/${route}`}
                        className="block text-white text-sm py-1"
                      >
                        {formatRouteName(route)}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <a href="/pricing"><li className="font-semibold text-lg text-white">Pricing</li></a>
            <li className="font-semibold text-lg text-white">
              <a href="/privacy">Privacy</a>
            </li>
            <li className="mt-4">
              <InteractiveHoverButton
                onClick={() => {
                  window.location.href = "https://wa.link/r2hk09";
                }}
              >
                <p className="pt-sans-bold">Try Now</p>
              </InteractiveHoverButton>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
