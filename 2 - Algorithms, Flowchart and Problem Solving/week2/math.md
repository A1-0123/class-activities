JavaScript has a built-in Math object that contains many useful mathematical functions and constants. Here are some common methods you can use:

- Math.round(x): Rounds a number to the nearest integer.
- Math.ceil(x): Rounds a number up to the nearest integer.
- Math.floor(x): Rounds a number down to the nearest integer.
- Math.abs(x): Returns the absolute value of a number.
- Math.sqrt(x): Returns the square root of a number.
- Math.pow(x, y): Returns x raised to the power of y.
- Math.exp(x): Returns e (approximately 2.718) raised to the power of x.
- Math.log(x): Returns the natural logarithm (base e) of a number.
- Math.log10(x): Returns the base-10 logarithm of a number.
- Math.max(a, b, c, ...): Returns the largest number from a list of numbers.
- Math.min(a, b, c, ...): Returns the smallest number from a list of numbers.
- Math.random(): Returns a random number between 0 and 1.

Here are some examples of how you might use these methods:

```js
var x = 5.3;
console.log(Math.round(x)); // Outputs 5
console.log(Math.ceil(x)); // Outputs 6
console.log(Math.floor(x)); // Outputs 5
console.log(Math.abs(x)); // Outputs 5.3
console.log(Math.sqrt(x)); // Outputs 2.28867962264113
console.log(Math.pow(2, 3)); // Outputs 8
console.log(Math.exp(1)); // Outputs 2.718281828459045
console.log(Math.log(Math.E)); // Outputs 1
console.log(Math.log10(100)); // Outputs 2
console.log(Math.max(1, 2, 3, 4, 5)); // Outputs 5
console.log(Math.min(1, 2, 3, 4, 5)); // Outputs 1
console.log(Math.random()); // Outputs a random number between 0 and 1
```
Keep in mind that the Math object is read-only and its properties and methods are static, which means that you do not need to create a new instance of the object to use them.