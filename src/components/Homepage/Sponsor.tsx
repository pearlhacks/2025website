import { SponsorProps } from "@/utils/Types";
import { SponsorGrid } from "./SponsorGrid";

export function Sponsor({ sponsors }: SponsorProps) {
  return (
    <div className="relative lg:h-[60rem]">
      <img
        src="/images/landing/PH2025_MainTransition.svg"
        className="cover bg-pink-accent"
      />
      <div className="w-full absolute top-30 sm:top-50 md:top-96 lg:top-[30rem] flex flex-col justify-center items-center text-center px-5 pb-20 md:px-10 space-y-8">
        <h2 className="text-white font-sans font-bold text-2xl">
          Our 2025 Sponsors
        </h2>
        <SponsorGrid sponsors={sponsors} />
      </div>
    </div>
  );
}
