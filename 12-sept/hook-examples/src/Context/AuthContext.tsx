import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = () => {
    // login logic

    setUser({
      name: "abhishek",
      email: "abhishek@gmail.com",
      role: "user",
    });
  };

  const logout = () => {
    // logout

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
