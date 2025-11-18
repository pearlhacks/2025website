import { SponsorProps } from "@/utils/Types";
import { SponsorGrid } from "./SponsorGrid";

export function Sponsor({ sponsors }: SponsorProps) {
  return (
    <div className="relative h-[50rem] sm:h-[60rem] md:h-[70rem] lg:h-[60rem] bg-brown-light">
      <img
        src="/images/landing/PH26 Transition.svg"
        className="cover"
      />
      <div className="w-full absolute top-32 sm:top-40 md:top-60 lg:top-[20rem] flex flex-col justify-center items-center text-center px-5 pb-32 md:px-10 space-y-8">
        <h2 className="text-white font-sans font-bold text-2xl mt-4">
          Our 2025 Sponsors
        </h2>
        <SponsorGrid sponsors={sponsors} />
      </div>
    </div>
  );
}
