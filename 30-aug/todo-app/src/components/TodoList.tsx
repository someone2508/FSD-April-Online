import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

function TodoList({ todos, toggleTodo }: TodoListProps) {
  console.log(todos);
  if (todos.length === 0) {
    return <div>No todos found.</div>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
      })}
    </ul>
  );
}

export default TodoList;
