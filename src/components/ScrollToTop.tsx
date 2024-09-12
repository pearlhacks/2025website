"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import { SecondaryButton } from "./SecondaryButton";

export function ScrollToTopButton() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <span
      className={`flex z-50 flex-row space-x-4 p-10 fixed bottom-0 right-0 scrollToTopButton transition ease-in-out delay-150 ${
        isVisible ? "visible" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <SecondaryButton>
        <span className="flex flex-row space-x-6 py-2 items-center">
          <ChevronUpIcon className="w-6 h-6" />
          <h1 className="hidden sm:block">Back to Top</h1>
        </span>
      </SecondaryButton>
    </span>
  );
}
