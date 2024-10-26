'use client'
import { About } from "@/components/Homepage/About";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/Homepage/HeroSection";
import { Sponsor } from "@/components/Homepage/Sponsor";
import { getSponsors } from "@/firebase/getData";
import { useQuery } from "@tanstack/react-query";
import PlantLoader from "@/components/Homepage/LoadingScreen";
import { useEffect, useState } from "react";

export default function Home() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingScreen(false);
    }, 3000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const {
    data: sponsors,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["sponsors"],
    queryFn: getSponsors,
  });

  if (showLoadingScreen || isLoading) {
    return <PlantLoader />;
  }

  if (error) {
    return <div>Error loading sponsors</div>;
  }

  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <About />
      <Sponsor sponsors={sponsors} />
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
