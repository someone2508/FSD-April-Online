import { useEffect, useState } from "react";

export function TextEditor() {
  const [content, setContent] = useState(() => {
    return localStorage.getItem("content") || "";
  });

  useEffect(() => {
    // what task do we have to perform? to update the content in the localstorage.
    localStorage.setItem("content", content);
  }, [content]);

  return (
    <div>
      <h1>Text Editor</h1>
      <textarea
        cols="60"
        rows="10"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="Write your content here..."
      />
    </div>
  );
}
