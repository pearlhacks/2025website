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
      <div className="relative bg-[#5d2514]">
        <Navbar mode="generic" />
        <div className="relative z-20 pt-4 pb-4 flex justify-center items-center -mt-16">
          <img
            src="/images/generic/sign.svg"
            alt="Sign"
            className="absolute w-96 h-auto z-20 translate-y-16"
          />
          <h2 className="relative z-20 text-white font-sans font-bold text-4xl py-8 translate-y-16">
            {title}
          </h2>
        </div>
        <div className="relative overflow-hidden h-24">
          <img
            src="/images/generic/PH2026_Header.svg"
            alt="Blue stripes"
            className="absolute -top-20 left-0 w-full"
          />
        </div>
      </div>
      <img
        src="/images/generic/awning.svg"
        alt="Awning decoration"
        className="w-full h-auto scale-y-75 -mt-32"
      />
      <div className="bg-[#fbe8ca] text-pink-accent p-5 place-items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}
