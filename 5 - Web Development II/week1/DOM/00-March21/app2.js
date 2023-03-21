let boxes = document.querySelectorAll(".box p");
console.log(boxes);

boxes[0].innerText = "First Item"
boxes[1].innerText = "Second Item"
boxes[2].innerText = "Third Item"

for(let i = 0; i < boxes.length; i++){
    boxes[i].innerText = (i+1) + " Item";
    boxes[i].style = "background-color: red; padding: 2rem";
}

let image = document.querySelector("img");

let button = document.createElement("button");
button.innerText = "Change the image";

document.body.append(button);

let arrImages = [
    "https://images.unsplash.com/photo-1679376563424-83a9396f532f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1679411596442-9f035bb52e09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1531819177115-428566ccfb50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
];

let count = 0;

button.addEventListener("click", function() {
    if(count < 3){ 
        image.src = arrImages[count];
        count = count + 1;
    }
})