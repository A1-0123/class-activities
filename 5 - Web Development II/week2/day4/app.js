const todoContainer = document.querySelector(".todos-container");

function getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {
            // 
            for(let i = 0; i < data.length; i++){
                let card = document.createElement("div");

                card.innerHTML += `
                    <div class="todo-card">
                        <p>${data[i].userId}</p>
                        <p>${data[i].title}</p>
                        <p>${data[i].completed}</p>
                    </div>
                `;

                todoContainer.appendChild(card);
            }
        })
}

getTodos();