function sum(a, b) {
    return a + b;
}

sum(2, 3); // 5
// sum(5, 5); // 10

let result = sum(10, 223); // 233
// console.log(result);

let result2;
function multiply(a, b) {
    result2 = a * b;
}

// console.log(result2);

let division = function (a, b) {
    return (a / b);
}
// console.log(division(20, 4)); // 5

function a (){
    let name = "joel";
    console.log(name);
    function b (){
        let age = 20;
        console.log(age);
    }
    b();
}
// a();

// Create a function called isPositive that takes in a number and returns true if it is positive, and false if it is not positive.

function isPositive(number) { 
    return number > 0
}

// console.log(isPositive(5)); // true
// console.log(isPositive(-3)); // false

// function isPositive(number){
//     if(number > 0){
//         return number + " is positive";
//     }else{
//         return number + " is negative";
//     }
// }

// Create a function called isEven that takes in a number and returns true if it is even, and false if it is odd.

function isEven(number){
    return number % 2 === 0;
}

console.log(isEven(2)); // true
console.log(isEven(3)); // false

// Create a function called reverseString that takes in a string and returns the string reversed.

function reverseString(value){
    return value.split("").reverse().join("");
}

// console.log(reverseString("tuna altay")); //yatla anut

