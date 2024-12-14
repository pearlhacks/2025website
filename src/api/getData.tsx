import { getTiers } from "@/utils/helpers";
import {
  DevpostLink,
  Director,
  FAQ,
  Resource,
  ResourceData,
  Sponsor,
  Schedule,
} from "@/utils/Types";

export const getSchedules = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_API}/sheet/schedules`
  );
  const data = await response.json();
  console.log(data);
  const schedules: Schedule[] = (data.schedules || []).map((schedule: any) => ({
    event_name: schedule.event_name,
    event_type: schedule.event_type,
    date: schedule.date,
    start_time: schedule.start_time,
    duration: schedule.duration,
    location: schedule.location,
    link: schedule.link ? schedule.link : null, // Include link only if available
  }));
  return schedules;
};

export const getSponsors = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_API}/sheet/sponsors`
  );
  const data = await response.json();
  const sponsors: Sponsor[] = (data.sponsors || []).map((sponsor: any) => ({
    img_url: sponsor.img_url,
    url: sponsor.url,
    name: sponsor.name,
    tier: getTiers(sponsor.tier),
  }));
  return sponsors;
};

export const getDirectors = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_API}/sheet/directors`
  );
  const data = await response.json();
  const directors: Director[] = (data.directors || []).map((director: any) => ({
    name: director.name,
    pronouns: director.pronouns,
    image_url: director.image_url,
    role: director.role,
    department: director.department,
    chair: director.chair == "TRUE",
  }));
  return directors;
};

export const getFAQs = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_API}/sheet/faqs`);
  const data = await response.json();
  const faqs: FAQ[] = (data.faqs || []).map((faq: any) => ({
    question: faq.question,
    answer: faq.answer,
    category: faq.category,
  }));
  return faqs;
};

export const getResources = async (): Promise<{
  resources: Resource[];
  devpostLinks: DevpostLink[];
}> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEB_API}/sheet/resources`
  );
  const data = await response.json();

  // Filter and map for resources of type 'link'
  const resources: Resource[] = data.resources
    .filter((resource: ResourceData) => resource.resource_type === "link")
    .map((resource: ResourceData) => ({
      title: resource.title,
      url: resource.url,
      category: resource.category,
    }));

  // Filter and map for resources of type 'devpost'
  const devpostLinks: DevpostLink[] = data.resources
    .filter((resource: ResourceData) => resource.resource_type === "devpost")
    .map((resource: ResourceData) => ({
      title: resource.title,
      url: resource.url,
      img_url: resource.img_url ?? "", // Use empty string if img_url is undefined
    }));

  return { resources, devpostLinks };
};
