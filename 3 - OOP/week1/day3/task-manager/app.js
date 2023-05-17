class Task {
    constructor(title){
        this.title = title;
    }
}

class TaskManager {
    constructor(){
        this.tasks = [
            {
                title: "Learn REACT!"
            }
        ];
    }

    addTask(title) {
        const newTask = new Task(title);
        this.tasks.push(newTask);
    }

    removeTask(index){
        this.tasks.splice(index, 1)
    }

    renderTasks() {
        const taskList = document.querySelector("#task-list");
        taskList.innerHTML = "";

        this.tasks.forEach((task, index) => {
            const li = document.createElement("li");
            const span = document.createElement("span");
            const button = document.createElement("button");

            span.textContent = task.title;
            button.textContent = "Remove";

            button.addEventListener("click", () => {
                this.removeTask(index);
                this.renderTasks();
            })

            li.append(span);
            li.append(button);
            taskList.append(li);
        });
    }
}

const taskManager = new TaskManager();

const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = taskInput.value;

    if(title){
        taskManager.addTask(title);
        taskInput.value = "";
        taskManager.renderTasks();
    }
})

taskManager.renderTasks();