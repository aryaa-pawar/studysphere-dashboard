import { supabase } from "../lib/supabase";

import Sidebar from "../components/Sidebar";
import HeroCard from "../components/HeroCard";
import CourseCard from "../components/CourseCard";
import ActivityCard from "../components/ActivityCard";

export default async function Home() {
  const { data: courses } = await supabase
    .from("courses")
    .select("*");

  return (
    <div className="flex min-h-screen bg-[#0B0B0C] text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <HeroCard />
          </div>

          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
            />
          ))}

          <div className="lg:col-span-2">
            <ActivityCard />
          </div>
        </section>
      </main>
    </div>
  );
}