import { getSchedules } from "@/api/getData";
import { Schedule } from "@/utils/Types";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "../Link";

const Timer: React.FC = () => {
  const { data: scheduleData = [], isLoading } = useQuery({
    queryKey: ["schedules"],
    queryFn: getSchedules,
  });

  const [timeLeft, setTimeLeft] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [upcomingEvents, setUpcomingEvents] = useState<Schedule[]>([]);

  const codingStart = new Date("2025-02-15T11:00:00-05:00"); // Feb 15th 11:00 AM EST
  const codingEnd = new Date("2025-02-16T23:00:00-05:00"); // Feb 16th 11:00 PM EST

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      let targetDate;
      let label;

      if (now > codingEnd) {
        targetDate = codingEnd;
        label = "Coding has ended";
        return setTimeLeft("0h 0m 0s");
      } else if (now > codingStart) {
        targetDate = codingEnd;
        label = "Until coding ends";
      } else {
        targetDate = codingStart;
        label = "Until coding starts";
      }

      const difference = targetDate.getTime() - now.getTime();

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      setLabel(label);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isLoading && scheduleData.length > 0) {
      const now = new Date();
      const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);

      const eventsInNextHour = scheduleData.filter((event: Schedule) => {
        const eventDate = new Date(`${event.date}T${event.start_time}`);
        return eventDate >= now && eventDate <= oneHourLater;
      });

      setUpcomingEvents(eventsInNextHour);
    }
  }, [isLoading, scheduleData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full bg-white flex text-brown space-y-4 flex-col items-center rounded-md p-10 shadow-sm">
      <div className="flex flex-col items-center">
        <div className="font-bold font-sans text-pink-accent text-3xl">
          {timeLeft}
        </div>
        {label && <div>{label}</div>}
      </div>
      {upcomingEvents.length > 0 ? (
        <ul>
          {upcomingEvents.map((event) => (
            <li key={event.event_name}>
              <strong>{event.event_name}</strong> - {event.start_time} at{" "}
              {event.location}
            </li>
          ))}
        </ul>
      ) : (
        <div>No upcoming events in the next hour.</div>
      )}
      <div className="text-sm italic">
        Check <Link href="/schedule">the schedule page</Link> for the entire
        schedule!
      </div>
    </div>
  );
};

export default Timer;
