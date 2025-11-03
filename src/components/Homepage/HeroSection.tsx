"use client";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Navbar } from "../Navbar/Navbar";
import { motion } from "framer-motion";
import StarsOverlay from "./Star";
import Image from "next/image";
import { SecondaryButton } from "../Buttons/SecondaryButton";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { link_2026mailinglist, link_directorapp } from "@/utils/Urls";
import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const codingStart = new Date("2026-02-21T00:00:00-05:00");
const codingEnd = new Date("2026-02-22T23:00:00-05:00");

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [eventStatus, setEventStatus] = useState<"before" | "during" | "after">("before");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();

      if (now < codingStart) {
        const difference = codingStart.getTime() - now.getTime();
        setEventStatus("before");
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else if (now >= codingStart && now <= codingEnd) {
        const difference = codingEnd.getTime() - now.getTime();
        setEventStatus("during");
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        setEventStatus("after");
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="bg-cream bg-cover bg-center bg-no-repeat bg-[url('/images/landing/PH2026_WebsiteLanding.svg')]">
        <StarsOverlay />
        <Navbar mode="landing" />
        <div className="z-10 w-full p-10 pb-20 md:pb-52 space-x-4 flex flex-wrap items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 1 }}
            className="relative sm:w-2/3 md:w-2/5 h-auto"
          >
            <Image
              src="/images/landing/PH2026_MG.svg"
              alt="Pearl Hacks 2026 Logo"
              width={500} // Adjust based on design
              height={500} // Adjust based on design
              priority // Ensures this image loads first
            />
          </motion.div>
          <div className="z-10 space-y-4 text-center md:text-left">
            <div>
              <div className="font-sans">
                <h2 className="text-xl font-bold text-brown-medium italic"> brew with </h2>
                <h1 className="text-brown text-5xl font-bold uppercase">
                  Pearl Hacks
                </h1>
              </div>
              {eventStatus === "after" ? (
                <span className="justify-center md:justify-start flex font-medium text-brown flex-row space-x-2">
                  <ClockIcon className="w-6" />
                  <p>Ended. Thank you for participating!</p>
                </span>
              ) : eventStatus === "during" ? (
                <div className="justify-center md:justify-start">
                  <span className="flex font-medium text-brown flex-row space-x-2 mb-2">
                    <ClockIcon className="w-6" />
                    <p>Event is live! Time remaining:</p>
                  </span>
                  <div className="flex gap-3 justify-center md:justify-start">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brown">{timeLeft.days}</div>
                      <div className="text-xs text-brown-medium">DAYS</div>
                    </div>
                    <div className="text-3xl font-bold text-brown">:</div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brown">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-xs text-brown-medium">HOURS</div>
                    </div>
                    <div className="text-3xl font-bold text-brown">:</div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brown">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-xs text-brown-medium">MIN</div>
                    </div>
                    <div className="text-3xl font-bold text-brown">:</div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brown">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-xs text-brown-medium">SEC</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="justify-center md:justify-start">
                  <span className="flex font-medium text-brown flex-row space-x-2 mb-2">
                    <ClockIcon className="w-6" />
                    <p>Countdown to Pearl Hacks 2026</p>
                  </span>
                  <div className="flex gap-3 justify-center md:justify-start">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brown">{timeLeft.days}</div>
                      <div className="text-xs text-brown-medium">DAYS</div>
                    </div>
                    <div className="text-3xl font-bold text-brown">:</div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brown">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-xs text-brown-medium">HOURS</div>
                    </div>
                    <div className="text-3xl font-bold text-brown">:</div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brown">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-xs text-brown-medium">MIN</div>
                    </div>
                    <div className="text-3xl font-bold text-brown">:</div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brown">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-xs text-brown-medium">SEC</div>
                    </div>
                  </div>
                </div>
              )}
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
