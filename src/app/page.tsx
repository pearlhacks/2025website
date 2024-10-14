import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Sponsor } from "@/components/Sponsor";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <About />
      <Sponsor />
      <span className="block lg:hidden">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </span>
      <Footer />
    </div>
  );
}

