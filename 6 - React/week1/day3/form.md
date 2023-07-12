**1. Controlled Components:**

```jsx
import React, { useState } from 'react';

function NameForm() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```

**2. The textarea Tag:**

```jsx
import React, { useState } from 'react';

function EssayForm() {
  const [value, setValue] = useState('Please write an essay about your favorite DOM element.');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('An essay was submitted: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Essay:
        <textarea value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```

**3. The select Tag:**

```jsx
import React, { useState } from 'react';

function FlavorForm() {
  const [value, setValue] = useState('coconut');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('Your favorite flavor is: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={value} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```

**4. Handling Multiple Inputs:**

```jsx
import React, { useState } from 'react';

function Reservation() {
  const [isGoing, setIsGoing] = useState(true);
  const [numberOfGuests, setNumberOfGuests] = useState(2);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === "isGoing") {
      setIsGoing(value);
    } else if (name === "numberOfGuests") {
      setNumberOfGuests(value);
    }
  }

  return (
    <form>
      <label>
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={isGoing}
          onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={numberOfGuests}
          onChange={handleInputChange} />
      </label>
    </form>
  );
}
```

**5. Form Validation:**

```jsx
import React, { useState } from 'react';

function MyForm() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    if (!value.trim()) {
      alert("Input cannot be empty");
      event.preventDefault();
    } else {
      // Handle the submit event
      alert('Input submitted: ' + value);
      event.preventDefault();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```

Functional components are a bit more concise and easier to test and understand than class components. They also encourage cleaner code by making side-effects more visible and easier to manage.

---

```jsx
import React, { useState } from 'react';

function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send form data to your server
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}
```

In this example, the `form` state is an object, with each key corresponding to a different form input. The `handleChange` function uses the `name` of the input that triggered the change event to update the appropriate state property. This is an efficient pattern for handling forms with many inputs.

Notice the use of the spread operator (`...`) in `handleChange`. This is used to create a new object with the same properties as the current state, but with the property corresponding to the changed input updated with the new value. This is necessary because in React, state should never be modified directly, but should always be updated using the state-setting function (`setForm` in this case).

Finally, the `handleSubmit` function would typically be where you would send the form data to your server. In this case, it's just logging the form data to the console.