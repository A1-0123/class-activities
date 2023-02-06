Recursion is a technique in computer programming where a function calls itself in order to solve a problem. The idea is to break down a complex problem into smaller, simpler sub-problems, and keep repeating this process until you reach a base case. The base case is the simplest form of the problem, which can be solved directly, and it signals the end of the recursion.

<!-- In this example, the `factorial` function calculates the factorial of a given number n. The base case is when n is equal to 1, in which case the function returns 1. Otherwise, the function returns n multiplied by the factorial of `n - 1`, effectively reducing the problem to finding the factorial of a smaller number. This process continues until the base case is reached. -->

It's important to make sure the base case is well defined, otherwise the recursion will continue indefinitely, leading to a stack overflow error.

```js
// A recursive function to find the nth Fibonacci number
function fibonacci(n) {
  // Base case: the first two Fibonacci numbers are 0 and 1
  if (n <= 1) return n;

  // Recursive case: the nth Fibonacci number is the sum of the (n-1)th and (n-2)th numbers
  return fibonacci(n-1) + fibonacci(n-2);
}
```
In this example, the `fibonacci` function calculates the nth Fibonacci number. The base case is when n is less than or equal to 1, in which case the function returns n. Otherwise, the function returns the sum of the `(n-1)th` and `(n-2)th` Fibonacci numbers, effectively reducing the problem to finding the nth Fibonacci number of two smaller numbers.

- Fibonacci sequence:

```js
function fibonacci(n) {
    //base case: return n if n is 0 or 1
    if (n === 0 || n === 1) return n;
    //recursive case: add fibonacci of n-1 and n-2
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

- Sum of all numbers from 1 to n:

```js
function sum(n) {
    //base case: return 1 if n is 1
    if (n === 1) return 1;
    //recursive case: add n to the sum of n-1
    return n + sum(n - 1);
}
```
- String reverse:

```js
function reverseString(str) {
    //base case: return str if its length is 0 or 1
    if (str.length <= 1) return str;
    //recursive case: concatenate last character with reverse of the rest of the string
    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}
```

- Palindrome:

```js
function isPalindrome(str) {
    //base case: return true if str is a single character
    if (str.length === 1) return true;
    //recursive case: return false if first and last characters don't match
    if (str[0] !== str[str.length - 1]) return false;
    //recursive case: return isPalindrome of the string without the first and last characters
    return isPalindrome(str.slice(1, str.length - 1));
}
```

- Power:

```js
function power(base, exponent) {
    //base case: return 1 if exponent is 0
    if (exponent === 0) return 1;
    //recursive case: multiply base by the power of base and exponent-1
    return base * power(base, exponent - 1);
}
```
