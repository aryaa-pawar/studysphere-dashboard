export default function Sidebar() {
  return (
    <nav className="w-64 border-r border-zinc-800 p-6">
      <h2 className="text-lg font-semibold">
        LearnOS
      </h2>

      <ul className="mt-8 space-y-4">
        <li>Dashboard</li>
        <li>Courses</li>
        <li>Progress</li>
      </ul>
    </nav>
  );
}