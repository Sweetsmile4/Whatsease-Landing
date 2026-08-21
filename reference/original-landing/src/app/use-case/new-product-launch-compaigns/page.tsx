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
import React from 'react';

const newProductdata = {
  background:
    'bg-gradient-to-r from-white via-[#13D960]/20 to-white from-[10%] via-[50%] to-[90%]',
  content: {
    heading: 'Early Access Campaigns',
    description:
      'Generate excitement by giving loyal customers exclusive early access to your new product. Send personalized launch invitations or pre-order links directly through WhatsApp. Enhance urgency with countdown timers, teaser videos, or limited availability offers. Personalized messaging ensures higher open and click rates, making it an ideal strategy for D2C brands launching high-demand products.',
    buttonText: 'Book Your Demo',
  },
  image: {
    src: '/svg/all/npl1.svg',
    alt: '',
  },
};

const newProductuseCaseData = {
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
          'Sneak Peek Week: The Future of Skincare is Coming! 🌿✨!',
          'Get ready for 5 days of exclusive behind-the-scenes looks, voice notes from our founders, and first glimpses of our revolutionary new skincare line. .',
          'Delivered daily on WhatsApp 📲 — because your glow-up deserves a countdown! 💬💖',
        ],
        ctaImage: '/svg/all/cta.svg',
        ctaText: 'Shop Now',
        thankyouImage: '/svg/all/thankmsg.svg',
        thankyouText: 'Thank you for the reminder WhatsEase!',
      },
      content: {
        title: 'Product Teasers & Build-Up ',
        description:
          'Launch a multi-day teaser campaign with sneak peeks, behind-the-scenes content, and feature reveals. Automate daily messages to build anticipation and excitement. Enhance the experience with videos, product images, and voice notes. This strategy increases engagement and hype ahead of the official launch, ideal for brands that focus on storytelling and immersive experiences.',
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
        title: 'Launch Day Broadcasts',
        description:
          'Go live with a bang by notifying your audience the moment your product drops. Send direct product links, pricing details, and clear CTAs for immediate purchases. Support high-volume broadcasts with real-time performance tracking. Follow up with customer support or upsell flows to maximize engagement and drive conversions. Ensure maximum visibility and instant traction for your launch.',
        buttonText: 'Book Now',
      },
    },
    {
      layout: 'image-text',
      image: {
        type: 'simple',
        mainImage: '/svg/all/npl3.svg',
      },
      content: {
        title: 'Influencer & Community Rollout ',
        description:
          'Collaborate with influencers or brand ambassadors to amplify your product launch. Enable them to trigger WhatsApp flows for their followers, complete with referral codes. Track performance and engagement for each partner. Build a community-driven launch with viral potential, perfect for D2C, fashion, beauty, and tech products.',
        buttonText: 'Book Now',
      },
    },
  ],
};

const heroContent = {
  headingHtml: `boost New Product 
Launch Revenue by <i class='text-black'> 40% </i> with WhatsApp Campaigns`,
  description:
    'Automate personalized product launch notifications, exclusive offers, and pre-order incentives. Whatsease enhances customer engagement, driving higher sales and maximizing revenue with minimal effort..',
  buttonText: 'Book Your Demo',
  mainImage: '/svg/all/device.svg',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const reasonContent = {
  heading1: 'Why WhatsApp is Essential for ',
  heading2: 'Driving Successful New Product Launches',
  description:
    'WhatsApp enables personalized, automated messaging that builds excitement, boosts engagement, and drives instant sales for new product launches.',
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
      <Seamlesscart data={newProductdata} />
      <YourCustomerSection data={newProductuseCaseData} />
      <SeamlessIntegration />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default page;
