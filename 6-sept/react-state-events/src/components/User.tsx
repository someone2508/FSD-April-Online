import { useState } from "react";

export function User() {
  const [user, setUser] = useState({
    name: "altaf",
    age: 25,
    city: "Ahmedabad",
  });

  return (
    <div>
      <h1>Name : {user.name}</h1>

      <p>Age : {user.age}</p>
      <p>City : {user.city}</p>

      <button
        onClick={() =>
          setUser((user) => {
            return {
              ...user,
              age: user.age + 1,
            };
          })
        }
      >
        Increment Age
      </button>
    </div>
  );
}
