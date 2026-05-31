"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0C] p-6 text-white">
      <div className="max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center">
        <h1 className="text-2xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-3 text-zinc-400">
          We could not load your learning dashboard.
        </p>

        <button
          onClick={() => reset()}
          className="
            mt-6
            rounded-xl
            bg-emerald-500
            px-5
            py-3
            font-medium
            text-black
          "
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
