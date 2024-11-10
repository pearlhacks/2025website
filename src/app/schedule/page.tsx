import { GenericLayout } from "@/components/GenericLayout";
import { ScheduleButton } from "@/components/ScheduleButton";

export default async function Page() {
  return (
    <GenericLayout title="Schedule">
      <div className="space-y-20 text-brown">
        <div className="flex flex-wrap items-center">
          <h1 className="text-green font-sans font-bold text-5xl py-5">
            Pearl Hacks Schedule
          </h1>
          <div className="flex flex-col md:flex-row items-top lg:items-center md:space-x-4">
            <div className="space-y-4">
              <p>
                At Pearl Hacks, we offer a variety of events and workshops every
                week designed to help you grow your skills and connect with the
                community. From technical workshops to networking events and
                mentorship opportunities, there's always something exciting
                happening. Click below to explore the full schedule and join us
                in learning, creating, and collaborating! You can also add these
                events to your google Calendar to expand all events and view
                them on your personal calendar.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-20">
          <ScheduleButton
            href="/events?tab=day1"
            className="bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Day 1
          </ScheduleButton>
          <ScheduleButton
            href="/events?tab=day2"
            className="bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          >
            Day 2
          </ScheduleButton>
          <ScheduleButton
            href="/events?tab=pre-hackathon"
            className="bg--700 hover:bg-pink-800 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            Pre-Hackathon Workshops
          </ScheduleButton>
          <ScheduleButton
            href="/events?tab=upcoming"
            className="bg-orange-700 hover:bg-orange-800 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            Upcoming Events
          </ScheduleButton>
          <ScheduleButton
            href="/events?tab=calendar"
            className="bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Add to Calendar
          </ScheduleButton>
        </div>
        <div className="flex flex-wrap items-center text-start space-x-4">
          <div className="flex flex-col md:flex-row items-top md:space-x-4 lg:items-center">
            <div className="space-y-4"></div>
          </div>
        </div>
        <div className="flex justify-center"></div>
        <div className="flex flex-wrap items-center"></div>
      </div>
    </GenericLayout>
  );
}
