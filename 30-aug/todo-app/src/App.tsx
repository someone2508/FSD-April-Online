import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
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

  const toggleTodo = (id: number) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    });

    console.log("After toggle");
    console.log(todos);
  };

  console.log("Todos");
  console.log(todos);

  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app">
      <div className="todo-container">
        <h1>Todo App</h1>

        <p className="subtitle">Manage your daily tasks</p>

        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} />

        <div className="todo-footer">
          <span>
            {remainingTodos} {remainingTodos === 1 ? "item" : "items"} left
          </span>

          {/* todoFilter */}
        </div>
      </div>
    </div>
  );
}

export default App;
