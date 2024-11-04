"use client";
import { GenericLayout } from "@/components/GenericLayout";
import { DevpostLinkCard, ExternalLinkCard } from "@/components/Resource/ResourceCard";
import {
  DevpostLinkCardSkeleton,
  ExternalLinkCardSkeleton,
} from "@/components/Skeletons/ResourceCard";
import { getDevpostLinks, getResource } from "@/firebase/getData";
import { useQueries, useQuery } from "@tanstack/react-query";

export default function Page() {
  // check for devpost links
  const devpostQuery = useQuery({
    queryKey: ["devpost-links"],
    queryFn: getDevpostLinks,
  });

  const categories = [
    "Beginner Hackers",
    "General Hacking",
    "Non-Traditional Technologists",
    "Social & Mental Resources",
  ];

  // check for resources for each category
  const resourceQueries = useQueries({
    queries: categories.map((category) => ({
      queryKey: ["resources", category],
      queryFn: () => getResource(category),
    })),
  });

  // check loading states
  const isDevpostLoading = devpostQuery.isLoading;
  const areResourcesLoading = resourceQueries.some((query) => query.isLoading);

  // check error states
  const hasDevpostError = devpostQuery.isError;
  const hasResourcesError = resourceQueries.some((query) => query.isError);

  return (
    <GenericLayout title="Resources">
      <div className="w-full max-w-7xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <h2 className="text-green font-sans font-bold text-2xl pb-5">
            Past Projects
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {isDevpostLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <DevpostLinkCardSkeleton key={index} />
              ))
            ) : hasDevpostError ? (
              <div className="w-full col-span-full">
                <p className="text-red-500">Error loading past projects</p>
              </div>
            ) : (
              devpostQuery.data?.map((link) => (
                <DevpostLinkCard
                  key={link.title}
                  title={link.title}
                  icon={link.img_url}
                  link={link.url}
                />
              ))
            )}
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-green font-sans font-bold text-2xl pb-5">
            Useful Tools & Articles
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {areResourcesLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <ExternalLinkCardSkeleton key={index} />
              ))
            ) : hasResourcesError ? (
              <div className="w-full col-span-full">
                <p className="text-red-500">Error loading resources</p>
              </div>
            ) : (
              categories.map((category, index) => (
                <ExternalLinkCard
                  key={category}
                  heading={category}
                  links={resourceQueries[index].data || []}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </GenericLayout>
  );
}
