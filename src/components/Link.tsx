import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className="my-2 bg-blue hover:bg-brown-light transition ease-in-out delay-150 text-white rounded-full px-2 p-1"
    >
      {children}
    </a>
  );
}
