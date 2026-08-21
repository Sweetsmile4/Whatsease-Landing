import Link from 'next/link';

const highlights = [
  ['₹2 crores', 'ticket collection for MPC Gymkhana Garba'],
  ['₹20 lakhs', 'revenue in 20 days for multiple event engagements'],
  ['10+ testimonials', 'captured across several high-volume events'],
  ['4x', 'boost in event conversion messaging patterns'],
];

const cases = [
  ['MPC Gymkhana Garba', 'Custom ticketing, RFID pass issuing, vendor coordination and cash handling.'],
  ['CII Young India Event', 'Hotel allocation, fee collection and expense tracking automated through WhatsApp AI.'],
  ['Waves Food Festival', 'QR ticketing, AI query resolution, SDR outreach and PR execution.'],
  ['Alaiya Balaiya Garba', 'RFID passes, verification workflows and on-ground scanning at scale.'],
  ['Train with Shubham', 'Booking, reminders and feedback collection streamlined for coaching sessions.'],
  ['Prayogshala', 'WhatsApp-based booking and QR code check-in simplified event entry.'],
];

export default function CaseStudiesPage() {
  return (
    <main className="internal-page min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <section className="soft-card px-6 py-12 sm:px-10">
        <div className="kicker">Case studies</div>
        <h1 className="mt-4 text-4xl font-black tracking-tighter text-[#10231b] sm:text-5xl">
          Real teams, real outcomes, real WhatsApp workflows.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          These examples reflect how WhatsEase is used in events, education,
          hospitality and retail to reduce friction and keep conversations moving.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map(([value, label]) => (
            <article key={label} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="text-4xl font-black tracking-tighter text-[#348762]">{value}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{label}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {cases.map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#10231b]">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
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
