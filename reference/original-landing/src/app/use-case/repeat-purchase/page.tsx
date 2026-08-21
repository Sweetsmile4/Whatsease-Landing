'use client';
import React from 'react';
import OverfiveHundread from '@/components/comparison/OverfiveHundread';
import SeamlessIntegration from '@/components/comparison/SeamlessIntegration';
import Footer from '@/components/Footer';
import Navbar from '@/app/components/Navbar';

import Herosection from '@/components/use-case/Herosection';
import Seamlesscart from '@/components/use-case/Seamlesscart';
import Statsection from '@/components/use-case/Statsection';
import WhyWpEssential from '@/components/use-case/WhyWpEssential';
import YourCustomerSection from '@/components/use-case/YourCustomerSection';

const repeatdata = {
  background:
    'bg-gradient-to-r from-white via-[#13D960]/20 to-white from-[10%] via-[50%] to-[90%]',
  content: {
    heading: ' Reorder Reminders ',
    description:
      'Automatically send personalized restock reminders based on each customer’s purchase history—ideal for consumables like skincare, food, or wellness products. Enable one-tap reorders with pre-filled details for a seamless experience. These timely nudges boost customer lifetime value while reducing friction and effort.',
    buttonText: 'Book Your Demo',
  },
  image: {
    src: '/svg/all/seamlesscart.svg',
    alt: '',
  },
};

const repeatuseCaseData = {
  hero: {
    bgColor: 'bg-[#04B851]',
    titleItalic: 'Your Customers Are On WhatsApp..',
    titleWhite: 'Are You Effectively Engaging Them?',
    description:
      "WhatsApp is the go-to app for over 3 billion users, and your D2C customers are already on it. So, why not meet them where they are? Leverage WhatsEase's powerful tools to recover abandoned carts, engage with your customers in real-time, and boost conversions directly within WhatsApp. By integrating automated, personalized reminders, you can seamlessly turn abandoned carts into completed purchases, all without leaving the app.",
    buttonText: 'Book Now',
  },
  sections: [
    {
      layout: 'image-text',
      image: {
        type: 'simple',
        mainImage: '/svg/all/repeatpur1.svg',
      },
      content: {
        title: 'Exclusive Member Offers ',
        description:
          'Reward returning buyers with VIP-only discounts, early access to sales, and limited-edition drops. Create a sense of exclusivity that drives engagement and encourages repeat purchases. Deliver personalized, well-timed messages with in-chat coupon codes or auto-applied discounts — ideal for building lasting brand loyalty and increasing retention.',
        buttonText: 'Book Now',
      },
    },
    {
      layout: 'text-image',
      image: {
        type: 'simple',
        mainImage: '/svg/all/casedevice1.svg',
      },
      content: {
        title: 'Seasonal or Occasion-Based Repeats ',
        description:
          'Engage customers during birthdays, anniversaries, or seasonal events with curated product recommendations. Use past purchases to suggest thoughtful gifts or timely rebookings. Combine festive visuals with emotional messaging to drive higher engagement. Automated yet deeply personalized — perfect for retail, gifting, and experience-focused brands.',
        buttonText: 'Book Now',
      },
    },
    {
      layout: 'image-text',
      image: {
        type: 'simple',
        mainImage: '/svg/all/repeatpur2.svg',
      },
      content: {
        title: 'Feedback-to-Repeat Funnels ',
        description:
          'After receiving positive feedback, send a personalized thank-you message along with a repeat offer. Leverage sentiment triggers to turn satisfied customers into loyal ones. Provide discounts or bonuses for their next purchase, creating a seamless feedback-to-sale cycle on WhatsApp. This encourages ongoing engagement and habit-forming interactions with your brand.',
        buttonText: 'Book Now',
      },
    },
  ],
};

const heroContent = {
  headingHtml: `Increase Revenue by <i class='text-black'>30%</i> with Automated WhatsApp Repeat Purchase Campaigns`,
  description:
    'Leverage personalized reminders and offers to drive repeat purchases. Whatsease automates customer engagement, fostering loyalty and maximizing revenue with minimal effort.',
  buttonText: 'Book Your Demo',
  mainImage: '/svg/all/device.svg',
  cornerImage: '/svg/comp/blackcurv.svg',
};
const reasonContent = {
  heading1: 'Why WhatsApp is Essential for ',
  heading2: 'Driving Repeat Purchases and Revenue Growth',
  description:
    'WhatsApp automates personalized reminders, offers, and reorders, boosting repeat purchases and revenue with minimal effort.',
};

function page() {
  return (
    <div>
      <div className="bg-[#04B851] px-3 py-6 pb-[15px] sm:px-6 md:px-12 md:pb-[50px] lg:md:pb-[130px] lg:px-20">
        <Navbar />
        <Herosection content={heroContent} />
      </div>
      {/* OverfiveHundread */}
      <WhyWpEssential content={reasonContent} />
      <Statsection />
      <Seamlesscart data={repeatdata} />
      <YourCustomerSection data={repeatuseCaseData} />
      <SeamlessIntegration />

      <Footer />
    </div>
  );
}

export default page;
