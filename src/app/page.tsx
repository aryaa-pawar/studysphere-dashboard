import { supabase } from "../lib/supabase";

import Sidebar from "../components/Sidebar";
import HeroCard from "../components/HeroCard";
import CourseCard from "../components/CourseCard";
import ActivityCard from "../components/ActivityCard";

import AnimatedGrid, {
  AnimatedItem,
} from "../components/AnimatedGrid";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  return (
    <div className="flex min-h-screen bg-[#0B0B0C] text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <AnimatedGrid>

          <AnimatedItem className="lg:col-span-2">
            <HeroCard />
          </AnimatedItem>

          {courses?.map((course) => (
            <AnimatedItem key={course.id}>
              <CourseCard
                title={course.title}
                progress={course.progress}
                icon_name={course.icon_name}
              />
            </AnimatedItem>
          ))}

          <AnimatedItem className="lg:col-span-2">
            <ActivityCard />
          </AnimatedItem>

        </AnimatedGrid>

        {error && (
          <p className="mt-6 text-red-500">
            Failed to load courses.
          </p>
        )}
      </main>
    </div>
  );
}