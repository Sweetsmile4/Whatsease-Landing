"use client";

import Link from "next/link";

const comparisons = [
  { name: "Bitespeed", desc: "Feature comparison and pricing", href: "/comparison/bitespeed" },
  { name: "Business On Bot", desc: "Automation and chatbot comparison", href: "/comparison/business-on-bot" },
  { name: "Contlo", desc: "Marketing automation comparison", href: "/comparison/contlo" },
  { name: "Gallabox", desc: "WhatsApp Business solution comparison", href: "/comparison/gallabox" },
  { name: "Interakt", desc: "Customer engagement platform comparison", href: "/comparison/interakt" },
  { name: "Kwikchat", desc: "Live chat and messaging comparison", href: "/comparison/kwikchat" },
  { name: "Limechat", desc: "Conversational commerce comparison", href: "/comparison/limechat" },
  { name: "Sinch", desc: "Communication platform comparison", href: "/comparison/sinch" },
  { name: "Superlemon", desc: "Customer support solution comparison", href: "/comparison/superlemon" },
  { name: "Wati", desc: "WhatsApp API platform comparison", href: "/comparison/wati" },
  { name: "Zoko", desc: "E-commerce messaging comparison", href: "/comparison/zoko" },
];

export default function ComparisonIndexPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f7faf9", color: "#10231b" }}>
      {/* Top bar */}
      <header style={{ background: "#10231b", color: "#fff", padding: "0 24px" }}>
        <div style={{ maxWidth: 1168, margin: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "#fff", fontWeight: 800, fontSize: 20 }}>
            <Mark /> WhatsEase
          </Link>
          <nav style={{ display: "flex", gap: 24, fontSize: 14 }}>
            <Link href="/" style={{ color: "#d9e5df", textDecoration: "none" }}>Home</Link>
            <Link href="/product" style={{ color: "#d9e5df", textDecoration: "none" }}>Product</Link>
            <Link href="/pricing" style={{ color: "#d9e5df", textDecoration: "none" }}>Pricing</Link>
            <Link href="/#demo" style={{ color: "#7ce0b6", textDecoration: "none", fontWeight: 600 }}>Book a demo</Link>
          </nav>
        </div>
      </header>

      {/* Heading */}
      <section style={{ maxWidth: 1168, margin: "auto", padding: "80px 24px 24px", textAlign: "center" }}>
        <p style={{ color: "#348762", fontWeight: 800, fontSize: 10, letterSpacing: "0.17em", marginBottom: 14 }}>WHY TEAMS SWITCH TO WHATSEASE</p>
        <h1 style={{ fontSize: 44, lineHeight: 1.12, margin: "0 0 16px" }}>WhatsEase vs. every alternative</h1>
        <p style={{ color: "#5f6f68", fontSize: 17, maxWidth: 640, margin: "0 auto" }}>
          Honest, side-by-side comparisons. See how WhatsEase compares on automation, commerce,
          events and WhatsApp-first growth — not just support.
        </p>
      </section>

      {/* Grid */}
      <section style={{ maxWidth: 1168, margin: "auto", padding: "40px 24px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
          {comparisons.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                display: "block",
                background: "#fff",
                border: "1px solid #e3ebe7",
                borderRadius: 16,
                padding: "24px 26px",
                textDecoration: "none",
                color: "#10231b",
                transition: "box-shadow .2s, transform .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 18px 44px rgba(16,35,27,.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "none";
              }}
            >
              <h3 style={{ fontSize: 19, margin: "0 0 6px" }}>
                WhatsEase vs <span style={{ color: "#348762" }}>{item.name}</span>
              </h3>
              <p style={{ color: "#5f6f68", fontSize: 14, margin: 0 }}>{item.desc}</p>
              <span style={{ display: "inline-block", marginTop: 14, color: "#1e5f3f", fontWeight: 700, fontSize: 14 }}>
                Read the comparison →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Mark() {
  return (
    <span style={{ width: 26, height: 26, borderRadius: 8, background: "#7ce0b6", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#10231b", fontWeight: 900, fontSize: 14 }}>W</span>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#071711", color: "#d9e5df", padding: "44px max(24px, calc((100vw - 1168px)/2))" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800 }}>
          <Mark /> WhatsEase
        </div>
        <div style={{ display: "flex", gap: 22, fontSize: 13 }}>
          <Link href="/" style={{ color: "#a8cdbb", textDecoration: "none" }}>Home</Link>
          <Link href="/comparison" style={{ color: "#a8cdbb", textDecoration: "none" }}>Comparisons</Link>
          <Link href="/case-studies" style={{ color: "#a8cdbb", textDecoration: "none" }}>Case studies</Link>
          <Link href="/#demo" style={{ color: "#a8cdbb", textDecoration: "none" }}>Book a demo</Link>
        </div>
      </div>
      <p style={{ marginTop: 24, fontSize: 12, color: "#6c8f7d" }}>© {new Date().getFullYear()} WhatsEase. All rights reserved.</p>
    </footer>
  );
}
