import Link from "next/link";
import { comparisonsData } from "../data";

interface ComparisonFeature {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageFirst?: boolean;
}

interface ComparisonData {
  title?: string;
  companyName?: string;
  competitor?: string;
  features?: ComparisonFeature[];
}

interface ComparisonHero {
  headingHtml: string;
  description?: string;
  buttonText?: string;
  mainImage?: string;
  cornerImage?: string;
}

interface ComparisonEntry {
  data: ComparisonData;
  heroContent: ComparisonHero;
}

export default async function ComparisonPage({ params }: { params: Promise<{ competitor: string }> }) {
  const { competitor } = await params;
  const key = competitor.toLowerCase();
  const entry = comparisonsData[key] as ComparisonEntry | undefined;
  const displayName = key.charAt(0).toUpperCase() + key.slice(1);

  if (!entry) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5rem", gap: "1.5rem", textAlign: "center", background: "#f7faf9", color: "#10231b" }}>
        <h1 style={{ fontSize: "2.25rem" }}>WhatsEase vs {displayName}</h1>
        <p style={{ fontSize: "1.1rem", color: "#5f6f68", maxWidth: 560 }}>
          We don&apos;t have a comparison page for {displayName} yet — check out the other comparisons or reach out to the team.
        </p>
        <Link href="/comparison" style={{ padding: "0.8rem 1.6rem", background: "#7ce0b6", color: "#10231b", borderRadius: 10, textDecoration: "none", fontWeight: 700 }}>All comparisons</Link>
      </div>
    );
  }

  const { data, heroContent } = entry;
  const features = data.features ?? [];

  return (
    <div style={{ minHeight: "100vh", background: "#f7faf9", color: "#10231b" }}>
      {/* Top bar */}
      <header className="comparison-legacy-chrome" style={{ background: "#10231b", color: "#fff", padding: "0 24px" }}>
        <div style={{ maxWidth: 1168, margin: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "#fff", fontWeight: 800, fontSize: 20 }}>
            <Mark /> WhatsEase
          </Link>
          <nav style={{ display: "flex", gap: 24, fontSize: 14 }}>
            <Link href="/" style={{ color: "#d9e5df", textDecoration: "none" }}>Home</Link>
            <Link href="/comparison" style={{ color: "#d9e5df", textDecoration: "none" }}>Comparisons</Link>
            <Link href="/#demo" style={{ color: "#7ce0b6", textDecoration: "none", fontWeight: 600 }}>Book a demo</Link>
          </nav>
        </div>
      </header>

      {/* Hero — bright green like the original */}
      <section style={{ background: "#04b851", overflow: "hidden", position: "relative" }}>
        {heroContent.cornerImage ? (
          <img src={heroContent.cornerImage} alt="" aria-hidden style={{ position: "absolute", right: -40, top: -40, width: 260, opacity: 0.9, pointerEvents: "none" }} />
        ) : null}
        <div style={{ maxWidth: 1168, margin: "auto", padding: "72px 24px 96px", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,0.85fr)", gap: 48, alignItems: "center", position: "relative" }}>
          <div>
            <div
              style={{ color: "#10231b" }}
              dangerouslySetInnerHTML={{ __html: heroContent.headingHtml }}
            />
            {heroContent.description ? (
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(16,35,27,.82)", maxWidth: 560, marginTop: 22 }}>{heroContent.description}</p>
            ) : null}
            <div style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}>
              <Link
                href="/#demo"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#10231b", color: "#7ce0b6", borderRadius: 10, padding: "14px 24px", fontWeight: 700, textDecoration: "none" }}
              >
                {heroContent.buttonText || "Try Now"} →
              </Link>
              <Link
                href="/comparison"
                style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,255,255,.4)", color: "#10231b", borderRadius: 10, padding: "14px 24px", fontWeight: 700, textDecoration: "none" }}
              >
                All comparisons
              </Link>
            </div>
          </div>
          {heroContent.mainImage ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={heroContent.mainImage}
                alt={`WhatsEase vs ${data.competitor || displayName}`}
                style={{ maxWidth: "100%", height: "auto", borderRadius: 18, boxShadow: "0 30px 70px rgba(0,0,0,.18)" }}
              />
            </div>
          ) : null}
        </div>
      </section>

      {/* Reasons to choose */}
      <section style={{ maxWidth: 1168, margin: "auto", padding: "96px 24px" }}>
        <div style={{ maxWidth: 620, marginBottom: 56 }}>
          <p style={{ color: "#348762", fontWeight: 800, fontSize: 10, letterSpacing: "0.17em", marginBottom: 14 }}>
            {data.title?.toUpperCase() || "WHY WHATSEASE"}
          </p>
          <h2 style={{ fontSize: 44, lineHeight: 1.12 }}>
            WhatsEase vs <span style={{ color: "#348762" }}>{data.competitor || displayName}</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          {features.map((feature: ComparisonFeature, idx: number) => (
            <article
              key={feature.title || idx}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.1fr)",
                gap: 56,
                alignItems: "center",
                // imageFirst=true renders the image on the left, so reverse
                // the grid direction and reset each child back to ltr.
                ...(feature.imageFirst ? { direction: "rtl" } : {}),
              }}
            >
              <div style={{ ...(feature.imageFirst ? { direction: "ltr" } : {}) }}>
                <span style={{ display: "inline-block", background: "#e5fcf2", color: "#348762", fontWeight: 800, fontSize: 12, borderRadius: 999, padding: "6px 12px", marginBottom: 18 }}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 style={{ fontSize: 26, lineHeight: 1.25, marginBottom: 12 }}>{feature.title}</h3>
                <p
                  style={{ color: "#5f6f68", fontSize: 16, lineHeight: 1.7, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </div>
              <div style={{ ...(feature.imageFirst ? { direction: "ltr" } : {}), display: "flex", justifyContent: "center" }}>
                {feature.image ? (
                  <img
                    src={feature.image}
                    alt={feature.imageAlt || feature.title || "WhatsEase feature"}
                    style={{ maxWidth: "100%", height: "auto", borderRadius: 16, boxShadow: "0 24px 60px rgba(16,35,27,.12)" }}
                  />
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: "#10231b", color: "#fff", padding: "88px 24px" }}>
        <div style={{ maxWidth: 720, margin: "auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 38, lineHeight: 1.15, marginBottom: 18 }}>See the difference on your own conversations</h2>
          <p style={{ color: "#a8cdbb", fontSize: 16, lineHeight: 1.6, marginBottom: 30 }}>
            Book a personalised walkthrough and we&apos;ll show you exactly how WhatsEase handles your workflow.
          </p>
          <Link
            href="/#demo"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#7ce0b6", color: "#10231b", borderRadius: 10, padding: "15px 26px", fontWeight: 700, textDecoration: "none" }}
          >
            Book my free demo →
          </Link>
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
    <footer className="comparison-legacy-chrome" style={{ background: "#071711", color: "#d9e5df", padding: "44px max(24px, calc((100vw - 1168px)/2))" }}>
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
