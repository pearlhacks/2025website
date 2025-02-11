"use client";
import { GenericLayout } from "@/components/GenericLayout";
import LiveButtonGroup from "@/components/Live/ButtonGroup";
import Timer from "@/components/Live/Timer";
import Tab from "@/components/Live/Tab";
import { PrizeSection } from "@/components/Live/Prize";

export default function Page() {
  return (
    <GenericLayout title="Live">
      <div className="w-full space-y-10">
        <div className="space-y-2">
          <Timer />
          <LiveButtonGroup />
        </div>
        <div className="space-y-2">
          <h2 className="text-green mt-8 font-sans font-bold text-2xl">
            Event Information
          </h2>
          <Tab />
        </div>

        {/* Prizes Section */}
        <div className="space-y-2">
          <h2 className="text-green font-sans font-bold text-2xl">Prizes</h2>
          <PrizeSection />
        </div>
      </div>
    </GenericLayout>
  );
}
