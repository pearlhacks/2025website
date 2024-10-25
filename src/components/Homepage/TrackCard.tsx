"use client";
import { useState } from "react";
import Image from "next/image";

interface TrackCardProps {
  title: string;
  description: string;
  icon: string;
}

export const TrackCard: React.FC<TrackCardProps> = ({
  title,
  description,
  icon,
}) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div
      className={`w-full h-48 md:w-1/2 rounded-md flex items-center justify-center p-5 ${
        hidden ? "bg-pink" : "bg-white border-double border-8 border-pink"
      } cursor-pointer`}
      onClick={() => setHidden(!hidden)}
    >
      {hidden ? (
        <div className="flex flex-col items-center justify-center">
          <Image src={icon} alt="Track Icon" height={60} />
          <h2 className="text-lg font-sans font-bold text-brown text-center mt-3">
            {title}
          </h2>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-body text-brown text-center p-5">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};
