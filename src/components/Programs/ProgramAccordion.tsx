"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProgramAccordionProps {
  children: React.ReactNode;
}

export function ProgramAccordion({ children }: ProgramAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mt-6">
      <button
        onClick={handleClick}
        className="cursor-pointer text-brown font-semibold hover:text-brown-light flex items-center transition-colors duration-200"
      >
        Rules & Eligibility
        <motion.svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="mt-4 text-brown space-y-2">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
