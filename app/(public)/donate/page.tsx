import type { Metadata } from "next";
import DonateClient from "./DonateClient";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support NUHOPSA and Holy Child School and College. Donate to our scholarship fund, anniversary initiatives, and alumni programmes.",
};

export default function DonatePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-container page-hero-inner">
          <span className="section-eyebrow">Make a difference</span>
          <h1 className="page-hero-heading">Support NUHOPSA</h1>
          <p className="page-hero-sub">
            Every contribution — big or small — funds scholarships, events,
            and the lasting legacy of Holy Child School and College.
          </p>
        </div>
      </section>

      <DonateClient />
    </main>
  );
}