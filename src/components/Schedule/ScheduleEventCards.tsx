"use client";

import { Schedule } from "@/utils/Types";
import React from "react";
import { ScheduleSkeleton } from "../Skeletons/ScheduleSkeleton";
import { CalendarIcon } from "@heroicons/react/16/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { format, addMinutes } from "date-fns";

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
                  <MapPinIcon className="w-4 h-4" />{" "}
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
              {/* to-do: change this to start time - end time i.e. 9am to 10am? */}
              <p className="mb-1 font-body text-gray-500 dark:text-gray-400">
                <strong>Start Time:</strong> {event.start_time || "HH:MM AM/PM"}
              </p>
              <p className="mb-1 font-body text-gray-500 dark:text-gray-400">
                <strong>End Time:</strong>{" "}
                {event.duration + event.start_time || "TBD"}
              </p>
              <p className="mb-3 font-body text-gray-500 dark:text-gray-400">
                <strong>Location:</strong>{" "}
                {event.location || "Location details not available"}
              </p>
              {event.link ? (
                <a
                  href={event.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              ) : (
                // show link when it is avail
                <span className="text-gray-500 dark:text-gray-400">
                  No link available
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
