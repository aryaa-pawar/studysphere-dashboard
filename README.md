# StudySphere

A modern learning analytics dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

StudySphere helps students track learning progress across multiple subjects through a responsive dashboard featuring progress indicators, activity insights, and personalized learning metrics.

---

## Features

* Server-side course data fetching using Supabase
* Responsive bento-style dashboard layout
* Personalized hero section with learning statistics
* Course progress tracking with animated progress bars
* Dynamic Lucide icons based on course categories
* Learning activity heatmap visualization
* Responsive navigation for desktop, tablet, and mobile devices
* Framer Motion powered micro-interactions and staggered animations
* Loading skeletons for improved perceived performance
* Error boundary handling and empty states

---

## Tech Stack

### Frontend

* Next.js 16 (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React

### Backend

* Supabase
* PostgreSQL

---

## Architecture Decisions

### Why Server Components?

Course data is fetched in a Server Component (`src/app/page.tsx`) to reduce unnecessary client-side requests and keep data loading efficient.

### Why Supabase?

Supabase provides a lightweight PostgreSQL backend with minimal setup, making it ideal for rapidly building data-driven applications.

### Why Framer Motion?

Framer Motion is used for subtle entrance animations, hover interactions, and navigation transitions that enhance the user experience without overwhelming the interface.

### Why a Bento Layout?

The bento-style layout improves information hierarchy by allowing important content such as learning metrics and progress tracking to stand out while keeping the interface visually organized.

---

## Database Schema

The dashboard expects a `courses` table with the following structure:

| Column     | Type      |
| ---------- | --------- |
| id         | uuid      |
| title      | text      |
| progress   | integer   |
| icon_name  | text      |
| created_at | timestamp |

Example course data:

* Web Development Fundamentals
* Object Oriented Programming
* Database Management Systems
* Computer Networks
* Operating Systems
* Machine Learning Basics

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

An `.env.example` file is included in the repository.

---

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Project Highlights

* Server-rendered data fetching
* Responsive design across desktop, tablet, and mobile
* Animated learning progress visualization
* Reusable component architecture
* Loading and error state handling
* Clean and maintainable code structure

---

## Future Improvements

* Learning goals and milestones
* Subject-wise analytics
* Progress history tracking
* Achievement badges and streak rewards
* User authentication and personalized dashboards

---

## Author

Arya Pawar

Frontend Intern Challenge Submission
