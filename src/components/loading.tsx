export default function Loading() {
  return (
    <div className="flex min-h-screen bg-[#0B0B0C] text-white">
      <aside className="w-64 border-r border-zinc-800 p-6">
        <div className="h-8 w-28 animate-pulse rounded bg-zinc-800" />

        <div className="mt-10 space-y-4">
          <div className="h-6 w-24 animate-pulse rounded bg-zinc-800" />
          <div className="h-6 w-20 animate-pulse rounded bg-zinc-800" />
          <div className="h-6 w-24 animate-pulse rounded bg-zinc-800" />
        </div>
      </aside>

      <main className="flex-1 p-6">
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-2">
            <div className="h-72 animate-pulse rounded-3xl bg-zinc-900" />
          </div>

          <div className="h-72 animate-pulse rounded-3xl bg-zinc-900" />
          <div className="h-72 animate-pulse rounded-3xl bg-zinc-900" />

          <div className="h-72 animate-pulse rounded-3xl bg-zinc-900" />
          <div className="h-72 animate-pulse rounded-3xl bg-zinc-900" />

          <div className="lg:col-span-2">
            <div className="h-72 animate-pulse rounded-3xl bg-zinc-900" />
          </div>

        </section>
      </main>
    </div>
  );
}