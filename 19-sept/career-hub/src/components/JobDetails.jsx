import { useParams, useNavigate } from "react-router-dom";
import { jobs } from "../data/jobs";

export function JobDetails() {
  // everything extracted from the url, is in string always
  let { id } = useParams();

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return <h1>Job not found!</h1>;
  }

  const navigate = useNavigate();

  const handleApply = () => {
    navigate(`/jobs/${job.id}/application`);
  };

  return (
    <div>
      <h1>title - {job.title}</h1>
      <h2>Company - {job.company}</h2>
      <p>Location - {job.location}</p>
      <p>Salary - {job.salary}</p>
      <p>Experience - {job.experience}</p>

      <button onClick={handleApply}>Apply Now</button>
    </div>
  );
}
