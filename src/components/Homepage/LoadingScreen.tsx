"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PlantLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }} // Roll-up exit animation for entire loader
      transition={{ duration: 0.8 }}
      className="h-screen w-full flex items-center justify-center bg-yellow"
    >
      <div className="flex space-x-8 items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
          exit={{ opacity: 0, y: -50, rotate: -45 }} // Roll-up effect for exit
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0,
            times: [0, 0.2, 0.8, 1],
          }}
          className="w-12 h-12 flex items-center justify-center"
        >
          <Image
            src={"/images/loading/small.svg"}
            alt="Small Plant"
            width={32}
            height={32}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
          exit={{ opacity: 0, y: -50, rotate: -45 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
            times: [0, 0.2, 0.8, 1],
          }}
          className="w-16 h-16 flex items-center justify-center"
        >
          <Image
            src={"/images/loading/medium.svg"}
            alt="Medium Plant"
            width={48}
            height={48}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
          exit={{ opacity: 0, y: -50, rotate: -45 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
            times: [0, 0.2, 0.8, 1],
          }}
          className="w-20 h-20 flex items-center justify-center"
        >
          <Image
            src={"/images/loading/big.svg"}
            alt="Large Plant"
            width={64}
            height={64}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlantLoader;
