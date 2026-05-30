export default function HeroCard() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <article
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

      <p className="text-zinc-400">
        {greeting}
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Arya
      </h1>

      <div className="mt-8 flex gap-8">
        <div>
          <p className="text-zinc-500 text-sm">
            Learning Streak
          </p>

          <p className="text-2xl font-bold">
             12 Days
          </p>
        </div>

        <div>
          <p className="text-zinc-500 text-sm">
            Completed Today
          </p>

          <p className="text-2xl font-bold">
            3 Lessons
          </p>
        </div>
      </div>
    </article>
  );
}