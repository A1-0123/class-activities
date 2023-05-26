In TypeScript, literal types allow you to specify exact values for variables or parameters. With literal types, you can narrow down the possible values of a variable to a specific set of literal values.

Here's an example to illustrate the concept:

```typescript
let status: "success" | "error";
status = "success";
console.log(status); // Output: 'success'

status = "error";
console.log(status); // Output: 'error'
```

In the above example, the `status` variable is declared with a literal type that can only have the values `"success"` or `"error"`. This means the variable can only be assigned one of these exact string values.

Literal types are particularly useful in scenarios where you want to explicitly define and restrict the set of possible values for a variable or parameter. Here are a few common use cases:

**1. String Literal Types**: Literal types can be used with string values to define a specific set of possible string values.

```typescript
let eventType: "click" | "hover" | "submit";
eventType = "click";
console.log(eventType); // Output: 'click'

eventType = "submit";
console.log(eventType); // Output: 'submit'
```

In this example, the `eventType` variable can only have the values `"click"`, `"hover"`, or `"submit"`, ensuring that only valid event types are assigned.

**2. Numeric Literal Types**: Literal types can also be used with numeric values to define a specific set of possible numeric values.

```typescript
let statusCode: 200 | 400 | 404;
statusCode = 200;
console.log(statusCode); // Output: 200

statusCode = 404;
console.log(statusCode); // Output: 404
```

Here, the `statusCode` variable can only have the values `200`, `400`, or `404`, restricting the valid status codes that can be assigned.

**3. Boolean Literal Types**: Literal types can be used with boolean values to define a specific set of possible boolean values.

```typescript
let isLogged: true | false;
isLogged = true;
console.log(isLogged); // Output: true

isLogged = false;
console.log(isLogged); // Output: false
```

In this example, the `isLogged` variable can only have the values `true` or `false`, ensuring that only valid boolean values are assigned.

**4. Discriminated Unions**: Literal types are often used in discriminated unions, where a property with a literal value is used to determine the specific variant of an object.

```typescript
type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function calculateArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === "square") {
    return shape.sideLength ** 2;
  }
  return 0;
}
```

In this example, the `Shape` type is a union of `Circle` and `Square`. The `kind` property with a literal value is used to discriminate between the variants of the `Shape` type in the `calculateArea` function.

Literal types provide a way to define and restrict the set of possible values for variables or parameters. They allow you to ensure that only valid values are assigned and provide improved type safety.