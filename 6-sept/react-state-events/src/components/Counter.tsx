import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount((currentCnt) => currentCnt + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((currentCnt) => currentCnt - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
