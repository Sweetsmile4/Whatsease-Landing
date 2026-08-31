import Link from 'next/link';
import ProductSuiteCarousel, { ProductFeature } from '../components/ProductSuiteCarousel';

const products: ProductFeature[] = [
  { title: 'Unified Inbox', description: 'Manage WhatsApp, Instagram, Facebook, Gmail and other conversations from one workspace with clear ownership and complete customer context.', category: 'Communication' },
  { title: 'WhatsApp Business', description: 'Run professional customer messaging with rich media, approved templates, contact management and shared access for your team.', category: 'Communication' },
  { title: 'Conversational Commerce', description: 'Connect Shopify, share product catalogs, confirm orders and automate abandoned-cart, payment and delivery journeys on WhatsApp.', category: 'Communication' },
  { title: 'WhatsApp Voice Agent', description: 'Support automated voice-calling journeys for lead follow-up, qualification, reminders and customer outreach.', category: 'Communication' },
  { title: 'AI Agents', description: 'Answer common questions, qualify intent, suggest replies and hand important conversations to the right person with full context.', category: 'Automation' },
  { title: 'Visual Automation', description: 'Turn natural-language instructions into event-driven workflows using triggers, filters, branches, delays and reusable actions.', category: 'Automation' },
  { title: 'Campaign Builder', description: 'Create personalised broadcasts, newsletters and offers with audience segmentation, scheduling and delivery visibility.', category: 'Automation' },
  { title: 'Lead Capture & Routing', description: 'Capture enquiries from ads, forms, marketplaces, email and social channels, then score and distribute them automatically.', category: 'Automation' },
  { title: 'WhatsApp Flows', description: 'Build structured customer journeys for enquiries, registrations, feedback and data collection using reusable WhatsApp experiences.', category: 'Engagement' },
  { title: 'Chatbots', description: 'Answer routine questions instantly, capture customer intent and move qualified conversations to the right team.', category: 'Engagement' },
  { title: 'Mobile Web App', description: 'Open priority chats, follow direct conversation links and receive supported real-time alerts while your team is away from a desktop.', category: 'Engagement' },
  { title: 'APIs & Webhooks', description: 'Connect WhatsEase to your existing stack and move conversation, lead, campaign and order data between business systems.', category: 'Engagement' },
  { title: 'Sales CRM', description: 'Keep leads, contacts, companies, deals, activities, reminders and conversation history connected in one sales workspace.', category: 'Business' },
  { title: 'Analytics & Reporting', description: 'Understand response time, conversion, campaigns, sales activity, commerce performance and team workload through actionable dashboards.', category: 'Business' },
  { title: 'Business Integrations', description: 'Connect Google Sheets, web forms, Shopify, IndiaMART, TradeIndia, ExportersIndia, Facebook and Instagram to your workflows.', category: 'Business' },
  { title: 'Controls & Permissions', description: 'Organise teams with role-based access, hierarchy controls, field permissions and secure administration for growing operations.', category: 'Business' },
];

const benefits = [
  'Verified business profile support',
  'Unlimited agent seats for customer conversations',
  'Advanced automation and template messaging',
  'Rich media support across chats and flows',
  'Compliance with WhatsApp policies',
];

const stats = [
  ['60%', 'reduction in support costs', 'Automate repetitive questions while agents focus on complex conversations.'],
  ['85%', 'message open rate', 'Reach customers through the channel they check throughout the day.'],
  ['24/7', 'customer availability', 'AI agents keep essential answers and lead capture running after hours.'],
  ['40%', 'increase in conversions', 'Respond faster and follow up consistently while customer intent is high.'],
  ['3x', 'faster resolution times', 'Give agents shared context, suggested replies and intelligent routing.'],
  ['90%', 'customer satisfaction', 'Deliver timely, personal conversations with fewer handoff delays.'],
];

export default function ProductPage() {
  return (
    <main className="internal-page min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <section className="px-6 py-12 sm:px-10">
        <div className="kicker">Product</div>
        <h1 className="mt-4 text-4xl font-black tracking-tighter text-[#10231b] sm:text-5xl">
          WhatsEase Product Suite
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Bring conversations, leads, campaigns, commerce, automation and AI into
          one connected workspace. WhatsEase gives every team the context and tools
          needed to respond faster, automate repetitive work and grow customer relationships.
        </p>

        <ProductSuiteCarousel features={products} />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="kicker">Official WhatsApp Business API partner</div>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              As an officially authorized WhatsApp Business Solution Provider, we deliver enterprise-grade API integration with advanced features and full compliance. Partnering with WhatsApp Business API, WhatsEase empowers enterprises with secure messaging, intelligent automation, and regulatory adherence.
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
              {stats.map(([value, label, detail]) => (
                <article key={label} className="rounded-2xl bg-[#f7fbf9] p-4">
                  <div className="text-3xl font-black tracking-tighter text-[#348762]">{value}</div>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{label}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="button main-pill-button">
            Back to home <span>→</span>
          </Link>
          <Link href="/pricing" className="button main-pill-button">
            See pricing <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
