import { useAuth } from "../../Context/AuthContext";

export function UserProfile() {
  const { user, login, logout } = useAuth();

  if (!user) {
    return (
      <div>
        <p>Your are logged out!</p>

        <button onClick={login}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.role}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
