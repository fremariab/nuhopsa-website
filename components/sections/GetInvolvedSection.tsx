import Link from "next/link";
import SiteIcon from "@/components/ui/SiteIcon";
import Reveal from "@/components/ui/Reveal";

const ways = [
  {
    id: 1,
    icon: "handshake",
    title: "Volunteer",
    description:
      "Give your time and skills to support NUHOPSA events, outreach programmes, and the 80th Anniversary celebrations.",
    cta: "Sign up to volunteer",
    href: "/get-involved#volunteer",
  },
  {
    id: 2,
    icon: "graduation",
    title: "Mentor",
    description:
      "Share your professional journey with current Holy Child students. Be the guide you wish you had.",
    cta: "Become a mentor",
    href: "/get-involved#mentor",
  },
  {
    id: 3,
    icon: "handHoldingHeart",
    title: "Sponsor",
    description:
      "Support the 80th Anniversary celebrations or our scholarship fund. Your contribution builds lasting legacy.",
    cta: "Explore sponsorship",
    href: "/get-involved#sponsor",
  },
] as const;

export default function GetInvolvedSection() {
  return (
    <section className="involved-root section-light">
      <div className="section-container">

        {/* Header */}
        <Reveal as="div" className="involved-header">
          <h2 className="involved-heading">Get Involved</h2>
          <p className="involved-sub">
            There are many ways to show up for your alma mater and the NUHOPSA
            community — find the one that fits you.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="involved-grid">
          {ways.map((way) => (
            <Reveal key={way.id} as="div" delay={(way.id - 1) % 3} className="involved-card">
              <div className="involved-icon">
                <SiteIcon name={way.icon} />
              </div>
              <h3 className="involved-title">{way.title}</h3>
              <p className="involved-desc">{way.description}</p>
              <Link href={way.href} className="involved-cta">
                {way.cta} →
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}