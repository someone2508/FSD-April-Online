import { useEffect, useState } from "react";

export function ModeHandler() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // task?: store the theme in the local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: theme === "dark" ? "#111" : "#fff",
        color: theme === "dark" ? "#fff" : "#111",
      }}
    >
      <h1>Employee Dashboard</h1>

      <p>Theme : {theme}</p>

      <button
        onClick={() =>
          setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"))
        }
      >
        Toogle Theme
      </button>
    </div>
  );
}
