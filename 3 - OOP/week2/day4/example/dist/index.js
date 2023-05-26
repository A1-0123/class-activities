"use strict";
// function getValue(value: any): any {
//     return value;
// }
// const value1 = getValue(1);
// const value2 = getValue('1');
// const value3 = getValue(true);
// function getValue<Type>(value: Type): Type {
//     return value;
// }
// const value1 = getValue<number>(1);
// const value2 = getValue<string>('1');
// const value3 = getValue<boolean>(true);
function getFirstElement(arr, arr2) {
    return [...arr, ...arr2];
}
const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbers, ["a", "b", "c"]);
console.log(firstNumber);
// The type of 'firstNumber' is inferred as 'number'
const strings = ["apple", "banana", "cherry"];
const firstString = getFirstElement(strings, [true, true, false]);
console.log(firstString);
// The type of 'firstString' is inferred as 'string'
console.log("asdsa");
let x = 10;
console.log(x);
console.log("hello");
let sum = 5 + 10;
console.log(sum);
