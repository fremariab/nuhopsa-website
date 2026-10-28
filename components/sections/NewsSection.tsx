import Link from "next/link";

// Static placeholder cards — will be replaced by Sanity data later
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
  },
];

export default function NewsSection() {
  return (
    <section className="news-root section-cream">
      <div className="section-container">

        {/* Section header */}
        <div className="news-header">
          <div>
            <span className="section-eyebrow">Latest from NUHOPSA</span>
            <h2 className="news-heading">News & Announcements</h2>
          </div>
          <Link href="/news" className="news-view-all">
            View all →
          </Link>
        </div>

        {/* 3-card grid */}
        <div className="news-grid">
          {news.map((item) => (
            <article key={item.id} className="news-card">

              {/* Image placeholder with accent color */}
              <div className={`news-card-img ${item.accent}`}>
                <span className="news-card-img-placeholder">Photo</span>
                {/* Gold accent bar */}
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
                  <Link href={`/news/${item.id}`} className="news-card-link">
                    Read more →
                  </Link>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}