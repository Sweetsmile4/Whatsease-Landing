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

const codToPrepaiddata = {
  background:
    'bg-gradient-to-r from-white via-[#13D960]/20 to-white from-[10%] via-[50%] to-[90%]',
  content: {
    heading: 'Personalized Payment Reminder Messages ',
    description: `Send timely WhatsApp reminders to customers who opted for Cash on Delivery (COD), encouraging them to switch to prepaid options. Highlight the advantages of prepaid orders, such as quicker processing and exclusive discounts. Offer secure payment links and create urgency with limited-time offers or special coupon codes. Simplify the transition with clear, transparent messaging, boosting conversion rates and enhancing the customer experience.`,
    buttonText: 'Book Your Demo',
  },
  image: {
    src: '/svg/all/seamlesscart.svg',
    alt: '',
  },
};

const codToPrepaiduseCaseData = {
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
          'Hey Anubhav!',
          'Want to save more on your order? Switch from Cash on Delivery to prepaid and enjoy an instant ₹50 OFF! 🙌',
          'Here’s your exclusive coupon code: PREPAID50(Valid for one-time use only)',
          "Tap below to checkout — it's quick, secure, and just a message away!",
          "Hurry, before they're gone! ⏳",
        ],
        ctaImage: '/svg/all/cta.svg',
        ctaText: 'Change To Prepaid Now',
        thankyouImage: '/svg/all/thankmsg.svg',
        thankyouText: 'Thank you for the reminder WhatsEase!',
      },
      content: {
        title: 'Exclusive Discounts for Prepaid Conversion',
        description:
          'Provide an exclusive discount or cashback to customers who convert their COD orders to prepaid. Deliver this offer through WhatsApp with a personalized, one-time-use coupon code. Highlight the benefits of prepaid orders, including secure payment, guaranteed delivery, and faster processing. Customers are motivated to switch while enjoying added value. Track conversions and continue to reward loyal customers with future offers.',
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
        title: 'Payment Gateway Integration & Links ',
        description:
          'Simplify the prepaid payment process by sending secure payment links via WhatsApp. Offer multiple payment options like credit/debit cards, wallets, or UPI. Provide clear, step-by-step instructions and instant payment confirmation. This ensures a smooth, cashless experience for customers who prefer secure transactions.',
        buttonText: 'Book Now',
      },
    },
    {
      layout: 'image-text',
      image: {
        type: 'simple',
        mainImage: '/svg/all/cod1.svg',
      },
      content: {
        title: 'Easy COD-to-Prepaid Process Explanation ',
        description:
          'Automate clear and informative WhatsApp messages to guide customers through the COD to prepaid switch. Simplify the steps and highlight the benefits. Offer real-time support or FAQ links to assist with any questions, ensuring a smooth, confident transition for customers. This reduces friction and encourages a higher conversion rate.',
        buttonText: 'Book Now',
      },
    },
  ],
};

const reasonContent = {
  heading1: 'Why WhatsApp is Key to Driving ',
  heading2: ' COD to Prepaid Conversion & Experience',
  description:
    'WhatsApp simplifies customer support with real-time, automated messaging, reducing inquiries and boosting satisfaction through efficient communication.',
};

const heroContent = {
  headingHtml: `Boost COD to Prepaid Conversions and <i class='text-black'>  Customer Loyalty </i> with WhatsApp`,
  description:
    'Automate real-time order updates, payment alerts, and delivery notifications. Whatsease keeps customers informed, enhances transparency, and improves post-purchase experience, driving higher engagement and repeat business.',
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
      <Seamlesscart data={codToPrepaiddata} />
      <YourCustomerSection data={codToPrepaiduseCaseData} />
      <SeamlessIntegration />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default page;
