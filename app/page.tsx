import AboutSection from "@/components/sections/AboutSection";
import HeroBanner from "@/components/sections/HeroBanner";
import NewsSection  from "@/components/sections/NewsSection";
import GetInvolvedSection from "@/components/sections/GetInvolvedSection";
import DonateStrip       from "@/components/sections/DonateStrip";
import ScrollReveal from "@/components/ui/ScrollReveal";


export default function Home() {
  return (
    <main>
      <ScrollReveal className="reveal-hero">
        <HeroBanner />
      </ScrollReveal>
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal>
        <NewsSection />
      </ScrollReveal>
      <ScrollReveal>
        <GetInvolvedSection />
      </ScrollReveal>
      <ScrollReveal>
        <DonateStrip />
      </ScrollReveal>
    </main>
  );
}