import type { Metadata } from "next";
import GetInvolvedClient from "./GetInvolvedClient";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, mentor current students, or sponsor NUHOPSA initiatives. Find the right way to give back to Holy Child.",
};

export default function GetInvolvedPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-container page-hero-inner">
          <span className="section-eyebrow">Give back</span>
          <h1 className="page-hero-heading">Get Involved</h1>
          <p className="page-hero-sub">
            There are many ways to show up for your alma mater — find the one
            that fits your time, skills, and passion.
          </p>
        </div>
      </section>

      <GetInvolvedClient />
    </main>
  );
}