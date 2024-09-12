import { getSponsors } from "@/firebase/getData";
import { Tier } from "@/utils/Types";

export async function SponsorGrid(){
    const sponsors = await getSponsors();
    const getSize = (tier: Tier) => {
        switch(tier){
            case Tier.PEARL:
                return "h-20 sm:h-28"
            case Tier.SILVER:
                return "h-8 sm:h-10"
        }
    }
    return (
        <div className="flex items-center justify-center flex-wrap gap-4 bg-pink-200 rounded-xl p-10">
            {
                sponsors.map((sponsor) => {return (
                  <img
                    alt={sponsor.name}
                    className={`${getSize(
                      sponsor.tier
                    )} hover:scale-110 transition ease-in-out`}
                    src={sponsor.img_url}
                  />
                );}) 
            }
        </div>
    )
}