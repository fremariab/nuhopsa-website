import AboutSection from "@/components/sections/AboutSection";
import HeroBanner from "@/components/sections/HeroBanner";
import NewsSection  from "@/components/sections/NewsSection";
import GetInvolvedSection from "@/components/sections/GetInvolvedSection";
import DonateStrip       from "@/components/sections/DonateStrip";


export default function Home() {
  return (
    <main>
      <HeroBanner />
      <AboutSection />
      <NewsSection />
      <GetInvolvedSection />
      <DonateStrip />
    </main>
  );
}