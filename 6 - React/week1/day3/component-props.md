Sure! I understand that you're looking for a comprehensive and beginner-friendly guide to React components and props, starting from the basics. Here we go:

**React Components**

Components are the core building blocks of a React application. Essentially, a React application is just a tree of components. Each component represents a part of the user interface.

The simplest way to define a component in React is to write a JavaScript function. Here's a functional component that displays a welcome message:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

This function is a valid React component because it accepts a single "props" object argument and returns a React element.

You can now use this component just like you use any other HTML tag:

```jsx
<Welcome name="Sara" />
```

When a component is rendered, React will pass the attributes of the component (in this case, `name="Sara"`) as a single object to your component function. This object is known as "props".

**Props**

"Props" is short for properties. In React, you use props to pass data from a parent component to a child component. In the example above, `name="Sara"` is a prop being passed to the `Welcome` component.

Props are read-only, meaning that a component should not modify the props passed to it. Keeping props read-only ensures that a component will not accidentally change its input and helps to keep your application's UI consistent.

Here's an example of how you can use props to pass data from a parent component to a child component:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

In this example, `App` is the parent component, and it uses the `Welcome` component three times, each time passing a different name. When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object, which we call "props".

**Composing Components**

Components can be reused and can also be "composed" to make more complex UIs. For instance, let's say we have a few `Button` components, and we want to put them together to form an `App` component:

```jsx
function Button(props) {
  return (
    <button>{props.label}</button>
  );
}

function App() {
  return (
    <div>
      <Button label="Button 1" />
      <Button label="Button 2" />
      <Button label="Button 3" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

In the above example, the `App` component is composed of three `Button` components. Note that each `Button` is receiving a different label via props. This shows how components can be reused and can receive different props to display different content.

**Extracting Components**

Sometimes, it's beneficial to split components into smaller components. This makes your code more readable and easier to maintain. For instance, let's say we have a `Comment` component:

```jsx
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name

        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

This component can be difficult to change or test because it is doing too many things. Let's extract some subcomponents:

```jsx
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Here, we have divided the `Comment` component into three simpler components: `Avatar`, `UserInfo`, and `Comment`. Extracting components like this helps to keep your codebase DRY (Don't Repeat Yourself) and makes your components easier to understand and maintain.

By following these steps, you can gradually increase the complexity of your React application while keeping your codebase clean and manageable. Remember that components are meant to be reusable and composable. When you find yourself repeating the same structure in your JSX, it's often a good idea to extract that structure into a separate component.

---

Sure, passing props in React is straightforward and similar to adding attributes to HTML elements. Here's an overview:

**Passing Props**

Props are passed to components via attributes in JSX. For example:

```jsx
<Welcome name="Sara" />
```

In this case, `name` is a prop and `"Sara"` is the value we're passing to the `Welcome` component. 

You can pass any JavaScript expression as a prop. This is done by wrapping the value in `{}`. Here's an example where we pass a number as a prop:

```jsx
<Welcome age={25} />
```

You can also pass an array:

```jsx
<Welcome luckyNumbers={[7, 13, 27]} />
```

Or an object:

```jsx
<Welcome person={{ name: 'Sara', age: 25 }} />
```

And even a function:

```jsx
<Welcome greet={() => console.log('Hello')} />
```

**Accessing Props**

Inside the component, you can access props by their names. If you're writing a functional component, the props are the argument to your function. Here's an example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

In this `Welcome` component, `props` is an object. You access the `name` prop with `props.name`.

You can use JavaScript destructuring to make your code cleaner. Instead of accessing props one by one, you can destructure them in the function's argument:

```jsx
function Welcome({ name, age, luckyNumbers, person, greet }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>You are {age} years old.</p>
      <p>Your lucky numbers are: {luckyNumbers.join(', ')}.</p>
      <p>Your person object: {person.name} is {person.age} years old.</p>
      <button onClick={greet}>Say hello</button>
    </div>
  );
}
```

In this version of `Welcome`, the `name`, `age`, `luckyNumbers`, `person`, and `greet` props are destructured right in the function's argument list. This makes the rest of the function body simpler and easier to read.

---
### NOTE:

The syntax `() => {}` is used to create a new function in JavaScript. It's known as an "arrow function". Arrow functions have a few important properties that make them useful in certain situations, especially in the context of a React component.

1. **Lexical `this` binding:** Unlike traditional function expressions, arrow functions don't create their own `this` context. Instead, they inherit `this` from the enclosing scope at the time they're defined. 

   This is particularly useful in React class components. Inside methods of class components, `this` is bound to the component instance, so you can use `this` to access props, state, and other methods. But if you pass one of these methods as a callback (for example, to an `onClick` or `onChange` prop), it might end up being called with a different context, causing `this` to be `undefined` or not what you expect.

   By using an arrow function, you can ensure that `this` within your callback is still your component instance.

   Here's an example:
   ```jsx
   class MyComponent extends React.Component {
     handleClick = () => {
       console.log(this.props);
     }

     render() {
       return <button onClick={this.handleClick}>Click me</button>;
     }
   }
   ```
   In this example, `this.handleClick` is defined as an arrow function, so when it's called as an `onClick` callback, `this` within it is still the `MyComponent` instance.

2. **Conciseness:** Arrow functions have a shorter syntax compared to function expressions. This can make your code more concise and easier to read, especially when the function body is short.

3. **No arguments object:** Traditional function expressions in JavaScript have an `arguments` object, which is an array-like object that contains the arguments passed to the function. Arrow functions don't have their own `arguments` object, but they can access `arguments` from the enclosing scope. This is not used very often in React.

However, you should be careful when using arrow functions in render methods or functional components, especially if they're used for event handlers. Since a new function is created every time the component renders, this can lead to unnecessary re-renders of child components if the function is passed as a prop. To avoid this, you can define the function outside of the render method (as in the `handleClick` example above) or use the `useCallback` Hook in functional components.