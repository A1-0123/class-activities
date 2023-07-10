**1. Introduction to Refs**

Refs in React are used to access and interact with DOM nodes or React elements directly. This is different from the typical data flow in a React application, where state and props are used to change the rendering of components.

There are certain situations where you might need to use a ref:

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.
  
Remember, avoid using refs for anything that can be done declaratively. 

**2. Creating Refs**

Refs are created using `React.createRef()` method and attached to React elements via the `ref` attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.

In a class component:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

In a functional component, you use `React.useRef()` hook:

```jsx
import React, { useRef } from 'react';

function MyComponent() {
  const myRef = useRef(null);

  return <div ref={myRef} />;
}
```

**3. Accessing Refs**

When a ref is passed to an element in render, a reference to the node becomes accessible at the `current` attribute of the ref.

For example, to programmatically focus an input element:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  render() {
    return <input type="text" ref={this.myRef} />;
  }
}
```

Similarly, with functional components:

```jsx
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
  }, []);  // empty dependency array means this effect runs once on mount

  return <input type="text" ref={myRef} />;
}
```

**4. Forwarding Refs**

Ref forwarding is a feature that lets some components take a `ref` they receive, and pass it further down to a child component.

An example of a functional component with ref forwarding:

```jsx
const MyComponent = React.forwardRef((props, ref) => (
  <button ref={ref} className="MyClass">
    {props.children}
  </button>
));
```

In this example, `ref` passed to `MyComponent` will be passed along to the `button` element.

Remember, use refs sparingly and for the tasks they're intended for. Most tasks can and should be accomplished with the standard declarative dataflow. Misuse of refs can lead to brittle code and makes your components less reusable.