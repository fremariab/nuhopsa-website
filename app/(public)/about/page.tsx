import type { Metadata } from "next";
import PatternLayer from "@/components/ui/PatternLayer";
import Link from "next/link";
import SiteIcon from "@/components/ui/SiteIcon";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NUHOPSA — the National Union of Holy Child Past Students Association, our mission, history, and executive team.",
};

const executives = [
  { initials: "AK", name: "Abena Kusi",     role: "President" },
  { initials: "MO", name: "Mabel Ofori",    role: "Secretary" },
  { initials: "EA", name: "Esi Agyeman",    role: "Treasurer" },
  { initials: "SA", name: "Serwaa Asante",  role: "Events Lead" },
  { initials: "AA", name: "Akua Amponsah",  role: "PRO" },
  { initials: "YD", name: "Yaa Darko",      role: "Welfare Officer" },
];

const milestones = [
  { year: "1946", event: "Holy Child School founded" },
  { year: "1960", event: "First alumni association formed" },
  { year: "1985", event: "Holy Child College established" },
  { year: "2000", event: "NUHOPSA formally constituted" },
  { year: "2015", event: "First international alumni summit" },
  { year: "2025", event: "80th Anniversary celebrations" },
];

const socialLinks = ["in", "tw", "fb"];

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <PatternLayer tone="burgundy" from="right" />
        <div className="section-container page-hero-inner">
          <h1 className="page-hero-heading">
            About NUHOPSA
          </h1>
          <p className="page-hero-sub">
            Uniting Holy Child alumni across generations and borders —
            for connection, mentorship, and shared legacy.
          </p>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-light">
        <div className="section-container mv-grid">

          <div className="mv-card">
            <span className="mv-icon"><SiteIcon name="bullseye" /></span>
            <h2 className="mv-title">Our Mission</h2>
            <p className="mv-text">
              To foster a strong, engaged global network of Holy Child past
              students who actively contribute to the growth of their alma mater,
              support current students, and uphold the values instilled by Holy
              Child School and College.
            </p>
          </div>

          <div className="mv-card mv-card-dark">
            <span className="mv-icon"><SiteIcon name="globe" /></span>
            <h2 className="mv-title mv-title-light">Our Vision</h2>
            <p className="mv-text mv-text-light">
              A thriving, connected alumni community that serves as a lifelong
              resource for Holy Child graduates — wherever they are in the world.
            </p>
          </div>

          <div className="mv-card">
            <span className="mv-icon"><SiteIcon name="gem" /></span>
            <h2 className="mv-title">Our Values</h2>
            <p className="mv-text">
              Integrity, excellence, solidarity, and service — the cornerstones
              of Holy Child that we carry with us beyond the school gates.
            </p>
          </div>

        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section-cream">
        <div className="section-container story-grid">

          <Reveal as="div" className="story-text">
            <h2 className="story-heading">
              Eight Decades of Holy Child Spirit
            </h2>
            <p className="story-body">
              Holy Child School was founded in 1946 by the Society of the Holy
              Child Jesus, with a mission to provide girls with an education
              rooted in faith, excellence, and service. Over eight decades, it
              has grown into one of Ghana&apos;s most respected institutions.
            </p>
            <p className="story-body">
              NUHOPSA was formally constituted to give past students a unified
              voice — a platform to stay connected, give back, and celebrate the
              institution that shaped them. Today, our members span every
              continent, every profession, and every generation of Holy Child
              graduates.
            </p>
            <Link href="/anniversary" className="btn-primary" style={{width: "fit-content"}}>
              80th Anniversary →
            </Link>
          </Reveal>

          {/* Milestones */}
          <div className="milestones">
            <div className="milestone-list">
              {milestones.map((m, i) => (
                <Reveal key={i} as="div" delay={i} className="milestone-item">
                  <div className="milestone-dot" />
                  <div className="milestone-content">
                    <span className="milestone-year">{m.year}</span>
                    <span className="milestone-event">{m.event}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Executive Team ── */}
      <section className="section-light">
        <div className="section-container">

          <Reveal as="div" className="team-header">
            <h2 className="team-heading">Executive Members</h2>
            <p className="team-sub">
              The dedicated alumni who lead NUHOPSA and keep our community thriving.
            </p>
          </Reveal>

          <div className="team-grid">
            {executives.map((exec, index) => (
              <Reveal key={exec.name} as="div" delay={index % 6} className="team-card">
                <div className="team-avatar">{exec.initials}</div>
                <div className="team-name">{exec.name}</div>
                <div className="team-role">{exec.role}</div>
                <div className="team-socials">
                  {socialLinks.map((s) => (
                    <button key={s} className="team-social-btn" aria-label={s}>
                      {s}
                    </button>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      <section className="section-cream community-links-section">
        <div className="section-container">
          <div className="community-links-heading">
            <h2 className="anniv-section-heading">Alumni Community</h2>
            <p className="anniv-section-sub">
              Find a message from the committee or learn about class
              representatives.
            </p>
          </div>
          <div className="community-links-grid">
            <Link href="/committee-message" className="community-link-card">
              <h3>Message from the Committee</h3>
              <p>Read the committee&apos;s message to NUHOPSA alumni.</p>
              <span>Read message <span aria-hidden="true">→</span></span>
            </Link>
            <Link href="/class-representatives" className="community-link-card">
              <h3>Class Representatives</h3>
              <p>View representative information for alumni classes.</p>
              <span>View representatives <span aria-hidden="true">→</span></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="about-cta">
        <PatternLayer tone="deep" from="left" />
        <div className="section-container about-cta-inner">
          <div>
            <h2 className="about-cta-heading">Join the NUHOPSA Community</h2>
            <p className="about-cta-sub">
              Register as an alumna, volunteer, mentor, or donor — every form
              of participation strengthens our network.
            </p>
          </div>
          <div className="about-cta-actions">
            <Link href="/register" className="donate-strip-btn-primary">
              Register now
            </Link>
            <Link href="/get-involved" className="donate-strip-btn-outline">
              Get involved
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}