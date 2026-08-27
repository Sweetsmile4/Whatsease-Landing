"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import updatedInbox from "../public/features/inbox.png";
import automationWorkspace from "../public/features/automation.png";
import campaignsWorkspace from "../public/features/Campaigns.png";
import crmWorkspace from "../public/features/crm.png";
import commerceWorkspace from "../public/features/commerce.png";
import analyticsWorkspace from "../public/features/Analytics.png";
import aiAgentsWorkspace from "../public/features/Ai agents.jpeg";
import leadAutomationWorkspace from "../public/features/lead.jpg";
import shopifyCommerceJourney from "../public/features/Shopify-WhatsApp Commerce Journey.png";
import mobileAppWorkspace from "../public/features/app.png";
import ComparisonMenu from "./components/ComparisonMenu";
import { ArrowRight, BadgeCheck } from 'lucide-react';

const features = ["Unified Inbox", "AI Agents", "Automations", "Campaigns", "CRM", "E-Commerce", "Analytics"];
const featureDetails: Record<string, { title: string; description: string; bullets: string[] }> = {
  "Unified Inbox": { title: "One inbox. Zero missed opportunities.", description: "Bring conversations, context and ownership together so every customer reaches the right person.", bullets: ["Assign and route conversations", "Collaborate with notes and mentions", "Open complete customer history"] },
  "AI Agents": { title: "Always-on answers with a human touch.", description: "Use AI to resolve routine questions, suggest replies, qualify intent and alert your team when it matters.", bullets: ["AI-assisted responses", "Lead qualification and alerts", "Human handoff with full context"] },
  "Automations": { title: "Build journeys without writing code.", description: "Create event-driven workflows for replies, templates, alerts, payments, catalogs and follow-ups.", bullets: ["Visual workflow builder", "Reusable triggers and actions", "Customer and team notifications"] },
  "Campaigns": { title: "Personal outreach at WhatsApp speed.", description: "Segment audiences, launch personalised campaigns and understand delivery, engagement and usage.", bullets: ["Broadcasts and newsletters", "Audience segmentation", "Campaign and wallet analytics"] },
  "CRM": { title: "Every relationship, deal and next step.", description: "Connect leads, contacts, companies, activities and opportunities to the conversations that created them.", bullets: ["Lead scoring and distribution", "Deals and sales forecasting", "Reminders and activity tracking"] },
  "E-Commerce": { title: "From product discovery to repeat purchase.", description: "Connect Shopify, manage WhatsApp catalogs and automate order, merchant and cart-recovery journeys.", bullets: ["Shopify integration", "Catalogs and collections", "Abandoned-cart recovery"] },
  "Analytics": { title: "Know what is working and what needs attention.", description: "Track conversations, leads, campaigns, catalogs, orders, forms and team performance from actionable dashboards.", bullets: ["Sales and response performance", "Campaign and commerce insights", "Web-form submission analytics"] },
};
const industries = [
  ["Technology", "Qualify every lead, instantly", "AI agents that answer questions, capture intent and hand hot opportunities to sales."],
  ["Hospitality", "Bookings without the back-and-forth", "Turn WhatsApp into a concierge for reservations, updates and guest support."],
  ["Retail", "Personal conversations at scale", "Recover carts, share recommendations and keep every order conversation in one place."],
];
const testimonials = [
  { quote: 'WhatsEase gave us the flexibility and real-time support to manage more than ₹1.5 crore in ticket sales seamlessly.', name: 'Harshit Gupta', role: 'Event Organiser, Young Indians (CII)' },
  { quote: 'The entire hotel booking journey happened on WhatsApp. A few messages, a couple of clicks, and it was done.', name: 'Palash Khandelwal', role: 'Founder, Aarambh School' },
  { quote: 'A brilliant, convenient interface that businesses can adopt regardless of their industry.', name: 'Pranav Charan', role: 'Founder, Space & Formz Interior' },
  { quote: 'WhatsEase was our ticketing and digital marketing partner for our food festival. Their execution helped us reach more people.', name: 'Dev Sain', role: 'Corporate General Manager, Waves Food Club' },
  { quote: 'WhatsEase handled our complex ticketing needs perfectly and made the entire event smooth for parents, kids and organisers alike.', name: 'Garima Dave', role: 'Operations Manager, Alaiya Balaiya Garba' },
  { quote: 'The support from the WhatsEase team has been phenomenal. The product is powerful, the team is hardworking, and the experience has been fantastic.', name: 'Shubham Londhe', role: 'Founder, TrainWithShubham' },
];

const platformGroups = [
  { icon: "01", title: "Conversations", description: "Manage every customer conversation with context, ownership and speed.", items: ["WhatsApp team inbox", "Internal notes and mentions", "Quick replies and templates", "Conversation assignment", "Mobile chat access"] },
  { icon: "02", title: "AI & automation", description: "Build intelligent journeys that respond, qualify and notify automatically.", items: ["AI agents and suggested replies", "No-code workflow builder", "Chatbots and auto responders", "AI alert variables", "Event and status triggers"] },
  { icon: "03", title: "Sales CRM", description: "Keep leads, deals, people, companies and activity in one connected workspace.", items: ["Lead scoring and distribution", "Deals and sales forecasting", "Activity tracking", "Reminders and notifications", "Documents and attachments"] },
  { icon: "04", title: "Campaigns", description: "Create targeted WhatsApp outreach with visibility into delivery and spend.", items: ["Personalised broadcasts", "Newsletters and offers", "Audience segmentation", "Campaign analytics", "Usage and wallet visibility"] },
  { icon: "05", title: "Conversational commerce", description: "Bring products, orders and recovery journeys directly into WhatsApp.", items: ["Shopify integration", "Product catalogs and collections", "Abandoned-cart recovery", "Order and merchant notifications", "Commerce analytics"] },
  { icon: "06", title: "Control & integration", description: "Give each team the access they need and connect WhatsEase to your stack.", items: ["Google Sheets and web forms", "IndiaMART, TradeIndia & ExportersIndia", "WhatsApp APIs", "Facebook and Instagram", "Role-based permissions"] },
  { icon: "07", title: "Prompt To Production", description: "Prompt-to-production AI that understands business intent and turns natural language into working automation.", items: ["Prompt to workflow", "AI inbox", "Campaign builder", "Flow generator", "AI templates", "Decision engine", "Ads improvisor", "WhatsEase AI voice calling agent"] },
];

const integrations = [
  { name: "WhatsApp APIs", logo: "whatsapp_logo.png" },
  { name: "Google Sheets", logo: "google sheets.jpeg" },
  { name: "Shopify", logo: "shopify.png" },
  { name: "IndiaMART", logo: "indiaMart.png" },
  { name: "TradeIndia", logo: "trade india.png" },
  { name: "ExportersIndia", logo: "exporter india.png" },
  { name: "Web forms", logo: "web form.png" },
  { name: "Facebook", logo: "facebook.jpeg" },
  { name: "Instagram", logo: "instagram.jpeg" },
];

const clientLogos = [
  ["akshar table mart.jpeg", "Akshar Table Mart"],
  ["Alaiya Balaiya.png", "Alaiya Balaiya"],
  ["anil modi tourism.jpeg", "Anil Modi Tourism"],
  ["Bansi bags.jpeg", "Bansi Bags"],
  ["bpn labs.webp", "BPN Labs"],
  ["cii-young-indians.png", "Young Indians CII"],
  ["classic auto center.jpeg", "Classic Auto Center"],
  ["got bull.jpeg", "Got Bull"],
  ["Hackers Meetup.png", "Hackers Meetup"],
  ["Heritage Trust of Vadodara.png", "Heritage Trust of Vadodara"],
  ["IcyPopps.webp", "IcyPopps"],
  ["indie.png", "Indie"],
  ["Mansi Arts.png", "Mansi Arts"],
  ["MPC Gymkhana.png", "MPC Gymkhana"],
  ["olive jewellery.png", "Olive Jewellery"],
  ["prayogshala.png", "Prayogshala"],
  ["SavitriUrbanFoodForest.jpg", "Savitri Urban Food Forest"],
  ["simply-loan.png", "Simply Loan"],
  ["simplysalad.webp", "Simply Salad"],
  ["swad amrutam chai.jpeg", "Swad Amrutam Chai"],
  ["Train With Shubham.png", "Train With Shubham"],
  ["urban money.png", "Urban Money"],
  ["vff.jpg", "VFF"],
  ["vibrant-co-work.webp", "Vibrant Co-work"],
  ["vipo.png", "VIPO"],
  ["wavesclub.png", "Waves Club"],
  ["Weekend Bazaar.jpg", "Weekend Bazaar"],
];

const outcomeStats = [
  { value: '60%', label: 'lower support costs', text: 'Let AI handle routine questions while your team focuses on high-value conversations.' },
  { value: '3.2x', label: 'faster responses', text: 'Smart routing and one shared inbox mean every customer reaches the right person quickly.' },
  { value: '40%', label: 'more conversions', text: 'Personal follow-ups reach customers on the channel they already use every day.' },
];

const workflowSteps = [
  { step: '01', title: 'Capture everywhere', text: 'Connect forms, ads, email, social and 30+ sources.' },
  { step: '02', title: 'Qualify automatically', text: 'Score every lead based on intent and engagement.' },
  { step: '03', title: 'Route intelligently', text: 'Assign by region, product, source or team availability.' },
];

const commerceSteps = [
  { step: '01', title: 'Connect your store', text: 'Bring Shopify into WhatsEase.' },
  { step: '02', title: 'Sell from catalogs', text: 'Manage products and collections customers can browse.' },
  { step: '03', title: 'Recover lost revenue', text: 'Automate abandoned-cart and order-status messages.' },
  { step: '04', title: 'Track every order', text: 'Keep customer and merchant notifications in sync.' },
];

const mobilePoints = [
  { title: 'Installable web app', text: 'Add to your home screen in one tap.' },
  { title: 'Mobile-first navigation', text: 'Everything you need, designed for mobile.' },
  { title: 'Direct conversation links', text: 'Jump straight into priority chats and take action.' },
  { title: 'Real-time push alerts', text: 'Instant notifications for what matters most.' },
];

const securityCards = [
  ['India-based hosting', 'Your data stays closer to home.'],
  ['Organisation-level RBAC', 'Manage members, teams and feature permissions.'],
  ['Granular CRM controls', 'Apply hierarchy, location and field-level restrictions.'],
  ['API & webhooks', 'Connect safely to your tech stack.'],
];

const faqs = [
  ["What can I manage inside WhatsEase?", "WhatsEase brings WhatsApp conversations, leads, deals, campaigns, automation, commerce, analytics and team administration into one workspace."],
  ["Can I use my existing WhatsApp Business number?", "WhatsEase supports guided WhatsApp onboarding and coexistence workflows, so eligible businesses can connect an existing number while retaining the operating mode that fits them."],
  ["Which platforms does WhatsEase integrate with?", "WhatsEase connects with Google Sheets, Shopify, IndiaMART, TradeIndia, ExportersIndia, web forms, WhatsApp APIs, Facebook and Instagram."],
  ["Can different teams have different access?", "Yes. Organisation owners can manage members, teams and role-based permissions, with additional hierarchy, location and field-level controls available for CRM workflows."],
  ["Can my team work on mobile?", "Yes. The responsive experience includes mobile navigation, direct chat links and installable web-app capabilities with supported push notifications."],
];

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>;
}

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="icon-box" aria-hidden="true">{children}</span>;
}

const moduleContent: Record<string, { label: string; metric: string; rows: string[] }> = {
  "Unified Inbox": { label: "All conversations", metric: "12 open", rows: ["Priya Sharma", "Kabir Singh", "Diya Patel"] },
  "AI Agents": { label: "AI agent workspace", metric: "84% resolved", rows: ["Product enquiry agent", "Lead qualification", "Support handoff"] },
  "Automations": { label: "Customer journey", metric: "Active", rows: ["New enquiry received", "Qualify lead with AI", "Assign to sales team"] },
  "Campaigns": { label: "Campaign performance", metric: "92.4% delivered", rows: ["Festive offer", "Product launch", "Customer re-engagement"] },
  "CRM": { label: "Sales pipeline", metric: "₹18.4L value", rows: ["New leads", "Qualified", "Proposal sent"] },
  "E-Commerce": { label: "Shopify orders", metric: "₹2.8L recovered", rows: ["Catalog shared", "Order confirmed", "Cart recovery"] },
  "Analytics": { label: "Performance overview", metric: "+28.6%", rows: ["Conversations", "Qualified leads", "Conversion rate"] },
};

function FeatureModule({ feature }: { feature: string }) {
  const moduleData = moduleContent[feature];
  const isFlow = feature === "Automations";
  const isAnalytics = feature === "Analytics" || feature === "Campaigns";
  const isPipeline = feature === "CRM";

  if (["Unified Inbox", "AI Agents", "Automations", "Campaigns", "CRM", "E-Commerce", "Analytics"].includes(feature)) {
    const isInbox = feature === "Unified Inbox";
    const isAiAgents = feature === "AI Agents";
    const isAutomation = feature === "Automations";
    const isCampaigns = feature === "Campaigns";
    const isCrm = feature === "CRM";
    const isCommerce = feature === "E-Commerce";
    const workspaceImage = isInbox ? updatedInbox : isAiAgents ? aiAgentsWorkspace : isAutomation ? automationWorkspace : isCampaigns ? campaignsWorkspace : isCrm ? crmWorkspace : isCommerce ? commerceWorkspace : analyticsWorkspace;
    const workspaceName = isInbox ? "Inbox" : isAiAgents ? "AI Agents" : isAutomation ? "Automations" : isCampaigns ? "Campaigns" : isCrm ? "CRM" : isCommerce ? "Commerce" : "Analytics";
    return (
      <div className="module-screen actual-inbox-module">
        <div className="module-topbar"><div><span /><span /><span /></div><strong>WhatsEase {workspaceName}</strong><small>Live workspace</small></div>
        <Image src={workspaceImage} alt={`Actual WhatsEase ${workspaceName.toLowerCase()} interface`} priority />
      </div>
    );
  }

  return (
    <div className={`module-screen module-${feature.toLowerCase().replaceAll(" ", "-")}`}>
      <div className="module-topbar"><div><span /><span /><span /></div><strong>WhatsEase</strong><small>Live workspace</small></div>
      <div className="module-shell">
        <aside className="module-sidebar"><Image src="/whatsease_favicon.svg" alt="" width={28} height={28} />{[0,1,2,3,4].map((item)=><i className={item === 1 ? "on" : ""} key={item} />)}</aside>
        <div className="module-main">
          <header><div><small>{feature}</small><h4>{moduleData.label}</h4></div><b>{moduleData.metric}</b></header>
          {isFlow ? (
            <div className="automation-flow">{moduleData.rows.map((row,index)=><div key={row}><span>{index + 1}</span><b>{row}</b>{index < moduleData.rows.length - 1 && <i />}</div>)}</div>
          ) : isAnalytics ? (
            <div className="analytics-view"><div className="chart-bars">{[38,62,48,78,67,91,82].map((height,index)=><i style={{height:`${height}%`}} key={index}/>)}</div><div className="module-rows">{moduleData.rows.map((row,index)=><div key={row}><span>{row}</span><b>{["24,860","8,412","34.8%"][index]}</b></div>)}</div></div>
          ) : isPipeline ? (
            <div className="pipeline-view">{moduleData.rows.map((row,index)=><div key={row}><small>{row}</small><article><b>{["Aarav Mehta","Pioneer Retail","Studio Arc"][index]}</b><span>{["₹1.2L","₹3.8L","₹2.4L"][index]}</span></article><article><b>{["Nisha Kapoor","Apex Events","Nova Labs"][index]}</b><span>{["₹80K","₹2.1L","₹4.6L"][index]}</span></article></div>)}</div>
          ) : (
            <div className="conversation-view"><div className="module-rows">{moduleData.rows.map((row,index)=><div className={index === 0 ? "active" : ""} key={row}><i>{row[0]}</i><span><b>{row}</b><small>{feature === "E-Commerce" ? "Order journey updated" : "Customer message preview"}</small></span></div>)}</div><div className="module-detail"><span className="detail-line wide"/><span className="detail-line"/><div className="detail-bubble">{feature === "AI Agents" ? "AI has qualified this conversation and prepared the next best response." : feature === "E-Commerce" ? "Your order is confirmed. We’ll send delivery updates on WhatsApp." : "Can you share more details about the right plan for my team?"}</div><div className="detail-bubble outgoing">{feature === "AI Agents" ? "Suggested action: Assign to enterprise sales" : "Absolutely — I’ve shared the most relevant information below."}</div></div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [featureDirection, setFeatureDirection] = useState<1 | -1>(1);
  const [formSent, setFormSent] = useState(false);
  const productSectionRef = useRef<HTMLDivElement>(null);
  const activeFeatureIndexRef = useRef(0);
  const featureWheelLockedRef = useRef(false);
  const safeFeatureIndex = Number.isInteger(activeFeatureIndex) ? Math.max(0, Math.min(features.length - 1, activeFeatureIndex)) : 0;
  const activeFeature = features[safeFeatureIndex];
  const currentFeature = featureDetails[activeFeature];

  useEffect(() => {
    activeFeatureIndexRef.current = safeFeatureIndex;
  }, [safeFeatureIndex]);

  useEffect(() => {
    const section = productSectionRef.current;
    if (!section) return;

    let accumulatedDelta = 0;
    let resetTimer: number | undefined;

    const handleWheel = (event: WheelEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const index = activeFeatureIndexRef.current;
      const direction = Math.sign(event.deltaY);
      const canAdvance = direction > 0 && index < features.length - 1;
      const canReturn = direction < 0 && index > 0;
      if (!canAdvance && !canReturn) return;

      event.preventDefault();
      if (featureWheelLockedRef.current) return;

      accumulatedDelta += event.deltaY;
      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => { accumulatedDelta = 0; }, 160);
      if (Math.abs(accumulatedDelta) < 45) return;

      const movement = accumulatedDelta > 0 ? 1 : -1;
      const nextIndex = Math.max(0, Math.min(features.length - 1, index + movement));
      accumulatedDelta = 0;
      if (nextIndex === index) return;
      setFeatureDirection(nextIndex > index ? 1 : -1);
      activeFeatureIndexRef.current = nextIndex;
      setActiveFeatureIndex(nextIndex);
      featureWheelLockedRef.current = true;
      window.setTimeout(() => { featureWheelLockedRef.current = false; }, 520);
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      section.removeEventListener("wheel", handleWheel);
      window.clearTimeout(resetTimer);
    };
  }, []);

  const selectFeature = (feature: string) => {
    const nextIndex = features.indexOf(feature);
    if (nextIndex < 0) return;
    setFeatureDirection(nextIndex >= activeFeatureIndexRef.current ? 1 : -1);
    activeFeatureIndexRef.current = nextIndex;
    setActiveFeatureIndex(nextIndex);
  };

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormSent(true);
  }

  return (
    <main>
      <div className="announcement">New: Capture, qualify and route leads with WhatsEase AI <a href="#demo">See what&apos;s new <span>→</span></a></div>
      <header className="site-header">
        <a className="logo official-logo" href="#top" aria-label="WhatsEase home"><Image src="/logo.svg" alt="WhatsEase" width={154} height={32} priority /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /></button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <a href="/product">Product</a>
          <a href="/use-case">Use Case</a>
          <ComparisonMenu />
          <a href="/pricing">Pricing</a>
          <a href="/case-studies">Case Studies</a>
          <a href="/about">About us</a>
        </nav>
        <div className="nav-actions"><a href="https://whatsease.in" className="login">Log in</a><a className="button button-small" href="#demo">Book a demo</a></div>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AI-powered WhatsApp CRM</div>
          <h1>Turn every WhatsApp conversation into <em>revenue.</em></h1>
          <p>Capture leads, automate support and manage every customer conversation from one beautifully simple workspace.</p>
          <div className="hero-actions"><a className="button" href="#demo">Book a free demo <span>→</span></a><a className="text-link" href="#product"><span className="play">▶</span> See how it works</a></div>
          <div className="hero-proof"><div className="avatars"><span>HG</span><span>PK</span><span>PC</span><span>+</span></div><div><b>Trusted by growing teams</b><small>No credit card required</small></div></div>
        </div>
        <div className="hero-visual authentic-hero" aria-label="WhatsEase unified inbox preview">
          <div className="glow glow-one" /><div className="glow glow-two" />
          <div className="hero-product-shot"><div className="browser-chrome"><span/><span/><span/><b>whatsease.in</b></div><Image src={updatedInbox} alt="Actual WhatsEase unified inbox showing conversations and contact information" priority /></div>
          <div className="floating-card lead-card"><Icon>↗</Icon><div><small>New qualified lead</small><b>Aarav Mehta</b></div><strong>92</strong></div>
          <div className="floating-card response-card"><span className="check">✓</span><div><b>3.2x faster</b><small>Average response time</small></div></div>
        </div>
      </section>

      <section className="logo-strip">
        <p>Powering conversations for ambitious teams</p>
        {[false, true].map(reverse => (
          <div className={`client-carousel${reverse ? " client-carousel-reverse" : ""}`} key={reverse ? "reverse" : "forward"}>
            <div className="client-track">
              {[...clientLogos, ...clientLogos].map(([file, name], index) => <div className="client-logo" aria-hidden={index >= clientLogos.length} key={`${index}-${file}`}><Image src={`/Clients/${file}.png`} alt={!reverse && index < clientLogos.length ? name : ""} width={300} height={120}/></div>)}
            </div>
          </div>
        ))}
      </section>

      <section className="section product" id="product">
        <div className="section-heading centered"><div className="kicker">ONE PLATFORM. EVERY CONVERSATION.</div><h2>Everything you need to turn chats into customers</h2><p>From the first hello to a closed deal, WhatsEase keeps your team fast, personal and perfectly in sync.</p></div>
        <div className="feature-interactive" ref={productSectionRef}>
          <div className="feature-tabs" role="tablist">{features.map(item=><button role="tab" aria-selected={activeFeature===item} className={activeFeature===item?"active":""} onClick={()=>selectFeature(item)} key={item}>{item}</button>)}</div>
          <div className="feature-stage">
            <div className={`feature-copy feature-panel-enter feature-enter-${featureDirection > 0 ? "next" : "previous"}`} key={`copy-${activeFeature}`}><div className="feature-number">{String(safeFeatureIndex + 1).padStart(2,"0")}</div><h3>{currentFeature.title}</h3><p>{currentFeature.description}</p><ul>{currentFeature.bullets.map(item=><li key={item}><span>✓</span>{item}</li>)}</ul><a href="#demo" className="arrow-link">Explore {activeFeature} <span>→</span></a></div>
            <div className={`feature-module-enter feature-enter-${featureDirection > 0 ? "next" : "previous"}`} key={`module-${activeFeature}`}><FeatureModule feature={activeFeature} /></div>
          </div>
        </div>
      </section>

      <section className="platform section" id="platform">
        <div className="section-heading centered"><div className="kicker">THE COMPLETE WHATSAPP GROWTH PLATFORM</div><h2>One workspace, from first message to repeat customer</h2><p>Every major WhatsEase capability, organised around the work your teams do every day.</p></div>
        <div className="platform-grid">{platformGroups.map(group=><article key={group.title}><div className="platform-card-head"><span>{group.icon}</span><h3>{group.title}</h3></div><p>{group.description}</p><ul>{group.items.map(item=><li key={item}><i aria-hidden="true">&#10003;</i>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="integration-band"><div><small>CONNECTED TO THE TOOLS YOU ALREADY USE</small><div className="integration-carousel"><div className="integration-track">{[0,1].map(copy=><div className="integration-sequence" aria-hidden={copy===1} key={copy}>{integrations.map(item=><span key={`${copy}-${item.name}`}>{item.logo && <Image src={`/logos/${item.logo}`} alt={copy===0?`${item.name} logo`:""} width={34} height={34}/>} {item.name}</span>)}</div>)}</div></div></div></section>

      <section id="solutions" className="section-shell">
        <div className="soft-card px-6 py-12 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <div className="kicker">Built for momentum</div>
              <h2 className="mt-4 text-4xl font-black tracking-tighter text-[#0a2e1c] sm:text-5xl">Less busywork. More business.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">WhatsEase is designed to help teams spend less time switching tools and more time moving conversations forward.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {outcomeStats.map((item) => (
                <article key={item.label} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="text-4xl font-black tracking-[-0.06em] text-[#0a2e1c]">{item.value}</div>
                  <div className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-[#1e5f3f]">{item.label}</div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="section-shell workflow-section">
        <div className="soft-card grid gap-10 px-6 py-12 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div className="self-center overflow-hidden rounded-3xl border border-slate-100 bg-[#071711] shadow-lg shadow-[#0a2e1c]/10">
            <Image className="h-auto w-full object-contain" src={leadAutomationWorkspace} alt="WhatsEase lead automation and intelligent routing workspace" />
          </div>
          <div>
            <div className="kicker">Lead automation</div>
            <h2 className="mt-4 text-4xl font-black tracking-tighter text-[#0a2e1c] sm:text-5xl">The right lead. The right rep. Right now.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Capture leads from every channel, qualify them with AI and route them to the best person before interest turns cold.</p>
            <div className="mt-8 space-y-4">
              {workflowSteps.map((item) => (
                <div key={item.step} className="grid grid-cols-[52px_1fr] gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f5ee] font-black text-[#1e5f3f]">{item.step}</div>
                  <div>
                    <div className="text-base font-bold text-[#0a2e1c]">{item.title}</div>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#demo" className="button mt-8 inline-flex items-center gap-3 rounded-full bg-[#18B466] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#139556]" style={{borderRadius: '9999px'}}>See lead automation <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section id="commerce" className="section-shell commerce-section">
        <div className="soft-card grid gap-10 px-6 py-12 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div>
            <div className="kicker">Conversational commerce</div>
            <h2 className="mt-4 text-4xl font-black tracking-tighter text-[#0a2e1c] sm:text-5xl">Turn WhatsApp into your highest-converting storefront.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Connect your store, sync products and keep customers moving from discovery to delivery with timely WhatsApp journeys.</p>
            <div className="mt-8 space-y-4">
              {commerceSteps.map((item) => (
                <div key={item.step} className="grid grid-cols-[52px_1fr] gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f5ee] font-black text-[#1e5f3f]">{item.step}</div>
                  <div>
                    <div className="text-base font-bold text-[#0a2e1c]">{item.title}</div>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#demo" className="button mt-8 inline-flex items-center gap-3 rounded-full bg-[#18B466] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#139556]" style={{borderRadius: '9999px'}}>Explore commerce <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="self-center overflow-hidden rounded-3xl border border-slate-100 bg-[#071711] shadow-lg shadow-[#0a2e1c]/10">
            <Image className="h-auto w-full object-contain" src={shopifyCommerceJourney} alt="Shopify and WhatsApp commerce journey in WhatsEase" />
          </div>
        </div>
      </section>

      <section id="mobile" className="section-shell mobile-section">
        <div className="soft-card grid gap-10 px-6 py-12 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div>
            <div className="kicker">Ready wherever work happens</div>
            <h2 className="mt-4 text-4xl font-black tracking-tighter text-[#0a2e1c] sm:text-5xl">Keep customers moving, even when your team is mobile.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Install WhatsEase as a web app, jump directly into priority chats and receive supported push notifications so important conversations do not wait for a desktop.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {mobilePoints.map((point) => (
                <div key={point.title} className="grid grid-cols-[28px_1fr] gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm">
                  <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-[#e8f5ee] text-xs font-black text-[#1e5f3f]">✓</span>
                  <div>
                    <div className="text-sm font-bold text-[#0a2e1c]">{point.title}</div>
                    <p className="mt-1 text-xs font-normal leading-5 text-slate-500">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image className="h-auto w-full max-w-lg object-contain" src={mobileAppWorkspace} alt="WhatsEase mobile app inbox and customer alerts" />
          </div>
        </div>
      </section>

      <section id="industries" className="section-shell industries-section">
        <div className="soft-card px-6 py-12 sm:px-10">
          <div className="section-heading">
            <div className="kicker">Solutions that fit</div>
            <h2>Made for your industry. Ready for your customers.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {industries.map((x, i) => (
              <article key={x[0]} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className={`mb-5 rounded-[1.25rem] p-5 ${i === 0 ? 'bg-[#e8f5ee]' : i === 1 ? 'bg-[#e8f5ee]' : 'bg-[#e8f5ee]'}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a2e1c] text-sm font-black text-white">{i === 0 ? 'AI' : i === 1 ? 'EV' : 'BI'}</div>
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#1e5f3f]">{x[0]}</div>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-[#0a2e1c]">{x[1]}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{x[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="customers" className="section-shell customers-section">
        <div className="soft-card px-6 py-12 sm:px-10">
          <div className="section-heading centered">
            <div className="kicker mx-auto">Customer stories</div>
            <h2>Loved by teams who move fast</h2>
            <p>Real businesses. Real conversations. Results that speak for themselves.</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <blockquote key={item.name} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="text-sm font-black tracking-[0.18em] text-[#1e5f3f] uppercase">★ ★ ★ ★ ★</div>
                <p className="mt-5 text-base leading-8 text-slate-600">“{item.quote}”</p>
                <footer className="mt-6 flex items-center gap-3">
                  <span className={`person p${i}`}>{item.name.split(' ').map((n) => n[0]).join('')}</span>
                  <div>
                    <b className="block text-sm text-[#0a2e1c]">{item.name}</b>
                    <small className="block text-xs text-slate-500">{item.role}</small>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="section-shell security-section">
        <div className="soft-card grid gap-10 px-6 py-12 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div>
            <div className="kicker">Secure by design</div>
            <h2 className="mt-4 text-4xl font-black tracking-tighter text-[#0a2e1c] sm:text-5xl">Your conversations. Protected at every step.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Enterprise-grade controls and India-based infrastructure help keep your customer data safe and your team in control.</p>
            <a href="#demo" className="button mt-8 inline-flex items-center gap-3 rounded-full bg-[#18B466] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#139556]" style={{borderRadius: '9999px'}}>Explore security <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {securityCards.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="icon-box mb-4"><BadgeCheck className="h-5 w-5" /></div>
                <h3 className="text-lg font-bold text-[#0a2e1c]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-shell faq-section">
        <div className="soft-card grid gap-10 px-6 py-12 lg:grid-cols-[.85fr_1.15fr] lg:px-10">
          <div>
            <div className="kicker">Frequently asked questions</div>
            <h2 className="mt-4 text-4xl font-black tracking-tighter text-[#0a2e1c] sm:text-5xl">Everything you need to know.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Still deciding whether WhatsEase fits your workflow? Our team can walk you through the details.</p>
            <a href="mailto:connect.whatsease@gmail.com" className="button mt-8 inline-flex items-center gap-3 rounded-full bg-[#18B466] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#139556]" style={{borderRadius: '9999px'}}>Ask another question <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="space-y-4">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0} className="group rounded-[1.25rem] border border-slate-100 bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[#0a2e1c]">{question}<span className="text-xl font-black text-[#1e5f3f]">+</span></summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="demo section" id="demo"><div className="demo-copy"><div className="kicker">LET&apos;S TALK</div><h2>See what WhatsEase can do for your team</h2><p>Book a personalised walkthrough. We&apos;ll learn about your workflow, show the features that matter and answer every question.</p><ul><li><span>✓</span> A tailored 30-minute product tour</li><li><span>✓</span> Practical recommendations for your team</li><li><span>✓</span> No pressure. No generic sales deck.</li></ul></div><form onSubmit={submitForm}>{formSent ? <div className="success"><span>✓</span><h3>Thanks—we&apos;ll be in touch.</h3><p>A WhatsEase specialist will contact you shortly.</p><button type="button" className="text-link" onClick={()=>setFormSent(false)}>Send another request</button></div> : <><div className="form-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Work email<input required type="email" name="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Phone number<input required type="tel" name="phone" placeholder="+91 12345 67890" /></label><label>Company<input required name="company" placeholder="Company name" /></label></div><label>Team size<select name="size" defaultValue=""><option value="" disabled>Select team size</option><option>1–10</option><option>11–50</option><option>51–200</option><option>201+</option></select></label><label>What would you like to improve?<textarea name="message" placeholder="Tell us a little about your sales or support workflow" /></label><button className="button form-button">Book my free demo <span>→</span></button><small className="privacy">By submitting, you agree to our privacy policy. We&apos;ll never share your information.</small></>}</form></section>

      <footer className="footer"><div className="footer-main"><div className="footer-brand"><a className="logo inverse" href="#top"><Image src="/logo.svg" alt="WhatsEase" width={154} height={32} /></a><p>AI-powered conversations that help ambitious teams sell, support and grow on WhatsApp.</p><div className="footer-contact"><a href="mailto:connect.whatsease@gmail.com">connect.whatsease@gmail.com</a><span>Vadodara, Gujarat, India</span></div></div><div><h3>Product</h3><a href="#product">Overview</a><a href="#platform">Features</a><a href="https://www.whatsease.in/pricing">Pricing</a><a href="#commerce">Commerce</a></div><div><h3>Solutions</h3><a href="#solutions">Sales</a><a href="#solutions">Support</a><a href="#solutions">Marketing</a><a href="#industries">Industries</a></div><div><h3>Company</h3><a href="#customers">Customers</a><a href="https://www.whatsease.in/about-us">About</a><a href="https://www.whatsease.in/contact">Contact</a><a href="https://www.whatsease.in/case-studies">Case studies</a></div><div><h3>Resources</h3><a href="https://www.whatsease.in/docs">Documentation</a><a href="https://www.whatsease.in/contact">Help centre</a><a href="https://www.whatsease.in/privacy">Privacy</a><a href="https://www.whatsease.in/terms">Terms</a></div></div><div className="footer-bottom"><span>© 2026 WhatsEase Technologies</span><span style={{display: 'inline-flex', alignItems: 'center', gap: '4px'}}>Made with care in India <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="18" height="12"><rect width="3" height="0.667" fill="#FF9933"/><rect y="0.667" width="3" height="0.667" fill="#FFFFFF"/><rect y="1.333" width="3" height="0.667" fill="#138808"/><circle cx="1.5" cy="1" r="0.25" fill="#000080"/></svg></span></div></footer>
    </main>
  );
}
