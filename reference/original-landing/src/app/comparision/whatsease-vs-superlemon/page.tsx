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
  competitor: 'superlemon',
  features: [
    {
      title: 'Beyond Just Shopify Plugins',
      description:
        'SuperLemon mainly functions as a WhatsApp plugin for Shopify, with features like order updates and basic automation. WhatsEase.in, on the other hand, is a full-fledged WhatsApp-first platform built for both <b> eCommerce and events,</b> offering custom journeys, payment flows, reminders, and ticketing — without being limited to just one platform.  ',
      image: '/svg/comp/completeevent.svg',
      imageAlt: 'Complete event lifecycle',
      imageFirst: false,
    },
    {
      title: 'Multi-Use Case Powerhouse',
      description:
        "WhatsEase.in caters to both <b> D2C brands </b> (with features like product drops, restock alerts, cart recovery) and <b>event hosts </b> (registration, QR ticketing, check-ins). SuperLemon is tightly tied to online stores and doesn't support events or offline campaigns, which limits growth opportunities beyond Shopify.  ",
      image: '/svg/comp/realtime.svg',
      imageAlt: 'Real-time support',
      imageFirst: true,
    },
    {
      title: 'Automation That Converts, Not Just Notifies',
      description:
        'While SuperLemon offers transactional alerts, WhatsEase.in is built to <b>drive action </b> — whether it’s making a purchase, signing up for an event, or showing up on time. With smart segmentation, personalized broadcasts, and flexible automation, WhatsEase is geared toward conversions, not just communication.  ',
      image: '/svg/comp/smartbulk.svg',
      imageAlt: 'Smart bulk messaging',
      imageFirst: false,
    },
  ],
};

const heroContent = {
  headingHtml: `<h1>WhatsEase vs SuperLemon:</h1> <h1 class='mt-3'><i class='text-black'>Full-Featured Growth Platform</i> vs. Shopify-Only Plugin</h1>`,
  description:
    'Weekend Bazaar used WhatsEase for ticket booking and entry management via WhatsApp, enhancing event operations and customer experience.',
  buttonText: 'Try Now',
  mainImage: '/images/10.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

function page() {
  return (
    <div>
      <div className="h-auto bg-[#04B851] px-3 py-6 pb-0 pt-20 sm:px-6 md:px-12 md:pb-[130px] lg:px-20">
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
