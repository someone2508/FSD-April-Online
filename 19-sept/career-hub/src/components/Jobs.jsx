import { jobs } from "../data/jobs";
import { Link } from "react-router-dom";

export function Jobs() {
  return (
    <div>
      <h1>Available Jobs</h1>

      {jobs.map((job) => {
        return (
          <div>
            <h2>{job.title}</h2>

            <p>Company: {job.company}</p>

            <p>Location: {job.location}</p>

            <p>Salary: {job.salary}</p>

            <Link to={`/jobs/${job.id}`}>View Details</Link>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
