### What is the best way to write id and class names?

- Use lowercase letters
- Use dashes to separate words
- Use meaningful names

### What is the difference between id and class?

- id is unique, class is not

### Example

```html
<div id="main">
  <p class="paragraph">Hello World!</p>
</div>

<div id="sidebar">
  <p class="paragraph">Hello World!</p>
</div>

<div id="footer">
  <p class="paragraph">Hello World!</p>
</div>

```

```css
#main {
  background-color: red;
}

#sidebar {
  background-color: blue;
}

#footer {
  background-color: green;
}

.paragraph {
  color: white;
}

```

### How we can use names in complex html structure?

```html
<div id="main">
  <p class="paragraph">Hello World!</p>
</div>

<div id="sidebar">
  <p class="paragraph">Hello World!</p>
  <div id="sidebar-content">
    <p class="paragraph">Hello World!</p>
    <p class="paragraph">Hello World!</p>
    </div>
</div>

<div id="footer">
  <p class="paragraph">Hello World!</p>
  <div id="footer-content">
    <p class="paragraph">Hello World!</p>
    <p class="paragraph">Hello World!</p>
  </div>
</div>
    
```

```css
#main {
  background-color: red;
}

#sidebar {
  background-color: blue;
}

#sidebar-content {
  background-color: yellow;
}

#footer {
  background-color: green;
}

#footer-content {
  background-color: orange;
}

.paragraph {
  color: white;
}

```