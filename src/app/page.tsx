import { supabase } from "../lib/supabase";
import type { Course } from "../types/course";

import Sidebar from "../components/Sidebar";
import HeroCard from "../components/HeroCard";
import CourseCard from "../components/CourseCard";
import ActivityCard from "../components/ActivityCard";

import AnimatedGrid, {
  AnimatedItem,
} from "../components/AnimatedGrid";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });
  const courses = (data ?? []) as Course[];
  const hasError = Boolean(error);

  return (
    <div className="flex min-h-screen bg-[#0B0B0C] text-white">
      <Sidebar />

      <main className="flex-1 px-4 pb-24 pt-4 md:p-6 md:pb-6">
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Student Dashboard
            </p>
            <h1 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold text-white md:text-3xl">
               StudySphere
            </h1>
          </div>
        </header>

        <AnimatedGrid>
          <AnimatedItem className="lg:col-span-2">
            <section id="dashboard" className="scroll-mt-6 md:scroll-mt-8">
              <HeroCard />
            </section>
          </AnimatedItem>

          {!hasError && courses.length > 0 ? (
            courses.map((course, index) => (
              <AnimatedItem key={course.id}>
                <section
                  id={index === 0 ? "courses" : undefined}
                  className="scroll-mt-6 md:scroll-mt-8"
                >
                  <CourseCard
                    title={course.title}
                    progress={course.progress}
                    icon_name={course.icon_name}
                  />
                </section>
              </AnimatedItem>
            ))
          ) : !hasError ? (
            <AnimatedItem className="lg:col-span-2">
              <section id="courses" className="scroll-mt-6 md:scroll-mt-8">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
                  <h2 className="text-xl font-semibold">
                    No Courses Found
                  </h2>

                  <p className="mt-2 text-zinc-400">
                    Add courses in Supabase to see them here.
                  </p>
                </div>
              </section>
            </AnimatedItem>
          ) : null}

          <AnimatedItem className="lg:col-span-2">
            <section id="progress" className="scroll-mt-6 md:scroll-mt-8">
              <ActivityCard />
            </section>
          </AnimatedItem>
        </AnimatedGrid>

        {error && (
          <div className="mt-6 rounded-2xl border border-red-900 bg-red-950/30 p-4 text-red-300">
            Failed to load courses from Supabase.
          </div>
        )}
      </main>
    </div>
  );
}
