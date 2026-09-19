import { useEffect, useState } from "react";

export function Timer() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    // this code will only be executed once in the entire lifecycle of this component?

    const timerId = setInterval(() => {
      setSeconds((current) => {
        if (current <= 0) return 0;

        return current - 1;
      });
    }, 1000);

    return () => {
      // this callback code will be executed, just before the component is removed.
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    console.log("Component reloaded!");
  });

  return (
    <div>
      <h1>Online Exam</h1>

      <h2>Time Remaining: {seconds} seconds</h2>

      {seconds === 0 && <h3>Exam Completed</h3>}
    </div>
  );
}
