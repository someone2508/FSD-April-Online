import { useState } from "react";

export function MultipleState() {
  const [name, setName] = useState("Nitesh");
  const [age, setAge] = useState(20);
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>Status : {isOnline ? "Online" : "Offline"}</p>

      <button onClick={() => setAge((currentAge) => currentAge + 1)}>
        Increase Age
      </button>

      <button onClick={() => setIsOnline((currentStatus) => !currentStatus)}>
        Toggle Status
      </button>
    </div>
  );
}
