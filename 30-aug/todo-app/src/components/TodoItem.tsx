function TodoItem({ todo, toggleTodo }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <p className="todo-title">{todo.title}</p>

      <button className="delete-button">Delete</button>
    </li>
  );
}

export default TodoItem;
