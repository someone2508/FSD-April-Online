import { Link } from "react-router-dom";

export function Navbar() {
  return (
    // Plain UI
    <nav>
      <Link to="/">Home</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
