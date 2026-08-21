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
  competitor: 'Wati',
  features: [
    {
      title: 'Built for D2C and Events, Not Just Support',
      description:
        'WhatsEase.in goes beyond just customer support — it’s a revenue-focused platform for D2C brands and event organizers. You can drive product launches, run campaigns, automate sales funnels, or manage ticketed events. WATI is great for support teams, but lacks native tools for growth-focused use cases like ticketing or WhatsApp-driven conversions.  ',
      image: '/svg/comp/completeevent.svg',
      imageAlt: 'Complete event lifecycle',
      imageFirst: false,
    },
    {
      title: 'Custom Journeys without Code',
      description:
        "With WhatsEase.in, you can build automated, personalized flows for sales, registrations, order confirmations, reminders, and QR-based check-ins — all through a visual, no-code interface. WATI offers some automation, but customization is limited unless you're working with developers or external tools like Dialogflow.  ",
      image: '/svg/comp/realtime.svg',
      imageAlt: 'Real-time support',
      imageFirst: true,
    },
    {
      title: 'Event-Ready + Commerce-Smart',
      description:
        'WhatsEase is one of the few platforms that combines <b>event ticketing, D2C workflows,</b> and <b>WhatsApp automation</b> in one product. From sending QR codes to tracking guest check-ins or automating restock alerts — it’s all covered. WATI doesn’t natively support event management or end-to-end commerce journeys in the same way.  ',
      image: '/svg/comp/smartbulk.svg',
      imageAlt: 'Smart bulk messaging',
      imageFirst: false,
    },
  ],
};

const heroContent = {
  headingHtml: `<h1>WhatsEase vs Wati:</h1> <h1 class='mt-3'><i class='text-black'>D2C & Event Growth Platform</i> vs. Support-Focused Automation</h1>`,
  description:
    'Weekend Bazaar used WhatsEase for ticket booking and entry management via WhatsApp, enhancing event operations and customer experience.',
  buttonText: 'Try Now',
  mainImage: '/images/2.png',
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
