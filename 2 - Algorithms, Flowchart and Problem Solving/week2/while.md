JavaScript, while and do-while are both types of loops that allow you to repeatedly execute a block of code while a certain condition is true.

while loop:

```js
while (condition) {
  // code to be executed
}
```

The while loop will execute the code inside the curly braces as long as the condition is true. The condition is evaluated before each iteration of the loop, so if the condition is false when the loop starts, the code inside the loop will not be executed at all.

do-while loop:

```js
do {
  // code to be executed
} while (condition);
```
The do-while loop is similar to the while loop, but the code inside the loop is executed at least once, regardless of whether the condition is true or false. The condition is evaluated after each iteration of the loop, so if the condition is false when the loop starts, the code inside the loop will be executed once before the loop exits.

Here are some examples of how you might use these loops:

```js
// Using a while loop
var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Using a do-while loop
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
