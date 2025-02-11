import { ReactNode } from "react";

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
  question: string;
  answer: string;
  category: string;
}

export interface Resource {
  title: string;
  url: string;
  category: string;
}

export interface DevpostLink {
  title: string;
  img_url: string;
  url: string;
}

export type SponsorProps = {
  sponsors: Sponsor[];
};

export interface Director {
  name: string;
  pronouns: string;
  role: string;
  chair: boolean;
  department: string;
  image_url: string | null;
}

export interface DirectorProps {
  directors: Director[] | undefined;
}

// Ensure data.resources is typed correctly in getResources
export interface ResourceData {
  title: string;
  url: string;
  category: string;
  resource_type: "link" | "devpost";
  img_url?: string;
}

export interface Prize {
  category: string;
  type: string;
  prizes: string;
}

export interface Schedule {
  event_name: string;
  event_type: string;
  date: string;
  start_time: string;
  duration: number;
  location: string;
  link: string | null;
}

export interface ButtonGroupProps {
  buttons: {
    icon: ReactNode;
    label: string;
    href: string;
    isActive?: boolean;
  }[];
}


export interface ParkingBulletProps {
  name: string;
  address: string;
  href: string;
}
