// Select and Manup

// console.log("Hello this is app.js");
// let obj = {
//     firstName: "Joe" // => property
// }
let title = document.getElementById("title");
// console.log(title);
title.innerText = "Hello Developer!"
title.style = "color: red; background-color: black; border: 1px solid black; border-radius: 10px; padding: 1rem 2rem;";
title.className = "title-class something";
console.log(title.classList);
// title.innerText = "Halo!"
// console.log(title.innerText);

let listItem = document.getElementsByClassName("list-items");
console.log(listItem[3]);
listItem[3].classList.add("container")
// listItem[3].className = "container"

let tagItem = document.getElementsByTagName("p");
console.log(tagItem[0]);

let queryOne = document.querySelector(".custom-btn");
let queryTwo = document.querySelector("#title");
let queryThree = document.querySelector("p");

let queryAll = document.querySelectorAll(".custom-btn");

console.log(queryOne);
console.log(queryThree);
console.log(queryAll);
// if we have 3 elements with .custom-btn class name, 
// querySelector will select the first one
// querySelectorAll will select all the elements of .custom-btn

// Create HTML Elements
    
let customDiv = document.createElement("div"); // <div></div>
customDiv.innerText = "This is created by JS"
customDiv.style = "padding: 1rem 2rem";
document.body.append(customDiv);

// document.body.innerHTML = "<div>hello world</div>"
// document.getElementById("container").innerHTML = "<div id='hello'><button>Discover</button></div>"