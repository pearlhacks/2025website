import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ScheduleEventCard } from "@/components/ScheduleEventCards";

interface Event {
  title: string;
  type: string;
  date: string;
  description: string;
}

const EVENTS_API_URL = "Google Sheets Schema URL";

export default function EventsPage() {
  const router = useRouter();
  const { tab } = router.query;
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(EVENTS_API_URL);
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const filterEvents = () => {
      const now = new Date();
      switch (tab) {
        case "day1":
          setFilteredEvents(
            events.filter(
              (event) =>
                event.type.toLowerCase() === "workshop" &&
                new Date(event.date).getDate() === now.getDate()
            )
          );
          break;
        case "day2":
          setFilteredEvents(
            events.filter(
              (event) =>
                event.type.toLowerCase() === "workshop" &&
                new Date(event.date).getDate() === now.getDate() + 1
            )
          );
          break;
        case "pre-hackathon":
          setFilteredEvents(
            events.filter((event) => event.type.toLowerCase() === "workshop")
          );
          break;
        case "upcoming":
          setFilteredEvents(
            events.filter((event) => new Date(event.date) > now)
          );
          break;
        case "calendar":
          setFilteredEvents([]); // No specific events, just a calendar link (edit this)
          break;
        default:
          setFilteredEvents([]);
      }
    };

    if (events.length > 0) {
      filterEvents();
    }
  }, [tab, events]);

  return (
    <div>
      {tab === "calendar" ? (
        <div>Link to Google Calendar here</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEvents.length === 0 ? (
            <p>No events available for this category.</p>
          ) : (
            filteredEvents.map((event, index) => (
              <ScheduleEventCard key={index} event={event} />
            ))
          )}
        </div>
      )}
    </div>
  );
}
