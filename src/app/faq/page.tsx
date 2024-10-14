import { Accordion } from "@/components/Accordion";
import { GenericLayout } from "@/components/GenericLayout";
import { SocialMediaBar } from "@/components/SocialMediaBar";
import { getFAQ } from "@/firebase/getData";

export default async function Page() {
  const categories = ["Beginner's FAQs", "General FAQs", "Guidelines"];

  // Fetch all FAQs for each category before rendering
  const faqsByCategory = await Promise.all(
    categories.map(async (category) => ({
      category: category,
      faqs: await getFAQ(category),
    }))
  );

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
      <div className="pb-5">
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
