"use client";

import { useState } from "react";
import Image from "next/image";
import { siteImages } from "@/lib/site-images";

const categories = ["All", "80th Anniversary", "Events", "Alumni", "School Archive"];
const items = siteImages.map((image, id) => ({ ...image, id }));

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
              onClick={() => setLightbox(item)}
              aria-label={`View ${item.label}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading={item.id === 0 ? "eager" : "lazy"}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="gallery-image"
              />
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
            <div className="lightbox-img">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                sizes="(max-width: 800px) 100vw, 800px"
                className="lightbox-image"
              />
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