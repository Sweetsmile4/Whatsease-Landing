"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AudioLines, BarChart3, Bot, BriefcaseBusiness, GitBranch, Inbox,
  ListTree, Megaphone, MessageCircle, PlugZap, ShieldCheck, ShoppingBag,
  Smartphone, Sparkles, Webhook, Workflow,
} from "lucide-react";

export type ProductFeature = {
  title: string;
  description: string;
  category: "Communication" | "Automation" | "Engagement" | "Business";
};

const CATEGORIES = ["All", "Communication", "Automation", "Engagement", "Business"] as const;
const iconByTitle = {
  "Unified Inbox": Inbox,
  "WhatsApp Business": MessageCircle,
  "AI Agents": Bot,
  "Visual Automation": Workflow,
  "Campaign Builder": Megaphone,
  "Sales CRM": BriefcaseBusiness,
  "Lead Capture & Routing": GitBranch,
  "Conversational Commerce": ShoppingBag,
  "Analytics & Reporting": BarChart3,
  "WhatsApp Flows": ListTree,
  "Chatbots": Sparkles,
  "WhatsApp Voice Agent": AudioLines,
  "Mobile Web App": Smartphone,
  "Business Integrations": PlugZap,
  "APIs & Webhooks": Webhook,
  "Controls & Permissions": ShieldCheck,
};

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
          <button key={item} type="button" role="tab" aria-selected={category === item} className={category === item ? "active" : ""} onClick={() => changeCategory(item)}>{item}</button>
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
                <motion.span className="product-arc-icon" animate={active && !reduceMotion ? { scale: [1, 1.07, 1] } : { scale: 1 }} transition={{ duration: .34 }}><Icon aria-hidden="true" /></motion.span>
                <motion.span className="product-arc-title" animate={{ opacity: active ? 1 : .9, y: active ? 0 : 3 }} transition={{ duration: .28, delay: active ? .05 : 0 }}>{feature.title}</motion.span>
                <motion.span className="product-arc-description" animate={{ opacity: active ? 1 : .78, y: active ? 0 : 3 }} transition={{ duration: .3, delay: active ? .1 : 0 }}>{feature.description}</motion.span>
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
      </div>
    </motion.section>
  );
}
