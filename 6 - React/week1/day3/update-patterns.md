In React.js, efficient updates are very important to ensure your application runs smoothly. The best way to achieve this is by adhering to specific update patterns. These patterns leverage React's mechanism for tracking changes to the state and re-rendering the components.

Let's look at some common update patterns:

**1. Updating Primitive Values:**

Primitive values like numbers, strings, and booleans are the simplest to update. Here's an example:

```javascript
this.setState({ myBoolean: true });
```

Because these are simple values, there's no worry about mutability here.

**2. Updating Objects:**

Objects are more complex and must be treated as immutable. Here's how you would update an object:

```javascript
this.setState(prevState => {
    return { 
        myObject: { 
            ...prevState.myObject, 
            key: 'value' 
        } 
    }
});
```

This pattern creates a new object with the same properties as the old one, plus the updated key-value pair.

**3. Updating Arrays:**

Like objects, arrays should be treated as immutable as well. Here's how you would update an array:

```javascript
this.setState(prevState => {
    return { 
        myArray: [...prevState.myArray, newElement] 
    }
});
```

This pattern creates a new array that contains all the elements of the old one, plus the new element.

**4. Updating Nested Data:**

Sometimes you might have complex state data, like objects within objects or arrays. Updating these can be tricky, but the pattern remains the same: create a new version of the data with the updates. For example:

```javascript
this.setState(prevState => {
    return { 
        outerObject: {
            ...prevState.outerObject,
            innerObject: {
                ...prevState.outerObject.innerObject,
                key: 'value'
            }
        } 
    }
});
```

This pattern first creates a new `innerObject`, then inserts it into a new `outerObject`.

**5. Use Functional setState when State Depends on Previous State:**

Anytime you want to update the state based on the previous state, you should use a function inside `setState`. This ensures that your update has the most recent state to work with. Here's an example:

```javascript
this.setState(prevState => {
    return { 
        counter: prevState.counter + 1 
    }
});
```

In this example, the new counter is based on the previous counter, so a function is used to ensure it's always accurate.

**6. Batch Multiple setStates:**

In some cases, you might have multiple `setState` calls in a row. While React does batch state updates for performance optimization, it's best not to rely on this behavior. 

```javascript
this.setState({ key1: 'value1' });
this.setState({ key2: 'value2' });
```

Instead, you can batch them into one:

```javascript
this.setState({ 
    key1: 'value1',
    key2: 'value2'
});
```

This way, you're only triggering one update and render cycle, which can significantly boost your performance.

By following these update patterns, you can ensure that your React application works efficiently, minimizes unnecessary re-renders, and keeps the state data clean and predictable.