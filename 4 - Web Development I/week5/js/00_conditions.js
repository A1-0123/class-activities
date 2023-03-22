let count = 4;

// console.log(count > 5); // false
// console.log(count >= 5); // true

// console.log(count <= 3); // false
// console.log(count < 4); // false

// console.log(count == 5); // true
// console.log(count == 10); // false
// console.log(count === 5); // true

// == : does not checks the data type
// === : also checks the data type

console.log(count == "5"); // true
console.log(count === "5"); // false

console.log(count != 5); // false


if(count > 5){
    // logic
    console.log("count is greater than 5");
}else if (count < 3){
    // logic
    console.log("ohh, count is less than 3");
}else{
    // logic
    console.log("count is not greater than 5 and also not less than 3");
}

console.log("console log"); //white color
console.error("console error"); //red color
console.warn("console warn"); //yellowish color