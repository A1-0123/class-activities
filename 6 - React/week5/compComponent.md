`Compound components` are a design pattern in React that allow for more declarative and flexible APIs. They can create more maintainable and reusable code by encapsulating logic and allowing parent and child components to communicate. Let's explore the details through the mentioned modules.

### Module 1: Introduction to Compound Components

#### What are Compound Components?
Compound Components are a set of components that work together to accomplish a common task. They share an implicit state that makes the collaboration between them seamless.

#### Importance in React:
- **Flexibility**: They allow for more flexible and readable code by enabling the composition of components.
- **Reusability**: The encapsulated logic can be reused across different parts of the application.
- **Maintainability**: They often lead to cleaner and more maintainable code structures.

### Module 2: Designing Compound Components

#### Identifying Suitable Components:
Components that form part of a larger whole and share common behavior are suitable for the Compound Components pattern. For example, a `<Tabs>` component containing multiple `<Tab>` items.

#### Defining the API:
Designing a Compound Component involves creating a clean and intuitive API that allows developers to use the components in a composable way.

### Example: Tab Component API
```jsx
<Tabs>
  <Tab title="Tab 1">Content 1</Tab>
  <Tab title="Tab 2">Content 2</Tab>
</Tabs>
```

### Module 3: Implementing Basic Compound Components

#### Structuring Components:
A typical Compound Component consists of a container component and several child components.

#### Sharing State:
A common pattern is to use React’s Context API to share state between the components.

#### Implementing Logic:
The parent and child components should have well-defined responsibilities.

### Example: Implementing a Tab Component
```jsx
const TabContext = React.createContext();

function Tabs({ children }) {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}

function Tab({ title, children }) {
  const { activeTab, setActiveTab } = React.useContext(TabContext);
  // Implement logic to render based on activeTab
}

// Usage
<Tabs>
  <Tab title="Tab 1">Content 1</Tab>
  <Tab title="Tab 2">Content 2</Tab>
</Tabs>
```

### Conclusion

Compound Components provide a powerful pattern for creating flexible and reusable UI components in React. By understanding how to design and implement them, developers can create more modular and maintainable code.

---

### Introduction to Context API

The Context API in React allows you to share values (such as state, functions, or any arbitrary value) between components without having to explicitly pass props through every level of the component tree. It's particularly useful in the context of Compound Components where multiple levels of nested components need to access shared data or behavior.

### How Context API Works with Compound Components

#### 1. **Creating a Context**

You start by creating a Context object using `React.createContext()`. This object contains two main components: `Provider` and `Consumer` (or `useContext` hook).

```jsx
const MyContext = React.createContext();
```

#### 2. **Providing Values with the Provider Component**

The `Provider` component is used to wrap the part of the component tree that needs access to the Context value. You can pass the value you want to share as a prop to the `Provider`.

```jsx
<MyContext.Provider value={sharedValue}>
  {/* Children components that can access the sharedValue */}
</MyContext.Provider>
```

#### 3. **Consuming Values in Nested Components**

Within the part of the component tree wrapped by the `Provider`, any component can access the shared value using the `useContext` hook or the `Consumer` component.

```jsx
function ChildComponent() {
  const value = React.useContext(MyContext);
  return <div>{value}</div>;
}
```

### Example: Using Context API in a Compound Component (Tabs)

Let's continue with the example of a Tabs component:

```jsx
const TabContext = React.createContext();

function Tabs({ children }) {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}

function Tab({ title, children, index }) {
  const { activeTab, setActiveTab } = React.useContext(TabContext);

  // Here's where we "render based on activeTab"
  if (activeTab === index) {
    return (
      <div onClick={() => setActiveTab(index)}>
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
    );
  } else {
    return (
      <div onClick={() => setActiveTab(index)}>
        <h3>{title}</h3>
      </div>
    );
  }
}
```

Here, the `TabContext` shares the active tab state and the function to set the active tab with all the nested `Tab` components.

### Conclusion

The Context API is an essential part of implementing Compound Components in React. By allowing you to share values and behavior across nested components without prop drilling, it helps in creating more maintainable, readable, and flexible code structures.

When used appropriately, Compound Components with Context can make components more declarative and can help encapsulate complex logic, making it easier to understand and maintain the code.

---

### Module 5: Advanced Patterns with Compound Components

#### **1. Handling Configuration Props**

Configuration props allow you to pass down specific settings to the Compound Components, letting you control their behavior from the outside.

##### Example:

```jsx
<Tabs config={{ autoSwitch: true }}>
  <Tab title="Tab 1">Content 1</Tab>
  <Tab title="Tab 2">Content 2</Tab>
</Tabs>
```

In this example, the `config` prop can be used inside the `<Tabs>` component to control specific behaviors like auto-switching tabs.

#### **2. Creating Dynamic Compound Components**

Dynamic Compound Components can adapt to changes and different configurations, offering more flexibility in their usage.

##### Example:

```jsx
function Tabs({ children, renderTabHeader }) {
  // ...
  return (
    <>
      {renderTabHeader ? renderTabHeader(activeTab) : null}
      {/* other tab logic */}
    </>
  );
}
```

In this example, the `renderTabHeader` function prop allows custom rendering of the tab header.

#### **3. Handling Conditional Rendering within the Structure**

Sometimes, you may want to conditionally render parts of your Compound Components based on specific conditions or props.

##### Example:

```jsx
function Tab({ title, children, disabled }) {
  if (disabled) return null;
  // rest of the rendering
}
```

Here, the `disabled` prop can be used to conditionally render a tab or hide it.

### Module 6: Testing Compound Components

Testing is crucial to ensure the functionality and robustness of Compound Components. Here's how you might approach it:

#### **1. Unit Testing Individual Components**

You can test individual parts of the Compound Component to ensure that they work as expected in isolation.

##### Example using Jest and React Testing Library:

```jsx
test('Tab renders correctly', () => {
  render(<Tab title="Test Tab">Test Content</Tab>);
  expect(screen.getByText('Test Tab')).toBeInTheDocument();
});
```

#### **2. Integration Testing**

You may also want to test how the components work together as a whole.

##### Example:

```jsx
test('Tabs switch correctly', () => {
  render(
    <Tabs>
      <Tab title="Tab 1">Content 1</Tab>
      <Tab title="Tab 2">Content 2</Tab>
    </Tabs>
  );
  
  fireEvent.click(screen.getByText('Tab 2'));
  expect(screen.getByText('Content 2')).toBeVisible();
});
```

#### **3. Testing with Different Props and States**

You should also test how the Compound Components respond to different props and states, ensuring that they handle various scenarios properly.

### Conclusion

Advanced patterns with Compound Components offer a multitude of possibilities for creating flexible and powerful UI structures. By understanding these advanced concepts, you can build components that are more adaptable and maintainable.
