**What is the Virtual DOM?**

The Virtual DOM (VDOM) is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as React. It's a lightweight copy of the actual DOM.

The key advantage of the Virtual DOM is that it allows us to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a significant performance boost, as it saves the costly DOM manipulation operations.

**How does Virtual DOM work?**

The process in which the Virtual DOM works can be broken down into 3 steps: 

1. **Create a virtual DOM:** When you render a JSX element, every single virtual DOM object gets updated.

2. **Diffing:** When the state of an object changes, React creates a new virtual DOM and then compares it with the pre-update version. This process is called "diffing". During this process, React figures out which virtual DOM objects have changed. This is also known as "diffing the virtual DOM" or reconciliation.

3. **Reconciliation:** Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM. In React terms, this process is called "reconciliation".

Here is an example to better illustrate this process:

Suppose you have a list of items. You've clicked a button to sort these items in alphabetical order. The Virtual DOM will create an entirely new list as a virtual DOM node. React will then diff this new virtual DOM against the old one, and in this case, it sees that some items are in different positions. React will then update the real DOM to match the new list order. It doesn't need to update the text content of each item because it didn't change; only the order changed.

This process makes sure that React only does the minimum amount of DOM manipulation necessary to keep your UI up-to-date.

Overall, the Virtual DOM exists to abstract away the costly direct manipulation of the DOM, and provides a simpler programming model for developers. It also allows React to do its computations within a JavaScript Virtual Machine (VM), off the main thread, avoiding potential performance bottlenecks.