"use client";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { motion } from "framer-motion";
import { formatContent } from "@/utils/helpers";

interface AccordionProps {
  question: string;
  answer: string;
}

export function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(!isOpen);
  }

  return (
    <div>
      <div
        className={`flex flex-row items-center p-2 transition-all ease-in-out rounded-md ${
          isOpen ? "rounded-b-none" : ""
        } justify-between bg-white`}
      >
        <h3 className="text-brown font-medium text-md">{question}</h3>

        <button
          className="text-brown w-4 h-4 rounded-full"
          onClick={handleClick}
        >
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </button>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="text-brown p-2 bg-white rounded-md rounded-t-none">
          {formatContent(answer)}
        </div>
      </motion.div>
    </div>
  );
}
