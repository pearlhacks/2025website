"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.div
      className={`w-full h-48 md:w-1/2 rounded-md flex items-center justify-center p-5 ${
        hidden ? "bg-cream" : "bg-cream border-double border-8 border-brown"
      } cursor-pointer`}
      onClick={() => setHidden(!hidden)}
      animate={{ rotateY: hidden ? 0 : 180 }}
      whileHover={{
        scale: 1.02,
        y: -2,
        transition: { duration: 0.2 },
      }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div style={{ transform: hidden ? "rotateY(0deg)" : "rotateY(180deg)" }}>
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
    </motion.div>
  );
};
