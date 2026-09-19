import { useEffect, useState } from "react";

export function SingleFill() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // this logic will only be executed once in the entire lifecycle of this compontent
    console.log("User Data loaded!");

    setUser({
      name: "riyaz",
      role: "software engineer",
    });
  }, []);

  useEffect(() => {
    // this logic will be ececuted everytime when the component is reloaded
    console.log("This will run every multiple time!");
  });

  return (
    <div>
      {user && (
        <p>
          Welcome {user.name}, {user.role}
        </p>
      )}
    </div>
  );
}
