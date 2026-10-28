import type { Metadata } from "next";
import NewsClient from "./NewsClient";

export const metadata: Metadata = {
  title: "News & Announcements",
  description:
    "Latest news, announcements, and alumni spotlights from NUHOPSA and Holy Child School and College.",
};

export default function NewsPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="section-container page-hero-inner">
          <span className="section-eyebrow">Stay informed</span>
          <h1 className="page-hero-heading">News & Announcements</h1>
          <p className="page-hero-sub">
            The latest updates, alumni spotlights, and announcements from
            the NUHOPSA community.
          </p>
        </div>
      </section>

      {/* Client component handles filtering */}
      <NewsClient />
    </main>
  );
}