"use client";
import { About } from "@/components/Homepage/About";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/Homepage/HeroSection";
import { Sponsor } from "@/components/Homepage/Sponsor";
import { useQuery } from "@tanstack/react-query";
import PlantLoader from "@/components/Homepage/LoadingScreen";
import { useEffect, useState } from "react";
import { getSponsors } from "@/api/getData";

export default function Home() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  useEffect(() => {
    // Check localStorage to determine if loading screen should be shown
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowLoadingScreen(true);
      localStorage.setItem("hasVisited", "true");

      // Set a timer to remove loading screen after 3 seconds
      const timer = setTimeout(() => {
        setShowLoadingScreen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
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
      {sponsors && <Sponsor sponsors={sponsors} />}
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
