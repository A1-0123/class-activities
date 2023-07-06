Sure, let's create a manual React JS project with the structure. We'll use `npm` (Node Package Manager) for this.

**Step 1: Setting up the project**

First, we need to create a new directory for our project and initialize it with npm. Let's call our project "my-react-app". Open a terminal and run:

```bash
mkdir my-react-app
cd my-react-app
npm init -y
```

The `npm init -y` command initializes a new npm project and creates a `package.json` file with default values.

**Step 2: Installing dependencies**

Next, we need to install React and ReactDOM:

```bash
npm install react react-dom
```

We also want to use Babel to transpile our JSX and ES6 code to ES5, and webpack to bundle our code:

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server html-webpack-plugin

--- &

webpack-dev-server@latest
```

**Step 3: Setting up Babel**

Create a new file in the root directory called `.babelrc` and add the following code:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

This tells Babel to use the "preset-env" and "preset-react" presets when transpiling our code.

**Step 4: Setting up Webpack**

Create a new file in the root directory called `webpack.config.js` and add the following code:

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Specify the directory to serve static files from
    },
    compress: true,
    port: 9000,
  },
};
```

This configuration tells Webpack to use Babel to transpile any `.js` or `.jsx` files (excluding those in `node_modules`), to use `./src/index.js` as the entry point of our app, to output our bundle to `./dist/bundle.js`, and to generate an HTML file in our dist directory using `./src/index.html` as a template.

**Step 5: Creating our source files**

We need to create our source directory and files:

```bash
mkdir src
cd src
touch index.js index.html App.js
```

In `index.html`, add a basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

In `index.js`, import React and ReactDOM and render our App component:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

In `App.js`, create a simple functional component:

```jsx
import React from "react";

function App() {
  return <h1>Hello, world!</h1>;
}

export default App;
```

**Step 6: Adding scripts**

In your `package.json`, add the following scripts:

```json
"scripts": {
  "start": "webpack serve --open --mode development",
  "build": "webpack --mode production"
}
```

With these scripts, you can start the development server with `npm start` and build your application for production with `npm run build`.

**Step 7: Running the project**

You're all set! You can now run `npm start` from the terminal to start the development server and open your app in the browser.

This is a basic setup. Depending on your needs, you might want to add other packages and tools. For example, you might want to add a CSS preprocessor (like SASS), a linter (like ESLint), or a state management library (like Redux). You might also want to configure Babel or Webpack further to suit your specific needs.

---

### Add SASS

Sure, you can add SASS support to your project by following these steps:

**Step 1: Installing dependencies**

First, you need to install the `sass-loader`, `sass`, and `css-loader` using npm. The `sass-loader` allows Webpack to compile SASS files, `sass` is the library that `sass-loader` uses to actually compile SASS, and `css-loader` resolves CSS imports:

```bash
npm install --save-dev sass-loader sass css-loader style-loader
```

**Step 2: Configuring Webpack**

Next, you need to update your Webpack configuration to use these loaders. Add a new rule to the `module.rules` array in your `webpack.config.js`:

```javascript
{
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', 'sass-loader'],
}
```

Now, Webpack will use `sass-loader` to compile any `.scss` files, `css-loader` to resolve CSS imports, and `style-loader` to inject styles into the DOM.

Here's what your updated `webpack.config.js` might look like:

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
```

**Step 3: Using SASS**

Now you can use SASS in your project! Create a `.scss` file:

```bash
touch src/styles.scss
```

In your `styles.scss` file, you can write SASS:

```scss
$primary-color: hotpink;

body {
  color: $primary-color;
}
```

And import it in your `App.js` file:

```jsx
import React from "react";
import "./styles.scss";

function App() {
  return <h1>Hello, world!</h1>;
}

export default App;
```

When you run `npm start`, you should see that your styles are applied correctly. Note that Webpack will compile and include your SASS styles in the JavaScript bundle, and they will be injected into the DOM at runtime.
