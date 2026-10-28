import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Temporary static data — will be replaced by Sanity query
const posts: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
}> = {
  "80th-anniversary-gala-dinner": {
    title: "80th Anniversary Gala Dinner",
    category: "Event",
    date: "October 2025",
    readTime: "3 min read",
    excerpt: "An unforgettable evening celebrating eight decades of Holy Child excellence.",
    body: [
      "The 80th Anniversary Gala Dinner brought together Holy Child alumni from across the globe for an evening of celebration, laughter, and shared memories. The event was held in honour of eight extraordinary decades of faith, learning, and sisterhood.",
      "Guests were treated to a programme of speeches, musical performances, and a heartfelt tribute to the founding sisters of Holy Child School. Alumni from the earliest graduating classes were specially recognised for their decades of loyalty and support.",
      "The evening also marked the formal launch of the 80th Anniversary Scholarship Fund, with generous donations pledged by attendees to support current Holy Child students.",
      "NUHOPSA extends its deepest gratitude to all who attended, sponsored, and contributed to making the gala a night to remember.",
    ],
  },
  "class-of-94-alumni-spotlight": {
    title: "Where Are They Now — Class of '94",
    category: "Alumni Spotlight",
    date: "September 2025",
    readTime: "5 min read",
    excerpt: "We caught up with remarkable alumni from the class of 1994.",
    body: [
      "Thirty years on from their graduation, the class of 1994 remain a testament to the values Holy Child instilled in them. We reached out to several members to hear about their journeys since leaving school.",
      "From medicine and law to entrepreneurship and the arts, the class of '94 have carved remarkable paths — but all credit the discipline, faith, and friendship forged at Holy Child as the foundation of their success.",
      "Their stories remind us why NUHOPSA exists: to keep that thread of connection alive, no matter how many years or miles separate us.",
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="section-container page-hero-inner">
          <div className="post-hero-meta">
            <span className="badge-gold">{post.category}</span>
            <span className="post-hero-date">{post.date} · {post.readTime}</span>
          </div>
          <h1 className="page-hero-heading">{post.title}</h1>
          <p className="page-hero-sub">{post.excerpt}</p>
        </div>
      </section>

      {/* Body */}
      <section className="section-light">
        <div className="section-container post-body-wrap">

          {/* Cover image placeholder */}
          <div className="post-cover">
            <span style={{ opacity: 0.25, fontSize: "0.8rem", color: "white" }}>
              Cover photo
            </span>
          </div>

          {/* Article body */}
          <article className="post-body">
            {post.body.map((para, i) => (
              <p key={i} className="post-para">{para}</p>
            ))}
          </article>

          {/* Back link */}
          <div className="post-back">
            <Link href="/news" className="post-back-link">
              ← Back to News
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}