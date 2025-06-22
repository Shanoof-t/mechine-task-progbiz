import AutoCarousel from "@/components/autoCarousel";
import ShowcaseSection from "@/components/showcaseSection";
import TitleSection from "@/components/titleSection";
import TopSection from "@/components/topSection";

export default function Home() {
  return (
    <main className="container mx-auto  min-h-[100vh]">
      <TopSection />
      <div className="relative lg:-top-25 -top-44 space-y-24">
        <TitleSection />
        <ShowcaseSection />
        <AutoCarousel />
      </div>
    </main>
  );
}
