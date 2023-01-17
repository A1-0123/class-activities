###### Hoisting

In JavaScript, hoisting is the behavior of moving variable and function declarations to the top of the scope (either global or function scope) at runtime. This means that variable and function declarations are processed before any code is executed, so you can use a variable or call a function before it is declared in the code. However, the variable's value or function's definition will not be initialized or assigned until the code execution reaches that point.

1. Variable hoisting:

```js
console.log(x); // undefined
var x = 5;
```

In this example, the variable x is hoisted to the top of the scope, but its value is not initialized until the code execution reaches the assignment statement var x = 5. Therefore, when we try to log the value of x before the assignment statement, it outputs undefined.

2. Function hoisting:

```js
myFunction(); // "Hello World!"

function myFunction() {
    console.log("Hello World!");
}
```

In this example, the function declaration function myFunction() {...} is hoisted to the top of the scope, so we are able to call the function before it is declared in the code.

3. Function Expressions are not hoisted

```js
myFunction(); // TypeError: myFunction is not a function
var myFunction = function() {
    console.log("Hello World!");
};
```

In this example, myFunction is assigned a function after it is declared, so it cannot be accessed before the assignment, Therefore it gives TypeError

It's worth noting that variable initializations are not hoisted, only variable declarations.