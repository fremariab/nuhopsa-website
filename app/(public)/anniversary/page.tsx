import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "80th Anniversary",
  description:
    "Celebrating 80 years of Holy Child School and College — a look back at the celebrations, highlights, and the legacy we carry forward.",
};

const highlights = [
  {
    icon: "🎉",
    title: "Grand Reunion Dinner",
    description:
      "Alumni from across the globe gathered for an unforgettable evening of celebration, laughter, and shared memories.",
  },
  {
    icon: "🎓",
    title: "Scholarship Presentations",
    description:
      "The 80th Anniversary Scholarship Fund awarded grants to deserving Holy Child students, investing in the next generation.",
  },
  {
    icon: "🎨",
    title: "Cultural Showcase",
    description:
      "A vibrant display of talent, tradition, and Holy Child spirit — performed by current students and alumni alike.",
  },
  {
    icon: "⛪",
    title: "Thanksgiving Service",
    description:
      "A moving service of gratitude for 80 years of faith, excellence, and service at Holy Child.",
  },
  {
    icon: "📸",
    title: "Alumni Exhibition",
    description:
      "A curated exhibition of archival photos, yearbooks, and memorabilia spanning eight decades of Holy Child history.",
  },
  {
    icon: "🤝",
    title: "Community Outreach",
    description:
      "Alumni volunteers gave back to the local community in the spirit of service that defines the Holy Child ethos.",
  },
];

const sponsors = [
  { tier: "Gold Sponsor",   name: "Sponsor Name Here" },
  { tier: "Gold Sponsor",   name: "Sponsor Name Here" },
  { tier: "Silver Sponsor", name: "Sponsor Name Here" },
  { tier: "Silver Sponsor", name: "Sponsor Name Here" },
  { tier: "Silver Sponsor", name: "Sponsor Name Here" },
  { tier: "Bronze Sponsor", name: "Sponsor Name Here" },
];

// Placeholder gallery items
const galleryItems = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  bg: i % 3 === 0
    ? "var(--color-burgundy)"
    : i % 3 === 1
    ? "var(--color-burgundy-dark)"
    : "var(--color-cream)",
}));

export default function AnniversaryPage() {
  return (
    <main className="anniversary-page">

      {/* ── Hero ── */}
      <section className="anniv-hero">
        <div className="section-container anniv-hero-inner">
          <div className="anniv-hero-content">
            <span className="section-eyebrow" style={{ borderBottomColor: "var(--color-gold)", color: "var(--color-gold)" }}>
              Holy Child School & College
            </span>
            <h1 className="anniv-hero-heading">
              Celebrating<br />
              <span className="anniv-hero-num">80 Years</span><br />
              of Excellence
            </h1>
            <p className="anniv-hero-sub">
              In 2025, the Holy Child family came together from across the globe
              to mark eight extraordinary decades of faith, learning, and
              sisterhood. Thank you to everyone who made it unforgettable.
            </p>
            <div className="anniv-hero-actions">
              <Link href="/donate" className="hero-btn-primary">
                Support our legacy
              </Link>
              <Link href="/gallery" className="hero-btn-outline">
                View gallery →
              </Link>
            </div>
          </div>

          {/* Floating badge */}
          <div className="anniv-hero-badge">
            <span className="anniv-badge-num">80</span>
            <span className="anniv-badge-top">Years</span>
            <span className="anniv-badge-bot">1945 – 2025</span>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="anniv-stats-strip">
        <div className="section-container anniv-stats-inner">
          {[
            { num: "80",   lbl: "Years of Holy Child" },
            { num: "5k+",  lbl: "Alumni worldwide" },
            { num: "300+", lbl: "Attended celebrations" },
            { num: "2",    lbl: "Campuses celebrated" },
          ].map((s) => (
            <div key={s.lbl} className="anniv-stat">
              <span className="anniv-stat-num">{s.num}</span>
              <span className="anniv-stat-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="section-light">
        <div className="section-container">
          <div className="anniv-section-header">
            <span className="section-eyebrow">What we celebrated</span>
            <h2 className="anniv-section-heading">Anniversary Highlights</h2>
            <p className="anniv-section-sub">
              A series of events that brought the Holy Child community together
              in celebration, gratitude, and joy.
            </p>
          </div>

          <div className="highlights-grid">
            {highlights.map((h) => (
              <div key={h.title} className="highlight-card">
                <span className="highlight-icon">{h.icon}</span>
                <h3 className="highlight-title">{h.title}</h3>
                <p className="highlight-desc">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery preview ── */}
      <section className="section-cream">
        <div className="section-container">
          <div className="anniv-section-header">
            <span className="section-eyebrow">Memories</span>
            <h2 className="anniv-section-heading">Photo Highlights</h2>
          </div>

          <div className="anniv-gallery-grid">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="anniv-gallery-item"
                style={{ backgroundColor: item.bg }}
              >
                <span className="anniv-gallery-placeholder">Photo</span>
              </div>
            ))}
          </div>

          <div className="anniv-gallery-cta">
            <Link href="/gallery" className="btn-primary">
              View full gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Thank you — sponsors ── */}
      <section className="section-light">
        <div className="section-container">
          <div className="anniv-section-header">
            <span className="section-eyebrow">With gratitude</span>
            <h2 className="anniv-section-heading">Our Sponsors & Supporters</h2>
            <p className="anniv-section-sub">
              The 80th Anniversary celebrations would not have been possible
              without the generous support of our sponsors, donors, and volunteers.
            </p>
          </div>

          <div className="sponsors-grid">
            {sponsors.map((s, i) => (
              <div key={i} className="sponsor-card">
                <span className={`sponsor-tier ${s.tier === "Gold Sponsor" ? "sponsor-tier-gold" : s.tier === "Silver Sponsor" ? "sponsor-tier-silver" : "sponsor-tier-bronze"}`}>
                  {s.tier}
                </span>
                <div className="sponsor-logo-placeholder">
                  {s.name}
                </div>
              </div>
            ))}
          </div>

          <p className="sponsor-note">
            Interested in supporting NUHOPSA going forward?{" "}
            <Link href="/get-involved#sponsor" className="sponsor-note-link">
              Explore sponsorship opportunities →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Legacy CTA ── */}
      <section className="anniv-legacy">
        <div className="section-container anniv-legacy-inner">
          <div className="anniv-legacy-text">
            <span className="section-eyebrow" style={{ color: "var(--color-gold)", borderBottomColor: "var(--color-gold)" }}>
              The journey continues
            </span>
            <h2 className="anniv-legacy-heading">
              Help Us Build the Next 80 Years
            </h2>
            <p className="anniv-legacy-sub">
              The celebrations may be over, but the legacy of Holy Child lives on.
              Support our scholarship fund, mentorship programmes, and alumni
              initiatives — and ensure Holy Child continues to shape extraordinary
              women for generations to come.
            </p>
          </div>
          <div className="about-cta-actions">
            <Link href="/donate" className="donate-strip-btn-primary">
              Donate now
            </Link>
            <Link href="/register" className="donate-strip-btn-outline">
              Join NUHOPSA
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}