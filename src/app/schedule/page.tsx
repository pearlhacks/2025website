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
    "preHackathon" | "day1" | "day2" | "upcoming"
  >("preHackathon");

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
      const eventDate = parseISO(
        `${new Date().getFullYear()}-${event.date.replace("/", "-")}`
      );

      // Categorize by Day 1 and Day 2
      if (event.date === "10/26") {
        day1Events.push(event);
      } else if (event.date === "10/27") {
        day2Events.push(event);
      }

      // Categorize as Pre-Hackathon Workshops (has workshop and is before the hackathon - 15th and 16th)
      if (
        event.event_type.includes("Workshop") &&
        event.date != "2/15" &&
        event.date != "2/16"
      ) {
        preHackathonWorkshops.push(event);
      }

      // Categorize as Upcoming Events if this week (doesn't matter if it is before or during the hackathon)
      if (isThisWeek(eventDate)) {
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
        <h2 className="text-brown text-3xl py-5">
          At Pearl Hacks, we offer a variety of events and workshops every week
          designed to help you grow your skills and connect with the community.
          From technical workshops to networking events and mentorship
          opportunities, there is always something exciting happening. Click
          below to explore the full schedule and join us in learning, creating,
          and collaborating! You can also add these events to your Google
          Calendar to expand all events and view them on your personal calendar.
        </h2>
        <div className="flex overflow-x-auto justify-center space-x-20">
          <ScheduleButton
            onClick={() => setCurrentTab("preHackathon")}
            className="bg-pink-accent hover:bg-pink-transition"
          >
            Pre-Hackathon Workshops
          </ScheduleButton>
          <ScheduleButton
            onClick={() => setCurrentTab("day1")}
            className="bg-green hover:bg-green-transition"
          >
            Day 1
          </ScheduleButton>
          <ScheduleButton
            onClick={() => setCurrentTab("day2")}
            className="bg-yellow hover:bg-yellow-400"
          >
            Day 2
          </ScheduleButton>
          <ScheduleButton
            onClick={() => setCurrentTab("upcoming")}
            className="bg-brown hover:bg-brown-transition"
          >
            Upcoming Events
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
