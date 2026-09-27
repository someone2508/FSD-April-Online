export function Sidebar() {
  return (
    <aside className="hidden md:block w-64 min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">Devboard</h1>

      <nav className="space-y-2">
        <a href="#" className="block bg-blue-600 px-4 py-3 rounded-lg">
          Dashboard
        </a>
        <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-800">
          Projects
        </a>
        <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-800">
          Tasks
        </a>
        <a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-800">
          Settings
        </a>
      </nav>
    </aside>
  );
}
