"use client";

import { Schedule } from "@/utils/Types";
import React from "react";
import { ScheduleSkeleton } from "../Skeletons/ScheduleSkeleton";
import {
  BellAlertIcon,
  BellIcon,
  CalendarIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/16/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { format, addMinutes } from "date-fns";

const calculateEndTime = (startTime?: string, duration?: string): string => {
  if (!startTime || !duration) {
    return ""; // Handle cases where data is missing
  }

  try {
    // Parse start time into hours and minutes
    const [time, modifier] = startTime.split(" "); // E.g., "9:00 AM"
    const [hours, minutes] = time.split(":").map(Number);

    // Create a base Date object with the start time
    const startDate = new Date();
    if (modifier === "PM" && hours !== 12) {
      startDate.setHours(hours + 12); // Convert PM times to 24-hour format, except for 12 PM
    } else if (modifier === "AM" && hours === 12) {
      startDate.setHours(0); // 12 AM is midnight, so set it to 0 hours
    } else {
      startDate.setHours(hours); // For AM times except 12 AM and PM times except 12 PM
    }
    startDate.setMinutes(minutes || 0);
    startDate.setSeconds(0);

    // Convert duration to minutes
    const durationInMinutes = parseFloat(duration) * 60;

    // Duration + Start Time
    const endDate = new Date(startDate.getTime() + durationInMinutes * 60000);

    // Format end time
    return `- ${endDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })}`;
  } catch (error) {
    console.error("Error calculating end time:", error);
    return "";
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
    <div className="w-full flex justify-center items-start py-4">
      {/* Scrollable horizontal container */}
      <div className="flex flex-row overflow-x-scroll space-x-4 w-full">
        {/* Wrap every 4 cards in a container */}
        {Array.from({ length: Math.ceil(events.length / 4) }).map(
          (_, rowIndex) => (
            <div key={rowIndex} className="flex flex-row space-x-4">
              {events
                .slice(rowIndex * 4, rowIndex * 4 + 4) // Group 4 cards per row
                .map((event, index) => (
                  <div
                    key={index}
                    className="relative bg-white border border-gray-200 rounded-lg p-5 overflow-hidden w-80"
                  >
                    <div className="relative z-10">
                      {/* Event Title */}
                      <h5 className="mb-2 text-2xl font-bold tracking-tight font-sans text-pink-accent">
                        {event.event_name || "Event Title"}
                      </h5>
                      {/* Location */}
                      <p className="flex flex-row items-center space-x-2 mb-1 font-body text-brown-500">
                        <MapPinIcon className="w-4 h-4 shrink-0" />{" "}
                        {event.location || "No Location Details"}
                      </p>
                      {/* Date, Start Time - End Time */}
                      <p className="flex flex-row items-center space-x-2 mb-1 font-body text-med font-semibold text-brown-500">
                        <>
                          <ClockIcon className="w-4 h-4" />{" "}
                        </>{" "}
                        {event.date}
                        {", "}
                        {event.start_time}{" "}
                        {calculateEndTime(
                          event.start_time,
                          event.duration?.toString()
                        )}
                      </p>

                      {/* Event Link */}
                      {event.link && (
                        <a
                          href={event.link}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-300 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-200 mt-5"
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
          )
        )}
      </div>
    </div>
  );
};
