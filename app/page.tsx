import AboutSection from "@/components/sections/AboutSection";
import HeroBanner from "@/components/sections/HeroBanner";
import NewsSection  from "@/components/sections/NewsSection";


export default function Home() {
  return (
    <main>
      <HeroBanner />
      <AboutSection />
      <NewsSection />

    </main>
  );
}