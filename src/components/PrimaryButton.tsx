import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
}

export function PrimaryButton({ href, children }: PrimaryButtonProps) {
  return (
    <button className="font-sans font-bold text-white border-2 border-pink transition ease-in-out p-2 px-4 justify-center hover:border-green hover:text-green uppercase items-center hover:bg-pink bg-pink-accent rounded-full">
      <Link href={href}>{children}</Link>
    </button>
  );
}
