"use client";

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavItem from "./NavItem";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface HamburgerMenuProps {
  mode: "landing" | "generic"; // Assuming only two modes for the example
}

export default function HamburgerMenu({ mode }: HamburgerMenuProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const color = mode === "landing" ? "brown" : "pink";
    const codingStart = new Date("2025-02-15T00:00:00-05:00");
    const codingEnd = new Date("2025-02-16T23:00:00-05:00");
    const now = new Date();

  const navContainer = {
    visible: {
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="block z-30 sm:hidden" onClick={toggleDrawer}>
        {!isDrawerOpen ? (
          <Bars3Icon
            className={`h-6 w-6 hover:pink text-${color} hover:text-pink transition ease-in-out`}
          />
        ) : (
          <XMarkIcon className="h-6 w-6 hover:pink text-brown transition ease-in-out" />
        )}
      </div>
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            className="navbar"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navContainer}
          >
            <div className="block text-brown w-screen sm:hidden absolute flex flex-col items-end right-0 top-0 pt-28 z-38 bg-white p-8 space-y-4 transition ease-in-out delay-150">
              {["About", "FAQ", "Resources", "Schedule", "Programs"]
                .map((link) => (
                  <NavItem key={link}>
                    <Link href={link.toLowerCase()}>{link}</Link>
                  </NavItem>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
