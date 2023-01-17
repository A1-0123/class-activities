In JavaScript, a function is a block of code that can be defined and then executed later. Functions can take in input (parameters) and return output (return values).

Here's an example of a simple function in JavaScript:

```js
function add(a, b) {
    return a + b;
}

console.log(add(3, 4)); // Output: 7
```

In this example, we have defined a function called add, which takes in two parameters a and b. The function uses the return statement to output the sum of a and b when it is called.

You can also define function with the function keyword and assign it to a variable

```js
let subtract = function(a, b) {
    return a - b;
}
console.log(subtract(5,2)); // Output: 3
```

Functions can also be defined using arrow function syntax which is more concise

```js
let multiply = (a, b) => {
    return a * b;
}
console.log(multiply(2,3)); // Output: 6
```

Functions can also be defined as methods of an object

```js
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.subtract(5, 2)); // Output: 3
```

Functions can also be used as callback functions, which are passed as arguments to other functions and executed when certain events occur.

JavaScript also has some built-in functions like Math.random() which generates random numbers and console.log() which is used for debugging and displaying values in the browser's developer console.


