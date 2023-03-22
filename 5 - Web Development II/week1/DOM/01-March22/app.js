let button = document.querySelector("#clickme");
console.log(button);

let title = document.querySelector("h1");
let input = document.querySelector("input");
button.addEventListener("click",function () {
    console.log(input.value);
});

// title.addEventListener("click", () => {
//     title.style = "color: red"
// })

button.addEventListener("mouseover", () => (title.style = "color: blue"));
input.addEventListener("change", (event) => console.log(event.target.name));