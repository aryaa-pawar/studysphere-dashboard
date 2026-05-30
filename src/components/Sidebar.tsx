"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Courses",
    icon: BookOpen,
  },
  {
    name: "Progress",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      {/* Desktop + Tablet */}

      <nav
        className="
          hidden
          md:flex
          flex-col
          border-r
          border-zinc-800
          bg-[#0B0B0C]
          p-4
          lg:w-64
          md:w-20
        "
      >
        <h2
          className="
            mb-10
            text-lg
            font-semibold
            text-white
            lg:block
            hidden
          "
        >
          LearnOS
        </h2>

        <ul className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <button
                  onClick={() => setActive(item.name)}
                  className="
                    relative
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-3
                    text-zinc-300
                    transition-colors
                  "
                >
                  {active === item.name && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="
                        absolute
                        inset-0
                        rounded-xl
                        bg-zinc-800
                      "
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}

                  <Icon
                    size={20}
                    className="relative z-10"
                  />

                  <span
                    className="
                      relative
                      z-10
                      hidden
                      lg:block
                    "
                  >
                    {item.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Bottom Nav */}

      <nav
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-50
          flex
          justify-around
          border-t
          border-zinc-800
          bg-[#0B0B0C]/95
          p-3
          backdrop-blur
          md:hidden
        "
      >
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className="
                relative
                flex
                flex-col
                items-center
                gap-1
                text-zinc-400
              "
            >
              {active === item.name && (
                <motion.div
                  layoutId="mobile-active"
                  className="
                    absolute
                    -inset-2
                    rounded-xl
                    bg-zinc-800
                  "
                />
              )}

              <Icon
                size={20}
                className="relative z-10"
              />

              <span
                className="
                  relative
                  z-10
                  text-xs
                "
              >
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}