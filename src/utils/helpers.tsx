import { Faq_Category, Tier } from "./Types";

export const getTiers = (tier: string) => {
  switch (tier.toLowerCase()) {
    case "pearl":
      return Tier.PEARL;
    case "gold":
      return Tier.GOLD;
    case "silver":
      return Tier.SILVER;
    case "custom":
      return Tier.CUSTOM;
    default:
      throw new Error(`Unknown tier: ${tier}`);
  }
};
