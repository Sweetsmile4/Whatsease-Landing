import Link from 'next/link';

const products = [
  ['WhatsApp Business', 'Made for business messaging and customer engagement.'],
  ['WhatsApp Newsletter', 'For more turnover, offers and repeat engagement.'],
  ['Automations', 'Chatbots and workflow automation.'],
  ['Integrations', 'Thousands of integrations and API/webhooks.'],
  ['Universal Inbox', 'All channels at a glance.'],
  ['Live Chat', 'Website chat for inbound visitors.'],
  ['Reviews', 'Collect more ratings and social proof.'],
  ['AI Chatbot', 'Automated assistance with intelligent routing.'],
];

const benefits = [
  'Verified business profile support',
  'Unlimited agent seats for customer conversations',
  'Advanced automation and template messaging',
  'Rich media support across chats and flows',
  'Compliance with WhatsApp policies',
];

const stats = [
  ['60%', 'reduction in support costs'],
  ['85%', 'message open rate'],
  ['24/7', 'customer availability'],
  ['40%', 'increase in conversions'],
  ['3x', 'faster resolution times'],
  ['90%', 'customer satisfaction'],
];

export default function ProductPage() {
  return (
    <main className="internal-page min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <section className="soft-card px-6 py-12 sm:px-10">
        <div className="kicker">Product</div>
        <h1 className="mt-4 text-4xl font-black tracking-tighter text-[#10231b] sm:text-5xl">
          WhatsEase Product Suite
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          The platform combines WhatsApp business messaging, AI automation and
          analytics into a single product suite designed for customer engagement.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {products.map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-base font-bold text-[#10231b]">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="kicker">WhatsApp Business API partner</div>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              As an official WhatsApp Business API partner, WhatsEase supports
              enterprise-grade messaging, automation and compliance.
            </p>
            <div className="mt-6 space-y-3">
              {benefits.map((item) => (
                <div key={item} className="rounded-2xl bg-[#f7fbf9] px-4 py-4 text-sm font-semibold text-slate-700">
                  <span className="mr-2 inline-grid h-5 w-5 place-items-center rounded-full bg-[#eff8f3] text-xs font-black text-[#348762]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="kicker">Why businesses choose WhatsEase</div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stats.map(([value, label]) => (
                <article key={label} className="rounded-2xl bg-[#f7fbf9] p-4">
                  <div className="text-3xl font-black tracking-tighter text-[#348762]">{value}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="button button-dark">
            Back to home
          </Link>
          <Link href="/pricing" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700">
            See pricing
          </Link>
        </div>
      </section>
    </main>
  );
}
