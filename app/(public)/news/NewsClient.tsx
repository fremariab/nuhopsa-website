'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'Event', 'Alumni Spotlight', 'Announcement', 'News'];

const posts = [
  {
    id: 1,
    slug: '80th-anniversary-gala-dinner',
    category: 'Event',
    title: '80th Anniversary Gala Dinner',
    excerpt:
      'An unforgettable evening celebrating eight decades of Holy Child excellence, legacy, and sisterhood. Alumni from across the globe came together.',
    date: 'Oct 2025',
    readTime: '3 min read',
    featured: true,
    bg: 'var(--color-burgundy)',
  },
  {
    id: 2,
    slug: 'class-of-94-alumni-spotlight',
    category: 'Alumni Spotlight',
    title: "Where Are They Now — Class of '94",
    excerpt:
      'We caught up with remarkable alumni from the class of 1994 to hear about their journeys, careers, and memories of Holy Child.',
    date: 'Sep 2025',
    readTime: '5 min read',
    featured: false,
    bg: 'var(--color-burgundy-dark)',
  },
  {
    id: 3,
    slug: 'scholarship-fund-launch',
    category: 'Announcement',
    title: '80th Anniversary Scholarship Fund',
    excerpt:
      'NUHOPSA is proud to announce the launch of the 80th Anniversary Scholarship Fund, investing in the next generation of Holy Child students.',
    date: 'Aug 2025',
    readTime: '2 min read',
    featured: false,
    bg: 'var(--color-cream)',
  },
  {
    id: 4,
    slug: 'thanksgiving-service-recap',
    category: 'Event',
    title: 'Thanksgiving Service Recap',
    excerpt:
      'A moving service of gratitude marking 80 years of faith and excellence. Read our full recap of the anniversary thanksgiving service.',
    date: 'Oct 2025',
    readTime: '4 min read',
    featured: false,
    bg: 'var(--color-burgundy)',
  },
  {
    id: 5,
    slug: 'mentorship-programme-launch',
    category: 'Announcement',
    title: 'NUHOPSA Mentorship Programme',
    excerpt:
      'We are launching a formal mentorship programme connecting Holy Child alumni with current students. Applications now open.',
    date: 'Jul 2025',
    readTime: '3 min read',
    featured: false,
    bg: 'var(--color-burgundy-dark)',
  },
  {
    id: 6,
    slug: 'cultural-showcase-highlights',
    category: 'News',
    title: 'Cultural Showcase Highlights',
    excerpt:
      'A vibrant display of talent and Holy Child spirit — a full roundup of the cultural showcase that wowed audiences.',
    date: 'Oct 2025',
    readTime: '3 min read',
    featured: false,
    bg: 'var(--color-cream)',
  },
];

export default function NewsClient() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? posts : posts.filter((p) => p.category === active);

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p.id !== featured?.id);

  return (
    <section className='news-page-body section-light'>
      <div className='section-container'>
        {/* Category tabs */}
        <div className='news-tabs'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`news-tab ${active === cat ? 'news-tab-active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {featured && (
          <Link href={`/news/${featured.slug}`} className='news-featured'>
            <div
              className='news-featured-img'
              style={{ backgroundColor: featured.bg }}
            >
              <span className='news-card-img-placeholder'>Photo</span>
              <div className='news-card-img-bar' />
            </div>
            <div className='news-featured-body'>
              <div className='news-card-meta'>
                <span className='badge-gold'>{featured.category}</span>
                <span className='news-card-date'>{featured.date}</span>
              </div>
              <h2 className='news-featured-title'>{featured.title}</h2>
              <p className='news-featured-excerpt'>{featured.excerpt}</p>
              <span className='news-card-link'>Read more →</span>
            </div>
          </Link>
        )}

        {/* Rest of posts grid */}
        {rest.length > 0 && (
          <div className='news-grid' style={{ marginTop: '2rem' }}>
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/news/${post.slug}`}
                className='news-card'
                style={{ textDecoration: 'none' }}
              >
                <div
                  className='news-card-img'
                  style={{ backgroundColor: post.bg }}
                >
                  <span className='news-card-img-placeholder'>
                    <img src='/images/img4.png' alt='picture' />
                  </span>
                  <div className='news-card-img-bar' />
                </div>
                <div className='news-card-body'>
                  <div className='news-card-meta'>
                    <span className='badge-gold'>{post.category}</span>
                    <span className='news-card-date'>{post.date}</span>
                  </div>
                  <h3 className='news-card-title'>{post.title}</h3>
                  <p className='news-card-excerpt'>{post.excerpt}</p>
                  <div className='news-card-footer'>
                    <span className='news-card-read'>{post.readTime}</span>
                    <span className='news-card-link'>Read more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className='news-empty'>
            <p>No posts in this category yet — check back soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
