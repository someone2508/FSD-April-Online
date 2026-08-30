import { useState } from "react";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    addTodo(trimmedTitle);

    setTitle("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
