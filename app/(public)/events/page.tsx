import type { Metadata } from "next";
import EventCalendar from "@/components/sections/EventCalendar";
import PatternLayer from "@/components/ui/PatternLayer";

export const metadata: Metadata = {
  title: "Event Calendar",
  description:
    "Browse upcoming NUHOPSA events and stay up to date with the Holy Child alumni community.",
};

export default function EventsPage() {
  return (
    <main>
      <section className="page-hero calendar-hero">
        <PatternLayer tone="burgundy" from="right" />
        <div className="section-container page-hero-inner">
          <h1 className="page-hero-heading">Event Calendar</h1>
          <p className="page-hero-sub">
            Find NUHOPSA gatherings, alumni events, and opportunities to
            celebrate the Holy Child community.
          </p>
        </div>
      </section>

      <EventCalendar />
    </main>
  );
}
