import Navbar from '@/app/components/Navbar';
import Herosection from '@/components/comparison/Herosection';
import MoreThanJustSection from '@/components/comparison/MoreThanJustSection';
import OverfiveHundread from '@/components/comparison/OverfiveHundread';
import ReasonToChoose from '@/components/comparison/ReasonToChoose';
import SeamlessIntegration from '@/components/comparison/SeamlessIntegration';
import TheRowsThatProveSection from '@/components/comparison/TheRowsThatProveSection';
// import Footer from '@/components/Footer';
import React from 'react';

const data = {
  title: 'Reasons to Choose',
  companyName: 'Whatsease',
  competitor: 'Bitespeed',
  features: [
    {
      title: 'WhatsApp-First Growth Engine vs. Ecommerce-Specific Platform',
      description:
        'Bitespeed is primarily an eCommerce platform that focuses on driving sales through SMS and WhatsApp marketing. WhatsEase.in is a <b> WhatsApp-first growth engine </b> that not only supports eCommerce sales but also powers <b>  event management, product launches, </b> and customer engagement through automated WhatsApp journeys — driving results across a variety of use cases. ',
      image: '/svg/comp/completeevent.svg',
      imageAlt: 'Complete event lifecycle',
      imageFirst: false,
    },
    {
      title: 'End-to-End Automation Across D2C & Events',
      description:
        "WhatsEase.in integrates <b> D2C sales funnels </b> with <b> event workflows,</b> offering features like WhatsApp-based registrations, ticketing, and QR check-ins. Bitespeed, while effective for product-based communication, doesn't offer comprehensive event management tools, limiting its use for brands running both online stores and offline experiences. ",
      image: '/svg/comp/realtime.svg',
      imageAlt: 'Real-time support',
      imageFirst: true,
    },
    {
      title: 'Smart Automation for Better ROI',
      description: `WhatsEase.in offers <b>personalized automation</b>, smart segmentation, and retargeting — leading to <b>8–10x ROAS </b> and up <b> to 80% reduced CAC. </b> Bitespeed focuses on SMS/WhatsApp marketing but lacks the depth of automation features that WhatsEase offers for driving <b> long-term customer engagement,</b> conversion, and event success. `,
      image: '/svg/comp/smartbulk.svg',
      imageAlt: 'Smart bulk messaging',
      imageFirst: false,
    },
  ],
};

const heroContent = {
  headingHtml: `<h1>WhatsEase vs Bitespeed:</h1> <h1 class='mt-3'>A Deep Dive into <i class='text-black'>  WhatsApp-First Automation </i> vs eCommerce-Focused Messaging </h1>`,
  description:
    'WhatsEase goes beyond eCommerce—offering smart WhatsApp automation for both D2C growth and event management, unlike Bitespeed’s limited marketing tools.',
  buttonText: 'Try Now',
  mainImage: '/images/3.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

function page() {
  return (
    <div>
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="h-auto min-h-[100vh] bg-[#04B851] px-3 py-6 pb-0 pt-20 sm:px-6 md:px-12 md:pb-[130px] lg:px-20">
        <Herosection content={heroContent} />
      </div>
      <div className="">
        {/* OverfiveHundread */}
        <ReasonToChoose data={data} />
        <SeamlessIntegration />
        <MoreThanJustSection />
        <TheRowsThatProveSection />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default page;
