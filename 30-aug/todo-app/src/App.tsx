import "./App.css";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import type { Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
  ]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
