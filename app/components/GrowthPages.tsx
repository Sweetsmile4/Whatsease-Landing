"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight, Bot, Check, Code2, GitBranch,
  Megaphone, Search, ShoppingBag, TicketCheck, Users,
  Webhook, Workflow, Zap,
} from "lucide-react";

type UseCase = {
  title: string; description: string; benefits: string[]; capabilities: string[];
  integrations: string[]; flow: string[]; cta: string; icon: typeof Zap;
};

const useCases: UseCase[] = [
  { title: "Capture & Convert Leads", description: "Turn every enquiry into a qualified opportunity before interest turns cold.", benefits: ["Capture every channel", "Qualify automatically", "Route to the right team"], capabilities: ["Lead Capture", "AI Agents", "CRM", "Lead Routing"], integrations: ["Meta", "Instagram", "WhatsApp", "Google Sheets", "Web Forms"], flow: ["New enquiry", "AI qualification", "Lead score", "Sales rep"], cta: "Explore lead automation", icon: Users },
  { title: "Recover Lost Sales", description: "Bring shoppers back with timely, personalised WhatsApp follow-ups.", benefits: ["Recover abandoned carts", "Automate reminders", "Personalise offers"], capabilities: ["WhatsApp Business", "Campaign Builder", "Automation", "Analytics"], integrations: ["Shopify", "WhatsApp", "CRM"], flow: ["Cart abandoned", "Smart reminder", "Personal offer", "Order complete"], cta: "Explore cart recovery", icon: ShoppingBag },
  { title: "Support Customers with AI", description: "Answer repetitive questions instantly and involve a human only when needed.", benefits: ["Respond around the clock", "Reduce repetitive work", "Escalate intelligently"], capabilities: ["AI Agents", "Chatbots", "Unified Inbox", "Analytics"], integrations: ["WhatsApp", "Instagram", "Facebook", "Webhooks"], flow: ["Question", "AI agent", "Resolve or escalate", "Human handoff"], cta: "Explore AI support", icon: Bot },
  { title: "Automate Follow-ups", description: "Keep every lead moving without relying on manual reminders.", benefits: ["Never miss a follow-up", "Trigger messages automatically", "Personalise by lead stage"], capabilities: ["Visual Automation", "CRM", "Campaign Builder", "Lead Routing"], integrations: ["WhatsApp", "Google Sheets", "Web Forms"], flow: ["New lead", "Day 1", "Day 3", "Reply"], cta: "Explore automation", icon: GitBranch },
  { title: "Run WhatsApp Campaigns", description: "Reach the right audience with campaigns that still feel conversational.", benefits: ["Segment audiences", "Personalise each send", "Track engagement"], capabilities: ["Campaign Builder", "CRM", "Analytics", "Automation"], integrations: ["WhatsApp", "Shopify", "Google Sheets"], flow: ["Audience", "Segments", "Campaign", "Conversions"], cta: "Explore campaigns", icon: Megaphone },
  { title: "Run Events on WhatsApp", description: "Connect registrations, payments, tickets, reminders and check-ins.", benefits: ["Simplify registration", "Automate attendee updates", "Manage one connected journey"], capabilities: ["WhatsApp Flows", "Automation", "Campaigns", "APIs"], integrations: ["WhatsApp", "Google Sheets", "Webhooks"], flow: ["Register", "Confirm", "QR ticket", "Check-in"], cta: "Explore event automation", icon: TicketCheck },
];

const integrationData = [
  { name: "WhatsApp Business", logo: "whatsapp_logo.png", category: "Communication", description: "Run messaging, templates and customer journeys on WhatsApp." },
  { name: "Instagram", logo: "instagram.png", category: "Communication", description: "Bring Instagram conversations and enquiries into your workflow." },
  { name: "Facebook", logo: "facebook.png", category: "Communication", description: "Capture and manage customer conversations from Meta channels." },
  { name: "Shopify", logo: "shopify.png", category: "Commerce", description: "Sync commerce events for orders, updates and cart recovery." },
  { name: "Google Sheets", logo: "google sheets.png", category: "Productivity", description: "Move lead and workflow data between WhatsEase and Sheets." },
  { name: "Web Forms", logo: "web form.png", category: "Productivity", description: "Turn website submissions into routed, actionable leads." },
  { name: "IndiaMART", logo: "indiaMart.png", category: "CRM", description: "Capture marketplace enquiries and distribute them instantly." },
  { name: "TradeIndia", logo: "trade india.png", category: "CRM", description: "Bring B2B enquiries into a consistent sales follow-up process." },
  { name: "ExportersIndia", logo: "exporter india.png", category: "CRM", description: "Centralise export leads and automate the next best action." },
  { name: "REST APIs", logo: null, category: "Developer", description: "Connect custom applications to WhatsEase business workflows." },
  { name: "Webhooks", logo: null, category: "Developer", description: "Trigger real-time actions when customer and workflow events occur." },
] as const;

function FlowDiagram({ nodes, compact = false }: { nodes: string[]; compact?: boolean }) {
  return <div className={`growth-flow${compact ? " compact" : ""}`}>{nodes.map((node, index) => <div className="growth-flow-part" key={node}><span>{node}</span>{index < nodes.length - 1 && <i><b /></i>}</div>)}</div>;
}

function HeroNetwork({ integrations = false }: { integrations?: boolean }) {
  const inputs = integrations ? ["Communication", "Commerce", "CRM", "Productivity", "Developer"] : ["Instagram", "Website", "WhatsApp", "Ads", "Forms"];
  const outputs = integrations ? ["Messages", "Orders", "Leads", "Actions", "Data"] : ["Qualified lead", "Sale", "Support", "Follow-up", "Campaign"];
  return <div className="growth-network" aria-label="Connected WhatsEase workflow">
    <div className="network-column">{inputs.map((item, i) => <span style={{ "--i": i } as React.CSSProperties} key={item}>{item}</span>)}</div>
    <div className="network-lines left"><i /><i /><i /><i /><i /></div>
    <div className="network-core"><Image src="/whatsease_favicon.svg" alt="" width={38} height={38} /><b>WhatsEase</b><small>{integrations ? "Connected layer" : "Automation layer"}</small></div>
    <div className="network-lines right"><i /><i /><i /><i /><i /></div>
    <div className="network-column output">{outputs.map((item, i) => <span style={{ "--i": i } as React.CSSProperties} key={item}>{item}</span>)}</div>
  </div>;
}

function FinalCta({ integrations = false }: { integrations?: boolean }) {
  return <section className="growth-final">
    <small>{integrations ? "CONNECTED BY WHATSEASE" : "READY WHEN YOU ARE"}</small>
    <h2>{integrations ? "Your tools. One connected customer journey." : "Turn conversations into outcomes."}</h2>
    <p>{integrations ? "Connect your stack and automate what happens between every conversation, lead and customer action." : "See how WhatsEase can automate the workflows that matter most to your business."}</p>
    <div><Link className="button main-pill-button" href="/#demo">Book a demo <span>→</span></Link><Link className="growth-text-link" href={integrations ? "/use-cases" : "/integrations"}>{integrations ? "Explore use cases" : "Explore integrations"} <ArrowRight /></Link></div>
  </section>;
}

export function UseCasesExperience() {
  const [active, setActive] = useState(0);
  const selected = useCases[active];
  return <main className="growth-page">
    <section className="growth-hero growth-shell">
      <div className="growth-hero-copy"><span className="growth-eyebrow">Use cases</span><h1>Built for the moments that move your business.</h1><p>From the first “Hi” to the next purchase, WhatsEase helps teams capture leads, automate conversations, recover sales and support customers across every stage.</p><div><a className="button main-pill-button" href="#outcomes">Explore use cases <span>↓</span></a><Link className="growth-text-link" href="/#demo">Book a demo <ArrowRight /></Link></div></div>
      <HeroNetwork />
    </section>

    <section className="growth-section growth-shell" id="outcomes">
      <div className="growth-heading"><span className="growth-eyebrow">Choose an outcome</span><h2>What are you trying to achieve?</h2><p>Choose an outcome and see how WhatsEase helps you get there.</p></div>
      <div className="outcome-tabs" role="tablist">{useCases.map((item, index) => <button key={item.title} role="tab" aria-selected={active === index} className={active === index ? "active" : ""} onClick={() => setActive(index)}>{item.title.replace("Capture & Convert", "Get more").replace("Recover Lost", "Increase").replace("Support Customers with AI", "Automate support").replace("Automate Follow-ups", "Automate follow-ups").replace("Run WhatsApp Campaigns", "Engage customers").replace("Run Events on WhatsApp", "Run events")}</button>)}</div>
      <div className="outcome-panel">
        <div><span>0{active + 1}</span><selected.icon aria-hidden="true" /><h3>{selected.title}</h3><p>{selected.description}</p><ul>{selected.benefits.map(item => <li key={item}><Check />{item}</li>)}</ul></div>
        <FlowDiagram nodes={selected.flow} />
      </div>
    </section>

    <section className="growth-section growth-shell use-case-stack">
      {useCases.map((item, index) => <article className={`story-card story-card-${index % 3}`} key={item.title}>
        <div className="story-copy"><span className="story-number">0{index + 1}</span><item.icon className="story-icon" /><h2>{item.title}</h2><p>{item.description}</p><ul>{item.benefits.map(benefit => <li key={benefit}><Check />{benefit}</li>)}</ul><Link href={index === 2 ? "/use-case/customer-support" : index === 4 ? "/use-case/whatsapp-marketing-campaigns" : index === 5 ? "/use-case/event-management" : "/#demo"}>{item.cta} <ArrowRight /></Link></div>
        <div className="story-visual"><FlowDiagram nodes={item.flow} /><div className="story-tags"><div><small>Capabilities</small>{item.capabilities.map(tag => <span key={tag}>{tag}</span>)}</div><div><small>Works with</small>{item.integrations.map(tag => <span key={tag}>{tag}</span>)}</div></div></div>
      </article>)}
    </section>

    <section className="growth-section growth-shell connect-panel"><div><span className="growth-eyebrow">Integrations</span><h2>Your workflows work better when your tools work together.</h2><p>Connect data, conversations and actions across the tools your team already uses.</p><Link href="/integrations">Explore all integrations <ArrowRight /></Link></div><HeroNetwork integrations /></section>

    <section className="growth-section growth-shell journey-section"><div className="growth-heading"><span className="growth-eyebrow">One platform</span><h2>Every customer journey.</h2></div><div className="journey-lineup">{[["Discover","Lead Capture","Campaigns"],["Engage","WhatsApp","AI Agents"],["Qualify","CRM","Lead Scoring"],["Convert","Lead Routing","Automation"],["Support","Unified Inbox","AI Support"],["Retain","Campaigns","Analytics"]].map(([stage,a,b], index) => <div key={stage}><i>0{index + 1}</i><b>{stage}</b><span>{a}</span><span>{b}</span></div>)}</div></section>
    <FinalCta />
  </main>;
}

export function IntegrationsExperience() {
  const categories = ["All", "Communication", "Commerce", "CRM", "Productivity", "Developer"];
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => integrationData.filter(item => (category === "All" || item.category === category) && `${item.name} ${item.category}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return <main className="growth-page">
    <section className="growth-hero growth-shell"><div className="growth-hero-copy"><span className="growth-eyebrow">Integrations</span><h1>Connect WhatsEase to the tools that run your business.</h1><p>Bring channels, commerce tools and workflows together so data moves automatically and conversations stay connected.</p><div><a className="button main-pill-button" href="#integration-grid">Explore integrations <span>↓</span></a><Link className="growth-text-link" href="/#demo">Book a demo <ArrowRight /></Link></div></div><HeroNetwork integrations /></section>

    <section className="growth-section growth-shell"><div className="growth-heading"><span className="growth-eyebrow">Connected ecosystem</span><h2>Popular integrations</h2><p>The connections teams use to keep leads, orders and conversations moving.</p></div><div className="featured-integrations">{integrationData.slice(0,6).map(item => <article key={item.name}><Image src={`/logos/${item.logo}`} alt={`${item.name} logo`} width={48} height={48}/><div><small>{item.category}</small><h3>{item.name}</h3><p>{item.description}</p></div><span className="connection-status"><i />Connected</span><ArrowRight /></article>)}</div></section>

    <section className="growth-section growth-shell" id="integration-grid"><div className="growth-heading"><span className="growth-eyebrow">Find your tools</span><h2>Everything works better together.</h2></div><div className="integration-tools"><div className="integration-filters">{categories.map(item => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><label><Search /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by app or category..." aria-label="Search integrations" /></label></div><div className="integration-grid">{filtered.map(item => <article key={item.name}><div className="integration-logo">{item.logo ? <Image src={`/logos/${item.logo}`} alt="" width={42} height={42}/> : item.name === "Webhooks" ? <Webhook /> : <Code2 />}</div><small>{item.category}</small><h3>{item.name}</h3><p>{item.description}</p><span>Available <i /></span><ArrowRight className="integration-arrow" /></article>)}</div>{filtered.length === 0 && <div className="integration-empty"><h3>Can’t find your tool?</h3><p>Use APIs and webhooks to connect custom systems with WhatsEase.</p><Link href="/#demo">Talk to us <ArrowRight /></Link></div>}</section>

    <section className="growth-section growth-shell automation-example"><div><span className="growth-eyebrow">How it works</span><h2>Connect once. Automate everywhere.</h2><div className="three-steps">{[["01","Connect your tools"],["02","Build the workflow"],["03","Let WhatsEase handle the rest"]].map(([n,t]) => <span key={n}><i>{n}</i>{t}</span>)}</div></div><div className="automation-canvas"><div className="app-equation"><span>Shopify</span><b>+</b><span>WhatsEase</span><b>+</b><span>WhatsApp</span></div><FlowDiagram nodes={["Cart abandoned", "Customer found", "WhatsApp sent", "Order recovered"]}/></div></section>

    <section className="growth-section growth-shell"><div className="growth-heading"><span className="growth-eyebrow">Connected outcomes</span><h2>See what happens when your tools work together.</h2></div><div className="mini-workflows">{[["Lead automation",["Meta Lead Ads","AI qualification","CRM","Sales rep"]],["Cart recovery",["Shopify","Cart abandoned","WhatsApp","Purchase"]],["Lead nurturing",["Web form","WhatsEase","CRM","Follow-up"]],["Appointment reminders",["Calendar","Booking","WhatsApp","Reminder"]]].map(([label,nodes]) => <article key={label as string}><small>{label as string}</small><FlowDiagram nodes={nodes as string[]} compact /></article>)}</div></section>

    <section className="growth-section growth-shell developer-panel"><div><span className="growth-eyebrow">For developers</span><h2>Build beyond the integrations we ship.</h2><p>Use APIs and webhooks to connect internal tools, custom applications and your existing infrastructure.</p><a href="https://www.whatsease.in/docs">Explore developer tools <ArrowRight /></a></div><div className="code-visual"><span>workflow.event</span><code>{`{\n  "event": "lead.qualified",\n  "action": "notify_sales",\n  "channel": "whatsapp"\n}`}</code><div><span><Code2 /> REST API</span><span><Webhook /> Webhooks</span><span><Workflow /> Custom workflows</span></div></div></section>
    <FinalCta integrations />
  </main>;
}
