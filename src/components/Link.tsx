import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className="my-2 bg-[#9ccce6] hover:bg-[#7fb8d8] transition ease-in-out delay-150 text-[#5d2516] rounded-full px-2 p-1"
    >
      {children}
    </a>
  );
}
