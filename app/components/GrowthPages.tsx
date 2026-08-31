"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight, Bot, CalendarDays, Code2, GitBranch, Headphones,
  Megaphone, Search, ShoppingBag, TicketCheck, Users,
  Webhook, Workflow, Zap,
} from "lucide-react";

const compactUseCases = [
  { title: "Lead capture & distribution", description: "Capture enquiries from every channel, qualify leads and route them to the right sales rep instantly.", tags: ["Capture", "Route"], icon: GitBranch },
  { title: "Customer support", description: "Bring WhatsApp, email and social conversations into one inbox and resolve them faster.", tags: ["Unified inbox", "Team collaboration"], icon: Headphones },
  { title: "AI chatbots & workflows", description: "Answer questions 24/7 and automate journeys with triggers, branches and smart integrations.", tags: ["AI agents", "Automation"], icon: Bot },
  { title: "WhatsApp campaigns", description: "Run personalised promotions and follow-ups with audience segmentation and delivery tracking.", tags: ["Broadcasts", "Analytics"], icon: Megaphone },
  { title: "Conversational commerce", description: "Recover abandoned carts, share product recommendations and drive more conversions on WhatsApp.", tags: ["Cart recovery", "Order updates"], icon: ShoppingBag },
  { title: "Event registration & ticketing", description: "Manage registrations, payments, digital tickets and check-ins — all through WhatsApp.", tags: ["Tickets", "Check-in"], icon: TicketCheck },
  { title: "Bookings & reminders", description: "Automate appointment bookings, confirmations and reminders to reduce no-shows.", tags: ["Reminders", "Reschedule"], icon: CalendarDays },
  { title: "Customer engagement & retention", description: "Engage at the right time with updates, offers and follow-ups that build lasting relationships.", tags: ["Engagement", "Follow-ups"], icon: Users },
] as const;

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
  return <main className="compact-use-cases">
    <section className="compact-use-cases-hero">
      <span className="growth-eyebrow">Use cases</span>
      <h1>Every conversation.<br />A better outcome.</h1>
      <p>WhatsEase helps teams automate conversations across the customer journey so you can connect, engage and grow — effortlessly.</p>
    </section>
    <section className="compact-use-case-grid" aria-label="WhatsEase use cases">
      {compactUseCases.map(({ title, description, tags, icon: Icon }, index) => <article className="compact-use-case-card" key={title} style={{ "--card-index": index } as React.CSSProperties}>
        <span className="compact-use-case-icon"><Icon aria-hidden="true" /></span>
        <h2>{title}</h2>
        <i aria-hidden="true" />
        <p>{description}</p>
        <div>{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </article>)}
    </section>
    <section className="compact-customer-journey" aria-labelledby="customer-journey-title">
      <div className="compact-journey-heading"><span className="compact-cta-spark"><Zap aria-hidden="true" /></span><strong id="customer-journey-title">One platform. Every conversation.</strong></div>
      <div className="compact-journey-stages">
        {[
          ["01", "Discover", "Campaigns", "Lead Capture"],
          ["02", "Engage", "WhatsApp", "AI Agents"],
          ["03", "Qualify", "AI Qualification", "Lead Scoring"],
          ["04", "Convert", "Lead Routing", "Follow-ups"],
          ["05", "Support", "Unified Inbox", "AI Support"],
          ["06", "Retain", "Re-engagement", "Campaigns"],
        ].map(([number, stage, first, second], index) => <div className="compact-journey-stage" key={stage}>
          <span>{number}</span><strong>{stage}</strong><small>{first}</small><small>{second}</small>{index < 5 && <i aria-hidden="true">→</i>}
        </div>)}
      </div>
    </section>
    <section className="compact-integration-cta">
      <div><span className="growth-eyebrow">Integrations</span><strong>Connect the tools behind every customer journey.</strong></div>
      <Link href="/integrations">Explore integrations <ArrowRight /></Link>
    </section>
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
