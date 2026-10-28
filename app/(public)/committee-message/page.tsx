import type { Metadata } from "next";
import Link from "next/link";
import PatternLayer from "@/components/ui/PatternLayer";
import { committeeMessage } from "@/lib/data/community";

export const metadata: Metadata = {
  title: "Message from the Committee",
  description: "A message from the NUHOPSA committee.",
};

export default function CommitteeMessagePage() {
  return (
    <main>
      <section className="page-hero">
        <PatternLayer tone="burgundy" from="right" />
        <div className="section-container page-hero-inner">
          <h1 className="page-hero-heading">Message from the Committee</h1>
          <p className="page-hero-sub">
            A note from the NUHOPSA committee to our alumni community.
          </p>
        </div>
      </section>

      <section className="section-cream community-page-section">
        <div className="section-container community-message">
          <blockquote className="community-message-card">
            {committeeMessage.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <footer>{committeeMessage.attribution}</footer>
          </blockquote>
          <Link href="/about" className="post-back-link">
            Back to About NUHOPSA
          </Link>
        </div>
      </section>
    </main>
  );
}
