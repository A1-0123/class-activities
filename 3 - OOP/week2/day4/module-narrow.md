**Modules in TypeScript:**

Modules in TypeScript provide a way to organize and encapsulate code into reusable units. They help in structuring large codebases and managing dependencies between different parts of an application. TypeScript supports both CommonJS and ES modules syntax.

Here's an example of how to define and use modules in TypeScript:

```typescript
// mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}
```

```typescript
// main.ts
import { add, subtract } from './mathUtils';

console.log(add(5, 3));       // Output: 8
console.log(subtract(10, 4)); // Output: 6
```

In this example, we have a `mathUtils.ts` file that exports two functions, `add` and `subtract`. These functions can be imported and used in the `main.ts` file using the `import` statement.

**Truthiness Narrowing:**

Truthiness narrowing is a type inference feature in TypeScript that allows you to narrow down the type of a variable based on its truthiness (whether it evaluates to `true` or `false`). It is especially useful when working with conditional statements or boolean checks.

Consider the following example:

```typescript
function printMessage(message?: string) {
  if (message) {
    console.log(message.toUpperCase()); // 'message' is treated as type 'string'
  } else {
    console.log("No message provided."); // 'message' is treated as type 'undefined'
  }
}

printMessage("Hello, TypeScript!"); // Output: HELLO, TYPESCRIPT!
printMessage();                     // Output: No message provided.
```

In this example, the `printMessage` function accepts an optional `message` parameter. Inside the function, we use an `if` statement to check if `message` has a truthy value. TypeScript narrows down the type of `message` to either `string` or `undefined` based on the truthiness check. This allows us to safely call `toUpperCase()` on `message` when it has a value, and handle the case when no message is provided.

Truthiness narrowing is helpful for writing more type-safe code and preventing potential errors by ensuring that variables are of the expected type within specific code blocks.

I hope this clarifies the concepts of modules and truthiness narrowing in TypeScript! Let me know if you have any further questions or if there's anything else I can assist you with.