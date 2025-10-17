import { DevpostLink } from "@/utils/Types";
import Link from "next/link";

export const DevpostLinkCard = ({
  img_url,
  title,
  url,
}: DevpostLink) => {
  return (
    <div className="bg-[#fffbf7] flex space-x-10 flex-row justify-start items-center rounded-md p-5 shadow-sm hover:-translate-y-1 hover:scale-105 transition ease-in-out">
      <Link target="_blank" href={url}>
        {img_url && (
          <img className="w-10 h-10" src={img_url} alt={`${title} icon`} />
        )}
        <h3 className="text-[#ca8d5c] text-xl font-sans font-semibold">{title} Projects</h3>
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
    <div className="bg-[#fffbf7] h-64 flex space-y-4 flex-col rounded-md p-10 shadow-sm hover:-translate-y-1 hover:scale-105 transition ease-in-out">
      <h3 className="text-[#ca8d5c] text-xl font-sans font-semibold">{heading}</h3>
      <ul className="list-disc text-[#5d2516]">
        {links.map((link, index) => (
          <li key={index} className="hover:underline">
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
