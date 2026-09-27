export function ProjectCard({ title, description, status, technologoy }) {
  const statusText = {
    completed: "Completed",
    progress: "In Progress",
    pending: "Pending",
  };

  const statusClasses = {
    completed: "bg-green-100 text-green-700",
    progress: "bg-blue-100 text-blue-700",
    pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}
        >
          {statusText[status]}
        </span>
      </div>

      <div className="flex items-center justify-between mt-6">
        <span className="text-sm text-gray-600">{technologoy}</span>

        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View Project
        </button>
      </div>
    </div>
  );
}
