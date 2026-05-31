export default function Loading() {
  return (
    <div className="flex min-h-screen bg-[#0B0B0C] text-white">
      <aside className="hidden border-r border-zinc-800 bg-[#0B0B0C] p-4 md:flex md:w-20 lg:w-64">
        <div className="w-full">
          <div className="h-8 w-24 animate-pulse rounded-xl bg-zinc-800 lg:w-28" />
          <div className="mt-10 space-y-3">
            <div className="h-11 animate-pulse rounded-xl bg-zinc-900" />
            <div className="h-11 animate-pulse rounded-xl bg-zinc-900" />
            <div className="h-11 animate-pulse rounded-xl bg-zinc-900" />
          </div>
        </div>
      </aside>

      <main className="flex-1 px-4 pb-24 pt-4 md:p-6 md:pb-6">
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="h-72 animate-pulse rounded-3xl border border-zinc-800 bg-zinc-900/80" />
          </div>

          <div className="h-72 animate-pulse rounded-3xl border border-zinc-800 bg-zinc-900/80" />
          <div className="h-72 animate-pulse rounded-3xl border border-zinc-800 bg-zinc-900/80" />
          <div className="h-72 animate-pulse rounded-3xl border border-zinc-800 bg-zinc-900/80" />
          <div className="h-72 animate-pulse rounded-3xl border border-zinc-800 bg-zinc-900/80" />

          <div className="lg:col-span-2">
            <div className="h-72 animate-pulse rounded-3xl border border-zinc-800 bg-zinc-900/80" />
          </div>
        </section>
      </main>
    </div>
  );
}
