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
  competitor: 'Sinch',
  features: [
    {
      title: 'Tailored for D2C & Events vs. Infrastructure-Led Messaging',
      description:
        'Sinch is a global communications infrastructure platform — great for enterprises needing SMS, email, or voice at scale. WhatsEase.in is purpose-built for <b>  D2C brands and event organizers,</b>  offering pre-built tools like WhatsApp ticketing, product drops, and real-time customer journeys — all without developer dependency.   ',
      image: '/svg/comp/completeevent.svg',
      imageAlt: 'Complete event lifecycle',
      imageFirst: false,
    },
    {
      title: 'Out-of-the-Box Growth Tools',
      description:
        'WhatsEase.in offers ready-to-launch flows for abandoned carts, restock alerts, and campaign broadcasts — helping brands convert more and grow faster. While Sinch provides APIs and SDKs, it requires heavy lifting to create similar experiences, which can delay go-to-market speed and dilute performance gains.  ',
      image: '/svg/comp/realtime.svg',
      imageAlt: 'Real-time support',
      imageFirst: true,
    },
    {
      title: 'Simplified CX, Higher Engagement',
      description:
        'With WhatsEase.in, brands get a full-funnel WhatsApp experience — from first click to check-out to post-purchase care. This <b>  higher engagement naturally boosts ROAS and lowers acquisition costs, </b> especially when compared to generic messaging routes like SMS or email offered by Sinch.   ',
      image: '/svg/comp/smartbulk.svg',
      imageAlt: 'Smart bulk messaging',
      imageFirst: false,
    },
  ],
};

const heroContent = {
  headingHtml: `<h1>WhatsEase vs Sinch:</h1> <h1 class='mt-3'> <i class='text-black'>Tailored D2C Growth </i> vs. Infrastructure-Led Messaging</h1>`,
  description:
    'Weekend Bazaar used WhatsEase for ticket booking and entry management via WhatsApp, enhancing event operations and customer experience.',
  buttonText: 'Try Now',
  mainImage: '/images/9.png',
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
