import { useState, useMemo } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import type { FilterType } from "./components/TodoFilter";
import { TodoFilter } from "./components/TodoFilter";

import type { Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
  ]);

  const [filter, setFilter] = useState<FilterType>("all");

  console.log("Filter : ", filter);

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
  };

  const deleteTodos = (id: number) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((eTodo) => eTodo.id !== id);
    });
  };

  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  const clearComplted = () => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => !todo.completed);
    });
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <div className="app">
      <div className="todo-container">
        <h1>Todo App</h1>

        <p className="subtitle">Manage your daily tasks</p>

        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodos={deleteTodos}
        />

        <div className="todo-footer">
          <span>
            {remainingTodos} {remainingTodos === 1 ? "item" : "items"} left
          </span>

          {/* todoFilter */}
          <TodoFilter
            currentFilter={filter}
            onClearCompleted={clearComplted}
            onFilterChange={setFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
