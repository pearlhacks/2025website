import { ReactNode } from "react";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";

interface GenericLayoutProps {
  title: string;
  children: ReactNode;
}

export function GenericLayout({ title, children }: GenericLayoutProps) {
  return (
    <div className="w-full bg-cream h-full">
      <div className="relative bg-brown md:mb-[-3rem]">
        <Navbar mode="generic" />
        <div className="relative z-20 pt-4 pb-4 flex justify-center items-center -mt-16 px-4">
          <img
            src="/images/generic/sign.svg"
            alt="Sign"
            className="absolute w-80 sm:w-96 h-auto z-20 translate-y-16"
          />
          <h2 className="relative z-20 text-white font-sans font-bold text-2xl sm:text-3xl md:text-4xl py-8 translate-y-16 text-center max-w-xs sm:max-w-md">
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
      <div className="bg-cream text-pink-accent pl-5 pr-5 pd-5 pt-5 md:pt-0 place-items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}
