import Navbar from '@/app/components/Navbar';
import OverfiveHundread from '@/components/comparison/OverfiveHundread';
import SeamlessIntegration from '@/components/comparison/SeamlessIntegration';
import Footer from '@/components/Footer';

import Testimonial from '@/components/Home/Testimonial';
import Herosection from '@/components/use-case/Herosection';
import Seamlesscart from '@/components/use-case/Seamlesscart';
import Statsection from '@/components/use-case/Statsection';
import WhyWpEssential from '@/components/use-case/WhyWpEssential';
import YourCustomerSection from '@/components/use-case/YourCustomerSection';
import React from 'react';

const chatbotdata = {
  background:
    'bg-gradient-to-r from-white via-[#13D960]/20 to-white from-[10%] via-[50%] to-[90%]',
  content: {
    heading: 'Automated WhatsApp Lead Generation Made Effortless',
    description:
      'Transform every WhatsApp message into a potential lead through intelligent chat flows. Qualify leads by asking targeted questions, collecting contact details, and auto-tagging leads based on interest. Integrate seamlessly with your CRM or export data instantly. With no human intervention required, the bot efficiently handles lead filtering, making it ideal for workshops, promotions, and early access campaigns.',
    buttonText: 'Book Your Demo',
  },
  image: {
    src: '/svg/all/cb.svg',
    alt: '',
  },
};

const chatbotuseCaseData = {
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
        mainImage: '/svg/all/customer-s.svg',
      },
      content: {
        title: 'Customer Support & FAQs ',
        description:
          'Automate 24/7 customer support with instant responses to common queries via WhatsApp. Address event-related questions such as ticket issues, directions, or schedule changes, and seamlessly route complex inquiries to a live agent when necessary. Reduce response times, enhance satisfaction, and maintain a consistent brand tone, all within WhatsApp.',
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
        title: 'Product Showcase & Demos ',
        description:
          'Leverage interactive chat to effectively showcase products, videos, or service options. Guide users through catalogs, pricing, and features in a step-by-step manner. Collect user preferences and provide personalized recommendations in real time, enhancing the overall customer experience.',
        buttonText: 'Book Now',
      },
    },
    {
      layout: 'image-text',
      image: {
        type: 'simple',
        mainImage: '/svg/all/cb3.svg',
      },
      content: {
        title: 'Feedback Collection & Polls',
        description:
          'Collect immediate feedback post-event or post-purchase via WhatsApp using rating scales, short answers, or quick polls within the chat. Achieve higher response rates than traditional forms and analyze results directly from your dashboard. This enables you to enhance future experiences based on valuable, real-time insights.',
        buttonText: 'Book Now',
      },
    },
  ],
};

const heroContent = {
  headingHtml: `Boost Customer Engagement and Sales with <i class='text-black'> WhatsApp Chatbots </i>`,
  description:
    'Automate lead capture, support, and product showcases via WhatsApp. Whatsease uses smart chatbots to deliver personalized experiences and boost conversion rates effortlessly.',
  buttonText: 'Book Your Demo',
  mainImage: '/svg/all/device.svg',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const reasonContent = {
  heading1: 'Why WhatsApp Chatbots are a',
  heading2: 'Game-Changer for Seamless Customer Engagement',
  description:
    'WhatsApp chatbots automate lead capture, customer support, product showcases, and feedback collection, providing a smarter, faster way to engage and support customers — all in one platform.',
};

function page() {
  return (
    <div>
      <Navbar />
      {/* OverfiveHundread */}
      <div className="bg-[#04B851] px-3 py-6 pb-[15px] pt-10 sm:px-6 md:px-12 md:pb-[50px] lg:md:pb-[130px] lg:px-20">
        <Herosection content={heroContent} />
      </div>
      {/* OverfiveHundread */}
      <WhyWpEssential content={reasonContent} />
      <Statsection />
      <Seamlesscart data={chatbotdata} />
      <YourCustomerSection data={chatbotuseCaseData} />
      <SeamlessIntegration />
      {/* <Testimonial /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default page;
