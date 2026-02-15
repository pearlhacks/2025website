"use client";
import { SponsorProps, Tier } from "@/utils/Types";

export function SponsorGrid({ sponsors }: SponsorProps) {
  const getSize = (tier: Tier) => {
    switch (tier) {
      case Tier.GOLD:
        return "h-20 sm:h-20";
      case Tier.SILVER:
        return "h-8 sm:h-10";
    }
  };
  return (
    <div className="w-full lg:w-[50rem] min-h-[30rem] flex items-center justify-center flex-wrap gap-4 bg-cream rounded-xl p-10">
      {sponsors.map((sponsor) => {
        return (
          <div key={sponsor.name}>
            <img
              alt={sponsor.name}
              className={`${getSize(
                sponsor.tier
              )} hover:scale-110 transition ease-in-out`}
              src={sponsor.img_url}
            />
          </div>
        );
      })}
    </div>
  );
}
