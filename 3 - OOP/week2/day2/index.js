"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string
var firstName = "John";
var lastName = "Doe";
// number
var age = 10;
age = 12;
// any
var isWorking = true;
isWorking = 10;
isWorking = "something";
// array 
var numArr = [1, 2, 3, 4, 5, 6];
var stringArr = ["1", "2", "3"];
var booleanArr = [false, true, false, false, true];
var mixArr = [1, 2, 3, "a", "b", "c", false, true, {}];
// object
var car = {
    make: "Ford",
    modal: "Mustang",
    year: 2023,
    seats: [[1, 1], [1, 1]]
};
// function
function greeting(name, age) {
    return "Hello ".concat(name, ", you are ").concat(age, " years old!");
}
console.log(greeting("Joe", 20));
