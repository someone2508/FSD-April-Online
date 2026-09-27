export function StatCard({
  title = "Title",
  value = "Value",
  description = "Some Description",
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold text-gray-900 mt-2">{value}</h2>
      <p className="text-sm text-green-600 mt-2">{description}</p>
    </div>
  );
}
