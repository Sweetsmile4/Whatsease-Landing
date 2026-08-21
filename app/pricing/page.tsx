import Link from 'next/link';

const plans = [
  ['Micro', 'For small teams that need a lightweight starting point.'],
  ['Growth', 'For teams that want routing, automation and CRM context.'],
  ['Enterprise', 'For larger operations that need governance and scale.'],
];

const inclusions = [
  'Unified inbox and conversation ownership',
  'AI-assisted replies and lead qualification',
  'Campaigns, automations and commerce journeys',
  'Role-based permissions and control',
  'Analytics and team performance tracking',
];

export default function PricingPage() {
  return (
    <main className="internal-page min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <section className="soft-card px-6 py-12 sm:px-10">
        <div className="kicker">Pricing</div>
        <h1 className="mt-4 text-4xl font-black tracking-tighter text-[#10231b] sm:text-5xl">
          Pick the plan that matches how your team works.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          WhatsEase pricing is built around the size of your team and the depth
          of workflow you need. The product is designed to scale from lean teams
          to more complex operations.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {plans.map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#10231b]">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              <div className="mt-6 text-sm font-bold text-[#348762]">Talk to sales for a quote</div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="kicker">Included across plans</div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {inclusions.map((item) => (
              <div key={item} className="rounded-2xl bg-[#f7fbf9] px-4 py-4 text-sm font-semibold text-slate-700">
                <span className="mr-2 inline-grid h-5 w-5 place-items-center rounded-full bg-[#eff8f3] text-xs font-black text-[#348762]">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="button button-dark">
            Back to home
          </Link>
          <a href="#demo" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700">
            Book a demo
          </a>
        </div>
      </section>
    </main>
  );
}
