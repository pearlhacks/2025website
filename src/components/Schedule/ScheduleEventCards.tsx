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
    <div className="min-h-screen flex justify-center items-start py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
        {/* Render events directly */}
        {events.map((event, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-lg shadow-lg p-5 dark:bg-white-800 dark:border-white-700 overflow-hidden w-80"
          >
            <div className="relative z-10">
              {/* Event Title */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight font-sans text-pink-accent">
                {event.event_name || "Event Title"}
              </h5>
              {/* Event Type */}
              <p className="flex flex-row items-center space-x-2 mb-1 text-med font-semibold font-body text-brown-700 dark:text-brown-400">
                <>
                  <StarIcon className="w-4 h-4" />{" "}
                </>{" "}
                {event.event_type || "Event Type: Workshop, General, or Other"}
              </p>
              {/* Date */}
              <p className="flex flex-row items-center space-x-2 mb-1 text-brown-500 font-body dark:text-brown-400">
                <>
                  <CalendarIcon className="w-4 h-4" />{" "}
                </>{" "}
                {event.date || "MM/DD/YYYY"}
              </p>
              {/* Location */}
              <p className="flex flex-row items-center space-x-2 mb-1 font-body text-brown-500 dark:text-brown-400">
                <MapPinIcon className="w-4 h-4 shrink-0" />{" "}
                {event.location || "No Location Details"}
              </p>
              {/* Start Time */}
              {/* to-do: change this to start time - end time i.e. 9am to 10am? */}
              <p className="mb-1 font-body text-brown-500 dark:text-brown-400">
                <strong>Start Time:</strong> {event.start_time || "HH:MM AM/PM"}
              </p>
              {/* End Time */}
              <p className="mb-1 font-body text-brown-500 dark:text-brown-400">
                <strong>End Time:</strong>{" "}
                {calculateEndTime(event.start_time, event.duration?.toString())}
              </p>

              {/* Event Link - only if it pops up in the excel column, otherwise no notification */}
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
