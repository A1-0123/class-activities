In TypeScript, a union type allows you to specify that a variable or parameter can hold values of multiple types. Union types are created by using the pipe operator (|) between the desired types. This means a union type variable can have a value of any of the specified types.

Here's an example to illustrate the concept:

```typescript
let myVariable: string | number;
myVariable = "Hello";
console.log(myVariable); // Output: 'Hello'

myVariable = 42;
console.log(myVariable); // Output: 42
```

In the above example, the variable `myVariable` is declared to have a union type of `string | number`, which means it can hold values that are either strings or numbers. It can be assigned a string value ("Hello") or a numeric value (42) without any type errors.

Union types are particularly useful in scenarios where a variable or parameter can accept multiple types of values. Here are a few common use cases:

**1. Function Parameters**: Union types can be used to define function parameters that can accept different types of values. This allows the function to handle a variety of inputs without sacrificing type safety.

```typescript
function displayValue(value: string | number) {
  console.log(value);
}

displayValue("Hello"); // Output: 'Hello'
displayValue(42); // Output: 42
```

**2. Optional or Nullable Values**: Union types can be used to represent optional or nullable values. By including `undefined` or `null` as part of the union type, you can explicitly allow these values to be assigned to a variable.

```typescript
let username: string | undefined;
username = "John";
console.log(username); // Output: 'John'

username = undefined;
console.log(username); // Output: undefined
```

**3. Conditional Logic**: Union types can be used in conditional statements to perform different actions based on the type of the variable.

```typescript
function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log("The value is a string.");
  } else if (typeof value === "number") {
    console.log("The value is a number.");
  } else {
    console.log("Unknown value.");
  }
}

processValue("Hello"); // Output: 'The value is a string.'
processValue(42); // Output: 'The value is a number.'
processValue(true); // Output: 'Unknown value.'
```

**4. Array Elements**: Union types can be used to define arrays that can contain elements of different types.

```typescript
let myArray: (string | number)[] = ["Hello", 42, "World", 100];
console.log(myArray); // Output: ['Hello', 42, 'World', 100]
```

In this example, the `myArray` variable is an array that can contain elements of type `string` or `number`. It can hold a mixture of string and number values.

Union types provide flexibility and type safety when working with variables or parameters that can have different possible types. They allow you to express the range of values that a variable can hold.