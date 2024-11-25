"use client";

import { Schedule } from "@/utils/Types";
import React from "react";
import { ScheduleSkeleton } from "../Skeletons/ScheduleSkeleton";
import {
  BellAlertIcon,
  BellIcon,
  CalendarIcon,
  StarIcon,
} from "@heroicons/react/16/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { format, addMinutes } from "date-fns";

const calculateEndTime = (startTime?: string, duration?: string): string => {
  if (!startTime || !duration) {
    return "TBD"; // Handle cases where data is missing
  }

  try {
    // Parse start time into hours and minutes
    const [time, modifier] = startTime.split(" "); // E.g., "9:00 AM"
    const [hours, minutes] = time.split(":").map(Number);

    // Create a base Date object with the start time
    const startDate = new Date();
    startDate.setHours(
      modifier === "PM" && hours !== 12 ? hours + 12 : hours % 12
    );
    startDate.setMinutes(minutes || 0);
    startDate.setSeconds(0);

    // Convert duration to minutes
    const durationInMinutes = parseFloat(duration) * 60;

    // Add duration to the start time
    const endDate = new Date(startDate.getTime() + durationInMinutes * 60000);

    // Format the end time
    return endDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  } catch (error) {
    console.error("Error calculating end time:", error);
    return "TBD";
  }
};

type ScheduleEventCardProps = {
  events: Schedule[]; // Array of events to be displayed
};

export const ScheduleEventCard: React.FC<ScheduleEventCardProps> = ({
  events,
}) => {
  // If events are not yet loaded, show the skeleton loader
  if (!events || events.length === 0) {
    return <ScheduleSkeleton />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center py-4">
      <div className="grid grid-cols-4 gap-4 auto-rows-auto">
        {/* Render events directly */}
        {events.map((event, index) => (
          <div
            key={index}
            className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-5 dark:bg-white-800 dark:border-white-700 overflow-hidden"
          >
            <div className="relative z-10">
              {/* replace labels with icon  */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-sans dark:text-brown">
                {event.event_name || "Event Title"}
              </h5>
              <p className="flex flex-row items-center space-x-2 mb-1 text-med font-semibold font-body text-gray-700 dark:text-gray-400">
                <>
                  <StarIcon className="w-4 h-4" />{" "}
                </>{" "}
                {event.event_type ||
                  "Event Type: Workshop, Pre-Hackathon Event, or Main Events"}
              </p>
              <p className="flex flex-row items-center space-x-2 mb-1 text-gray-500 font-body dark:text-gray-400">
                <>
                  <CalendarIcon className="w-4 h-4" />{" "}
                </>{" "}
                {event.date || "MM/DD/YYYY"}
              </p>
              <p className="flex flex-row items-center space-x-2 mb-1 font-body text-gray-500 dark:text-gray-400">
                <MapPinIcon className="w-4 h-4 shrink-0" />{" "}
                {event.location || "Location details not available"}
              </p>
              {/* to-do: change this to start time - end time i.e. 9am to 10am? */}
              <p className="mb-1 font-body text-gray-500 dark:text-gray-400">
                <strong>Start Time:</strong> {event.start_time || "HH:MM AM/PM"}
              </p>
              <p className="mb-1 font-body text-gray-500 dark:text-gray-400">
                <strong>End Time:</strong>{" "}
                {calculateEndTime(event.start_time, event.duration?.toString())}
              </p>

              {event.link && (
                <a
                  href={event.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-300 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-200 dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-800 mt-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Event Details
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
