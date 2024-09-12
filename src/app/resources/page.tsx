import { Accordion } from "@/components/Accordion";
import { GenericLayout } from "@/components/GenericLayout";
import { DevpostLinkCard, ExternalLinkCard } from "@/components/ResourceCard";
import { getDevpostLinks, getFAQ, getResource } from "@/firebase/getData";

export default async function Page() {
  const links = await getDevpostLinks();
  const categories = [
    "Beginner Hackers",
    "General Hacking",
    "Non-Traditional Technologists",
    "Social & Mental Resources",
  ];
  return (
    <GenericLayout title="Resources">
      <div className="space-y-5">
        <div>
          <h2 className="text-green font-sans font-bold text-2xl py-5">
            Past Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-left md:justify-center items-start gap-1 md:gap-2">
            {links.map((link) => {
              return (
                <DevpostLinkCard
                  title={link.title}
                  icon={link.img_url}
                  link={link.url}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-green font-sans font-bold text-2xl py-5">
            Useful Tools & Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-left md:justify-center items-start gap-1 md:gap-2">
            {categories.map(async (category) => {
              return (
                <ExternalLinkCard
                  heading={category}
                  links={await getResource(category)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </GenericLayout>
  );
}
