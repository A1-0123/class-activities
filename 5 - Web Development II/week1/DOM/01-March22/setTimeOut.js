// let timeout = setTimeout(() => {
//     alert("Hello")
// }, 20000);

let count = 5;

console.log("something");

// function sayHello (name) {
//     console.log(`Hello! ${name}`);
// }

// let time = setTimeout(() => { sayHello("kubilay") }, 3000);

// clearTimeout(time);

function sayHello (name) {
    // console.log(`Hello! ${name}`);
    count++;
    console.log(count);
}

let time = setTimeout(sayHello, 3000);

if(count === 6){
    clearTimeout(time);
}