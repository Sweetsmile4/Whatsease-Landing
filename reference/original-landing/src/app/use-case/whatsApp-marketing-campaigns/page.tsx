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

const whatsappMArketingData = {
  background:
    'bg-gradient-to-r from-white via-[#13D960]/20 to-white from-[10%] via-[50%] to-[90%]',
  content: {
    heading: 'Broadcast Campaigns ',
    description:
      'Send bulk messages to thousands of users in seconds, fully compliant with WhatsApp policies. Promote upcoming events, product launches, special offers, or time-sensitive updates. Personalize each message with recipient names, preferences, or past behaviors to enhance engagement. Track opens, clicks, and replies to measure the success of your campaigns. Achieve direct, high-conversion communication without the noise.',
    buttonText: 'Book Your Demo',
  },
  image: {
    src: '/svg/all/wpc1.svg',
    alt: '',
  },
};

const whatsappMArketingDataData = {
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
        title: 'Abandoned Cart & Reminder Nudges ',
        description:
          'Recover missed opportunities by sending gentle reminders to users who didn’t complete sign-ups, payments, or bookings. Use quick action buttons to allow them to easily resume where they left off. Create urgency with limited-time offers or countdowns, boosting conversion rates with minimal effort. Ideal for ticket sales and direct-to-consumer (D2C) brands.',
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
        title: 'Drip Campaigns & Sequenced Messaging ',
        description:
          'Create automated message journeys that span days or weeks to onboard new users, educate them about your services, or upsell premium offerings. Trigger messages based on user actions or predefined timelines, delivering a personalized experience for each user — all on autopilot. Perfect for long-term engagement and enhancing brand recall.',
        buttonText: 'Book Now',
      },
    },
    {
      layout: 'image-text',
      image: {
        type: 'simple',
        mainImage: '/svg/all/wpc4.svg',
      },
      content: {
        title: 'Offer & Coupon Campaigns ',
        description:
          "Send exclusive promo codes, early access links, or flash sale alerts directly to users' WhatsApp. Coupons are auto-generated and tracked, with redemption insights accessible through your dashboard. Generate excitement with gamified campaigns or limited-stock notifications. Achieve higher open and redemption rates compared to email or SMS, making it ideal for driving D2C growth and repeat sales.",
        buttonText: 'Book Now',
      },
    },
  ],
};

const heroContent = {
  headingHtml: `Boost Engagement & Sales by <i class='text-black'>60% </i> with WhatsApp Campaigns`,
  description:
    'Automate promotions, reminders, and customer engagement through WhatsApp. Whatsease’s smart campaigns drive higher conversion rates with personalized, real-time messaging that enhances customer interaction and boosts sales.',
  buttonText: 'Book Your Demo',
  mainImage: '/svg/all/device.svg',
  cornerImage: '/svg/comp/blackcurv.svg',
};
const reasonContent = {
  heading1: 'Why WhatsApp Marketing Campaigns ',
  heading2: 'are a Game-Changer for High-Impact',
  description:
    'WhatsApp chatbots automate lead capture, customer support, product showcases, and feedback collection, providing a smarter, faster way to engage and support customers — all in one platform.',
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
      <Seamlesscart data={whatsappMArketingData} />
      <YourCustomerSection data={whatsappMArketingDataData} />
      <SeamlessIntegration />
      <Footer />
    </div>
  );
}

export default page;
