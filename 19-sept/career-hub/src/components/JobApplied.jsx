import { useParams, Link } from "react-router-dom";

export function JobApplied() {
  const { id } = useParams();

  return (
    <div>
      <h1>Application Submited</h1>

      <p>Your application for jobId {id} has been submitted.</p>

      <Link to="/jobs">Back to Jobs</Link>
    </div>
  );
}
