import Link from 'next/link';

const sections = [
  ['24/7 support availability', 'Provide automated responses for after-hours inquiries and urgent issues.'],
  ['Ticketing & issue tracking', 'Turn conversations into trackable tickets and assign them to the right person.'],
  ['Live chat integration', 'Transition from automation to live support with full conversation history.'],
  ['Order and delivery notifications', 'Send timely updates on orders, payments and deliveries.'],
];

export default function CustomerSupportUseCasePage() {
  return (
    <main className="internal-page min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <section className="soft-card px-6 py-12 sm:px-10">
        <div className="kicker">Customer support</div>
        <h1 className="mt-4 text-4xl font-black tracking-tighter text-[#10231b] sm:text-5xl">
          Streamline support and boost satisfaction with WhatsApp.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          WhatsEase helps teams resolve common queries instantly, escalate when needed and keep customers informed at every step.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {sections.map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-[#10231b]">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/use-case" className="button button-dark">Back to use cases</Link>
          <Link href="/" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700">Back to home</Link>
        </div>
      </section>
    </main>
  );
}
