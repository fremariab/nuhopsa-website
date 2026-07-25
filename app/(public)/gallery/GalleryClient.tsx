"use client";

import { useState } from "react";

const categories = ["All", "80th Anniversary", "Events", "Alumni", "School Archive"];

// Placeholder items — replaced by Sanity/GCP images later
const items = [
  { id: 1,  category: "80th Anniversary", label: "Gala Dinner",           bg: "var(--color-burgundy)",        span: "gallery-item-wide" },
  { id: 2,  category: "80th Anniversary", label: "Thanksgiving Service",  bg: "var(--color-burgundy-dark)",   span: "" },
  { id: 3,  category: "Alumni",           label: "Class of '94 Reunion",  bg: "var(--color-cream)",           span: "" },
  { id: 4,  category: "Events",           label: "Annual Dinner 2023",    bg: "var(--color-burgundy)",        span: "" },
  { id: 5,  category: "80th Anniversary", label: "Cultural Showcase",     bg: "var(--color-burgundy-dark)",   span: "gallery-item-tall" },
  { id: 6,  category: "School Archive",   label: "Holy Child 1960s",      bg: "var(--color-cream)",           span: "" },
  { id: 7,  category: "Alumni",           label: "Alumni Summit 2019",    bg: "var(--color-burgundy)",        span: "" },
  { id: 8,  category: "Events",           label: "Volunteering Day",      bg: "var(--color-burgundy-dark)",   span: "gallery-item-wide" },
  { id: 9,  category: "School Archive",   label: "Founding Sisters",      bg: "var(--color-cream)",           span: "" },
  { id: 10, category: "80th Anniversary", label: "Scholarship Ceremony",  bg: "var(--color-burgundy)",        span: "" },
  { id: 11, category: "Alumni",           label: "Class of 2000",         bg: "var(--color-burgundy-dark)",   span: "" },
  { id: 12, category: "Events",           label: "NUHOPSA AGM 2024",      bg: "var(--color-cream)",           span: "" },
];

type GalleryItem = typeof items[number];

export default function GalleryClient() {
  const [active,    setActive]    = useState("All");
  const [lightbox,  setLightbox]  = useState<GalleryItem | null>(null);

  const filtered = active === "All"
    ? items
    : items.filter((i) => i.category === active);

  return (
    <section className="gallery-page-body section-light">
      <div className="section-container">

        {/* Tabs */}
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

        {/* Masonry-style grid */}
        <div className="gallery-grid">
          {filtered.map((item) => (
            <button
              key={item.id}
              className={`gallery-item ${item.span}`}
              style={{ backgroundColor: item.bg }}
              onClick={() => setLightbox(item)}
              aria-label={`View ${item.label}`}
            >
              <div className="gallery-item-overlay">
                <span className="gallery-item-label">{item.label}</span>
                <span className="gallery-item-category">{item.category}</span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="news-empty">
            <p>No photos in this category yet — check back soon.</p>
          </div>
        )}

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image area */}
            <div
              className="lightbox-img"
              style={{ backgroundColor: lightbox.bg }}
            >
              <span className="lightbox-placeholder">
                {lightbox.label}
              </span>
            </div>

            {/* Meta */}
            <div className="lightbox-meta">
              <div>
                <span className="badge-burgundy">{lightbox.category}</span>
                <p className="lightbox-label">{lightbox.label}</p>
              </div>
              <button
                className="lightbox-close"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}