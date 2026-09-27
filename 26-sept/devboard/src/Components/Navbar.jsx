export function Navbar() {
  return (
    <header className="flex items-center justify-between bg-white border-b px-6 py-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>

        <p className="text-sm text-gray-500">Welcome back!</p>
      </div>

      <div className="size-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
        MZ
      </div>
    </header>
  );
}
