type CourseCardProps = {
  title: string;
  progress: number;
};

export default function CourseCard({
  title,
  progress,
}: CourseCardProps) {
  return (
    <article className="rounded-3xl bg-zinc-900 p-6">
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {progress}% complete
      </p>
    </article>
  );
}