# StudySphere

A modern learning analytics dashboard built with **Next.js**, **Supabase**, **Tailwind CSS**, and **Framer Motion**.

StudySphere helps students monitor learning progress across multiple subjects through an intuitive dashboard featuring progress tracking, activity insights, and personalized learning metrics.

## Live Demo

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a25e8f19-67f7-4b38-815c-285353a89178" />


**Deployment:** [https://studysphere-dashboard-k1qp-7knsmwemk-arya-pawar-s-projects.vercel.app](https://studysphere-dashboard-k1qp.vercel.app)/

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

### Server and Client Component Split

The application follows the Next.js App Router architecture by separating data-fetching logic from interactive UI elements.

**Server Components**

* `src/app/page.tsx`
* Fetches course data directly from Supabase
* Reduces unnecessary client-side API requests
* Improves performance and initial page load

**Client Components**

* Dashboard cards
* Sidebar navigation
* Activity visualizations
* Framer Motion animations

Interactive elements are isolated within Client Components while data retrieval remains on the server.

### Why Supabase?

Supabase provides a lightweight PostgreSQL backend with a simple developer experience and seamless integration with Next.js applications. It allows rapid development without managing custom backend infrastructure.

### Why Framer Motion?

Framer Motion enables smooth entrance animations, hover interactions, and staggered transitions that improve user experience while maintaining performance.

### Why a Bento Layout?

The bento-style dashboard improves information hierarchy by emphasizing key learning metrics while maintaining a clean and visually organized interface.

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

### Example Course Data

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
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

A `.env.example` file is included in the repository for reference.

---

## Local Development

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build Production Version

```bash
npm run build
```

Open:

```text
http://localhost:3000
```

---

## Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── layout.tsx
├── components/
│   ├── HeroCard.tsx
│   ├── CourseCard.tsx
│   ├── ActivityCard.tsx
│   ├── Sidebar.tsx
│   └── AnimatedGrid.tsx
├── types/
└── lib/
```

---

## Performance Considerations

* Server-side data fetching using Next.js Server Components
* Reduced client-side network requests
* Optimized App Router architecture
* Loading skeletons for improved perceived performance
* Reusable component structure for maintainability
* Responsive layouts optimized for desktop and mobile devices

---

## Challenges Faced

One challenge was balancing the Server Component and Client Component boundaries in Next.js App Router. Course data fetching was handled on the server to improve efficiency, while interactive dashboard elements and animations were implemented as Client Components.

Managing loading, error, and empty states was also important to ensure a reliable user experience regardless of data availability or network conditions.

---

## Author

**Arya Pawar**

Frontend Intern Challenge Submission
