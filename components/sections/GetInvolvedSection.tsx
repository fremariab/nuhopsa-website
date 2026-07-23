import Link from "next/link";

const ways = [
  {
    id: 1,
    icon: "🤝",
    title: "Volunteer",
    description:
      "Give your time and skills to support NUHOPSA events, outreach programmes, and the 80th Anniversary celebrations.",
    cta: "Sign up to volunteer",
    href: "/get-involved#volunteer",
  },
  {
    id: 2,
    icon: "🎓",
    title: "Mentor",
    description:
      "Share your professional journey with current Holy Child students. Be the guide you wish you had.",
    cta: "Become a mentor",
    href: "/get-involved#mentor",
  },
  {
    id: 3,
    icon: "🤲",
    title: "Sponsor",
    description:
      "Support the 80th Anniversary celebrations or our scholarship fund. Your contribution builds lasting legacy.",
    cta: "Explore sponsorship",
    href: "/get-involved#sponsor",
  },
];

export default function GetInvolvedSection() {
  return (
    <section className="involved-root section-light">
      <div className="section-container">

        {/* Header */}
        <div className="involved-header">
          <span className="section-eyebrow">Be part of something bigger</span>
          <h2 className="involved-heading">Get Involved</h2>
          <p className="involved-sub">
            There are many ways to show up for your alma mater and the NUHOPSA
            community — find the one that fits you.
          </p>
        </div>

        {/* Cards */}
        <div className="involved-grid">
          {ways.map((way) => (
            <div key={way.id} className="involved-card">
              <div className="involved-icon">{way.icon}</div>
              <h3 className="involved-title">{way.title}</h3>
              <p className="involved-desc">{way.description}</p>
              <Link href={way.href} className="involved-cta">
                {way.cta} →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}