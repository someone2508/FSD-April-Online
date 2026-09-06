import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodos: (id: number) => void;
}

function TodoList({ todos, toggleTodo, deleteTodos }: TodoListProps) {
  console.log(todos);
  if (todos.length === 0) {
    return <div>No todos found.</div>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodos={deleteTodos}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
