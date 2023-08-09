**useState:**

The `useState` hook in React allows you to add state to your functional components. It returns a stateful value and a function to update that value. Here's a simple example:

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```

In this example, we define a `count` state variable and its corresponding setter function `setCount` using the `useState` hook. We can update the state by calling `setCount` with the new value. In this case, we increment the count by 1 when the button is clicked.

**useRef:**

The `useRef` hook in React allows you to create a mutable reference that persists across re-renders of your component. It is commonly used to access DOM elements or to store any mutable value. Here's an example:

```jsx
import React, { useRef } from 'react';

const InputField = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default InputField;
```

In this example, we create a `ref` called `inputRef` using the `useRef` hook and assign it to the `ref` attribute of the input element. When the button is clicked, the `handleClick` function is executed, which calls the `focus` method on the `inputRef.current`, giving focus to the input field.

**useEffect:**

The `useEffect` hook in React allows you to perform side effects in functional components. It is similar to the lifecycle methods `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components. Here's an example:

```jsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Time: {time}</div>;
};

export default Timer;
```

In this example, we create a timer that increments the `time` state variable every second. We use the `useEffect` hook to start the timer when the component is mounted and clean up the timer when the component is unmounted by returning a cleanup function. The empty dependency array (`[]`) ensures that the effect runs only once when the component is mounted.

**Professional Usage:**

To use `useState`, `useRef`, and `useEffect` effectively, here are some best practices:

1. Declare and initialize state variables using `useState` at the top of your functional component.
2. Use meaningful variable names for state and ref variables.
3. Separate the declaration of each hook on a separate line to improve readability.
4. Write clean and concise code within the hooks' callbacks to avoid unnecessary complexity.
5. Use dependency arrays in `useEffect` to specify which variables the effect depends on. This helps prevent unnecessary re-renders.
6. Clean up any resources (such as timers or event listeners) in the cleanup function returned by `useEffect`.

---

**useState Examples:**

1. Simple counter with increment and decrement buttons:
```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```

2. Form input with controlled state:
```jsx
import React, { useState } from 'react';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default InputForm;
```

3. Toggle button to show/hide content:
```jsx
import React, { useState } from 'react';

const ToggleButton = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <button onClick={toggleContent}>Toggle Content</button>
      {showContent && <p>Hidden content</p>}
    </div>
  );
};

export default ToggleButton;
```

4. Todo list with add and delete functionality:
```jsx
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
```

5. Fetching and displaying data from an API:
```jsx
import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

**useRef Examples:**

1. Triggering a focus on an input element on component mount:
```jsx
import React, { useEffect, useRef } from 'react';

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
};

export default AutoFocusInput;
```

2. Tracking previous value using `useRef`:
```jsx
import React, { useState, useEffect, useRef } from 'react';

const PreviousValue = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PreviousValue;
```

3. Creating a mutable variable within a component:
```jsx
import React, { useRef } from 'react';

const ComponentWithMutableVariable = () => {
  const mutableVariable = useRef(0);

  const increment = () => {
    mutableVariable.current += 1;
    console.log('Mutable Variable:', mutableVariable.current);
  };

  return (
    <div>
      <p>Mutable Variable: {mutableVariable.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ComponentWithMutableVariable;
```

4. Using `useRef` to store a callback function:
```jsx
import React, { useEffect, useRef } from 'react';

const Timer = () => {
  const timerRef = useRef(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log('Tick');
    }, 1000);

    timerRef.current = timerId;

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return <div>Timer Component</div>;
};

export default Timer;
```

5. Accessing previous props or state values with `useRef`:
```jsx
import React, { useState, useEffect, useRef } from 'react';

const PreviousData = ({ data }) => {
  const prevDataRef = useRef();

  useEffect(() => {
    prevDataRef.current = data;
  });

  const prevData = prevDataRef.current;

  return (
    <div>
      <p>Current Data: {data}</p>
      <p>Previous Data: {prevData}</p>
    </div>
  );
};

export default PreviousData;
```

**useEffect Examples:**

1. Fetching data based on a dynamic prop:
```jsx
import React, { useState, useEffect } from 'react';

const UserDetails = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
};

export default UserDetails;
```

2. Subscribing and unsubscribing to an event:
```jsx
import React, { useEffect, useRef } from 'react';

const EventListenerComponent = () => {
  const eventListenerRef = useRef();

  useEffect(() => {
    const handleEvent = () => {
     

 console.log('Event occurred!');
    };

    eventListenerRef.current = handleEvent;

    document.addEventListener('click', eventListenerRef.current);

    return () => {
      document.removeEventListener('click', eventListenerRef.current);
    };
  }, []);

  return <div>Event Listener Component</div>;
};

export default EventListenerComponent;
```

3. Debouncing user input with `useEffect`:
```jsx
import React, { useState, useEffect } from 'react';

const DebouncedInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default DebouncedInput;
```

4. Tracking document title changes:
```jsx
import React, { useEffect, useState } from 'react';

const DynamicTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;

    return () => {
      document.title = 'React App';
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default DynamicTitle;
```

5. Clean up subscriptions or intervals on component unmount:
```jsx
import React, { useEffect } from 'react';

const SubscriptionComponent = () => {
  useEffect(() => {
    const subscription = subscribeToSomeEvent();

    return () => {
      // Clean up the subscription when the component unmounts
      unsubscribeFromEvent(subscription);
    };
  }, []);

  return <div>Subscription Component</div>;
};

export default SubscriptionComponent;
```
