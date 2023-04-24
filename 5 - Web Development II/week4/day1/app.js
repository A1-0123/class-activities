// $(selector).html(content)

// vanilla js = pure Javascript
// document.querySelector("p").innerHTML = "Hello World!";

$("body").css("padding", "1rem 2rem")

// jQuery
// html
let button = "<button>Click me</button>"
$("#first").html(button);

// text
// document.querySelector("#second").textContent = "Hello!"
$("#second").text("jQuery")
$("#second").attr("class", "hello");
$("#third").text("javaScript")

// attr = attributes
// document.querySelector("#first-image").src = "https://images.unsplash.com/photo-1682319298536-33ac5b48d772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
$("#first-image").attr("src", "https://images.unsplash.com/photo-1682319298536-33ac5b48d772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")

// class
// document.querySelector("#first-image").classList.add("asdada")
$("#first-image").addClass("image");

let list = document.querySelectorAll(".list-item");

// list.forEach(item => {
//     item.addEventListener("click", (event) => {
//         // console.log(event);
//         item.classList.add("active");
//         console.log(event);
//     })
// }) 

// document.querySelectorAll(".list-item").addEventListener("click", (event) => {
//     console.log(event);
// })

// css
$("#paragraph-one").css("border", "1px solid black");
$("#paragraph-one").css("padding", "1rem 2rem");

$(".container-items").on("click", (event) => {
    console.log(event);
    let color = $(event.currentTarget).css("background-color");
    $("#result").html("That div is <span style='color:" +
    color + ";'>" + color + "</span>.");
})

// append
$("#paragraph-one").append(button);

// prepend
$("#paragraph-one").prepend("<h5>author: testuser</h5>");


let firstHTML = $("#first").html(); //setter and getter
// let secondAttr = $("#second").attr();
console.log(firstHTML);
// console.log(secondAttr);


let input = $("#first-input").val();
console.log(input);


// remove

// $("p").remove();
// console.log($("li").first());

// let div = $("div").first();
// let body = $("body");

// $("div").last().text("scrollTop:" + div.scrollTop())

// $("#paragraph-one").scrollTop(300)

// toggleClass

$("li").on("click", (event) => {
    console.log(event);
    $(event.currentTarget).toggleClass("active");
})