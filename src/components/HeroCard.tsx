"use client";

import { motion } from "framer-motion";

export default function HeroCard() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <motion.article
      whileHover={{
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 24,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-zinc-900
        p-8
      "
    >
      <div
        className="
          absolute
          right-0
          top-0
          h-40
          w-40
          rounded-full
          bg-emerald-500/10
          blur-3xl
        "
      />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/[0.03]" />

      <p className="text-zinc-400">
        {greeting}
      </p>

      <h1 className="font-[family-name:var(--font-display)] mt-2 text-4xl font-semibold tracking-tight">
        Arya
      </h1>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-zinc-500 text-sm">
            Learning Streak
          </p>

          <p className="mt-1 text-2xl font-bold">
            12 Days
          </p>
        </div>

        <div>
          <p className="text-zinc-500 text-sm">
            Completed Today
          </p>

          <p className="mt-1 text-2xl font-bold">
            3 Lessons
          </p>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <span
            key={index}
            className={`h-2.5 w-2.5 rounded-full ${
              index < 5 ? "bg-emerald-400" : "bg-zinc-800"
            }`}
          />
        ))}
      </div>
    </motion.article>
  );
}
