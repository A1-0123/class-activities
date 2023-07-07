Immutability is a core concept in programming. In the simplest terms, an immutable object is an object whose state cannot be changed after it's created. If you want to change an immutable object, you don't modify the object itself but instead create a new object with the necessary changes. 

In the context of React.js, immutability is important because React's rendering logic heavily depends on the ability to "diff" or compare the current state and props of a component with its next state and props. If these objects are mutable, it could lead to incorrect comparisons, and thus, improper rendering of the component.

Now, let's break this down with a step-by-step example:

1. **Understanding Basic Immutability:**

Consider an array:

```javascript
let arr = [1, 2, 3, 4];
```

If we want to add a value to this array in a mutable way, we might do:

```javascript
arr.push(5);
```

Now `arr` is `[1, 2, 3, 4, 5]`. But the original `arr` has been mutated.

If we wanted to do this in an immutable way, we would do:

```javascript
let newArr = [...arr, 5];
```

`newArr` is now `[1, 2, 3, 4, 5]`, but the original `arr` remains `[1, 2, 3, 4]`. This is an example of immutability.

2. **Using Immutability in React Component State**

The state in React components should always be updated in an immutable way. Here's why:

React uses a mechanism called reconciliation to determine what parts of your application need to be re-rendered. To do this, it uses a "diffing" algorithm, which compares the current and the next state. If the state is directly mutated, it could cause this comparison to be inaccurate, and your application may not render correctly.

Here's an example:

```javascript
// Wrong way (mutating state directly)
this.state.myArray.push(5);

// Correct way (using setState and spreading existing state into a new array)
this.setState(prevState => {
    return {myArray: [...prevState.myArray, 5]}
});
```

3. **Immutability with Objects in React**

The same concept applies to objects in the state:

```javascript
// Wrong way
this.state.myObject.key = 'value';

// Correct way
this.setState(prevState => {
    return {myObject: {...prevState.myObject, key: 'value'}}
});
```

By spreading `prevState.myObject`, we create a new object that has all the same properties as the old one, and then we add or overwrite the `key` property. This way, the state is updated in an immutable way.

4. **Benefits of Immutability**

In addition to ensuring React's diffing algorithm works correctly, immutability in React also brings other benefits:

- **Predictability:** Since data creating new data instead of changing existing data, you avoid unexpected side-effects and make the code easier to understand.
- **Performance Optimization:** Immutability allows React to make certain optimizations that improve performance, especially when using the `PureComponent` or `React.memo` for functional components.
- **Easier Undo/Redo and Time Travel Debugging:** When every state is a new state (rather than a changed state), you can easily implement features like undo/redo, and it makes debugging easier.

In conclusion, immutability is not just a good-to-have but a must-have in React. It helps prevent bugs, makes code easier to understand, and allows React to optimize rendering, making your applications faster and more efficient.