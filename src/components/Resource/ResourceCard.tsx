import { DevpostLink } from "@/utils/Types";
import Link from "next/link";

export const DevpostLinkCard = ({
  img_url,
  title,
  url,
}: DevpostLink) => {
  return (
    <div className="bg-cream-light flex space-x-3 sm:space-x-10 flex-row justify-start items-center rounded-md p-3 sm:p-5 shadow-sm hover:-translate-y-1 hover:scale-105 transition ease-in-out">
      <Link target="_blank" href={url} className="flex items-center space-x-2 sm:space-x-4 w-full">
        {img_url && (
          <img className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" src={img_url} alt={`${title} icon`} />
        )}
        <h3 className="text-brown-light text-base sm:text-lg md:text-xl font-sans font-semibold break-words">{title} Projects</h3>
      </Link>
    </div>
  );
};

interface ExternalLinkCardProps {
  heading: string;
  links: { url: string; title: string }[];
}

export const ExternalLinkCard = ({ heading, links }: ExternalLinkCardProps) => {
  return (
    <div className="bg-cream-light min-h-64 flex space-y-4 flex-col rounded-md p-4 sm:p-6 md:p-10 shadow-sm hover:-translate-y-1 hover:scale-105 transition ease-in-out">
      <h3 className="text-brown-light text-base sm:text-lg md:text-xl font-sans font-semibold break-words">{heading}</h3>
      <ul className="list-disc text-brown text-base pl-4 space-y-1 overflow-hidden">
        {links.map((link, index) => (
          <li key={index} className="hover:underline break-words">
            <Link href={link.url} className="break-all">{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
