import React, { useEffect, useState } from "react";
import { Link } from "../Link";

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [label, setLabel] = useState<string>("");

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

  useEffect(() => {});

  return (
    <div className="w-full bg-white flex text-brown space-y-4 flex-col items-center rounded-md p-10 shadow-sm">
      <div className="flex flex-col items-center">
        <div className="font-bold font-sans text-pink-accent text-3xl">
          {timeLeft}
        </div>
        {label && <div>{label}</div>}
      </div>
      <div className="text-sm text-center italic">
        Check <Link href="/schedule">the schedule page</Link> for the entire
        schedule!
      </div>
    </div>
  );
};

export default Timer;
