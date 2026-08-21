import Link from 'next/link';

const useCases = [
  ['Cart recovery', 'Recover abandoned carts and convert more sessions into sales.'],
  ['Lead generation', 'Qualify leads and route them directly to sales reps.'],
  ['Customer support', 'Automate instant replies and keep support queues manageable.'],
  ['Event management', 'Handle registrations, payments, reminders and check-ins.'],
  ['Chatbots', 'Capture intent and answer common questions automatically.'],
  ['Marketing campaigns', 'Broadcast offers and sequence follow-ups with WhatsApp.'],
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
      <section className="soft-card px-6 py-12 sm:px-10">
        <div className="kicker">Use cases</div>
        <h1 className="mt-4 text-4xl font-black tracking-tighter text-[#10231b] sm:text-5xl">
          Built for the way teams actually use WhatsApp.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          WhatsEase adapts to sales, support, marketing, commerce and event
          workflows without forcing each team into the same process.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-[#10231b]">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
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
