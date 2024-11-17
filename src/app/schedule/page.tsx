"use client";
import { useState, useEffect } from "react";
import { GenericLayout } from "@/components/GenericLayout";
import { ScheduleButton } from "@/components/Schedule/ScheduleButton";
import { getSchedules } from "@/api/getData";
import { ScheduleEventCard } from "@/components/Schedule/ScheduleEventCards";
import { parseISO, isThisWeek, isBefore } from "date-fns";
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

  useEffect(() => {
    async function fetchData() {
      const scheduleData = await getSchedules();
      categorizeEvents(scheduleData);
      setIsLoading(false); // Set loading state to false after data is fetched
    }
    fetchData();
  }, []);

  // Helper function to categorize events based on sheet criteria
  const categorizeEvents = (events: Schedule[]) => {
    const day1Events: Schedule[] = [];
    const day2Events: Schedule[] = [];
    const preHackathonWorkshops: Schedule[] = [];
    const upcomingEvents: Schedule[] = [];

    events.forEach((event) => {
      const eventDate = parseISO(event.date);

      // Categorize by Day 1 and Day 2
      if (event.date === "10/26") {
        day1Events.push(event);
      } else if (event.date === "10/27") {
        day2Events.push(event);
      }

      // Categorize as Pre-Hackathon Workshops
      if (event.type === "workshop" && event.date !== "02/15") {
        preHackathonWorkshops.push(event);
      }

      // Categorize as Upcoming Events if this week and before 02/17
      if (
        isThisWeek(eventDate) &&
        isBefore(eventDate, parseISO("2024-02-17"))
      ) {
        upcomingEvents.push(event);
      }
    });

    setCategorizedEvents({
      day1: day1Events,
      day2: day2Events,
      preHackathon: preHackathonWorkshops,
      upcoming: upcomingEvents,
    });
  };

  // Function to render events based on the selected tab
  const renderEvents = () => {
    const eventsToDisplay = categorizedEvents[currentTab] || [];
    return <ScheduleEventCard events={eventsToDisplay} />;
  };

  return (
    <GenericLayout title="Schedule">
      <div className="space-y-20 text-brown">
        <h1 className="text-green font-sans font-bold text-5xl py-5">
          Pearl Hacks Schedule
        </h1>
        <p>
          At Pearl Hacks, we offer a variety of events and workshops every week
          designed to help you grow your skills and connect with the community.
          From technical workshops to networking events and mentorship
          opportunities, there is always something exciting happening. Click
          below to explore the full schedule and join us in learning, creating,
          and collaborating! You can also add these events to your google
          Calendar to expand all events and view them on your personal calendar.
        </p>
        <div className="flex justify-center space-x-20">
          <ScheduleButton
            onClick={() => setCurrentTab("day1")}
            className="bg-green-500 hover:bg-green-600"
          >
            Day 1
          </ScheduleButton>
          <ScheduleButton
            onClick={() => setCurrentTab("day2")}
            className="bg-yellow-500 hover:bg-yellow-600"
          >
            Day 2
          </ScheduleButton>
          <ScheduleButton
            onClick={() => setCurrentTab("preHackathon")}
            className="bg-pink-300 hover:bg-pink-400"
          >
            Pre-Hackathon Workshops
          </ScheduleButton>
          <ScheduleButton
            onClick={() => setCurrentTab("upcoming")}
            className="bg-orange-300 hover:bg-orange-400"
          >
            Upcoming Events
          </ScheduleButton>
          <ScheduleButton
            onClick={() => window.open("https://calendar.google.com")}
            className="bg-red-300 hover:bg-red-400"
          >
            Add to Calendar
          </ScheduleButton>
        </div>

        {/* Render either skeleton or events based on loading state */}
        <div className="space-y-4">
          {isLoading ? (
            <ScheduleSkeleton /> // Display skeleton while loading
          ) : (
            renderEvents() // Display events after loading
          )}
        </div>
      </div>
    </GenericLayout>
  );
}
