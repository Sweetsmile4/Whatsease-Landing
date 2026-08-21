import Herosection from '@/components/comparison/Herosection';
import MoreThanJustSection from '@/components/comparison/MoreThanJustSection';
import OverfiveHundread from '@/components/comparison/OverfiveHundread';
import ReasonToChoose from '@/components/comparison/ReasonToChoose';
import SeamlessIntegration from '@/components/comparison/SeamlessIntegration';
import TheRowsThatProveSection from '@/components/comparison/TheRowsThatProveSection';
import Footer from '@/components/Footer';
import Navbar from '@/app/components/Navbar';
import React from 'react';

const data = {
  title: 'Reasons to Choose',
  companyName: 'Whatsease',
  competitor: 'Kwikchat',
  features: [
    {
      title: 'WhatsApp-First Growth Engine vs. Chat-Only Support',
      description:
        'KwikChat is primarily a live chat tool that integrates with WhatsApp for customer support. WhatsEase.in is <b>  built to drive growth,</b> offering a <b>  full-funnel WhatsApp experience </b> — from lead capture, product recommendations, and abandoned cart recovery to event ticketing and post-sale engagement, all within WhatsApp.  ',
      image: '/svg/comp/completeevent.svg',
      imageAlt: 'Complete event lifecycle',
      imageFirst: false,
    },
    {
      title: 'Seamless Integration for Events & D2C',
      description:
        'WhatsEase.in combines <b> eCommerce and event workflows </b> in one platform — allowing D2C brands to automate sales funnels, send reminders, and manage event registrations without needing additional tools. KwikChat’s focus is more limited to customer service and doesn’t offer event management or sales-specific automation.  ',
      image: '/svg/comp/realtime.svg',
      imageAlt: 'Real-time support',
      imageFirst: true,
    },
    {
      title: ' Automated Campaigns with Higher Efficiency ',
      description:
        'WhatsEase.in helps brands achieve <b>8-10x ROAS and 80% lower CAC </b> through smart segmentation and personalized automation across both <b> D2C and event </b> use cases. KwikChat, while strong on real-time chat, lacks the same depth of <b> automation and conversion-driven tools </b> for sustained business growth.  ',
      image: '/svg/comp/smartbulk.svg',
      imageAlt: 'Smart bulk messaging',
      imageFirst: false,
    },
  ],
};

const heroContent = {
  headingHtml: `<h1>WhatsEase vs KwikChat:</h1> <h1 class='mt-3'> <i class='text-black'>Full-Funnel Growth</i> vs. Chat-Only Support</h1>`,
  description:
    'Weekend Bazaar used WhatsEase for ticket booking and entry management via WhatsApp, enhancing event operations and customer experience.',
  buttonText: 'Try Now',
  mainImage: '/images/7.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

function page() {
  return (
    <div>
      <div className="h-auto min-h-screen bg-[#04B851] px-3 py-6 pb-0 pt-20 sm:px-6 md:px-12 md:pb-[130px] lg:px-20">
        <Navbar />
        <Herosection content={heroContent} />
      </div>
      <div className="">
        {/* OverfiveHundread */}
        <ReasonToChoose data={data} />
        <SeamlessIntegration />
        <MoreThanJustSection />
        <TheRowsThatProveSection />
        <Footer />
      </div>
    </div>
  );
}

export default page;
