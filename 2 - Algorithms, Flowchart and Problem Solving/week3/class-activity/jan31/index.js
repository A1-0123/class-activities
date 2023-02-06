function sumRange(number) {
    // base case
    if(number === 1){
        // if number is equal to 1, return 1 and stop the function
        return 1;
    }
    return number + sumRange(number - 1);
    // return the number and call the function again with number - 1
}

// console.log(sumRange(7)); // 7 + 6 + 5 + 4 + 3 + 2 + 1 = 28

// step 1: fib(4) 
// step 2: fib(3) + fib(2) 
// step 3: fib(2) + fib(1) + fib(2)
// step 4: fib(1) + fib(0) + fib(1) + fib(1) + fib(0)
// step 5: 1 + 0 + 1 + 1 + 0 = 3

console.log(fib(4)); // 3
console.log(fib(6)); // 55

function fib(n){
    if(n === 0) return 0; 
    if(n === 1) return 1;
    return fib(n-1) + fib(n-2);
}

// step 1: fib(6) => 8
// step 2: fib(5) + fib(4)
// step 3: fib(4) + fib(3) + fib(3) + fib(2)
// step 4: fib(3) + fib(2) + fib(2) + fib(1) + fib(2) + fib(1) + fib(1) + fib(0);
// step 5: fib(2) + fib(1) + fib(1) + fib(0) + fib(1) + fib(0) + 1 + fib(1) + fib(0) + 1 + 1 + 0;
// step 6: fib(1) + fib(0) + 1 + 1 + 0 + 1 + 0 + 1 + 1 + 0 + 1 + 1 + 0;
// step 7: 1 + 0 + 1 + 1 + 0 + 1 + 0 + 1 + 1 + 0 + 1 + 1 + 0 = 8;

function sum(n) { // base case (best) is O(n)
    //base case: return 1 if n is 1
    if (n === 1) return 1;
    //recursive case: add n to the sum of n-1
    return n + sum(n - 1);
}

function sumFormula(n){ // Big O Notation O(1) constant time complexity
    return n * (n + 1) / 2
}

function sumLoop(n){ // O(n) linear time complexity
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum += i;
    } 
    return sum;
}

console.log(sumFormula(10));

console.log(sum(10)); // 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 55 
// (10 * 11) / 2 = 55
// (n * (n+1))/2

// step 1: 10 + sum(9)
// step 2: 10 + 9 + sum(8)
// step 3: 10 + 9 + 8 + sum(7)
// step 4: 10 + 9 + 8 + 7 + sum(6)
// step 5: 10 + 9 + 8 + 7 + 6 + sum(5) ..
// ...

function reverseString(str) {
    //base case: return str if its length is 0 or 1
    if (str.length <= 1) return str;
    //recursive case: concatenate last character with reverse of the rest of the string
    // console.log(str[str.length - 1]);
    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

// console.log(reverseString("kubilay")); // yalibuk

function isPalindrome(str) {
    //base case: return true if str is a single character
    if (str.length === 1) return true;
    //recursive case: return false if first and last characters don't match
    if (str[0] !== str[str.length - 1]) return false;
    //recursive case: return isPalindrome of the string without the first and last characters
    // console.log(str.slice(1, str.length - 1));
    return isPalindrome(str.slice(1, str.length - 1));
}

// KAYAK = KAYAK // TRUE

// KUBILAY = YALIBUK // FALSE

// NOON = NOON // TRUE

console.log(isPalindrome("kubilay")); // false
console.log(isPalindrome("kayak")); // true

function power(base, exponent) {
    //base case: return 1 if exponent is 0
    if (exponent === 0) return 1;
    //recursive case: multiply base by the power of base and exponent-1
    return base * power(base, exponent - 1);
}

console.log(power(2, 4)); // 16
// 2 * power(2, 3)
// 2 * 2 * power(2, 2)
// 2 * 2 * 2 * power(2, 1)
// 2 * 2 * 2 * 2 * power(2, 0)
// 2 * 2 * 2 * 2 * 1 
// 16
console.log(power(3, 2)); // 64
// 3 * power(3, 1)
// 3 * 3 * power(3, 0)
// 3 * 3 * 1
// 9

function factorial(number) {
    if(number === 1 || number === 0) return 1;
    return number * factorial(number - 1);
}

// console.log(factorial(5)); 120
// console.log(factorial(6)); 720


// Write a JavaScript program to calculate the factorial of a number.

// 1! and 0! = 1
// Output function should return the result as Number.

// console.log(factorial(5)) // 120
// console.log(factorial(6)) // 720

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720

function resultFactorial(number) {
    if(number === 0 || number === 1) return 1;
    // If number is equal to 0 or 1, then return 1
    return number * resultFactorial(number - 1);
} 

function factorialNoRecursion(number) {
    let sum = 1;
    while(number >= 1){
        sum *= number;
        number--;
    }
    return sum;
}

console.log(resultFactorial(5)); // 120
console.log(resultFactorial(6)); // 720

console.log(factorialNoRecursion(5));
console.log(factorialNoRecursion(6));
