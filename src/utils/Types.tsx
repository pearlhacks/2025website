export enum Tier {
  PEARL,
  GOLD,
  SILVER,
  CUSTOM,
}

export interface Sponsor {
  img_url: string;
  name: string;
  url: string;
  tier: Tier;
}

export interface FAQ {
    question: string,
    answer: string,
}

export interface Resource {
    title: string,
    url: string
}

export interface DevpostLink {
  title: string,
  img_url: string
  url: string
}

export type SponsorProps = {
  sponsors: Sponsor[]; // Ensure sponsors is defined as an array of SponsorType
};