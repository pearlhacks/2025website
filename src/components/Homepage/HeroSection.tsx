"use client";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Navbar } from "../Navbar/Navbar";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { motion } from "framer-motion";
import { link_mailinglist } from "@/utils/Urls";
import StarsOverlay from "./Star";

export function HeroSection() {
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat bg-[url('/images/landing/PH2025_WebsiteLanding.svg')]">
        <StarsOverlay />
        <Navbar mode="landing" />
        <div className="z-10 w-full p-10 pb-20 md:pb-52 space-x-4 flex flex-wrap items-center justify-center">
          <motion.img
            src="/images/landing/PH2025_MG.svg"
            className="sm:w-2/3 md:w-2/5"
            initial={{ opacity: 0, x: -100 }} // start off-screen to the left with 0 opacity
            animate={{ opacity: 1, x: 0 }} // animate to full opacity and center
            transition={{ duration: 1 }} // control the duration of the animation
          />
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
                <p>February 15-16th, 2025</p>
              </span>
            </div>
            <PrimaryButton href={link_mailinglist}>
              Register interest
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
}
