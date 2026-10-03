import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function App() {
  // // allow me to access the current state
  // const count = useSelector((state) => state.count);

  // // function, which can call/fire the event
  // const dispatch = useDispatch();

  // return (
  //   <div style={{ padding: "40px" }}>
  //     <h1>Redux Couter</h1>

  //     <h2>{count}</h2>

  //     <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
  //       +5
  //     </button>
  //     <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
  //       +10
  //     </button>

  //     <button
  //       onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}
  //       style={{ marginLeft: "10px" }}
  //     >
  //       -5
  //     </button>
  //     <button
  //       onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}
  //       style={{ marginLeft: "10px" }}
  //     >
  //       -10
  //     </button>
  //   </div>
  // );

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  function addTodo() {
    if (!title.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: title,
    });

    setTitle("");
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Todo App</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li>
            <span
              onClick={() =>
                dispatch({
                  type: "TOGGLE_TODO",
                  payload: todo.id,
                })
              }
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {todo.title}
            </span>
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_TODO",
                  payload: todo.id,
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
