import Link from 'next/link';

const values = [
  ['Customer obsession', 'We start with the customer and work backwards.'],
  ['Innovation', 'We push boundaries to create practical messaging tools.'],
  ['Integrity', 'We stay transparent, honest and ethical in our work.'],
  ['Excellence', 'We hold ourselves to a high standard and keep improving.'],
];

const timeline = [
  ['2018', 'Founded with a vision to transform business messaging.'],
  ['2019', 'First WhatsApp Business API integration launched.'],
  ['2021', 'AI chatbots and analytics added to the platform.'],
  ['2022', 'Series A funding accelerated product development.'],
  ['2023', 'Global expansion and new market coverage.'],
];

const team = [
  ['Anubhav Chaturvedi', 'Founder & CEO'],
  ['Aditya Singh', 'CTO'],
  ['Priya Sharma', 'Head of Product'],
  ['Raj Patel', 'VP of Sales'],
];

export default function AboutPage() {
  return (
    <main className="internal-page min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <section className="soft-card px-6 py-12 sm:px-10">
        <div className="kicker">About WhatsEase</div>
        <h1 className="mt-4 text-4xl font-black tracking-tighter text-[#10231b] sm:text-5xl">
          Built to help teams sell, support and grow on WhatsApp.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          WhatsEase is a WhatsApp-first customer communication platform for teams
          that want better organization, faster replies and less manual effort.
          The product combines inbox workflows, AI assistance, CRM context,
          automation and commerce into one workspace.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {values.map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-[#10231b]">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="kicker">Our team</div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {team.map(([name, role]) => (
                <div key={name} className="rounded-2xl bg-[#f7fbf9] p-4">
                  <div className="text-sm font-bold text-[#10231b]">{name}</div>
                  <div className="mt-1 text-xs text-slate-500">{role}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="kicker">Timeline</div>
            <div className="mt-6 space-y-4">
              {timeline.map(([year, text]) => (
                <div key={year} className="grid grid-cols-[72px_1fr] gap-4 rounded-2xl bg-[#f7fbf9] p-4">
                  <div className="text-2xl font-black tracking-tighter text-[#348762]">{year}</div>
                  <p className="text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/pricing" className="button button-dark">
            View pricing
          </Link>
          <Link href="/" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
