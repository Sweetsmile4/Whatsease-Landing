"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AudioLines, BarChart3, Bot, BriefcaseBusiness, GitBranch, Inbox,
  LayoutGrid, ListTree, Megaphone, MessageCircle, PlugZap, ShieldCheck,
  ShoppingBag, Smartphone, Sparkles, Users, Webhook, Workflow, Zap,
} from "lucide-react";

export type ProductFeature = {
  title: string;
  description: string;
  category: "Communication" | "Automation" | "Engagement" | "Business";
};

const CATEGORIES = ["All", "Communication", "Automation", "Engagement", "Business"] as const;
const categoryIcon = { All: LayoutGrid, Communication: MessageCircle, Automation: Zap, Engagement: Users, Business: BriefcaseBusiness };
const conciseDescription: Record<string, string> = {
  "Unified Inbox": "Every customer conversation, together in one shared view.",
  "WhatsApp Business": "Professional WhatsApp messaging built for your whole team.",
  "Conversational Commerce": "Turn product discovery and orders into guided chats.",
  "WhatsApp Voice Agent": "Automate natural voice follow-ups, reminders and outreach.",
  "AI Agents": "Understand intent, answer naturally and take the next best action.",
  "Prompt-to-Production": "Turn a written idea into a complete, working automation.",
  "Speech-to-Production": "Speak your intent and generate an editable workflow instantly.",
  "Visual Automation": "Build powerful customer journeys without writing code.",
  "Campaign Builder": "Create, schedule and track high-converting campaigns.",
  "Lead Capture & Routing": "Capture every lead and route it to the right teammate.",
  "WhatsApp Flows": "Create guided journeys that engage, qualify and convert.",
  "Chatbots": "Answer instantly and move conversations forward automatically.",
  "Mobile App": "Manage conversations anywhere with WhatsEase for Android and iOS.",
  "APIs & Webhooks": "Connect your tools and move business data securely.",
  "Sales CRM": "Manage leads, follow-ups and pipelines in one workspace.",
  "Analytics & Reporting": "See the signals behind team and campaign performance.",
  "Business Integrations": "Bring your essential business tools into WhatsEase.",
  "Controls & Permissions": "Give every team the right access as you scale.",
};
const iconByTitle = {
  "Unified Inbox": Inbox,
  "WhatsApp Business": MessageCircle,
  "AI Agents": Bot,
  "Prompt-to-Production": Sparkles,
  "Speech-to-Production": AudioLines,
  "Visual Automation": Workflow,
  "Campaign Builder": Megaphone,
  "Sales CRM": BriefcaseBusiness,
  "Lead Capture & Routing": GitBranch,
  "Conversational Commerce": ShoppingBag,
  "Analytics & Reporting": BarChart3,
  "WhatsApp Flows": ListTree,
  "Chatbots": Sparkles,
  "WhatsApp Voice Agent": AudioLines,
  "Mobile App": Smartphone,
  "Business Integrations": PlugZap,
  "APIs & Webhooks": Webhook,
  "Controls & Permissions": ShieldCheck,
};

function FeatureIllustration({ Icon, category }: { Icon: typeof Sparkles; category: ProductFeature["category"] }) {
  return (
    <span className={`product-arc-art product-arc-art--${category.toLowerCase()}`} aria-hidden="true">
      <svg viewBox="0 0 220 150" fill="none">
        <ellipse cx="110" cy="78" rx="64" ry="48" className="product-arc-art-wash" />
        <path d="M47 91C49 47 76 25 111 25c38 0 64 23 66 66" className="product-arc-art-orbit" />
        <rect x="24" y="33" width="51" height="31" rx="9" className="product-arc-art-panel" />
        <path d="M37 45h25M37 52h17" className="product-arc-art-detail" />
        <rect x="151" y="48" width="46" height="38" rx="10" className="product-arc-art-panel product-arc-art-panel--accent" />
        <path d="M162 61h24M162 69h18" className="product-arc-art-detail" />
        <circle cx="42" cy="105" r="9" className="product-arc-art-node" />
        <circle cx="183" cy="111" r="7" className="product-arc-art-node" />
        <path d="m38 105 3 3 6-7M179 111h8M183 107v8" className="product-arc-art-detail" />
      </svg>
      <span className="product-arc-art-icon"><Icon /></span>
    </span>
  );
}

function useArcMetrics() {
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">("desktop");
  useEffect(() => {
    const update = () => setViewport(window.innerWidth < 640 ? "mobile" : window.innerWidth < 1024 ? "tablet" : "desktop");
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  if (viewport === "mobile") return { spacing: 238, depth: 23, rotation: 9, scaleStep: .1, opacityStep: .25, visibleDistance: 1 };
  if (viewport === "tablet") return { spacing: 210, depth: 18, rotation: 8, scaleStep: .075, opacityStep: .18, visibleDistance: 2 };
  return { spacing: 224, depth: 15, rotation: 7.5, scaleStep: .065, opacityStep: .16, visibleDistance: 4 };
}

export default function ProductSuiteCarousel({ features }: { features: ProductFeature[] }) {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const didDrag = useRef(false);
  const reduceMotion = useReducedMotion();
  const metrics = useArcMetrics();
  const filtered = useMemo(() => category === "All" ? features : features.filter(feature => feature.category === category), [category, features]);

  const moveTo = (index: number) => setActiveIndex(Math.max(0, Math.min(filtered.length - 1, index)));
  const changeCategory = (nextCategory: (typeof CATEGORIES)[number]) => {
    setCategory(nextCategory);
    setActiveIndex(0);
  };

  return (
    <motion.section
      className="product-arc-section"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .2 }}
      transition={{ duration: .58, ease: [.2, .75, .25, 1] }}
      aria-label="WhatsEase Product Suite features"
    >
      <div className="product-arc-filters" role="tablist" aria-label="Filter product features">
        {CATEGORIES.map(item => (
          <button key={item} type="button" role="tab" aria-selected={category === item} className={category === item ? "active" : ""} onClick={() => changeCategory(item)}>
            {(() => { const CategoryIcon = categoryIcon[item]; return <CategoryIcon aria-hidden="true" />; })()}
            {item}
          </button>
        ))}
      </div>

      <motion.div
        className={`product-arc-stage${dragging ? " is-dragging" : ""}`}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={.16}
        dragMomentum
        dragSnapToOrigin
        onDragStart={() => {
          didDrag.current = true;
          setDragging(true);
        }}
        onDragEnd={(_, info) => {
          setDragging(false);
          const projected = info.offset.x + info.velocity.x * .13;
          const steps = Math.max(-3, Math.min(3, Math.round(-projected / metrics.spacing)));
          if (steps !== 0) moveTo(activeIndex + steps);
          window.setTimeout(() => { didDrag.current = false; }, 0);
        }}
        onKeyDown={event => {
          if (event.key === "ArrowLeft") { event.preventDefault(); moveTo(activeIndex - 1); }
          if (event.key === "ArrowRight") { event.preventDefault(); moveTo(activeIndex + 1); }
        }}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label={`${filtered[activeIndex]?.title ?? "Product feature"}. Use left and right arrow keys to navigate.`}
      >
        {filtered.map((feature, index) => {
          const offset = index - activeIndex;
          const distance = Math.abs(offset);
          const visible = distance <= metrics.visibleDistance;
          const Icon = iconByTitle[feature.title as keyof typeof iconByTitle] ?? Sparkles;
          const active = offset === 0;
          return (
            <motion.div
              className="product-arc-position"
              key={feature.title}
              initial={reduceMotion ? false : { opacity: 0, y: 80, scale: .78 }}
              animate={{
                x: offset * metrics.spacing,
                y: 16 + distance * distance * metrics.depth,
                rotate: offset * metrics.rotation,
                scale: Math.max(.7, 1 - distance * metrics.scaleStep),
                opacity: visible ? Math.max(.18, 1 - distance * metrics.opacityStep) : 0,
                zIndex: 30 - distance,
              }}
              transition={reduceMotion ? { duration: .12 } : { type: "spring", stiffness: 250, damping: 28, mass: .8, delay: active ? 0 : Math.min(distance * .018, .08) }}
              aria-hidden={!visible}
              style={{ pointerEvents: visible ? "auto" : "none" }}
            >
              <motion.button
                type="button"
                className={`product-arc-card${active ? " is-active" : ""}`}
                onClick={() => {
                  if (!didDrag.current && !active) moveTo(index);
                }}
                aria-label={`Show ${feature.title}`}
                aria-current={active ? "true" : undefined}
                whileHover={reduceMotion || active ? undefined : { scale: 1.015 }}
                whileFocus={reduceMotion || active ? undefined : { scale: 1.01 }}
              >
                <FeatureIllustration Icon={Icon} category={feature.category} />
                <motion.span className="product-arc-title" animate={{ opacity: active ? 1 : .9, y: active ? 0 : 3 }} transition={{ duration: .28, delay: active ? .05 : 0 }}>{feature.title}</motion.span>
                <span className="product-arc-title-rule" aria-hidden="true" />
                <motion.span className="product-arc-description" animate={{ opacity: active ? 1 : .78, y: active ? 0 : 3 }} transition={{ duration: .3, delay: active ? .1 : 0 }}>{conciseDescription[feature.title] ?? feature.description}</motion.span>
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="product-arc-controls">
        <div className="product-arc-navigation">
          <button type="button" onClick={() => moveTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous feature">←</button>
          <span className="product-arc-instruction">
            <span className="product-arc-drag-label">Drag to explore</span>
            <span className="product-arc-swipe-label">Swipe to explore</span>
          </span>
          <button type="button" onClick={() => moveTo(activeIndex + 1)} disabled={activeIndex === filtered.length - 1} aria-label="Next feature">→</button>
        </div>
        <span className="product-arc-counter" aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
        </span>
        <div className="product-arc-dots" aria-label="Choose a product feature">
          {filtered.map((feature, index) => (
            <button key={feature.title} type="button" className={index === activeIndex ? "active" : ""} onClick={() => moveTo(index)} aria-label={`Show ${feature.title}`} aria-current={index === activeIndex ? "true" : undefined} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
