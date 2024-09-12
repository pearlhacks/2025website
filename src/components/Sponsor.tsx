import { getSponsors } from "@/firebase/getData";
import { SponsorGrid } from "./SponsorGrid";

export async function Sponsor() {
    
    return (
      <div className="relative">
        <img
          src="/images/landing/PH2025_MainTransition.svg"
          className="cover bg-pink-accent"
        />
        <div className="w-full absolute top-52 sm:top-80 md:top-96 lg:top-2/3 justify-center items-center text-center px-20 pb-20 space-y-8">
          <h2 className="text-white font-sans font-bold text-2xl">
            Our 2024 Sponsors
          </h2>
            <SponsorGrid />
        </div>
      </div>
    );
}