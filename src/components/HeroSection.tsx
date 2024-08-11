import { ClockIcon } from "@heroicons/react/24/outline";
import { Navbar } from "./Navbar";
import { PrimaryButton } from "./PrimaryButton";

export function HeroSection() {
    return(
        <>
        <div className="bg-cover bg-center bg-no-repeat bg-[url('/images/landing/PH2025_WebsiteLanding.svg')]">
        <Navbar />
        <div className="w-full p-10 pb-20 md:pb-52 space-x-4 flex flex-wrap items-center justify-center">
          <img
            src="/images/landing/PH2025_MG.svg"
            className="sm:size-2/3 md:size-2/5"
          />
          <div className="space-y-4">
            <div>
              <div className="font-sans">
                <h2 className="text-xl font-bold text-pink-accent italic">sprout with</h2>
                <h1 className="text-white text-5xl font-bold uppercase">
                  Pearl Hacks
                </h1>
              </div>
              <span className="flex font-medium text-brown flex-row space-x-2">
                <ClockIcon className="w-6" />
                <p>February 15-16th, 2025</p>
              </span>
            </div>
            <PrimaryButton>Register now</PrimaryButton>
          </div>
        </div>
      </div>
        </>
    )
}