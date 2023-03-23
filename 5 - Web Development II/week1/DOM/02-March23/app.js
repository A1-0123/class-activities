let link = document.querySelectorAll("a");

function changeColor(element) {
    resetColor(link);
    element.classList.add("active");
}
function resetColor(list){
    for(let i = 0; i < list.length; i++){
        list[i].classList.remove("active")
    }
}
for(let i = 0; i < link.length; i++){
    link[i].addEventListener("click", () => changeColor(link[i]))
}

// document.querySelector("body").addEventListener("scroll", function(event) {
//     console.log(event);
// })

let input = document.querySelector("#textInput");

input.addEventListener("keydown", function(event){
    console.log(event.target.value);
})

let scrollY = document.querySelector("#scrollY");


document.addEventListener("scroll", function(event) {
    // Your code here
    // console.log(event);
    // console.log(window.scrollY);
    // scrollY.innerText = window.scrollY;
});