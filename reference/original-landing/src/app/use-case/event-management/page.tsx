'use client';
import React from 'react';
import OverfiveHundread from '@/components/comparison/OverfiveHundread';
import SeamlessIntegration from '@/components/comparison/SeamlessIntegration';
import Footer from '@/components/Footer';
import Navbar from '@/app/components/Navbar';
import Testimonial from '@/components/Home/Testimonial';
import Herosection from '@/components/use-case/Herosection';
import Seamlesscart from '@/components/use-case/Seamlesscart';
import Statsection from '@/components/use-case/Statsection';
import WhyWpEssential from '@/components/use-case/WhyWpEssential';
import YourCustomerSection from '@/components/use-case/YourCustomerSection';

const eventManagementdata = {
  background:
    'bg-gradient-to-r from-white via-[#13D960]/20 to-white from-[10%] via-[50%] to-[90%]',
  content: {
    heading: 'WhatsApp-Based Registration ',
    description:
      'Allow attendees to register for your event seamlessly through WhatsApp, eliminating the need for external forms or apps. They receive immediate confirmation and event details directly within their chat. This mobile-first, intuitive approach ensures higher conversion rates and a smooth user experience. Additionally, you can collect custom information such as guest names, preferences, and group details, making it ideal for both public and exclusive, invite-only events.',
    buttonText: 'Book Your Demo',
  },
  image: {
    src: '/svg/all/seamlesseventm.svg',
    alt: '',
  },
};

const reasonContent = {
  heading1: 'Why WhatsApp is a Game-Changer',
  heading2: 'for Smart Modern Event Management',
  description:
    'WhatsApp streamlines event management with instant registrations, automated reminders, and seamless check-ins, offering a smarter way to engage attendees.',
};

const eventManagementuseCaseData = {
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
        type: 'chat',
        mainImage: '/svg/all/eventmanagement.svg',
        // innerImage: "/svg/all/persnenginside.svg",
        // chatMessages: [
        //   "Hey 👋 Just a reminder!",
        //   "Your cart's still waiting for you! We've saved your items so you can pick up right where you left off.",
        //   "Plus, here's a little nudge: complete your order now and enjoy an exclusive 10% OFF.",
        //   "Tap below to checkout — it's quick, secure, and just a message away!",
        //   "Hurry, before they're gone! ⏳"
        // ],
        // ctaImage: "/svg/all/cta.svg",
        // ctaText: "Shop Now",
        // thankyouImage: "/svg/all/thankmsg.svg",
        // thankyouText: "Thank you for the reminder WhatsEase!"
      },
      content: {
        title: ' Digital Ticketing with Payments ',
        description:
          'Issue digital tickets instantly with QR codes upon payment confirmation. The platform supports one-time or tiered pricing, early bird discounts, and guest limits. Track registrations and revenue in real-time through the admin panel. Automated receipts and payment confirmations are sent directly via WhatsApp, ensuring a seamless process. The system is fully secure, with support for multiple payment gateways.',
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
        title: 'Automated Messaging & Reminders ',
        description:
          'Schedule personalized WhatsApp messages for event confirmations, reminders, and follow-ups. Include essential event details such as timing, venue, parking information, and dress code. Instantly send updates in the event of changes or emergencies, ensuring real-time communication. With automation in place, no manual effort is required once the event is live, keeping your guests informed and engaged throughout.',
        buttonText: 'Book Now',
      },
    },
    {
      layout: 'image-text',
      image: {
        type: 'simple',
        mainImage: '/svg/all/eventmanagement2.svg',
      },
      content: {
        title: ' Fast & Secure Check-in ',
        description:
          'Scan QR codes on digital tickets for quick, paperless entry. Monitor guest check-ins in real-time using a mobile or desktop dashboard. The system supports multiple entry gates and check-in agents simultaneously, allowing you to instantly view attendee status, including those checked in, pending, and total attendance. This ensures a seamless experience for both your team and attendees.',
        buttonText: 'Book Now',
      },
    },
  ],
};

const heroContent = {
  headingHtml: `Boost Event Conversions by <i class='text-black'> 4x </i> with WhatsApp-First Engagement`,
  description:
    'treamline registrations, automate reminders, and ensure smooth check-ins — all through WhatsApp. Whatsease helps you drive higher attendance and guest satisfaction with smart, chat-based event management.',
  buttonText: 'Book Your Demo',
  mainImage: '/svg/all/device.svg',
  cornerImage: '/svg/comp/blackcurv.svg',
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
      <Seamlesscart data={eventManagementdata} />
      <YourCustomerSection data={eventManagementuseCaseData} />
      <SeamlessIntegration />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default page;
