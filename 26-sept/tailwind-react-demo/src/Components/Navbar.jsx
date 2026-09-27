export function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-900 px-6 text-white py-4">
      <h1 className="text-xl font-bold">DevBoard</h1>
      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Profile</a>
      </div>
    </nav>
  );
}
