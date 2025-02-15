"use client";
import { About } from "@/components/Homepage/About";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/Homepage/HeroSection";
import { Sponsor } from "@/components/Homepage/Sponsor";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getSponsors } from "@/api/getData";

export default function Home() {


  const {
    data: sponsors,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["sponsors"],
    queryFn: getSponsors,
  });

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
