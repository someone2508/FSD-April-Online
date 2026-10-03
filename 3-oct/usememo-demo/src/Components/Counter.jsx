import { useState, useMemo } from "react";
// all the files and folders you import will also be refreshed.

export function Counter() {
  const [count, setCount] = useState(10);

  const expensiveCalculation = () => {
    console.log("Expensive calculation is running....");
    let result = 0;

    for (let i = 0; i < count; i++) {
      result += i;
    }

    return result;
  };

  const result = useMemo(() => {
    return expensiveCalculation();
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Inc</button>

      <h2>{result}</h2>
    </div>
  );
}
