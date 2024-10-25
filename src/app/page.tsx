import { About } from "@/components/Homepage/About";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/Homepage/HeroSection";
import { Sponsor } from "@/components/Homepage/Sponsor";

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
