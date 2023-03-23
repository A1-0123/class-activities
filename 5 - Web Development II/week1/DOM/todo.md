```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Todo App</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="todo-app">
      <h1>Todo List</h1>
      <form id="add-todo-form">
        <input type="text" id="todo-input" placeholder="Enter a new todo..." />
        <button type="submit">Add</button>
      </form>
      <ul id="todo-list"></ul>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

```css
body {
  font-family: Arial, sans-serif;
}

.todo-app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

h1 {
  text-align: center;
  margin-top: 0;
}

form {
  display: flex;
  margin-bottom: 20px;
}

input[type="text"] {
  flex-grow: 1;
  margin-right: 10px;
  padding: 5px;
  border: none;
  border-radius: 3px;
}

button[type="submit"] {
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
}

li .todo-text {
  flex-grow: 1;
}

li button {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 10px;
}
```

```js
const form = document.getElementById("add-todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let todos = [];

let currentTodo = null;
let currentTodoIndex = null;

function renderTodoList() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
              <span class="todo-text ${
                index === currentTodoIndex ? "editing" : ""
              }">${todo}</span>
              ${
                index === currentTodoIndex
                  ? `
                <form class="edit-todo-form">
                  <input type="text" class="edit-todo-input" value="${currentTodo}">
                  <button type="submit">Save</button>
                  <button type="button" class="cancel-edit-button">Cancel</button>
                </form>
              `
                  : `
                <button class="edit-todo-button" data-index="${index}">Edit</button>
                <button class="delete-todo-button" data-index="${index}">Delete</button>
              `
              }
            `;
    list.appendChild(li);
  });
}

function addTodoToList(todo) {
  todos.push(todo);
  renderTodoList();
}

function removeTodoFromList(index) {
  todos.splice(index, 1);
  renderTodoList();
}

function startEdit(index) {
  currentTodo = todos[index];
  currentTodoIndex = index;
  renderTodoList();
}

function saveEdit(newTodo) {
  todos[currentTodoIndex] = newTodo;
  currentTodo = null;
  currentTodoIndex = null;
  renderTodoList();
}

function cancelEdit() {
  currentTodo = null;
  currentTodoIndex = null;
  renderTodoList();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = input.value.trim();
  if (todo) {
    addTodoToList(todo);
    input.value = "";
  }
});

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-todo-button")) {
    const index = parseInt(event.target.getAttribute("data-index"));
    removeTodoFromList(index);
  } else if (event.target.classList.contains("edit-todo-button")) {
    const index = parseInt(event.target.getAttribute("data-index"));
    startEdit(index);
  } else if (event.target.classList.contains("cancel-edit-button")) {
    cancelEdit();
  }
});

list.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTodo = event.target.querySelector(".edit-todo-input").value.trim();
  if (newTodo) {
    saveEdit(newTodo);
  }
});

renderTodoList();
```
