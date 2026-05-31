# Learning Dashboard

A dark-mode learning dashboard built for the Frontend Intern Challenge. The app uses Next.js App Router, Supabase, Tailwind CSS, Framer Motion, and Lucide React.

## What It Does

- Fetches course data from a Supabase `courses` table on the server
- Renders a bento-style dashboard with a sidebar, hero tile, course tiles, and activity tile
- Uses Framer Motion for staggered entrance, hover elevation, and smooth sidebar selection states
- Shows a route-level loading skeleton and a custom error state

## Architecture

### Server and client split

- `src/app/page.tsx` is a server component that queries Supabase.
- Interactive visual pieces live in client components such as the sidebar, course card, activity card, and animated grid.
- This keeps the data fetch on the server while leaving motion and selection state on the client.

### Data model

The dashboard expects a `courses` table with:

- `id` uuid primary key
- `title` text
- `progress` integer
- `icon_name` text
- `created_at` timestamp

### Environment variables

Create a `.env.local` file with:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

The repo includes `.env.example` with the same keys.

## Setup

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Notes

- Route loading lives in `src/app/loading.tsx`.
- The page is forced to render dynamically so Supabase data stays live.
- Progress bars animate with transform-based motion to keep the interaction lightweight.
