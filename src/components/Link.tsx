import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className="my-2 bg-blue-light hover:bg-blue-lighter transition ease-in-out delay-150 text-brown-darker rounded-full px-2 p-1"
    >
      {children}
    </a>
  );
}
