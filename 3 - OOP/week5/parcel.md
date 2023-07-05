**Hour 1: Introduction to Parcel**

**Overview of Parcel and its benefits as a web application bundler**

Parcel is a web application bundler that aims to simplify the build process for modern web applications. It offers zero-configuration out of the box, making it easy to set up and use without complex configuration files.

Some benefits of using Parcel as a bundler include:

- **Ease of use**: Parcel requires minimal configuration and handles most of the setup automatically, allowing you to focus on writing code.
- **Fast development workflow**: It supports hot module replacement (HMR) and provides instant feedback on code changes without requiring a manual refresh.
- **Built-in support for various file types**: Parcel can bundle not only JavaScript but also CSS, SCSS, HTML, images, and many other file types commonly used in web development.
- **Automatic optimization**: It performs optimizations like minification, code splitting, and caching by default, ensuring optimized bundles for production deployments.

**Installation and setup of Parcel in a new project**

To get started with Parcel, you'll need to have Node.js installed on your machine. Follow these steps to set up Parcel in a new project:

1. **Create a new project directory**:
   Open your terminal and navigate to the directory where you want to create your new project.

   ```bash
   mkdir my-parcel-project
   cd my-parcel-project
   ```

2. **Initialize a new Node.js project**:
   Initialize a new Node.js project using npm (Node Package Manager).

   ```bash
   npm init -y
   ```

   This command creates a new `package.json` file, which will store information about your project and its dependencies.

3. **Install Parcel as a dev dependency**:
   Parcel is typically used as a development tool, so we'll install it as a dev dependency.

   ```bash
   npm install --save-dev parcel
   ```

   This command installs Parcel locally and adds it to the `devDependencies` section of your `package.json` file.

4. **Create a basic HTML file**:
   Create an `index.html` file in the root of your project directory and add some basic HTML content.

   ```html
   <!-- index.html -->
   <!DOCTYPE html>
   <html>
   <head>
     <title>My Parcel Project</title>
   </head>
   <body>
     <h1>Welcome to My Parcel Project</h1>
     <script src="./index.js"></script>
   </body>
   </html>
   ```

   This HTML file will be the entry point for your application.

5. **Create a basic JavaScript file**:
   Create an `index.js` file in the same directory as your `index.html` file.

   ```javascript
   // index.js
   console.log("Hello, Parcel!");
   ```

   This JavaScript file will be bundled by Parcel and injected into your HTML file.

6. **Run Parcel in development mode**:
   Open your terminal and run the following command to start Parcel in development mode.

   ```bash
   npx parcel index.html
   ```

   Parcel will automatically detect the entry point (`index.html`) and start bundling your JavaScript code.

   Look for the output that indicates the development server is running, usually at `http://localhost:1234`.

7. **View the bundled application**:
   Open your web browser and navigate to the URL provided by Parcel (`http://localhost:1234` by default). You should see the "Welcome to My Parcel Project" message logged in the browser's console.

Congratulations

! You have successfully set up Parcel in a new project and created a basic HTML/JavaScript application. Parcel automatically bundles the JavaScript code and serves it through a development server.

Feel free to modify the HTML and JavaScript files to experiment further. Parcel will automatically detect the changes and update the bundled application in the browser in real-time.

In the next section, we'll explore working with modules in Parcel and how to import and export JavaScript modules.

**Hour 2: Working with Modules**

In this section, we'll focus on working with modules in JavaScript and how to leverage them in Parcel. Modules allow us to organize and encapsulate our code, making it more maintainable and reusable.

**Understanding ES modules and their usage in JavaScript**

ES modules are a standardized way of importing and exporting code in JavaScript. They provide a mechanism to split our code into separate files and import functionality from one module into another.

ES modules have two main types of exports: default exports and named exports. Default exports allow us to export a single value or object as the default export, while named exports allow us to export multiple values or objects with specific names.

Here's an example of exporting and importing in ES modules:

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

```javascript
// index.js
import { add, subtract } from './math.js';

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 5)); // Output: 5
```

**Importing and exporting modules in JavaScript files**

Parcel supports ES modules out of the box. You can import and export modules in your JavaScript files without any additional configuration.

To import a module in a JavaScript file, use the `import` statement followed by the module path and the names of the exports you want to import. You can use destructuring to import specific functions or objects from a module.

To export functionality from a module, use the `export` keyword followed by the declarations you want to export. You can have multiple export statements in a module to export multiple values or objects.

Parcel will handle the module resolution and bundling automatically based on the import statements in your code.

**Managing module dependencies with npm and installing external packages**

Parcel integrates seamlessly with npm, the Node Package Manager, for managing external dependencies. You can use npm to install external packages and include them in your project.

To install an external package, use the following command:

```bash
npm install package-name
```

For example, to install the popular `lodash` library, run:

```bash
npm install lodash
```

Parcel will automatically resolve and bundle the required dependencies when you import them in your JavaScript files.

Remember to include the appropriate import statements in your JavaScript code to use the functionalities provided by the installed packages.

**Using third-party libraries and modules in a Parcel project**

Parcel allows you to leverage third-party libraries and modules in your project effortlessly. Follow these steps to include and use external libraries:

1. Install the desired library using npm:

   ```bash
   npm install library-name
   ```

2. Import the library in your JavaScript file:

   ```javascript
   import LibraryName from 'library-name';
   ```

3. Use the functionality provided by the library in your code:

   ```javascript
   const result = LibraryName.someFunction();
   ```

Ensure that you consult the documentation of the specific library you're using for guidance on how to import and utilize its functionalities.

In the next section, we'll explore the development workflow with Parcel, including hot module replacement (HMR) and live reloading.

**Hour 3: Development Workflow**

In this section, we'll explore the development workflow with Parcel, focusing on hot module replacement (HMR) and live reloading. These features provide a seamless and efficient development experience by allowing us to see instant changes in the browser without manual refreshes.

**Configuring development server with hot module replacement (HMR) in Parcel**

Hot module replacement (HMR) is a feature that allows modules to be replaced or updated without a full page reload. It enables us to see the changes in our code immediately reflected in the browser, preserving the application state.

Parcel includes built-in support for HMR, making it easy to enable in our development workflow. It automatically detects changes in our code and updates the application in the browser without requiring a manual refresh.

To enable HMR in Parcel, we need to do the following:

1. Ensure that the Parcel development server is running using the `npx parcel index.html` command.

2. Make changes to your code (e.g., HTML, SCSS, or JavaScript).

3. Save the changes, and Parcel will automatically update the application in the browser.

**Working with live reloading to see instant changes in the browser**

Live reloading is another useful feature provided by Parcel that helps us see instant changes in the browser. It automatically refreshes the page whenever changes are detected in our code.

Live reloading is particularly helpful when working with static assets like HTML and CSS. Whenever we make changes to these files and save them, Parcel triggers a page reload in the browser to reflect the latest changes.

By default, Parcel automatically enables live reloading when changes are detected in supported file types.

**Debugging JavaScript code using browser developer tools and source maps**

When working with JavaScript code, debugging is an essential part of the development process. Thankfully, Parcel simplifies this process by providing source maps out of the box.

Source maps allow us to debug our original source code in the browser's developer tools, even though the code is bundled and minified. They provide a mapping between the bundled code and the original source files, making it easier to identify and debug issues.

To debug JavaScript code using source maps in Parcel:

1. Ensure that you are running the development server using `npx parcel index.html`.

2. Open the application in the browser and open the developer tools.

3. Navigate to the "Sources" or "Debugger" tab in the developer tools.

4. Locate the original source files under the "Sources" or "Filesystem" section, and set breakpoints or debug as needed.

Parcel automatically generates and serves source maps when running in development mode, enabling seamless debugging of your JavaScript code.

**Optimizing development workflow with Parcel plugins and custom configurations**

Parcel offers flexibility to enhance your development workflow by using plugins and custom configurations. Plugins can extend the functionality of Parcel, while custom configurations allow you to tailor the build process to your specific requirements.

Some common use cases for plugins and custom configurations in Parcel include:

- **Adding CSS preprocessors**: Parcel supports various CSS preprocessors like SCSS, Less, and Stylus. You can use plugins to enable these preprocessors and customize the configuration as needed.

- **Optimizing images**: Parcel provides plugins to optimize images during the build process, reducing their size and improving page load times.

- **Adding custom transformations**: You can use plugins to apply custom transformations to your code, such as transpiling TypeScript, minifying code, or adding custom Babel configurations.

- **Configuring custom entry points**: Parcel allows you to define custom entry points in addition to the default `index.html` file. This can be useful if you have multiple entry points in your project.

By leveraging plugins and custom configurations, you can tailor Parcel to meet your specific project requirements and optimize your development workflow.

Certainly! To create a config file for Parcel, you need to create a file named `.parcelrc` in the root of your project directory. This file should be in JSON format and can contain various configuration options to customize Parcel's behavior.

Here's an example of a `.parcelrc` file with some common configuration options:

```json
{
  "extends": "@parcel/config-default",
  "publicUrl": "./",
  "plugins": [
    "parcel-plugin-sass",
    "parcel-plugin-eslint"
  ],
  "transforms": {
    "*.js": ["parcel-transform-custom-transform"]
  }
}
```

Let's go through the options in the config file:

- **extends**: Allows you to extend an existing configuration preset. In this example, we're extending the default configuration provided by Parcel.

- **publicUrl**: Specifies the public URL for the bundled application. This is useful when deploying your application to a subdirectory instead of the root of your domain.

- **plugins**: Defines an array of Parcel plugins to use in your project. Plugins extend Parcel's functionality and can be used for tasks like handling Sass files (`parcel-plugin-sass`) or performing ESLint checks (`parcel-plugin-eslint`).

- **transforms**: Specifies a map of file extensions to custom transform names. Transforms are used to apply custom transformations to specific file types. In this example, we're applying a custom transform called `parcel-transform-custom-transform` to JavaScript files (`*.js`).

You can customize the configuration options based on your project's requirements. Parcel provides a wide range of configuration options to suit different use cases, including asset handling, code splitting, and more. For a comprehensive list of available options, you can refer to the official Parcel documentation.

Once you've created your `.parcelrc` file, Parcel will automatically pick up the configuration and apply the specified options during the build process.

Feel free to experiment with different configuration options and plugins to tailor Parcel's behavior to your project's needs.

Certainly! Here's more information about plugins and transforms in Parcel:

**Plugins:**
Plugins extend Parcel's functionality by adding additional features and capabilities to the build process. They allow you to handle specific file types, optimize assets, apply custom transformations, and more. Here are some commonly used plugins:

- **parcel-plugin-sass**: Adds support for Sass stylesheets, allowing you to write and bundle Sass files in your project.
- **parcel-plugin-less**: Provides support for Less stylesheets, enabling you to write and bundle Less files.
- **parcel-plugin-eslint**: Integrates ESLint into the build process, allowing you to perform linting checks on your JavaScript code.
- **parcel-plugin-imagemin**: Optimizes images during the build process, reducing their file size and improving page load times.
- **parcel-plugin-sw-precache**: Generates a service worker using the sw-precache library, enabling offline caching of your application's assets.
- **parcel-plugin-react-refresh**: Integrates React Refresh, enabling fast refresh for React components during development.

To use a plugin, you need to install it as a dependency in your project. For example, to use the `parcel-plugin-sass` plugin, you would install it using:

```bash
npm install parcel-plugin-sass --save-dev
```

After installation, Parcel will automatically detect and utilize the plugin based on your project's needs.

**Transforms:**
Transforms in Parcel allow you to apply custom transformations to specific file types during the build process. They are useful for tasks such as transpiling code, minifying files, or applying other custom processing steps. Here's an example of a transform configuration:

```json
"transforms": {
  "*.js": ["parcel-transform-custom-transform"]
}
```

In this example, we apply a custom transform called `parcel-transform-custom-transform` to JavaScript files (`*.js`). The transform can be a third-party library or a custom script you've written to perform specific transformations on JavaScript code.

You can create your own custom transforms or use existing transforms provided by the Parcel community. To use a transform, you would need to install it as a dependency and configure it in your `.parcelrc` file.

To explore more plugins and transforms available for Parcel, you can browse the official Parcel plugin repository and the community-contributed packages on npm. These resources provide a wide range of plugins and transforms to enhance your development and build process with Parcel.

Remember to consult the documentation and README files of specific plugins and transforms for installation instructions, usage guidelines, and any additional configuration options they may provide.

**Hour 4: Production Build and Deployment**

In this section, we'll focus on preparing your Parcel project for production and deploying it to a hosting service like Vercel or Netlify.

**Understanding the production build process**

When preparing your Parcel project for production, it's important to optimize the build process to create a production-ready bundle. This typically involves tasks such as minification, code splitting, compression, and cache busting.

Parcel provides built-in optimizations for production builds, ensuring that your application performs efficiently and loads quickly in a production environment.

To generate a production build using Parcel, you can use the following command:

```bash
npx parcel build index.html
```

This command will create a `dist` folder (by default) containing the optimized and bundled files ready for deployment.

**Configuring Parcel for production build**

To customize the production build process, you can configure additional options in your `.parcelrc` file specifically for the production environment. Some common configuration options include:

- **Minification**: Enables minification of JavaScript, CSS, and HTML files to reduce their file sizes.

- **Code splitting**: Allows Parcel to split your code into multiple chunks, improving the initial load time of your application.

- **Compression**: Enables gzip or Brotli compression on the bundled assets, reducing the overall file sizes.

- **Cache busting**: Automatically adds a unique hash to the filenames of the bundled assets, ensuring that clients download the latest version when changes are made.

For example, here's a modified `.parcelrc` file with production-specific options:

```json
{
  "extends": "@parcel/config-default",
  "publicUrl": "./",
  "plugins": [
    "parcel-plugin-sass",
    "parcel-plugin-eslint"
  ],
  "transforms": {
    "*.js": ["parcel-transform-custom-transform"]
  },
  "optimization": {
    "minify": true,
    "splitting": true,
    "compression": true,
    "cache": true
  }
}
```

You can adjust the options based on your project's requirements and performance considerations.

**Deploying to a hosting service like Vercel or Netlify**

To deploy your Parcel project to a hosting service, such as Vercel or Netlify, follow these general steps:

1. Create an account on the hosting service of your choice.

2. Connect your project repository to the hosting service.

3. Configure the deployment settings, such as the build command and the target directory.

4. Trigger a deployment to the hosting service, either manually or automatically.

Both Vercel and Netlify provide seamless integration with popular version control systems like GitHub or GitLab. This allows you to set up automatic deployments whenever changes are pushed to your repository.

For example, with Vercel, you can deploy your Parcel project by following these steps:

1. Sign up for an account on Vercel (https://vercel.com) and log in.

2. Connect your project repository to Vercel by linking your GitHub or GitLab account.

3. Configure the deployment settings, such as the build command (e.g., `npx parcel build index.html`) and the output directory (e.g., `dist`).

4. Choose the deployment branch and any additional settings you want to customize.

5. Trigger a manual deployment or let Vercel automatically deploy your project whenever changes are pushed to the connected repository.

Similarly, Netlify offers a straightforward deployment process. After connecting your project repository, you can configure the build command (`npx parcel build index.html`) and specify the publish directory (`dist`). Netlify automatically triggers deployments when changes are pushed to the repository.

These hosting services provide additional features like custom domains, HTTPS support, and CDN integration, making it easy to deploy and scale

 your Parcel project.

Remember to consult the documentation and guides provided by your chosen hosting service for specific instructions on deploying a Parcel project.

Apologies for the oversight. When deploying to Vercel, you may need to use environment variables or secrets to securely store sensitive information, such as API keys or access tokens. Vercel provides a feature called "secrets" to manage and securely inject these variables into your deployments.

Here's an updated example of the GitHub Actions workflow, incorporating the usage of Vercel secrets:

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 14

      - name: Install Vercel CLI
        run: npm install -g vercel

      - name: Build project
        run: npx parcel build index.html

      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: vercel --prod --token $VERCEL_TOKEN
```

In this updated workflow, we're using the `VERCEL_TOKEN` environment variable to authenticate with Vercel. To securely set this token, you can add it as a secret in your GitHub repository.

To set up the secret in your GitHub repository:

1. Go to your GitHub repository.
2. Navigate to the "Settings" tab.
3. Select "Secrets" from the left sidebar.
4. Click on "New repository secret".
5. Provide a name for the secret, such as `VERCEL_TOKEN`.
6. Paste the Vercel token value into the "Value" field.
7. Save the secret.

After setting up the secret, you can reference it in your workflow by using the `secrets` context along with the secret name. In the updated workflow, we're referencing the secret as `${{ secrets.VERCEL_TOKEN }}`.

When the workflow runs, GitHub will securely inject the value of the `VERCEL_TOKEN` secret into the `VERCEL_TOKEN` environment variable, which is then used by the `vercel` CLI command to authenticate the deployment to Vercel.

By using secrets, you can ensure that sensitive information is not exposed in your workflow file, providing a more secure way to handle authentication and sensitive data during deployments.

Remember to replace `VERCEL_TOKEN` with the actual secret name you used in your GitHub repository settings.

Please refer to the documentation of GitHub Secrets and Vercel for more details and best practices on managing and using secrets in your workflows and deployments.

---

Certainly! Here's an example of a folder structure for a modern website built with Parcel.js and SCSS:

```
├── src
│   ├── assets
│   │   ├── images
│   │   │   ├── logo.png
│   │   │   └── banner.jpg
│   │   ├── fonts
│   │   │   ├── OpenSans-Regular.ttf
│   │   │   └── Roboto-Bold.ttf
│   │   └── ...
│   ├── components
│   │   ├── header
│   │   │   ├── Header.js
│   │   │   ├── Header.scss
│   │   │   └── ...
│   │   ├── footer
│   │   │   ├── Footer.js
│   │   │   ├── Footer.scss
│   │   │   └── ...
│   │   ├── ...
│   ├── pages
│   │   ├── home
│   │   │   ├── Home.js
│   │   │   ├── Home.scss
│   │   │   └── ...
│   │   ├── about
│   │   │   ├── About.js
│   │   │   ├── About.scss
│   │   │   └── ...
│   │   ├── contact
│   │   │   ├── Contact.js
│   │   │   ├── Contact.scss
│   │   │   └── ...
│   │   └── ...
│   ├── styles
│   │   ├── global.scss
│   │   ├── variables.scss
│   │   └── ...
│   └── index.js
├── .parcelrc
└── index.html
```

Let's break down the folder structure:

- `src`: This is the root directory for all the source code files.
  - `assets`: Contains all the static assets like images, fonts, and other resources.
  - `components`: Contains reusable UI components used across different pages.
  - `pages`: Contains individual pages of the website, each with its own folder.
  - `styles`: Contains SCSS files for styling the website, including global styles and variables.
  - `index.js`: The entry point JavaScript file that initializes and renders the website.
- `.parcelrc`: The configuration file for Parcel.js.
- `index.html`: The main HTML file that serves as the template for the website.

Each page in the `pages` folder would have its own folder with a JavaScript file (`PageName.js`) for the logic, a corresponding SCSS file (`PageName.scss`) for styling, and any other necessary files.

Similarly, components in the `components` folder would have their own folders, each containing a JavaScript file, an SCSS file, and any other required files.

The `styles` folder contains global styles (`global.scss`) that are applied across the entire website, as well as `variables.scss` for defining reusable variables and mixins.

With this folder structure, you can organize your code in a modular and scalable way, separating concerns and making it easier to maintain and expand your website.

Remember to adjust the folder structure based on your specific project requirements, and feel free to add additional directories as needed.

Please note that this is just a suggested folder structure, and you can modify it to suit your preferences and project needs.

When building a multi-page website with pure JavaScript and HTML, there are different approaches you can take to implement routing. Here's an example of a professional way to handle routing in a multi-page website using pure JavaScript:

1. Define your routes: Start by defining the routes for your website. Each route represents a specific page or content section.

```javascript
const routes = [
  { path: '/', page: 'home.html' },
  { path: '/about', page: 'about.html' },
  { path: '/contact', page: 'contact.html' },
  // Add more routes as needed
];
```

2. Create a function to load the content for each route: This function will handle fetching the content for the specified route and rendering it in the appropriate container element.

```javascript
function loadRouteContent(route) {
  fetch(route.page)
    .then((response) => response.text())
    .then((content) => {
      const container = document.getElementById('content');
      container.innerHTML = content;
    })
    .catch((error) => {
      console.error('Error loading route content:', error);
    });
}
```

3. Implement the router logic: This is where you handle navigation and route rendering based on the current URL.

```javascript
function handleNavigation() {
  const currentPath = window.location.pathname;

  const matchingRoute = routes.find((route) => route.path === currentPath);

  if (matchingRoute) {
    loadRouteContent(matchingRoute);
  } else {
    // Handle 404 page or redirect to a default route
    window.location.href = '/'; // Redirect to the home page for unknown routes
  }
}

// Add an event listener for the initial page load
window.addEventListener('DOMContentLoaded', handleNavigation);

// Add an event listener for navigation events (e.g., clicking on links)
window.addEventListener('popstate', handleNavigation);
```

4. Update the HTML template: Modify your HTML template to include a container element where the route content will be rendered.

```html
<!-- Add this element where the route content will be rendered -->
<main id="content"></main>
```

With this approach, each route is associated with a specific HTML page, and the content for that page is fetched dynamically when the route is accessed. This allows you to separate your content into different HTML files, making it more modular and maintainable.

It's worth noting that while this approach works for simple multi-page websites, for more complex applications, you might consider using a client-side routing library or framework that offers additional features and better management of routes, such as React Router, Vue Router, or Reach Router. These libraries provide more advanced routing capabilities and are commonly used in single-page applications.

In the example provided, the `'home.html'` file represents the content for the home page. It contains the HTML structure and content that should be displayed when the user navigates to the home route (`'/'`).

The specific content within the `'home.html'` file would depend on your website's design and requirements. Here's an example of what the `'home.html'` file might contain:

```html
<div class="home">
  <h1>Welcome to the Home Page</h1>
  <p>This is the home page content.</p>
  <a href="/about">Learn more</a>
</div>
```

In this example, we have a `<div>` container with a class of `'home'`. Inside the container, there's an `<h1>` heading with a welcome message, a `<p>` element with some introductory text, and an `<a>` link to navigate to the about page (`'/about'`).

You can customize the content and styling within the `'home.html'` file to suit your specific website design and requirements. This includes adding additional elements, applying CSS styles, and incorporating any other desired functionality.

Remember to ensure that the `'home.html'` file is located in the same directory as your other HTML files and that it is correctly referenced in your routing logic and navigation system.