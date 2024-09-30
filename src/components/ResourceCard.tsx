import Link from "next/link";
import { ReactNode } from "react";

interface DevpostLinkCardProps {
  icon?: string;
  title: string;
  link: string;
}

export const DevpostLinkCard = ({
  icon,
  title,
  link,
}: DevpostLinkCardProps) => {
  return (
    <div className="bg-white flex space-x-10 flex-row justify-start items-center rounded-md p-5 shadow-sm hover:-translate-y-1 hover:scale-105 transition ease-in-out">
      {icon && <img className="w-10 h-10" src={icon} alt={`${title} icon`} />}
      <h3 className="text-xl font-sans font-semibold">{title} Projects</h3>
    </div>
  );
};

interface ExternalLinkCardProps {
  heading: string;
  links: { url: string; title: string }[];
}

export const ExternalLinkCard = ({ heading, links }: ExternalLinkCardProps) => {
  return (
    <div className="bg-white h-64 flex space-y-4 flex-col rounded-md p-10 shadow-sm hover:-translate-y-1 hover:scale-105 transition ease-in-out">
      <h3 className="text-xl font-sans font-semibold">{heading}</h3>
      <ul className="list-disc text-brown">
        {links.map((link, index) => (
          <li key={index} className="hover:underline">
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
