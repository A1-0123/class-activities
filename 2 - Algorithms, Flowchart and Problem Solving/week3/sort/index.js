let number = [1, 12, 100, 23, 54, 24];
let months = ["February","April", "June", "May", "March","January"];

console.log(number.sort(sortNumbers));
console.log(months.sort(sortMotnhsByLen));

function sortNumbers(a, b){
    // IF IT RETURNS A NEGATIVE NUMBER, A SHOULD COME BEFORE B
    // IF IT RETURNS A POSITIVE NUMBER, A SHOULD COME AFTER B,
    // IF IT RETURNS 0, A AND B ARE THE SAME AS FAR AS THE SORT IS CONCERNED
    // a and b are two numbers
    // if a is greater than b, return a - b / asc
    return a - b;
    // if a is less than b, return b - a / desc
}

function sortMotnhsByLen(a, b){
    return a.length - b.length;
}

let number1 = 
[5, 3, 4, 1, 2];
// [3, 4, 1, 2, 5] // 1
// [3, 1, 2, 4, 5] // 2
// [1, 2, 3, 4, 5]
