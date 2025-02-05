"use client";
import { useState, useEffect } from "react";
import { GenericLayout } from "@/components/GenericLayout";
import { ScheduleButton } from "@/components/Schedule/ScheduleButton";
import LiveButtonGroup from "@/components/Live/ButtonGroup";
import Timer from "@/components/Live/Timer";
import Tab from "@/components/Live/Tab";

export default function Page() {
  return (
    <GenericLayout title="Live">
      <div className="w-full space-y-4">
        <Timer />
        <LiveButtonGroup />

        <h2 className="text-green mt-8 font-sans font-bold text-2xl">
          Event Information
        </h2>
        <Tab />

        {/* Prizes Section */}
        <h2 className="text-green font-sans font-bold text-2xl">Prizes</h2>
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="font-bold">Grand Prize</h2>
          <p>Details about the grand prize to be announced soon.</p>
        </div>
      </div>
    </GenericLayout>
  );
}
