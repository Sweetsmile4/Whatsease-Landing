import OverfiveHundread from '@/components/comparison/OverfiveHundread';
import SeamlessIntegration from '@/components/comparison/SeamlessIntegration';
import Footer from '@/components/Footer';
import Navbar from '@/app/components/Navbar';
import Herosection from '@/components/use-case/Herosection';
import Seamlesscart from '@/components/use-case/Seamlesscart';
import Statsection from '@/components/use-case/Statsection';
import WhyWpEssential from '@/components/use-case/WhyWpEssential';
import YourCustomerSection from '@/components/use-case/YourCustomerSection';
import React from 'react';

const retaildata = {
  background:
    'bg-gradient-to-r from-white via-[#13D960]/20 to-white from-[10%] via-[50%] to-[90%]',
  content: {
    heading: 'Seamless Cart Recovery via WhatsApp',
    description:
      'Engage customers in real-time by sending automated cart recovery reminders directly through WhatsApp. With up to <b>60%</b> reduction in abandoned carts, recover lost sales effortlessly and increase your revenue without leaving the app.',
    buttonText: 'Book Your Demo',
  },
  image: {
    src: '/svg/all/seamlessretail.svg',
    alt: '',
  },
};

const retailuseCaseData = {
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
        mainImage: '/svg/all/persneng.svg',
        innerImage: '/svg/all/persnenginside.svg',
        chatMessages: [
          'Hey 👋 Just a reminder!',
          "Your cart's still waiting for you! We've saved your items so you can pick up right where you left off.",
          "Plus, here's a little nudge: complete your order now and enjoy an exclusive 10% OFF.",
          "Tap below to checkout — it's quick, secure, and just a message away!",
          "Hurry, before they're gone! ⏳",
        ],
        ctaImage: '/svg/all/cta.svg',
        ctaText: 'Shop Now',
        thankyouImage: '/svg/all/thankmsg.svg',
        thankyouText: 'Thank you for the reminder WhatsEase!',
      },
      content: {
        title: 'Personalized Engagement at Scale',
        description:
          'Enhance customer loyalty by delivering tailored promotions, product recommendations, and exclusive offers based on purchase history. WhatsApp automation enables a 57% higher click-through rate, turning interactions into repeat purchases and building lasting customer relationships.',
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
        title: 'Real-Time Order Tracking & Support',
        description:
          'Provide customers with instant updates on their order status, delivery, and shipping via WhatsApp. Offer seamless, 24/7 support through automated or live chat, ensuring a smoother, more reliable shopping experience with an increase in customer satisfaction rates.',
        buttonText: 'Book Now',
      },
    },
  ],
};

const heroContent = {
  headingHtml: `Recover Up to <i class='text-black'>60%</i> of 
    Abandoned Carts with 
    WhatsApp Commerce`,
  description:
    'Stop losing attendees. Convert interest to registrations instantly with smart WhatsApp ticketing and real-time support—only with Whatsease.',
  buttonText: 'Book Your Demo',
  mainImage: '/svg/all/device.svg',
  cornerImage: '/svg/comp/blackcurv.svg',
};
const reasonContent = {
  heading1: 'Why WhatsApp is Essential for',
  heading2: 'Effective Cart Recovery in Modern E-Commerce',
  description:
    'Traditional recovery methods like emails and web notifications are losing their edge — customers want speed, convenience, and direct communication. That’s where WhatsApp steps in.',
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
      <Seamlesscart data={retaildata} />
      <YourCustomerSection data={retailuseCaseData} />
      <SeamlessIntegration />

      <Footer />
    </div>
  );
}

export default page;
