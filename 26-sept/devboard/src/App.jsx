import "./App.css";
import { Navbar } from "./Components/Navbar";
import { ProjectCard } from "./Components/ProjectCard";
import { Sidebar } from "./Components/Sidebar";
import { StatCard } from "./Components/StatCard";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          {/* stats */}
          <div className="grid grid-col-1 sm:grid-col-2 lg:grid-cols-4 gap-6">
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
          </div>

          {/* projects */}
          <section className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
                <p className="text-sm text-gray-500">Your Recent Projects</p>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                + New Project
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ProjectCard
                title={"E-commerce API"}
                description="Backend API for online store"
                status="completed"
                technologoy={"node.js"}
              />
              <ProjectCard
                title={"React Dashboard"}
                description="Admin dashboard for analytics"
                status="pending"
                technologoy={"React"}
              />
              <ProjectCard
                title={"React Dashboard"}
                description="Admin dashboard for analytics"
                status="progress"
                technologoy={"React"}
              />
            </div>
          </section>
        </main>
      </div>

      {/* flex-1 -> projectCard */}
    </div>
  );
}

export default App;
