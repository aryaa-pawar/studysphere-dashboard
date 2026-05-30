export default function ActivityCard() {
  const activity = [
    1, 3, 2, 0, 4, 2, 1,
    2, 4, 1, 3, 0, 2, 4,
    1, 2, 4, 3, 1, 2, 0,
    4, 3, 2, 1, 4, 2, 3,
  ];

  const getIntensity = (value: number) => {
    if (value === 0) return "bg-zinc-800";
    if (value === 1) return "bg-emerald-900";
    if (value === 2) return "bg-emerald-700";
    if (value === 3) return "bg-emerald-500";
    return "bg-emerald-400";
  };

  return (
    <article className="rounded-3xl bg-zinc-900 p-6">
      <h2 className="font-semibold text-lg">
        Weekly Activity
      </h2>

      <p className="mt-1 text-sm text-zinc-400">
        18 learning sessions this month
      </p>

      <div className="mt-6 grid grid-cols-7 gap-2">
        {activity.map((value, index) => (
          <div
            key={index}
            className={`
              h-6
              w-6
              rounded-md
              ${getIntensity(value)}
            `}
          />
        ))}
      </div>
    </article>
  );
}