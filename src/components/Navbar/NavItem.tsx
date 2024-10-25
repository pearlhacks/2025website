import { ReactNode } from "react";

interface NavItemProps {
  children: ReactNode;
}

export default function NavItem({ children }: NavItemProps) {
  return (
    <span className="flex flex-row space-x-1 text-gray-brown hover:text-pink transition ease-in-out delay-150">
      {children}
    </span>
  );
}
