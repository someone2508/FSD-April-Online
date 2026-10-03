import { createStore } from "redux";

// const initialState = {
//   count: 0,
// };

// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         count: state.count - action.payload,
//       };
//     default:
//       return state;
//   }
// }

// const store = createStore(counterReducer);

const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.payload,
            completed: false,
          },
        ],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}

const store = createStore(todoReducer);

export default store;
