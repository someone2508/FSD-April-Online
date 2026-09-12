import { useState } from "react";

export function MouseEvent() {
  const [isMouseOnDiv, setIsMouseOnDiv] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setIsMouseOnDiv(true)}
        onMouseLeave={() => setIsMouseOnDiv(false)}
        style={{
          width: "300px",
          height: "150px",
          border: "2px solid black",
        }}
      >
        Hover over me
      </div>

      <p>{isMouseOnDiv ? "Mouse is inside" : "Mouse is outside"}</p>
    </div>
  );
}
