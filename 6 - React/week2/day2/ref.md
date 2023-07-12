`useRef` is a hook provided by React that allows you to create a mutable reference to a value or an element in a functional component. It returns a mutable object with a `current` property, which can be used to store and access the current value. Unlike the state, updating the `current` property does not cause a re-render of the component.

Here's the syntax for using `useRef`:

```javascript
import React, { useRef } from 'react';

function MyComponent() {
  const refValue = useRef(initialValue);
  
  // ...
  
  return (
    // JSX
  );
}
```

In the example above, `refValue` is a reference object created by `useRef`, initialized with the `initialValue`. You can then access the current value using `refValue.current`.

Here are some common use cases and examples of `useRef`:

**1. Accessing DOM elements:**
```javascript
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input ref={inputRef} type="text" />
  );
}
```
In this example, the `inputRef` is used to reference the `<input>` element. The `useEffect` hook is used to focus on the input element when the component mounts.

**2. Storing previous values:**
```javascript
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const previousValueRef = useRef(null);
  const currentValue = 'Hello, world!';

  useEffect(() => {
    previousValueRef.current = currentValue;
  }, [currentValue]);

  return (
    <div>
      <p>Current Value: {currentValue}</p>
      <p>Previous Value: {previousValueRef.current}</p>
    </div>
  );
}
```
In this example, `previousValueRef` is used to store the previous value of `currentValue` whenever it changes. The `useEffect` hook with a dependency array is used to update the `previousValueRef.current` whenever `currentValue` changes.

**3. Preserving values across re-renders:**
```javascript
import React, { useRef, useState } from 'react';

function MyComponent() {
  const counterRef = useRef(0);
  const [counter, setCounter] = useState(0);

  const increment = () => {
    counterRef.current += 1;
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <p>Counter (via useRef): {counterRef.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
In this example, `counterRef` is used to preserve the counter value across re-renders. It allows us to update the `counterRef.current` directly without triggering a re-render. The counter displayed using `counterRef.current` will always reflect the latest value.

These are just a few examples of how `useRef` can be used in functional components. It's a powerful hook that provides a way to preserve values across re-renders and interact with DOM elements.