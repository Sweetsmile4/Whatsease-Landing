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
  competitor: 'Interakt',
  features: [
    {
      title: 'Purpose-Built for D2C Growth',
      description:
        'WhatsEase.in is designed to help D2C brands drive conversions and customer engagement directly on WhatsApp. From abandoned cart recovery to product recommendations and order updates, it’s tailored for sales growth. Interakt supports basic commerce features, but lacks the flexibility and depth for high-conversion campaigns. ',
      image: '/svg/comp/completeevent.svg',
      imageAlt: 'Complete event lifecycle',
      imageFirst: false,
    },
    {
      title: 'All-in-One Engagement Platform',
      description:
        "Whether you're hosting an event or running a D2C campaign, WhatsEase.in handles registrations, payments, broadcasts, and customer journeys — all in one place. Interakt requires workarounds or third-party tools to cover multiple use cases, often leading to fragmented experiences. ",
      image: '/svg/comp/realtime.svg',
      imageAlt: 'Real-time support',
      imageFirst: true,
    },
    {
      title: 'Smarter Automation with Custom Flows',
      description:
        'With WhatsEase.in, you can set up intelligent flows for product drops, restock alerts, ticketing, or post-purchase engagement — without writing code. It adapts to both one-time and ongoing campaigns. Interakt’s automation is functional but more rigid, limiting personalized experiences. ',
      image: '/svg/comp/smartbulk.svg',
      imageAlt: 'Smart bulk messaging',
      imageFirst: false,
    },
  ],
};

const heroContent = {
  headingHtml: `<h1> WhatsEase vs Interakt:</h1> <h1 class='mt-3'> <i class='text-black'>Purpose-Built D2C Growth</i> vs. Basic Automation Solutions</h1>`,
  description:
    'Weekend Bazaar used WhatsEase for ticket booking and entry management via WhatsApp, enhancing event operations and customer experience.',
  buttonText: 'Try Now',
  mainImage: '/images/6.png',
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
