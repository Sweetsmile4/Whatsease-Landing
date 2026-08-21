import Herosection from '@/components/comparison/Herosection';
import MoreThanJustSection from '@/components/comparison/MoreThanJustSection';
import OverfiveHundread from '@/components/comparison/OverfiveHundread';
import ReasonToChoose from '@/components/comparison/ReasonToChoose';
import SeamlessIntegration from '@/components/comparison/SeamlessIntegration';
import TheRowsThatProveSection from '@/components/comparison/TheRowsThatProveSection';
import Footer from '@/components/Footer';

import { InteractiveHoverButton } from '@/components/ui/InteractiveHoverButton';
import React from 'react';
import Navbar from '../components/Navbar';

const data = {
  title: 'Reasons to Choose',
  companyName: 'Whatsease',
  competitor: 'QuickReply.ai',
  features: [
    {
      title: 'Complete Event Lifecycle Automation',
      description:
        "Unlike QuickReply.ai's eCommerce focus, Whatsease powers the full event journey—from registration to check-in—with ticketing, WhatsApp automation, on-ground support, and real-time tracking in one platform.",
      image: '/svg/comp/completeevent.svg',
      imageAlt: 'Complete event lifecycle',
      imageFirst: false,
    },
    {
      title: 'Real-Time Support with Dedicated Teams',
      description:
        'WhatsEase offers 24/7 real-time support with dedicated tech and field teams—something QuickReply.ai lacks—ensuring smooth event execution beyond just chatbots.',
      image: '/svg/comp/realtime.svg',
      imageAlt: 'Real-time support',
      imageFirst: true,
    },
    {
      title: 'Smart Bulk Messaging with Personalization',
      description:
        'WhatsEase goes beyond basic messaging with smart personalization, vernacular support, and Easedata AI—driving better engagement and more registrations than QuickReply.ai.',
      image: '/svg/comp/smartbulk.svg',
      imageAlt: 'Smart bulk messaging',
      imageFirst: false,
    },
  ],
};

const heroContent = {
  headingHtml: `WhatsEase x Weekend Bazaar: <i class='text-black'> 60% </i> Faster Entry, <i class='text-black'>12,000+ </i> Tickets Processed`,
  description:
    'Weekend Bazaar used WhatsEase for ticket booking and entry management via WhatsApp, enhancing event operations and customer experience.',
  buttonText: 'Try Now',
  mainImage: '/images/10.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

function page() {
  return (
    <>
      <div className="flex h-full w-full flex-col overflow-hidden">
        <div className="h-full bg-[#04B851] px-3 py-6 pb-0 pt-20 sm:px-6 md:px-12 md:pb-[130px] lg:px-20">
          <Navbar />
          <Herosection content={heroContent} />
        </div>
        <div className="">
          {/* OverfiveHundread */}
          <ReasonToChoose data={data} />
          {/* <SeamlessIntegration /> */}
          {/* <MoreThanJustSection /> */}
          {/* <TheRowsThatProveSection /> */}
        </div>
      </div>
    </>
  );
}

export default page;
