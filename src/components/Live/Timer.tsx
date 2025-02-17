import React, { useEffect, useState } from "react";
import { Link } from "../Link";

const Timer: React.FC = () => {

  useEffect(() => {});

  return (
    <div className="w-full bg-white flex text-brown space-y-4 flex-col items-center rounded-md p-10 shadow-sm">
      <div className="flex flex-col items-center">
        <div className="font-bold font-sans text-pink-accent text-3xl">
          0h 0m 0s
        </div>
        <div>Coding ended</div>
      </div>
      <div className="text-sm text-center italic">
        Check <Link href="/schedule">the schedule page</Link> for the entire
        schedule!
      </div>
    </div>
  );
};

export default Timer;
