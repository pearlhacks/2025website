"use client";
import { useState, useEffect } from "react";
import { GenericLayout } from "@/components/GenericLayout";
import { ScheduleButton } from "@/components/Schedule/ScheduleButton";
import { getSchedules } from "@/api/getData";
import { ScheduleEventCard } from "@/components/Schedule/ScheduleEventCards";
import { parseISO, isThisWeek } from "date-fns";
import { Schedule } from "@/utils/Types";
import { ScheduleSkeleton } from "@/components/Skeletons/ScheduleSkeleton";

export default function Page() {
  const [categorizedEvents, setCategorizedEvents] = useState<{
    day1: Schedule[];
    day2: Schedule[];
    preHackathon: Schedule[];
    upcoming: Schedule[];
  }>({
    day1: [],
    day2: [],
    preHackathon: [],
    upcoming: [],
  });

  const [currentTab, setCurrentTab] = useState<
    "day1" | "day2" | "preHackathon" | "upcoming"
  >("day1");

  const [isLoading, setIsLoading] = useState(true); // Loading state

  return (
    <GenericLayout title="Live Page">
      <div className="space-y-20 text-brown">
        <h1 className="text-green font-sans font-bold text-5xl py-5">
          Pearl Hacks Live Page
        </h1>

        <div className="flex space-x-10">
          {/* Button Group for Discord, Hacker Guide, and Devpost */}
          <ScheduleButton
            onClick={() => window.open("https://discord.com")}
            className="bg-blue-600 hover:bg-blue-500"
          >
            Discord
          </ScheduleButton>
          <ScheduleButton
            onClick={() => window.open("https://www.hackerguide.com")}
            className="bg-purple-600 hover:bg-purple-500"
          >
            Hacker Guide
          </ScheduleButton>
          <ScheduleButton
            onClick={() => window.open("https://devpost.com")}
            className="bg-orange-600 hover:bg-orange-500"
          >
            Devpost
          </ScheduleButton>
        </div>

        {/* Placeholder for Location, Parking, Menu, and WiFi */}
        <div className="space-y-4">
          <div className="text-xl font-semibold">Event Information</div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="font-bold">Location</h2>
            <p>To be announced.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="font-bold">Parking</h2>
            <p>Details coming soon.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="font-bold">Menu</h2>
            <p>Check back later for the menu details.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="font-bold">WiFi</h2>
            <p>Network information will be provided at the event.</p>
          </div>
        </div>

        {/* Prizes Section */}
        <div className="space-y-4">
          <div className="text-xl font-semibold">Prizes</div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="font-bold">Grand Prize</h2>
            <p>Details about the grand prize to be announced soon.</p>
          </div>
        </div>
      </div>
    </GenericLayout>
  );
}
