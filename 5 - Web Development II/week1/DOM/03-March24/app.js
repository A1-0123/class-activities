const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-btn");
const todoList = document.querySelector("#todo-list");
const todoError = document.querySelector("#todo-error");
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let count = 0;


todoButton.addEventListener("click", function (event){
    event.preventDefault(); // stop to refresh the page
    let text = todoInput.value;

    if(text.length !== 0){
        count++;
        let todo = {
            id: count,
            content: text,
            done: false
        };
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos))
        renderTodos(todo);
        todoError.textContent = ""
    }else{
        todoError.textContent = "Please add input before you add"
    }
    
});

function renderTodos(todo) {
    let li = document.createElement("li");
    let buttonDelete = document.createElement("button");
    let buttonComplete = document.createElement("button");
    buttonDelete.textContent = "Delete";
    buttonComplete.textContent = "Complete";

    li.textContent = todo.content;
    li.innerHTML = `<span>${todo.content}</span>`
    li.classList.add("list-item");

    // write your logic here
    // if the todo is done, then add style to the li

    buttonDelete.addEventListener("click", () => {
        deleteTodo(li, todo.id);
    })

    buttonComplete.addEventListener("click", () => {
        completeTodo(li, todo.id);
    })

    li.appendChild(buttonDelete);
    li.appendChild(buttonComplete);


    todoList.appendChild(li);
    todoInput.value = "";
}

let savedTodos = JSON.parse(localStorage.getItem("todos"));
if(savedTodos){
    todos = savedTodos;
    for(let i = 0; i < todos.length; i++){
        renderTodos(todos[i])
        // will render all the todos
    }
}

function deleteTodo(todo, id){
    let result = todos.filter((item) => item.id != id);
    todos = result;
    localStorage.setItem("todos", JSON.stringify(todos));
    todo.remove();
}

function completeTodo(todo, id){
    // write your logic here
    // 1. find the todo
    // 2. change the done property to true
    // 3. save the todos to local storage
}
