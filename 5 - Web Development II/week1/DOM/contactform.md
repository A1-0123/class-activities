```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Form App</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="form-app">
      <h1>Contact Us</h1>
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p class="success-message"></p>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

```css
body {
  font-family: Arial, sans-serif;
}

.form-app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

h1 {
  text-align: center;
  margin-top: 0;
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input,
textarea {
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 20px;
}

p.success-message {
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  display: none;
}
```

```js
const form = document.querySelector("form");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const subject = form.elements["subject"].value;
  const message = form.elements["message"].value;
  console.log(
    `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
  );
  successMessage.style.display = "block";
  form.reset();
});
```
