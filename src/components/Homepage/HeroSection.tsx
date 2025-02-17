"use client";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Navbar } from "../Navbar/Navbar";
import { motion } from "framer-motion";
import StarsOverlay from "./Star";
import Image from "next/image";
import { SecondaryButton } from "../Buttons/SecondaryButton";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { link_2026mailinglist, link_directorapp } from "@/utils/Urls";

export function HeroSection() {
  const codingStart = new Date("2025-02-15T00:00:00-05:00");
  const codingEnd = new Date("2025-02-16T23:00:00-05:00");
  const now = new Date();
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat bg-[url('/images/landing/PH2025_WebsiteLanding.svg')]">
        <StarsOverlay />
        <Navbar mode="landing" />
        <div className="z-10 w-full p-10 pb-20 md:pb-52 space-x-4 flex flex-wrap items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative sm:w-2/3 md:w-2/5 h-auto"
          >
            <Image
              src="/images/landing/PH2025_MG.svg"
              alt="Pearl Hacks 2025 Logo"
              width={500} // Adjust based on design
              height={500} // Adjust based on design
              priority // Ensures this image loads first
            />
          </motion.div>
          <div className="z-10 space-y-4 text-center md:text-left">
            <div>
              <div className="font-sans">
                <h2 className="text-xl font-bold text-pink-accent italic">
                  sprout with
                </h2>
                <h1 className="text-white text-5xl font-bold uppercase">
                  Pearl Hacks
                </h1>
              </div>
              <span className="justify-center md:justify-start flex font-medium text-brown flex-row space-x-2">
                <ClockIcon className="w-6" />
                <p>Ended. Thank you for participating!</p>
              </span>
            </div>
              <div className="space-x-2 space-y-2">
                <SecondaryButton href={link_2026mailinglist}>
                  PH2026 Mailing List
                </SecondaryButton>
                <PrimaryButton href={link_directorapp}>
                  Director Interest Form
                </PrimaryButton>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
