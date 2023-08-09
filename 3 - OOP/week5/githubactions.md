Continuous Integration (CI) and Continuous Deployment (CD), collectively CI/CD, are key practices in modern software development. They revolve around the idea that code changes should be integrated, tested, and deployed as frequently and reliably as possible. This process improves software quality, reduces validation time, and speeds up product delivery. Let's break these concepts down further:

1. **Continuous Integration (CI):** Continuous Integration is a practice in which developers regularly merge their code changes into a central repository, after which automated builds and tests are run. The key goals of CI are to find and address bugs quicker, improve software quality, and reduce the time it takes to validate and release new software updates.

2. **Continuous Deployment (CD):** Continuous Deployment follows the testing that happens during Continuous Integration and involves deploying the changes to the production environment automatically. This process ensures that you can release new changes to your customers quickly in a sustainable way. 

Now, how does GitHub Actions play a role in CI/CD?

**GitHub Actions:**

GitHub Actions is a CI/CD platform that allows developers to automate how they build, test, and deploy their applications, directly from their GitHub repositories. You can write individual tasks, called "actions", and combine them to create a custom workflow.

Workflows are custom automated processes that you can set up in your repository to build, test, package, release, or deploy any code project on GitHub. They are defined in YAML files and run on GitHub-hosted runners, based on specified event triggers.

Here is a basic example of a CI/CD workflow in GitHub Actions:

```yaml
name: CI/CD workflow
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Set up Node.js
      uses: actions/setup-node@v1
      with:
        node-version: 12
    - name: Install dependencies
      run: npm ci
    - name: Run tests
      run: npm test
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
    - name: Deploy to production
      run: echo "Deploying to production"
```

This workflow is triggered whenever there is a push event on the repository. It sets up a job to build the code and run tests, and if the build job is successful, it proceeds to run the deployment job. This is a simple example, and actual deployment would involve deploying to a cloud provider or a similar service.

As your project evolves, you'll likely need more complex workflows to deploy to different environments, manage releases, and coordinate with other systems. Luckily, GitHub Actions is both flexible and powerful, so you can create custom workflows that perfectly match your needs.

---

Sure, here are descriptions of the key elements in a GitHub Actions YAML workflow file:

1. **name:** This is the name of your workflow. It's optional, and if you don't specify it, GitHub uses the workflow file's pathname as the name. 

2. **on (or 'events'):** This specifies the name of the GitHub event that triggers the workflow. You can provide a single event string, array of events, event type map, or a schedule. Examples include `push`, `pull_request`, `schedule`, etc.
documentation: https://docs.github.com/en/actions/reference/events-that-trigger-workflows

3. **jobs:** Jobs represent a sequence of commands (steps) to be executed. Each job runs in an environment specified by `runs-on`. Jobs can run at the same time in parallel or be dependent on the status of a previous job.
documentation: https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobs

4. **steps:** Steps are individual tasks that can run commands in a job. A step can be either an action or a shell command. Each step runs in its own process in the runner environment and shares the filesystem with the runner.
documentation: https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps

5. **runs-on:** This keyword is used to specify the type of runner that the job will run on. Examples include `ubuntu-latest`, `windows-latest`, `macos-latest`, etc.

6. **uses:** This is used to specify an action to be used within a job in a step. Actions are the smallest portable building block of a workflow. An action could be built into the system, developed by GitHub or by the community.

7. **with:** This keyword is used to specify inputs for the `uses` keyword. It is followed by any number of key-value pairs.

8. **env:** This is used to set environment variables that will be available to all jobs and steps in the workflow.

9. **needs:** This keyword is used when a job needs to wait for another job to complete before it starts.

10. **if:** This is used to prevent a job from running unless a condition is met. You can use any GitHub context and expression syntax in your condition.

11. **name (in steps):** This optional keyword gives a specific step a name.

12. **run:** This is used to run a command-line program. You can run commands using the operating system's shell.

13. **strategy:** This keyword is used to configure a job to run multiple instances of itself. You can use it to run a job matrix, which is a set of different configurations of the same job.
documentation: https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategy

Please note that there are more keywords and options available, especially for complex workflows. This list covers the most commonly used ones. It's also worth noting that GitHub Actions uses a YAML syntax, and understanding YAML indentation and formatting is crucial for writing and reading workflow files.

---

GitHub Actions is a powerful feature of GitHub that allows developers to automate, customize, and execute software development workflows right in their repositories. They can be used for Continuous Integration (CI) and Continuous Deployment (CD) purposes and much more. This allows the creation of customized workflows that align with the development practices of your team or project.

Here are some key concepts to understand about GitHub Actions:

1. **Workflows:** In GitHub Actions, workflows are automated procedures that you add to your repository. Workflows are composed of one or more jobs and can be scheduled or triggered by various events.

2. **Events:** A workflow is triggered by an event. This could be anything from a push to the repository, a pull request, or a scheduled event.

3. **Jobs:** Jobs are a set of steps that execute on the same runner. By default, a workflow with multiple jobs will run those jobs in parallel, but you can also configure it to run jobs sequentially.

4. **Steps:** A step is an individual task that can run commands or actions. Each job consists of multiple steps.

5. **Actions:** Actions are standalone commands that are combined into steps to create a job. Actions are the smallest portable building block of a workflow.

6. **Runners:** A runner is a server that hosts a job execution environment. Each job runs on a runner and includes the OS of your choice.

Example of a simple workflow:

```yaml
name: Simple Workflow

on: [push]

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v2

      - name: Run a one-line script
        run: echo "Hello, world!"
```

In this example, we define a workflow called "Simple Workflow". This workflow is triggered on a `push` event.

It has a single job named `build`, which runs on the latest version of Ubuntu. This job has two steps:

- The first step checks out your repository's code onto the runner.
- The second step prints "Hello, world!" to the console.

Note: GitHub-hosted runners are pre-packaged with a lot of tools that you can use without any extra installation steps. If you have specific needs, you can also host your own runners.

GitHub Actions is quite flexible and can be customized extensively to suit your project needs. From simply automating tests to deploying applications to different environments, the possibilities are vast. You can also use actions that have been shared by the GitHub community or create your own.

---

Let's set up a simple GitHub Actions workflow. We'll create a workflow that will echo "Hello, world!" whenever a push is made to your repository. This is a simple example to help you get the hang of how to set up a workflow.

Here are the steps:

1. **Create a new repository or choose an existing one.**
    You need to have write access to the repository to create workflows.

2. **Create a new workflow file.**
    In your repository, create a new file named `hello_world.yml` inside the `.github/workflows` directory. The directory structure should look like this:
    ```
    your-repo
    └── .github
        └── workflows
            └── hello_world.yml
    ```
    If the `.github/workflows` directories don't exist, you need to create them. The `.github/workflows` directory is where GitHub looks for workflow files.

3. **Define the workflow.**
    In the `hello_world.yml` file, add the following content:
    ```yaml
    name: Hello World Workflow

    on: [push]

    jobs:
      hello_world:
        runs-on: ubuntu-latest

        steps:
          - name: Echo hello world
            run: echo "Hello, world!"
    ```
    Here's what this workflow does:
    - `name` specifies the name of your workflow.
    - `on` determines what event will trigger the workflow. In this case, it's the `push` event.
    - `jobs` define what runs as part of the workflow. There's only one job, `hello_world`, in this case.
    - `runs-on` specifies the type of machine to run the job on. In this case, it's the latest version of Ubuntu.
    - `steps` are the sequence of tasks that make up a job. Each step runs in its own process in the runner environment and shares the filesystem with the runner.
    - `run` specifies the command to run. In this case, it's `echo "Hello, world!"`

4. **Commit and push your changes.**
    Save your `hello_world.yml` file, commit it to your repository, and then push the commit to GitHub.

Once you've pushed your commit to GitHub, the workflow will run and print "Hello, world!" to the console.

To see the workflow run, go to the "Actions" tab in your repository on GitHub. There you can see all the workflows that have been defined and their runs. Click on a run to see more details and logs.

Remember, this is a basic example. GitHub Actions can do much more than printing "Hello, world!". They're capable of automating tests, building and pushing Docker containers, deploying code to servers, and much more.

---

GitHub Actions is a highly versatile feature of GitHub, and there are countless ways you can use it to automate processes and improve the efficiency of your personal projects. Here are some examples:

1. **Automated Testing:** If your project has a test suite, you can set up a GitHub Action to automatically run these tests whenever you push changes to your project. This allows you to catch any bugs that may have been introduced with the changes.

2. **Continuous Integration / Continuous Deployment (CI/CD):** For web applications, you can use GitHub Actions to automate the process of deploying your application to a server or a cloud platform. When you push changes to your repository, your application can be automatically built, tested, and deployed.

3. **Linter and Code Formatting Checks:** If you're using a linter or a code formatter like Prettier or ESLint, you can set up a GitHub Action to automatically check if your new code conforms to these standards. If the checks fail, you can configure the action to block the changes from being merged.

4. **Automated Code Reviews:** You can use tools like SonarCloud or CodeClimate with GitHub Actions to automatically review your code for quality whenever changes are pushed.

5. **Security Checks:** You can set up workflows to automatically check your dependencies for known security vulnerabilities.

6. **Release Management:** GitHub Actions can be used to automate the process of creating a new release whenever you push a new tag, complete with release notes.

7. **Automating Routine Tasks:** Besides code and deployment related tasks, you can automate any routine task. For example, automatically greeting new contributors to your project, automatically labeling or closing stale issues, and more.

8. **Scheduling Tasks:** You can use GitHub Actions to schedule tasks to run at specified times. For instance, you could schedule a workflow to clean up old artifacts or to run a batch job.

9. **Building and Publishing Packages:** If your project involves packaging code (like a npm package or a Docker container), you can automate the process of building and publishing the package whenever changes are made.

Remember that GitHub Actions are very flexible, so you can write custom workflows that precisely suit your needs, or use pre-made actions available in the GitHub marketplace.

Sure, I can help you create a simple GitHub Action workflow for a JavaScript project that performs some automated testing. In this example, I'll assume you're using Node.js and Jest as your test framework. 

1. **Setting up Jest:**
    If you haven't already set up Jest in your project, you can do so by running:

    ```
    npm install --save-dev jest
    ```
    Now, let's assume you have a test file called `test.js`.

2. **Creating the Workflow:**
    In your repository, create a new file inside the `.github/workflows` directory. You can name this file `nodejs.yml`.

    Copy the following YAML configuration into your `nodejs.yml` file:

    ```yaml
    name: Node.js CI

    on:
      push:
        branches: [ main ]
      pull_request:
        branches: [ main ]

    jobs:
      build:

        runs-on: ubuntu-latest

        strategy:
          matrix:
            node-version: [14.x]

        steps:
        - uses: actions/checkout@v2
        - name: Use Node.js ${{ matrix.node-version }}
          uses: actions/setup-node@v1
          with:
            node-version: ${{ matrix.node-version }}
        - run: npm ci
        - run: npm run build --if-present
        - run: npm test
    ```

    This workflow will run whenever a push or pull request event occurs on the `main` branch. 

    Here's a breakdown of what each step does:

    - `actions/checkout@v2` checks-out your repository under `$GITHUB_WORKSPACE`, so your workflow can access it.
    - `actions/setup-node@v1` sets up a specific version of Node.js in the runner. Here, it's setting up Node.js 14.x.
    - `npm ci` installs the dependencies for your project.
    - `npm run build --if-present` builds your project. This command is optional and you can remove it if your project doesn't require a build step.
    - `npm test` runs your test scripts. You should configure this in your `package.json` file. It might look something like: `"scripts": { "test": "jest" }`.

3. **Commit and push your changes.**
    Save your `nodejs.yml` file, commit it to your repository, and then push the commit to GitHub.

Once the workflow is set up, every time you push your code or create a pull request to the `main` branch, GitHub Actions will automatically install the dependencies, build your project, and run the tests. 

Remember to adjust this according to the needs of your project, like if you're using a different branch for your work or if your tests need additional environment variables or setup.

---

### PARCEL

Parcel is a blazing-fast, zero configuration web application bundler. It simplifies the process of setting up a web application by handling all the bundling of your JavaScript, CSS, HTML and image files. It's particularly useful because you can just start coding without spending hours setting up and configuring your environment.

Before starting, make sure you have Node.js and npm (node package manager) installed on your system.

**Step 1: Initializing the Project**

1. Create a new directory for your project and navigate into it:

    ```bash
    mkdir my-parcel-app
    cd my-parcel-app
    ```

2. Initialize a new Node.js project with npm:

    ```bash
    npm init -y
    ```

    This creates a `package.json` file in your project directory. The `-y` flag is used to accept the defaults.

**Step 2: Installing Parcel**

1. Install Parcel as a dev dependency:

    ```bash
    npm install --save-dev parcel-bundler
    ```

**Step 3: Setting up your Files**

1. Create an `index.html` file:

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Parcel App</title>
    </head>
    <body>
        <script src="./index.js"></script>
    </body>
    </html>
    ```

2. Create an `index.js` file:

    ```javascript
    import message from './message.js';

    document.body.textContent = message;
    ```

3. Create a `message.js` file:

    ```javascript
    export default "Hello, world!";
    ```

4. Create a `style.scss` file:

    ```scss
    body {
        background-color: lightblue;
    }
    ```

    And import this file in your `index.js`:

    ```javascript
    import './style.scss';
    import message from './message.js';

    document.body.textContent = message;
    ```

**Step 4: Running Parcel**

1. Add a `start` script in your `package.json`:

    ```json
    "scripts": {
      "start": "parcel index.html"
    }
    ```

2. Run your project:

    ```bash
    npm run start
    ```

Parcel will start a local server on `http://localhost:1234/` (or a different port if 1234 is already in use). If you open this URL in your browser, you should see your "Hello, world!" message on a light blue background.

Parcel automatically rebuilds your app as you change files and supports hot module replacement. You don’t need a separate development server during development and can just use Parcel.

**Step 5: Building for Production**

When you're ready to build your project for production, you can add a `build` script to your `package.json`:

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

Then run `npm run build` to create an optimized build of your project in a new `dist` directory.

That's it! You have set up a web application with Parcel, using JavaScript, HTML, and SCSS. Parcel automatically handles bundling your files, transforming SCSS to CSS, and setting up a development server.

**1. Automatic Transpilation:**

Parcel automatically transpiles your code based on your `browserslist` in your `package.json` file. The `browserslist` specifies a list of browsers that you want to support. For example:

```json
"browserslist": "> 1%, last 2 versions"
```

This setting specifies that you want to support browsers used by more than 1% of people globally and the last two versions of each major browser.

To demonstrate this, let's use modern JavaScript features that are not supported in older browsers. Update your `message.js` file:

```javascript
const messages = ["Hello", "world!"];
export default messages.join(", ");
```

The `Array.prototype.join()` method is not supported in IE 6-8, so Parcel would automatically transpile this code if those browsers were included in your `browserslist`.

**2. Automatic Installation of Dependencies:**

Parcel automatically installs missing dependencies from your code. For example, if you import a package that's not in your `package.json`, Parcel installs it for you:

```javascript
import lodash from 'lodash';

console.log(lodash.random(10, 20));
```

**3. Asset Importing:**

Parcel lets you import assets like CSS, images, and even web workers directly into your JavaScript files:

```javascript
import './styles.css';
import logo from './logo.png';

const img = document.createElement('img');
img.src = logo;
document.body.appendChild(img);
```

In this example, the `styles.css` file will be automatically injected into your `index.html`, and the `logo.png` image will be copied into your `dist` directory and its final path will be imported into your JavaScript code.

**4. Code Splitting:**

Parcel supports dynamic `import()` syntax for code splitting without configuration. This allows you to split your code into separate bundles that are loaded on demand, which can significantly improve load time for large applications.

```javascript
button.addEventListener('click', async () => {
  const module = await import('./dynamic-module.js');
  module.run();
});
```

In this example, the code in `dynamic-module.js` and its dependencies will be automatically split into a separate bundle that's loaded only when the button is clicked.

**5. Environment Variables:**

You can create a `.env` file in the root of your project to define environment variables. These will be replaced in your code during build time.

Create a `.env` file:

```
API_KEY=abc123
```

And use it in your code:

```javascript
console.log(process.env.API_KEY);
```

This code will be replaced with `console.log("abc123");` during build time.

**6. Production Builds:**

Parcel minifies your code and optimizes it for performance during production builds. Just run `npm run build` as described earlier.

Remember to use the official [Parcel documentation](https://parceljs.org/getting_started.html) as a resource for more advanced use cases and features. Parcel is a powerful tool with many features that make web development a smoother experience.

---

Absolutely, GitHub Actions can be used to automate the process of building, testing, and deploying a JavaScript project. In the case of a pure JavaScript, HTML, and SCSS project, you might use a tool like Parcel to build the project and Jest to test it.

This example will show you how to set up a workflow for a project that's deployed to GitHub Pages. We'll assume that you have your tests set up with Jest, your build process set up with Parcel, and you're deploying to the `gh-pages` branch. 

1. **Setting up Parcel and Jest:**
    If you haven't already set up Parcel and Jest in your project, you can do so by running:
    
    ```bash
    npm install --save-dev parcel-bundler jest
    ```

    Ensure that you have a `test` script and a `build` script in your `package.json`. The `test` script should run your Jest tests, and the `build` script should use Parcel to build your project.

    ```json
    "scripts": {
        "test": "jest",
        "build": "parcel build index.html"
    },
    ```

2. **Creating the Workflow:**
    In your repository, create a new file inside the `.github/workflows` directory. You can name this file `ci-cd.yml`.

    Copy the following YAML configuration into your `ci-cd.yml` file:

    ```yaml
    name: Build, Test and Deploy

    on: [push]

    jobs:
      build_and_test:
        runs-on: ubuntu-latest

        steps:
          - name: Checkout code
            uses: actions/checkout@v2

          - name: Use Node.js
            uses: actions/setup-node@v2
            with:
              node-version: '14'
          
          - name: Install Dependencies
            run: npm ci
          
          - name: Test
            run: npm test
          
          - name: Build
            run: npm run build

          - name: Deploy
            uses: peaceiris/actions-gh-pages@v3
            with:
              github_token: ${{ secrets.GITHUB_TOKEN }}
              publish_dir: ./dist
    ```

    This workflow will run whenever a push event occurs. 

    Here's a breakdown of what each step does:

    - `actions/checkout@v2` checks-out your repository under `$GITHUB_WORKSPACE`, so your workflow can access it.
    - `actions/setup-node@v2` sets up a specific version of Node.js in the runner. Here, it's setting up Node.js 14.x.
    - `npm ci` installs the dependencies for your project.
    - `npm test` runs your test scripts.
    - `npm run build` builds your project.
    - `peaceiris/actions-gh-pages@v3` is a third-party action that deploys your project to GitHub Pages. It needs a GitHub token to push to the `gh-pages` branch, which is provided by the `GITHUB_TOKEN` secret. The `publish_dir` input specifies the directory to deploy. Adjust this to match the output directory of your build process.

3. **Commit and push your changes.**
    Save your `ci-cd.yml` file, commit it to your repository, and then push the commit to GitHub.

Once the workflow is set up, every time you push your code, GitHub Actions will automatically install the dependencies, run the tests, build the project, and deploy it to GitHub Pages.

Please ensure to customize this workflow according to the needs of your project, such as using a different branch for deployment, or deploying to a different environment entirely.

---

Managing dependencies and environment variables are common tasks when setting up workflows in GitHub Actions. Here's how you can do both:

**Managing Dependencies:**

For Node.js projects, dependencies are typically managed through the `package.json` file. When setting up your GitHub Actions workflow, you'll want to include steps to install these dependencies.

Here's a simple example for a Node.js project:

```yaml
steps:
  - name: Checkout code
    uses: actions/checkout@v2

  - name: Use Node.js
    uses: actions/setup-node@v2
    with:
      node-version: '14'

  - name: Install Dependencies
    run: npm ci
```

In this example, the `npm ci` command installs the dependencies. The `ci` command is similar to `npm install`, but it's designed to be used in CI/CD environments as it's faster and more reliable.

For other languages like Python or Java, you would use their respective package managers (`pip` for Python, `maven` or `gradle` for Java, etc.).

**Managing Environment Variables:**

Environment variables can be set for a single step, an entire job, or an entire workflow:

- To set an environment variable for a single step, use the `env` keyword:

  ```yaml
  steps:
    - name: Greet
      run: echo "Hello, $NAME"
      env:
        NAME: Mona
  ```
  
  This will output "Hello, Mona".

- To set an environment variable for all steps in a job, define `env` at the job level:

  ```yaml
  jobs:
    my_job:
      env:
        NAME: Mona
      steps:
        - name: Greet
          run: echo "Hello, $NAME"
  ```

- To set an environment variable for all jobs in a workflow, define `env` at the root level:

  ```yaml
  env:
    NAME: Mona
  jobs:
    ...
  ```

In all cases, you can access the environment variables in your scripts using the syntax specific to your shell. In the above examples, we're using Bash syntax.

If you need to store secrets (like API keys), don't put them directly in the workflow file. Instead, add them to your repository's secrets and then refer to them in the workflow. For example:

```yaml
steps:
  - name: Send HTTP request
    run: curl -H "Authorization: Bearer ${{ secrets.MY_API_KEY }}" https://example.com
```

In this example, `MY_API_KEY` is a secret stored in the repository settings. It's not visible in logs or available to forked repositories.

---

GitHub Actions offers several advanced features to build more complex workflows that fit your needs. Here are a few examples of such advanced usage:

1. **Matrix Builds:** You can set up a build matrix to test your code against multiple versions of a language or a set of different environments. For instance, if you are developing a Node.js application, you can use a build matrix to test your code against Node.js 12.x, 14.x, and 16.x. Here's an example:

    ```yaml
    jobs:
      test:
        runs-on: ubuntu-latest
        strategy:
          matrix:
            node: [12, 14, 16]
        steps:
          - name: Checkout code
            uses: actions/checkout@v2

          - name: Use Node.js ${{ matrix.node }}
            uses: actions/setup-node@v2
            with:
              node-version: ${{ matrix.node }}
    ```

2. **Conditional Steps:** You can add conditions to your steps using the `if` keyword. This can be used to run certain steps only when specific conditions are met. For instance, you might want to deploy your application only when changes are pushed to the `main` branch:

    ```yaml
    steps:
      - name: Deploy
        if: github.ref == 'refs/heads/main'
        run: npm run deploy
    ```

3. **Job Dependencies:** Jobs in a workflow can depend on the status of other jobs using the `needs` keyword. This allows you to create complex workflows where certain jobs run only if other jobs have completed successfully. Here's an example:

    ```yaml
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - name: Build
            run: npm run build
      
      test:
        needs: build
        runs-on: ubuntu-latest
        steps:
          - name: Test
            run: npm run test
    ```

    In this case, the `test` job will only run if the `build` job completes successfully.

4. **Environment Variables:** As mentioned earlier, you can manage environment variables and secrets to configure your workflows based on the environment. 

5. **Manual Triggers:** Apart from triggering workflows on code pushes and pull requests, you can also manually trigger workflows using the `workflow_dispatch` event. This can be useful when you want to run a workflow on demand, like a deployment workflow. Here's an example:

    ```yaml
    on:
      workflow_dispatch:
    jobs:
      deploy:
        runs-on: ubuntu-latest
        steps:
          - name: Deploy
            run: npm run deploy
    ```

    This workflow can be manually triggered from the GitHub Actions UI.

These are just a few of the many advanced features that GitHub Actions provides. You can combine these features in different ways to create complex CI/CD pipelines that fit the needs of your project.

---

Now that you have learned about Git, GitHub, and GitHub Actions in depth, it's important to practice and review your knowledge. Here's what you can do:

**Review**

1. Go over all the topics once again. 

2. Explore the official documentation of Git, GitHub, and GitHub Actions for any unclear concepts:

   - [Git documentation](https://git-scm.com/doc)
   - [GitHub documentation](https://docs.github.com/en/github)
   - [GitHub Actions documentation](https://docs.github.com/en/actions)

3. Websearch for any topics that you want to learn more about.

- https://hyperskill.org/tracks/32#providers
- https://www.linkedin.com/learning/git-essential-training-19417064
- https://parceljs.org/docs/
- https://parceljs.org/getting-started/webapp/

**Practice**

1. **Git and GitHub:**

   - Create a new repository on GitHub and clone it to your local machine.
   - Create a new file in the repository, add some text, commit, and push the change.
   - Make more changes to the file, commit, and push the changes.
   - Create a new branch and make some changes on this branch. Then merge it to the main branch.
   - Try creating a new pull request on GitHub.

2. **GitHub Actions:**

   - Create a new workflow in your repository that runs a simple script (like printing "Hello, world") whenever code is pushed to the repository.
   - Try modifying the workflow to run on different event triggers (e.g., manual triggers, scheduled triggers).
   - Create a workflow that uses a matrix build to test code on multiple versions of a language.
   - Try using environment variables and secrets in your workflows.
   - Explore using different GitHub Actions available in the GitHub Marketplace to automate tasks.
