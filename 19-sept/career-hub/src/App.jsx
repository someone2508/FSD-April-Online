import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Jobs } from "./components/Jobs";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { NotFound } from "./components/NotFound";
import { MainLayout } from "./components/MainLayout";
import { Navbar } from "./components/Navbar";
import { JobDetails } from "./components/JobDetails";
import { JobApplied } from "./components/JobApplied";

function App() {
  return (
    <MainLayout>
      <Navbar />
      <hr />
      {/* configuration - Mapping */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route path="/jobs/:id" element={<JobDetails />} />

        <Route path="/jobs/:id/applied" element={<JobApplied />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
