"use client";

import { Schedule } from "@/utils/Types";
import React from "react";
import { ScheduleSkeleton } from "../Skeletons/ScheduleSkeleton";

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
      <div className="flex justify-center flex-col space-y-4">
        {/* Render events directly */}
        {events.map((event, index) => (
          <div
            key={index}
            className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-5 dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
          >
            {/* Jelly paint background blobs */}
            <div className="absolute inset-0 -z-10">
              <div className="blob bg-pink-300 opacity-40 w-40 h-40 rounded-full blur-xl absolute top-10 left-10"></div>
              <div className="blob bg-blue-300 opacity-40 w-32 h-32 rounded-full blur-2xl absolute bottom-5 right-5"></div>
              <div className="blob bg-purple-300 opacity-40 w-24 h-24 rounded-full blur-lg absolute top-1/2 left-1/3 transform -translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {event.event || "Event Title"}
              </h5>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-400">
                {event.type ||
                  "Event Type: Workshop, Pre-Hackathon Event, or Main Events"}
              </p>
              <p className="mb-1 text-gray-500 dark:text-gray-400">
                <strong>Date:</strong> {event.date || "MM/DD/YYYY"}
              </p>
              <p className="mb-1 text-gray-500 dark:text-gray-400">
                <strong>Start Time:</strong> {event.startTime || "HH:MM AM/PM"}
              </p>
              <p className="mb-1 text-gray-500 dark:text-gray-400">
                <strong>Duration:</strong> {event.duration || "TBD"}
              </p>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
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
