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

const orderAlertdata = {
  background:
    'bg-gradient-to-r from-white via-[#13D960]/20 to-white from-[10%] via-[50%] to-[90%]',
  content: {
    heading: ' Order Confirmation Alerts ',
    description: `Send instant WhatsApp notifications to confirm successful purchases, including order summaries, item details, expected delivery dates, and support contact information. This ensures customers feel assured and well-informed immediately after checkout, reducing post-purchase anxiety and support queries. The notifications are fully customizable with your brand's tone and logo, offering a premium customer experience.`,
    buttonText: 'Book Your Demo',
  },
  image: {
    src: '/svg/all/seamlesscart.svg',
    alt: '',
  },
};

const orderAlertuseCaseData = {
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
          'Shipping & Delivery Updates: Stay in the Know! 🚚💬!',
          'Never miss a step of your order’s journey! With real-time WhatsApp updates, we’ll notify you when your order is packed, shipped, out for delivery, or delayed. ',
          'Track your shipment with ease through direct links and get delivery partner details right in the chat. Stay informed and experience a seamless delivery process!',
        ],
        ctaImage: '/svg/all/cta.svg',
        ctaText: 'Shop Now',
        thankyouImage: '/svg/all/thankmsg.svg',
        thankyouText: 'Thank you for the reminder WhatsEase!',
      },
      content: {
        title: ' Shipping & Delivery Updates ',
        description:
          'Keep customers informed with real-time WhatsApp updates as their order progresses. Notify them when their order is packed, shipped, out for delivery, or delayed, and provide tracking links and delivery partner information directly in the chat. This increases transparency and builds trust in your fulfillment process, making it ideal for D2C brands, logistics, and event ticket deliveries.',
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
        title: 'Payment Status Notifications ',
        description:
          'Automate payment status updates through WhatsApp, notifying customers when payments are received, pending, or failed. Provide quick resolution options, including links to retry payments or view invoices directly in the chat. This streamlines transaction cycles, improves cash flow, and reduces the need for support inquiries, making it ideal for ticketing, subscriptions, and COD confirmations.',
        buttonText: 'Book Now',
      },
    },
    {
      layout: 'image-text',
      image: {
        type: 'simple',
        mainImage: '/svg/all/ordercan.svg',
      },
      content: {
        title: 'Order Cancellation & Refund Updates ',
        description:
          'Automate instant notifications for order cancellations or refund processes via WhatsApp. Include key details like refund timelines, support contacts, and alternative product suggestions. This not only reduces customer frustration but also enhances brand credibility, transforming potentially negative experiences into opportunities for retention. Fully integrated with your existing systems for seamless operation.',
        buttonText: 'Book Now',
      },
    },
  ],
};

const heroContent = {
  headingHtml: `Boost Customer <i class='text-black'> Satisfaction and Retention </i> with WhatsApp Order Notifications`,
  description:
    'Automate personalized product launch notifications, exclusive offers, and pre-order incentives. Whatsease enhances customer engagement, driving higher sales and maximizing revenue with minimal effort..',
  buttonText: 'Book Your Demo',
  mainImage: '/svg/all/device.svg',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const reasonContent = {
  heading1: 'Why WhatsApp is Essential for ',
  heading2: 'Streamlining Order Alerts & Customer Notifications',
  description:
    'WhatsApp enables real-time, automated messaging that keeps customers informed, reduces support queries, and enhances their post-purchase experience.',
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
      <Seamlesscart data={orderAlertdata} />
      <YourCustomerSection data={orderAlertuseCaseData} />
      <SeamlessIntegration />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default page;
