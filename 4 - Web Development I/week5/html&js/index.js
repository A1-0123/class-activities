// console.log("Hello world");

// console.warn("This is warn log");
// console.error("This is error log");

// // let count = 20;
// let step = 1;

// console.log(count === "10");

// if(count === 10){
//     console.log("count is equals to 10");
// }else if(count === 11){
//     console.log("count is equals to 11");
// }else if(count < 5){
//     console.log("count is less than 5");
// }else{
//     console.log("none of them");
// }

// let password = "123asdC!?";

// console.log(password.indexOf("?")); // return 8 for index number of ? character in password variable

// if(password.length > 6){
//     // password.length is greater than 6 ?
//     if(password.indexOf("?") !== -1){
//         console.log("you chose not good password");
//         // password string includes ? or not
//     }else{
//         console.log("you chose good password");
//     }
// }

// console.log("" == false); // falsely
// console.log(0 == ""); // falsely
// console.log(0 == false); // falsely

// console.log("a" == true);



// let firstName = "";
// let count = 0;

// if(count == 1){
//     firstName = "adam";
// }

// if(firstName){ // false
//     console.log("my name is " + firstName);
// }


// null && true // false
// 5 <= 3 && 4 > 2 // false
// (67 >= 80 && "abc".length < 2) || ("greeting".length > 10 && 0) // false


// (10 * 5 == 50 || "hello".length < 3) && (true || false) //true

// (3.14 <= 3 || "apple" == "banana") && (0 || -1) // false

// ("cat" != "dog" && 5 % 2 == 1) || (false || true) // true

// (2 < 1 || 4.5 > 3.2) && (10 % 3 != 0 || true) // true

// (4 == 4.0 && "apple".length == 5) || (null || undefined) // true

// ((true || false) && (3 + 4 == 7)) && ("hello".length <= 5 || 2 > 1) // true

// (1 + 1 != 2 || "car".length == 4) || (false && true) // false

// ((0 || -1 ) || (2 || 3)) && ("abc" + "def" == "abcdef" || false) // true

// (2 ** 3 > 10 && "bat".length == 3) || ((true && false) || true) // true

// (100 % 5 == 0 && "dog" == "dog") && (( null || undefined ) || "cat".length > 3) // false


// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,3));

let array = [];

let array2 = ["abc", "def", 123, false, {}, [], 2, 100];

array2[0] // "abc"
array2[1] // "def"

console.log(array2.indexOf(false)); // 3

console.log(array2.length); // 6

console.log(array2[array2.length - 1]); // 100

console.log(array2[0]); // "abc"

array2[0] = "kubilay";

console.log(array2);

console.log(
    [
        [
            {name: "Osama - edit", ..},
            {name: "summer on inside"}
        ], 
        [

        ], 
        [

        ], 
        [
            
        ]
    ]
    );