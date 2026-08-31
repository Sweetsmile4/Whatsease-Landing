import Link from 'next/link';
import {
  Bot,
  CalendarCheck,
  Headphones,
  Megaphone,
  MessagesSquare,
  ShoppingCart,
  TicketCheck,
  UserRoundCheck,
} from 'lucide-react';

const useCases = [
  {
    title: 'Lead capture & distribution',
    text: 'Capture enquiries from ads, forms, marketplaces and social channels, then qualify and route each lead to the right sales representative.',
    points: ['Multi-channel lead capture', 'Scoring and instant routing'],
    icon: UserRoundCheck,
  },
  {
    title: 'Customer support',
    text: 'Bring WhatsApp, email and social conversations into one shared inbox with ownership, context and smooth AI-to-human handoffs.',
    points: ['Unified team inbox', 'Assignments, tags and history'],
    icon: Headphones,
  },
  {
    title: 'AI chatbots & workflows',
    text: 'Answer routine questions around the clock and automate customer journeys with triggers, branches, scheduled messages and integrations.',
    points: ['Intent-aware chatbots', 'Visual workflow automation'],
    icon: Bot,
  },
  {
    title: 'WhatsApp campaigns',
    text: 'Run personalised promotions, newsletters, reminders and follow-up sequences with audience segmentation and delivery visibility.',
    points: ['Targeted broadcasts', 'Campaign tracking'],
    icon: Megaphone,
  },
  {
    title: 'Conversational commerce',
    text: 'Recover abandoned carts, share product recommendations and keep customers informed with payment, order and delivery updates.',
    points: ['Cart recovery journeys', 'Order-status messaging'],
    icon: ShoppingCart,
  },
  {
    title: 'Event registration & ticketing',
    text: 'Manage registrations, payments, digital tickets, reminders, attendee questions and QR-based validation through WhatsApp.',
    points: ['Digital registration and tickets', 'Check-in and attendee support'],
    icon: TicketCheck,
  },
  {
    title: 'Bookings & reminders',
    text: 'Automate appointment or session booking, confirmations, reminders and rescheduling while keeping the conversation personal.',
    points: ['Automated confirmations', 'Fewer missed appointments'],
    icon: CalendarCheck,
  },
  {
    title: 'Customer engagement & retention',
    text: 'Use timely follow-ups, tailored offers and relevant updates to turn one-time conversations into lasting customer relationships.',
    points: ['Personalised engagement', 'Consistent follow-up'],
    icon: MessagesSquare,
  },
];

const supportingPages = [
  ['/use-case/chatbot', 'WhatsApp Chatbots'],
  ['/use-case/customer-support', 'Customer Support'],
  ['/use-case/event-management', 'Event Management'],
  ['/use-case/whatsapp-marketing-campaigns', 'Marketing Campaigns'],
];

export default function UseCasePage() {
  return (
    <main className="internal-page min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <section className="use-case-content px-6 py-12 sm:px-10">
        <div className="kicker">Use cases</div>
        <h1 className="mt-4 text-4xl font-black tracking-tighter text-[#10231b] sm:text-5xl">
          Built for the way teams actually use WhatsApp.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          From the first enquiry to repeat business, WhatsEase connects conversations,
          automation and CRM workflows around the way your teams already work.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {useCases.map(({ title, text, points, icon: Icon }) => (
            <article key={title} className="use-case-card rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <span className="use-case-icon"><Icon aria-hidden="true" /></span>
              <h2 className="mt-6 text-xl font-bold text-[#10231b]">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              <ul className="use-case-points">
                {points.map(point => <li key={point}><span>✓</span>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="kicker">Detailed use case pages</div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {supportingPages.map(([href, label]) => (
              <Link key={href} href={href} className="rounded-2xl bg-[#f7fbf9] px-4 py-4 text-sm font-semibold text-slate-700 transition hover:text-[#348762]">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/product" className="button button-dark">
            View product
          </Link>
          <Link href="/" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
