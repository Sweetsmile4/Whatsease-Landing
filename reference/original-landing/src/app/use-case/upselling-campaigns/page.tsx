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

const upsellingdata = {
  background:
    'bg-gradient-to-r from-white via-[#13D960]/20 to-white from-[10%] via-[50%] to-[90%]',
  content: {
    heading: 'Personalized Product Recommendations ',
    description:
      'Leverage WhatsApp to offer personalized upsells by recommending premium versions, add-ons, or bundles based on user behavior. Utilize data from past purchases, preferences, or event history to deliver tailored suggestions. Enhance the experience with rich media, including images, videos, or product links, directly within the chat. Drive impulse purchases with exclusive "Just for You" messaging, making it ideal for D2C brands and event upgrades.',
    buttonText: 'Book Your Demo',
  },
  image: {
    src: '/svg/all/upcamp.svg',
    alt: '',
  },
};

const upsellinguseCaseData = {
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
        mainImage: '/svg/all/upcamp2.svg',
      },
      content: {
        title: 'Event Add-Ons & Upgrades ',
        description:
          'Offer exclusive VIP access, backstage passes, or merchandise bundles after registration. Send targeted messages based on ticket type or interests, with easy one-tap upgrade options and integrated payment links. Boost revenue per attendee effortlessly, ideal for concerts, workshops, and exclusive events.',
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
        title: ' Post-Purchase Upsells ',
        description:
          'Trigger automated follow-up messages after a purchase or event registration. Recommend complementary products, accessories, or upcoming events, using urgency tactics like limited-time discounts. Automate message timing to capitalize on fresh interest, driving repeat purchases with minimal effort.',
        buttonText: 'Book Now',
      },
    },
    {
      layout: 'image-text',
      image: {
        type: 'simple',
        mainImage: '/svg/all/upcamp3.svg',
      },
      content: {
        title: 'Loyalty-Based Upselling ',
        description:
          'Reward loyal customers with exclusive upgrade offers, such as early access to premium events, pre-orders, or higher-tier services. Segment your audience based on purchase frequency or ticket history, making customers feel valued and encouraging higher spending. Perfect for fostering long-term brand loyalty.',
        buttonText: 'Book Now',
      },
    },
  ],
};

const heroContent = {
  headingHtml: `Drive <i class='text-black'>  40% </i> More Revenue with Personalized WhatsApp Upselling Campaigns`,
  description:
    'Automate promotions, reminders, and customer engagement through WhatsApp. Whatsease’s smart campaigns drive higher conversion rates with personalized, real-time messaging that enhances customer interaction and boosts sales.',
  buttonText: 'Book Your Demo',
  mainImage: '/svg/all/device.svg',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const reasonContent = {
  heading1: 'Why WhatsApp Upselling Campaigns ',
  heading2: 'Are a Game-Changer for Revenue Growth',
  description:
    'WhatsApp marketing campaigns enable personalized upselling at scale — from product add-ons to VIP upgrades — all delivered through smart, automated chat. Drive higher customer value and maximize ROI with minimal effort.',
};

function page() {
  return (
    <div>
      <div className="bg-[#04B851] px-3 py-6 pb-[15px] sm:px-6 md:px-12 md:pb-[50px] lg:px-20">
        <Navbar />
        <Herosection content={heroContent} />
      </div>
      {/* OverfiveHundread */}
      <WhyWpEssential content={reasonContent} />
      <Statsection />
      <Seamlesscart data={upsellingdata} />
      <YourCustomerSection data={upsellinguseCaseData} />
      <SeamlessIntegration />
      <Footer />
    </div>
  );
}

export default page;
