import React, { useState } from "react";
import { SecondaryButton } from "../Buttons/SecondaryButton";
import { motion, AnimatePresence } from "framer-motion";
import {
  register_mentor,
  register_participant,
  register_volunteer,
} from "@/utils/Urls";

export const RegisterButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const roles = [
    {
      title: "Participant",
      description:
        "Learn, network with sponsors and other students in tech, and expand your portfolio",
      link: register_participant,
    },
    {
      title: "Mentor",
      description:
        "Support hackers throughout the hackathon, offering guidance, assisting with debugging, and providing valuable advice.",
      link: register_mentor,
    },
    {
      title: "Volunteer",
      description: "Help the Pearl Hacks team run the hackathon smoothly",
      link: register_volunteer,
    },
  ];

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };


  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="font-sans font-bold text-white border-2 border-pink transition ease-in-out p-2 px-4 justify-center hover:border-green hover:text-green uppercase items-center hover:bg-pink bg-pink-accent rounded-full"
      >
        REGISTER NOW
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="z-50 fixed inset-0 bg-black bg-opacity-50 p-10 flex items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
          >
            <motion.div
              className="z-50 bg-white p-5 border-double border-8 border-pink  text-brown items-center text-center justify-center rounded-lg w-full"
              variants={modalVariants}
            >
              <h2 className="font-sans text-xl mb-4 font-bold">
                Choose Your Character
              </h2>

              <div className="flex h-full md:h-48 lg:h-40 items-center justify-center flex-col md:flex-row">
                {roles.map((role, index) => (
                  <React.Fragment key={role.title}>
                    <div className="w-full md:w-1/3 px-4 py-2">
                      <div className="h-full flex flex-col justify-between">
                        <div className="space-y-4 text-center mb-4">
                          <h3 className="font-semibold">{role.title}</h3>
                          <p className="text-sm text-gray-600">
                            {role.description}
                          </p>
                        </div>
                        <SecondaryButton href={role.link}>
                          REGISTER
                        </SecondaryButton>
                      </div>
                    </div>
                    {index < roles.length - 1 && (
                      <>
                        {/* Vertical divider for md and larger screens */}
                        <div className="hidden md:block h-32 w-px bg-pink/30 mx-4" />
                        {/* Horizontal divider for mobile */}
                        <div className="md:hidden w-1/2 h-px bg-pink/30 my-4" />
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
