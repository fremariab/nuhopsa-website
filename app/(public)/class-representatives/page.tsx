import type { Metadata } from "next";
import Link from "next/link";
import PatternLayer from "@/components/ui/PatternLayer";
import { classRepresentatives } from "@/lib/data/community";

export const metadata: Metadata = {
  title: "Class Representatives",
  description: "Class representative information for the NUHOPSA alumni community.",
};

export default function ClassRepresentativesPage() {
  return (
    <main>
      <section className="page-hero">
        <PatternLayer tone="burgundy" from="right" />
        <div className="section-container page-hero-inner">
          <h1 className="page-hero-heading">Class Representatives</h1>
          <p className="page-hero-sub">
            Connect with the alumni representatives for your graduating class.
          </p>
        </div>
      </section>

      <section className="section-light community-page-section">
        <div className="section-container">
          {classRepresentatives.length > 0 ? (
            <div className="class-representatives-grid">
              {classRepresentatives.map((representative) => (
                <article
                  key={representative.classYear}
                  className="class-representative-card"
                >
                  <h2>Class of {representative.classYear}</h2>
                  <p>{representative.name}</p>
                  {representative.email && (
                    <a href={`mailto:${representative.email}`}>
                      {representative.email}
                    </a>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div className="community-placeholder">
              <h2>Representative details are not published yet</h2>
              <p>
                Verified class years and representative details will be added
                here when NUHOPSA supplies them.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact NUHOPSA
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
