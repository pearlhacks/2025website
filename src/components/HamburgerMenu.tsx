"use client";

import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import NavItem from "./NavItem";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HamburgerMenu({ mode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const color = mode == "landing" ? "brown" : "pink";
  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <div className={`flex flex-col space-y-2`}>
      <div className="block z-50 sm:hidden" onClick={toggleDrawer}>
        {!isDrawerOpen ? (
          <Bars3Icon
            className={`h-6 w-6 hover:pink text-${color} hover:text-pink transition ease-in-out`}
          />
        ) : (
          <XMarkIcon
            className={`h-6 w-6 hover:pink text-brown transition ease-in-out`}
          />
        )}
      </div>
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            className="navbar"
            initial="hidden"
            animate={isDrawerOpen ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <div className="block text-brown w-screen sm:hidden absolute flex flex-col items-end right-0 top-0 pt-28 z-38 bg-white p-8 space-y-4 transition ease-in-out delay-150">
              {["About", "FAQ", "Resources"].map((link) => {
                return (
                  <>
                    <NavItem>
                      <Link href={link.toLowerCase()}>{link}</Link>
                    </NavItem>
                  </>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
