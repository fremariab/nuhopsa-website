import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";
export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and videos from NUHOPSA events, the 80th Anniversary celebrations, and Holy Child School and College archives.",
};

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-container page-hero-inner">
          <span className="section-eyebrow">Memories</span>
          <h1 className="page-hero-heading">Gallery</h1>
          <p className="page-hero-sub">
            A visual archive of Holy Child history, NUHOPSA events, and the
            80th Anniversary celebrations.
          </p>
        </div>
      </section>

      <GalleryClient />
    </main>
  );
}