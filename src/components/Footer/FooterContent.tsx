import { ReactNode } from "react";

interface FooterContentProps {
  title: string;
  children: ReactNode;
}

export function FooterContent({ title, children }: FooterContentProps) {
  return (
    <div className="w-full">
      <h2 className="text-white font-sans font-bold uppercase">{title}</h2>
      <p className="text-brown-lighter">{children}</p>
    </div>
  );
}
