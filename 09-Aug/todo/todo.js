const API_URL = "https://jsonplaceholder.typicode.com/todos";

// states
let todos = [];

// dom elements

const todoInput = document.getElementById("todoInput");

const addBtn = document.getElementById("addBtn");

const todoList = document.getElementById("todoList");

async function getTodo() {
  try {
    const response = await fetch(`${API_URL}?_limit=5`);

    if (!response.ok) {
      throw new Error(`Failed to fetch the todo : ${response.status}`);
    }

    todos = await response.json();

    displayTodos();
  } catch (error) {
    console.log(error);
  }
}

function displayTodos() {
  todoList.innerHTML = "";

  if (todos.length === 0) {
    todoList.innerHTML = `
            <p>No todos available!</p>
        `;

    return;
  }

  todos.forEach((todo) => {
    const todoElement = document.createElement("div");

    todoElement.classList.add("todo");

    todoElement.innerHTML = `
        <div class="todo-title">
            ${todo.title}
        </div>

        <div class="todo-actions">
            <button class="edit-btn" onClick="editTodo(${todo.id})">Edit</button>

            <button class="delete-btn" onClick="deleteTodo(${todo.id})">Delete</button>
        </div>
    `;

    todoList.append(todoElement);
  });
}

getTodo();
