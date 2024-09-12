import { DevpostLink, FAQ, Resource, Sponsor } from "@/utils/Types";
import firebase_app from "./config";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { getTiers } from "@/utils/helpers";

const db = getFirestore(firebase_app);

export const getSponsors = async () => {
  const results = await getDocs(collection(db, "sponsors"));
  const sponsors: Sponsor[] = [];

  results.forEach((res) => {
    const data = res.data();
    const sponsor: Sponsor = {
      img_url: data.img_url,
      url: data.url,
      name: data.name,
      tier: getTiers(data.tier),
    };
    sponsors.push(sponsor);
  });
  return sponsors;
};

export const getFAQ = async (category: string) => {
  const q = query(collection(db, "faq"), where("Category", "==", category));
  const results = await getDocs(q);

  const faqs: FAQ[] = [];

  results.forEach((res) => {
    const data = res.data();
    if (data) {
      const faq: FAQ = {
        question: data.Question,
        answer: data.Answer,
      };
      faqs.push(faq);
    }
  });

  return faqs;
};

export const getResource = async (category: string) => {
  const q = query(
    collection(db, "resources"),
    where("type", "==", "link"),
    where("category", "==", category)
  );
  const results = await getDocs(q);

  const resources: Resource[] = [];

  results.forEach((res) => {
    const data = res.data();
    if (data) {
      const resource: Resource = {
        title: data.title,
        url: data.url,
      };
      resources.push(resource);
    }
  });

  return resources;
};

export const getDevpostLinks = async () => {
  const q = query(
    collection(db, "resources"),
    where("type", "==", "devpost"),
    orderBy("title", "desc")
  );
  const results = await getDocs(q);

  const links: DevpostLink[] = [];

  results.forEach((res) => {
    const data = res.data();
    if (data) {
      const link: DevpostLink = {
        title: data.title,
        url: data.url,
        img_url: data.img_url,
      };
      links.push(link);
    }
  });

  return links;
};
