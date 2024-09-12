import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function GenericLayout({ title, children }) {
  return (
    <div className="w-full bg-pink h-full">
      <div className="relative bg-cover justify-center text-center pb-72 bg-center bg-no-repeat bg-[url('/images/generic/PH2025_Header.svg')]">
        <Navbar mode="generic" />
        <h2 className="pt-20 text-white font-sans font-bold text-4xl">
          {title}
        </h2>
      </div>
      <div className="bg-pink text-pink-accent p-5 place-items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}
