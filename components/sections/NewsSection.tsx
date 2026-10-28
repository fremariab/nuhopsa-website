import Link from "next/link";
import Image from "next/image";
import { siteImages } from "@/lib/site-images";
import PatternLayer from "@/components/ui/PatternLayer";
import Reveal from "@/components/ui/Reveal";

// Static news cards — will be replaced by Sanity data later
const news = [
  {
    id: 1,
    category: "Event",
    title: "80th Anniversary Gala Dinner",
    excerpt:
      "Join us for an unforgettable evening celebrating eight decades of Holy Child excellence, legacy, and sisterhood.",
    date: "Oct 2025",
    readTime: "3 min read",
    accent: "bg-burgundy",
    image: siteImages[1],
  },
  {
    id: 2,
    category: "Alumni Spotlight",
    title: "Where Are They Now — Class of '94",
    excerpt:
      "We caught up with some remarkable alumni from the class of 1994 to hear about their journeys since Holy Child.",
    date: "Sep 2025",
    readTime: "5 min read",
    accent: "bg-gold",
    image: siteImages[2],
  },
  {
    id: 3,
    category: "Announcement",
    title: "Scholarship Fund Now Open",
    excerpt:
      "NUHOPSA is proud to launch the 80th Anniversary Scholarship Fund. Help us invest in the next generation of Holy Child students.",
    date: "Aug 2025",
    readTime: "2 min read",
    accent: "bg-cream",
    image: siteImages[11],
  },
];

export default function NewsSection() {
  return (
    <section className="news-root section-cream">
      <PatternLayer tone="cream" from="right" />
      <div className="section-container">

        {/* Section header */}
        <Reveal as="div" className="news-header">
          <div>
            <h2 className="news-heading">News & Announcements</h2>
          </div>
          <Link href="/news" className="news-view-all">
            View all →
          </Link>
        </Reveal>

        {/* 3-card grid */}
        <div className="news-grid">
          {news.map((item) => (
            <Reveal key={item.id} as="article" delay={(item.id - 1) % 3} className="news-card">

              <div className={`news-card-img ${item.accent}`}>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="news-card-image"
                />
                <div className="news-card-img-bar" />
              </div>

              <div className="news-card-body">
                <div className="news-card-meta">
                  <span className="badge-gold">{item.category}</span>
                  <span className="news-card-date">{item.date}</span>
                </div>

                <h3 className="news-card-title">{item.title}</h3>
                <p className="news-card-excerpt">{item.excerpt}</p>

                <div className="news-card-footer">
                  <span className="news-card-read">{item.readTime}</span>
                  <Link href={`/news/${item.id}`} className="news-card-link link-draw">
                    Read more →
                  </Link>
                </div>
              </div>

            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}