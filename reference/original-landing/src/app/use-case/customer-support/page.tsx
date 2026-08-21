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

const customerSupportdata = {
  background:
    'bg-gradient-to-r from-white via-[#13D960]/20 to-white from-[10%] via-[50%] to-[90%]',
  content: {
    heading: 'Instant Query Resolution ',
    description: `Enable customers to easily reach out for support via WhatsApp. Automate responses to common queries, such as order status, returns, or product inquiries, using personalized, pre-configured messages. For more complex issues, seamlessly escalate to live agents. This ensures quick, efficient support, enhancing customer satisfaction with faster response times.`,
    buttonText: 'Book Your Demo',
  },
  image: {
    src: '/svg/all/seamlesscart.svg',
    alt: '',
  },
};

const customerSupportuseCaseData = {
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
        mainImage: '/svg/all/cs1.svg',
      },
      content: {
        title: ' 24/7 Support Availability ',
        description:
          'Provide 24/7 support with automated responses for after-hours inquiries. Direct customers to relevant resources and schedule personalized auto-replies based on time zones or urgent issues. Ensure customers feel valued and supported, regardless of time, making it ideal for global brands or businesses with high-volume interactions.',
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
        title: 'Ticketing & Issue Tracking ',
        description:
          'Streamline customer support by turning conversations into trackable tickets for efficient follow-up. Automatically assign tickets to the appropriate department or agent and keep customers informed of their issue’s status via WhatsApp. Track resolution times to maintain consistent service quality, perfect for managing complex or ongoing support requests.',
        buttonText: 'Book Now',
      },
    },
    {
      layout: 'image-text',
      image: {
        type: 'simple',
        mainImage: '/svg/all/cs2.svg',
      },
      content: {
        title: 'Live Chat Integration ',
        description:
          'Seamlessly transition from automated messages to live chat for real-time support. Equip agents with conversation history for faster resolutions and allow them to send rich media such as images, videos, and documents for more effective assistance. Deliver a personalized customer experience that strengthens loyalty, all through WhatsApp for faster, smarter, and more engaging support.',
        buttonText: 'Book Now',
      },
    },
  ],
};

const heroContent = {
  headingHtml: `Enhance <i class='text-black' >Customer 
Satisfaction </i> and Loyalty with WhatsApp Support Notifications`,
  description:
    'Automate timely updates on orders, payments, and deliveries. Whatsease ensures seamless communication, improving transparency, reducing inquiries, and fostering stronger customer relationships.',
  buttonText: 'Book Your Demo',
  mainImage: '/svg/all/device.svg',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const reasonContent = {
  heading1: 'Why WhatsApp is Essential for ',
  heading2: ' Streamlining Support & Boosting Satisfaction',
  description:
    'WhatsApp simplifies customer support with real-time, automated messaging, reducing inquiries and boosting satisfaction through efficient communication.',
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
      <Seamlesscart data={customerSupportdata} />
      <YourCustomerSection data={customerSupportuseCaseData} />
      <SeamlessIntegration />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default page;
