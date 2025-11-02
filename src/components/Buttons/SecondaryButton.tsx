import Link from "next/link";
import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  href?: string;
  textColor?: string;
  hoverTextColor?: string;
}

export function SecondaryButton({ children, href, textColor = "text-white", hoverTextColor = "" }: SecondaryButtonProps) {
  const hoverClass = hoverTextColor ? hoverTextColor : "";
  const buttonClasses = `font-sans font-bold ${textColor} ${hoverClass} border-2 transition ease-in-out p-2 px-4 justify-center border-blue uppercase items-center backdrop-blur hover:bg-transparent bg-blue rounded-full inline-flex`;

  if (href) {
    // Check if it's an external link
    const isExternal = href.startsWith('http') || href.startsWith('//');

    if (isExternal) {
      return (
        <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    // Internal link - use Next.js Link
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses}>
      {children}
    </button>
  );
}
