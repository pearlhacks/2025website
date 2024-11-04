"use client";
import { Accordion } from "@/components/FAQ/Accordion";
import { GenericLayout } from "@/components/GenericLayout";
import { AccordionGrid } from "@/components/Skeletons/Accordion";
import { Heading } from "@/components/Skeletons/Heading";
import { SocialMediaBar } from "@/components/Footer/SocialMediaBar";
import { getFAQ } from "@/firebase/getData";
import { useQueries } from "@tanstack/react-query";

export default function Page() {
  const categories = ["Beginner's FAQs", "General FAQs", "Guidelines"];

  // use useQueries to fetch multiple categories in parallel
  const queries = useQueries({
    queries: categories.map((category) => ({
      queryKey: ["faq", category],
      queryFn: () => getFAQ(category),
    })),
  });

  // check if any queries are loading
  const isLoading = queries.some((query) => query.isLoading);

  // check if any queries have errors
  const isError = queries.some((query) => query.isError);

  if (isLoading) {
    return (
      <GenericLayout title="FAQ">
        <div className="w-full flex flex-col justify-start items-start animate-pulse">
          <Heading />
          <AccordionGrid />
        </div>
      </GenericLayout>
    );
  }

  if (isError) {
    return (
      <GenericLayout title="FAQ">
        <div className="flex justify-center items-center min-h-[200px]">
          <p className="text-red-500">
            Error loading FAQs. Please try again later.
          </p>
        </div>
      </GenericLayout>
    );
  }

  const faqsByCategory = categories.map((category, index) => ({
    category,
    faqs: queries[index].data || [],
  }));

  return (
    <GenericLayout title="FAQ">
      {faqsByCategory.map(({ category, faqs }) => (
        <div className="pb-5" key={category}>
          <h2 className="text-green font-sans font-bold text-2xl">
            {category}
          </h2>
          <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-10">
            {faqs.map((faq) => (
              <Accordion
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="w-full flex flex-col items-start pb-5">
        <h2 className="text-green font-sans font-bold text-2xl">
          Transportation Info
        </h2>
        <p className="text-pink-transition p-5 font-medium">Coming soon!</p>
      </div>
      <div className="w-full flex flex-col items-center text-center pt-10">
        <p className="text-pink-transition font-medium">
          Can&apos;t find what you&apos;re looking for? Reach out to us through
          any of these channels
        </p>
        <SocialMediaBar />
      </div>
    </GenericLayout>
  );
}
