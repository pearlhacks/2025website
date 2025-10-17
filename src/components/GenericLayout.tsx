import { ReactNode } from "react";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";

interface GenericLayoutProps {
  title: string;
  children: ReactNode;
}

export function GenericLayout({ title, children }: GenericLayoutProps) {
  return (
    <div className="w-full bg-[#fbe8ca] h-full">
      <div className="relative bg-cover justify-center text-center pb-96 bg-bottom bg-no-repeat bg-[url('/images/generic/PH2026_Header.svg')]">
        <Navbar mode="generic" />
        <h2 className="pt-20 text-white font-sans font-bold text-4xl">
          {title}
        </h2>
      </div>
      <div className="bg-[#fbe8ca] text-pink-accent p-5 place-items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}
