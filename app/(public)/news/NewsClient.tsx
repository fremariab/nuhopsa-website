"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteImages } from "@/lib/site-images";
import Reveal from "@/components/ui/Reveal";

const categories = ["All", "Event", "Alumni Spotlight", "Announcement", "News"];

const posts = [
  {
    id: 1,
    slug: "80th-anniversary-gala-dinner",
    category: "Event",
    title: "80th Anniversary Gala Dinner",
    excerpt:
      "An unforgettable evening celebrating eight decades of Holy Child excellence, legacy, and sisterhood. Alumni from across the globe came together.",
    date: "Oct 2025",
    readTime: "3 min read",
    featured: true,
    bg: "var(--color-burgundy)",
    image: siteImages[4],
  },
  {
    id: 2,
    slug: "class-of-94-alumni-spotlight",
    category: "Alumni Spotlight",
    title: "Where Are They Now — Class of '94",
    excerpt:
      "We caught up with remarkable alumni from the class of 1994 to hear about their journeys, careers, and memories of Holy Child.",
    date: "Sep 2025",
    readTime: "5 min read",
    featured: false,
    bg: "var(--color-burgundy-dark)",
    image: siteImages[2],
  },
  {
    id: 3,
    slug: "scholarship-fund-launch",
    category: "Announcement",
    title: "80th Anniversary Scholarship Fund",
    excerpt:
      "NUHOPSA is proud to announce the launch of the 80th Anniversary Scholarship Fund, investing in the next generation of Holy Child students.",
    date: "Aug 2025",
    readTime: "2 min read",
    featured: false,
    bg: "var(--color-cream)",
    image: siteImages[11],
  },
  {
    id: 4,
    slug: "thanksgiving-service-recap",
    category: "Event",
    title: "Thanksgiving Service Recap",
    excerpt:
      "A moving service of gratitude marking 80 years of faith and excellence. Read our full recap of the anniversary thanksgiving service.",
    date: "Oct 2025",
    readTime: "4 min read",
    featured: false,
    bg: "var(--color-burgundy)",
    image: siteImages[5],
  },
  {
    id: 5,
    slug: "mentorship-programme-launch",
    category: "Announcement",
    title: "NUHOPSA Mentorship Programme",
    excerpt:
      "We are launching a formal mentorship programme connecting Holy Child alumni with current students. Applications now open.",
    date: "Jul 2025",
    readTime: "3 min read",
    featured: false,
    bg: "var(--color-burgundy-dark)",
    image: siteImages[12],
  },
  {
    id: 6,
    slug: "cultural-showcase-highlights",
    category: "News",
    title: "Cultural Showcase Highlights",
    excerpt:
      "A vibrant display of talent and Holy Child spirit — a full roundup of the cultural showcase that wowed audiences.",
    date: "Oct 2025",
    readTime: "3 min read",
    featured: false,
    bg: "var(--color-cream)",
    image: siteImages[13],
  },
];

export default function NewsClient() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? posts
    : posts.filter((p) => p.category === active);

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest     = filtered.filter((p) => p.id !== featured?.id);

  return (
    <section className="news-page-body section-light">
      <div className="section-container">

        {/* Category tabs */}
        <div className="news-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`news-tab ${active === cat ? "news-tab-active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {featured && (
          <Reveal as="div" className="news-featured-reveal">
          <Link href={`/news/${featured.slug}`} className="news-featured">
            <div
              className="news-featured-img"
              style={{ backgroundColor: featured.bg }}
            >
              <Image
                src={featured.image.src}
                alt={featured.image.alt}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="news-featured-image"
              />
              <div className="news-card-img-bar" />
            </div>
            <div className="news-featured-body">
              <div className="news-card-meta">
                <span className="badge-gold">{featured.category}</span>
                <span className="news-card-date">{featured.date}</span>
              </div>
              <h2 className="news-featured-title">{featured.title}</h2>
              <p className="news-featured-excerpt">{featured.excerpt}</p>
              <span className="news-card-link link-draw">Read more →</span>
            </div>
          </Link>
          </Reveal>
        )}

        {/* Rest of posts grid */}
        {rest.length > 0 && (
          <div className="news-grid" style={{ marginTop: "2rem" }}>
            {rest.map((post, index) => (
              <Reveal key={post.id} as="div" delay={index % 3} className="news-card-reveal">
              <Link
                href={`/news/${post.slug}`}
                className="news-card"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="news-card-img"
                  style={{ backgroundColor: post.bg }}
                >
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="news-card-image"
                  />
                  <div className="news-card-img-bar" />
                </div>
                <div className="news-card-body">
                  <div className="news-card-meta">
                    <span className="badge-gold">{post.category}</span>
                    <span className="news-card-date">{post.date}</span>
                  </div>
                  <h3 className="news-card-title">{post.title}</h3>
                  <p className="news-card-excerpt">{post.excerpt}</p>
                  <div className="news-card-footer">
                    <span className="news-card-read">{post.readTime}</span>
                    <span className="news-card-link link-draw">Read more →</span>
                  </div>
                </div>
              </Link>
              </Reveal>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="news-empty">
            <p>No posts in this category yet — check back soon.</p>
          </div>
        )}

      </div>
    </section>
  );
}