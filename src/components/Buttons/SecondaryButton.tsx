import Link from "next/link";
import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  href?: string;
}

export function SecondaryButton({ children, href }: SecondaryButtonProps) {
  return (
    <button className="font-sans font-bold text-white border-2 transition ease-in-out p-2 px-4 justify-center border-[#7ac0e6] uppercase items-center backdrop-blur hover:bg-transparent bg-[#7ac0e6] rounded-full">
      {href ? (
        <Link href={href} className="flex justify-center items-center">
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
}
