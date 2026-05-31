"use client";

import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Database,
  BookOpen,
} from "lucide-react";

type CourseCardProps = {
  title: string;
  progress: number;
  icon_name: string;
};

const iconMap = {
  Code,
  Layers,
  Database,
  BookOpen,
};

export default function CourseCard({
  title,
  progress,
  icon_name,
}: CourseCardProps) {
  const Icon =
    iconMap[icon_name as keyof typeof iconMap] || BookOpen;

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        relative
        overflow-hidden
        border
        border-zinc-800
        rounded-3xl
        bg-zinc-900
        p-6
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-emerald-500/5
          via-transparent
          to-transparent
          pointer-events-none
        "
      />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/[0.03]" />

      <div className="flex items-center justify-between">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-zinc-800
          "
        >
          <Icon
            size={22}
            className="text-emerald-400"
          />
        </div>

        <span className="text-sm text-zinc-500">
          {progress}%
        </span>
      </div>

      <h3 className="font-[family-name:var(--font-display)] mt-5 min-h-14 text-lg font-semibold tracking-tight">
        {title}
      </h3>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: progress / 100,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="
            h-full
            origin-left
            rounded-full
            bg-emerald-500
          "
        />
      </div>
    </motion.article>
  );
}
