```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>DOM Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="container"></div>
  <script src="app.js"></script>
</body>
</html>
```
```css
body {
  font-family: Arial, sans-serif;
}

#container {
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

p {
  margin-bottom: 20px;
}
```
```js
const container = document.getElementById("container");

const heading = document.createElement("h1");
heading.textContent = "Welcome to my website";

const paragraph1 = document.createElement("p");
paragraph1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel est ac faucibus. Sed fringilla, libero sit amet sagittis eleifend, augue enim hendrerit erat, in pellentesque tortor purus ac leo.";

const paragraph2 = document.createElement("p");
paragraph2.textContent = "Sed vitae neque auctor, elementum tortor eu, ultrices eros. Nullam sagittis ipsum a tincidunt laoreet. Sed quis tortor turpis. Vivamus non felis in mi faucibus malesuada vitae sed risus.";

container.appendChild(heading);
container.appendChild(paragraph1);
container.appendChild(paragraph2);
```