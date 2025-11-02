import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
}

export function PrimaryButton({ href, children }: PrimaryButtonProps) {
  const buttonClasses = "font-sans font-bold text-white border-2 transition ease-in-out p-2 px-4 justify-center border-pink-accent uppercase items-center backdrop-blur hover:bg-transparent bg-pink-accent rounded-full inline-flex";

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
