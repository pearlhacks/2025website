import { About } from "@/components/About";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <About />
    </div>
  );
}
