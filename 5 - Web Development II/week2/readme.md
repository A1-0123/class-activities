### Callbacks

In JavaScript, a callback is a function that is passed as an argument to another function and is executed at a later time. Callbacks are commonly used in asynchronous programming, where a function is not expected to return a result immediately but instead calls a callback function once the result is available.

Callbacks allow developers to write non-blocking code, which means that the execution of the program doesn't wait for a slow operation to finish before moving on to the next one. This is important for JavaScript, which is mostly used in web development, where the user expects the UI to be responsive and not freeze or hang due to slow operations.

Callbacks are commonly used with APIs that make network requests, such as the XMLHttpRequest object, fetch API, or Node.js' built-in HTTP module. When a network request is made, the callback function is called once the response is received.

However, using callbacks can lead to callback hell, a situation where nested callbacks become hard to read and maintain. This can make the code difficult to understand and debug. This is where promises and async/await come in, providing a more elegant way of handling asynchronous code.

### Introduction to Asynchronous Javascript

In web development, `Asynchronous Javascript (AJAX)` is a technique that allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that  the whole web page does not have to be reloaded each time data is sent and received, making the page more responsive and faster. Asynchronous Javascript is an essential concept for building modern interactive web applications.

Asynchronous Javascript can be used to perform various tasks such as loading new content without refreshing the page, fetching data from an API, and submitting data to a server without reloading the page. The concept of Asynchronous Javascript involves the use of callbacks, promises, and async/await functions. These components help manage asynchronous tasks by notifying the program when they are complete or if an error has occurred.

JavaScript has a built-in way to make Asynchronous requests known as the XMLHttpRequest (XHR) object. With this object, web developers can send HTTP requests to a server, receive a response, and update the web page without reloading it. The XMLHttpRequest object is what makes AJAX possible. Asynchronous Javascript is a powerful tool, and understanding it is essential for web developers who want to create more efficient, interactive, and dynamic web applications.

#### As summary,

Asynchronous Javascript (AJAX) is a special way to update a web page without having to reload the whole thing. This makes the page faster and more responsive. It can be used to do things like add new content to a page, get data from a server, and send data to a server. There are special parts of code called callbacks, promises, and async/await functions that help make it work. A built-in tool called the XMLHttpRequest object helps send and receive information between the web page and a server. AJAX is important for making cool, interactive web pages!

#### Examples:

1. `Loading new content without refreshing the page:`

When you visit a social media platform such as Facebook, you can scroll through your newsfeed without reloading the page every time you scroll down. This is possible because of asynchronous JavaScript. When you scroll down, the web page sends a request to the server to fetch new data, and this data is then dynamically added to the page using AJAX, which updates the page's content without requiring a full page reload.

2. `Fetching data from an API:`

Suppose you are building an e-commerce website, and you need to show product reviews from a third-party API. With Asynchronous JavaScript, you can use AJAX to send a request to the API's server and retrieve the reviews dynamically without reloading the entire page. This improves the user experience and makes your website more responsive.

3. `Submitting data to a server without reloading the page:`

Suppose you want to build a chat application for your website. Without Asynchronous JavaScript, whenever a user sends a message, the entire page would need to be reloaded to send the message to the server and retrieve the latest messages. However, with AJAX, you can use XMLHttpRequest to send the message to the server without requiring a page reload. This makes chat applications faster and more efficient.

4. `Using callbacks, promises, and async/await functions to manage asynchronous tasks:`

Asynchronous JavaScript involves working with tasks that take a different amount of time to complete. Callbacks, promises, and async/await functions help manage these tasks by notifying the program when they are complete or if an error has occurred. For example, if you are working with an API that takes some time to complete a request, you can use a callback to receive the response data when it's ready. Additionally, you can use promises and async/await functions to make it easier to manage asynchronous code, reduce nesting, and improve code readability.

### What is Asynchronous Javascript?

Asynchronous Javascript is a concept in computer programming where code is executed independently of the main execution thread, allowing the program to be more efficient. As the name suggests, this kind of programming doesn't follow a synchronous pattern, which means that the code doesn't have to wait for a specific event to occur before moving on to execute the next set of instructions. Instead, asynchronous Javascript uses callbacks to schedule events to occur at a later time, which frees up the main execution thread to continue executing other parts of the program. In essence, asynchronous Javascript is all about making the most of the CPU's processing power.

One of the key benefits of asynchronous Javascript is that it allows faster loading of web pages on the internet. Since the code no longer has to wait for specific events to occur, developers can use asynchronous techniques to load scripts, stylesheets, and images in a non-blocking manner. This means that elements on the page can load in parallel to each other instead of one at a time, which can lead to a significant reduction in loading times for web pages. As a result, users can enjoy a faster, more responsive web experience, which is crucial in today's world.

Another major advantage of asynchronous Javascript is that it enables developers to write more efficient and scalable code. By avoiding blocking calls and reducing bottlenecks, developers can more easily optimize their applications to handle large volumes of data or high levels of user traffic. This is particularly important for web applications that need to respond quickly to user actions or data updates. Additionally, asynchronous Javascript enables developers to handle complex I/O operations, such as accessing external APIs or managing database requests, without compromising the overall performance of the program. As a result, asynchronous Javascript is a critical consideration for developers looking to create fast, reliable web applications.

### Differences between Asynchronous and Synchronous Code

Asynchronous JavaScript is basically a programming technique that allows a particular code to run without any interference from the rest of the program or code that is running alongside it. Asynchronous programming is often used in web applications where there is a need to fetch the data from the server, without interrupting the normal flow of the application. It also ensures that the user interface or other important parts of the code are not blocked while waiting for the data to be fetched.

On the contrary, synchronous code execution is a traditional way of programming where the execution of the code is completed in a sequential manner. In synchronous code, one task is completed and only then does the next task begin. Therefore, the program has to wait for the completion of each task before proceeding to the next one. This can slow down the application, especially when a large function is executed, which requires more time to execute.

The main difference between synchronous and asynchronous code is the way they handle time. In synchronous code, the developer has to wait for the code to complete a task before beginning a new one. Meanwhile, the CPU power is not utilized effectively, especially when dealing with large applications. On the other hand, asynchronous code allows the developer to delegate tasks to a background thread, use the time productively, and execute multiple tasks simultaneously. Asynchronous code makes it easier to manage complex code and allows web applications to run smoothly, providing a better user experience.

#### Examples of Asynchronous JavaScript:

1. A web application that needs to fetch data from a server while displaying different content simultaneously. Asynchronous JavaScript can be used to fetch the data in the background while the user continues to interact with the page.

2. A chat application that needs to continuously update the messages from all the users. Asynchronous JavaScript can be used to continuously fetch the new messages without interrupting the user's experience.

3. A website that needs to load images from a server. Asynchronous JavaScript can be used to load images in the background while the user continues to interact with the page, without waiting for all the images to load before displaying the content.

#### Examples of Synchronous code execution:

1. A simple function that adds two numbers together. The program waits for the function to complete before moving on to the next task.

2. A loop that iterates through an array, performing a specific task for each item. The program waits for the loop to complete before moving on to the next task.

3. A form that needs to be submitted, where the program waits for the form data to be collected before proceeding to the next task.

#### Quiz

What is the main difference between synchronous and asynchronous code?
A. The way they handle data
B. The way they handle time
C. The way they handle errors
D. The way they handle memory

<!-- Answer: B -->

What is the main benefit of asynchronous JavaScript?
A. It allows developers to write more efficient and scalable code.
B. It allows developers to write more complex and scalable code.
C. It allows developers to write more efficient and complex code.
D. It allows developers to write more complex and efficient code.

<!-- Answer: A -->

#### Basic Examples:

1. Asynchronous Example: Loading a list of items

Suppose you have a simple web page that needs to display a list of items fetched from a server. With Asynchronous JavaScript, you can use the `fetch()` function to request the data from the server without blocking the rest of the page. Once the data is retrieved, you can then update the list accordingly.

```javascript
async function fetchItems() {
  try {
    const response = await fetch("https://api.example.com/items");
    const items = await response.json();
    displayItems(items);
  } catch (error) {
    console.error("Error fetching items:", error);
  }
}

function displayItems(items) {
  const list = document.getElementById("items-list");
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.name;
    list.appendChild(listItem);
  });
}

fetchItems();
```

2. Synchronous Example: Simple form validation

In a form validation scenario, you can use synchronous code to check each form field for errors before submitting the form.

```javascript
function validateForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  if (!nameInput.value) {
    alert("Name is required");
    return false;
  }

  if (!emailInput.value || !validateEmail(emailInput.value)) {
    alert("Please enter a valid email address");
    return false;
  }

  return true;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.getElementById("submit-button").addEventListener("click", (e) => {
  e.preventDefault();
  if (validateForm()) {
    // Submit the form
  }
});
```

In this synchronous example, the form validation occurs sequentially. First, the code checks if the name field has a value. If not, it alerts the user and stops the validation process. Next, the code checks the email field for a valid email address. If the email is invalid, it alerts the user and stops the validation process. If both fields pass validation, the form can be submitted.

#### Intermediate Examples:

1. Asynchronous Example: Fetching data from multiple APIs

In this example, we will fetch data from two different APIs simultaneously using `Promise.all`. The `Promise.all` function takes an array of promises as an argument and returns a single promise that resolves when all the promises in the array have resolved. This means that the code will wait for all the promises to resolve before moving on to the next task.

```javascript
async function fetchData() {
  try {
    const urls = [
      "https://api.example.com/data1",
      "https://api.example.com/data2",
    ];
    const promises = urls.map((url) => fetch(url));
    const responses = await Promise.all(promises);
    const data = await Promise.all(
      responses.map((response) => response.json())
    );

    processData(data);
  } catch (error) {
    console.error("Error fetching data from APIs:", error);
  }
}

function processData(data) {
  console.log("Data from API 1:", data[0]);
  console.log("Data from API 2:", data[1]);

  // Process and display the data as needed
}

fetchData();
```

In this asynchronous example, we are using `Promise.all()` to fetch data from two different APIs simultaneously. Once the data is fetched, we process and display it accordingly.

2. Synchronous Example: Calculating the factorial of a number

In this example, we will use a synchronous function to calculate the factorial of a number.

```javascript
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
```

#### Quiz

1. What does AJAX stand for?
   a. Asynchronous JavaScript and XML
   b. Advanced JavaScript and XHTML
   c. Asynchronous Java and XML
   d. Advanced Java and XML

2. What is the main purpose of AJAX in web development?
   a. To create animation effects
   b. To validate form data
   c. To update web pages asynchronously
   d. To store data in the browser

3. Which built-in JavaScript object is used to make HTTP requests?
   a. XMLHttpRequest
   b. HTTPRequest
   c. FetchRequest
   d. WebRequest

4. What is a callback function in JavaScript?
   a. A function that is called after another function has finished executing
   b. A function that is called before another function starts executing
   c. A function that is called each time a loop iterates
   d. A function that is called automatically when an error occurs

5. What is the main advantage of using Asynchronous JavaScript?
   a. It allows code to be executed sequentially
   b. It allows code to be executed in parallel without blocking the main thread
   c. It allows code to be executed faster due to compiler optimizations
   d. It allows code to be automatically minified and compressed

6. Which method is used to send an HTTP request using the XMLHttpRequest object?
   a. send()
   b. request()
   c. open()
   d. fetch()

7. Which JavaScript function is commonly used to fetch data from an API?
   a. fetch()
   b. get()
   c. request()
   d. loadData()

8. What is a Promise in JavaScript?
   a. A mechanism to handle asynchronous code execution
   b. A type of variable used to store multiple values
   c. A built-in error handling system
   d. A technique to optimize code performance

9. How do you create a new Promise in JavaScript?
   a. new Promise()
   b. Promise.create()
   c. new Async()
   d. Async.create()

10. What is the purpose of the `async` keyword in JavaScript?
    a. To define a function that returns a Promise
    b. To indicate that a function contains asynchronous code
    c. To automatically execute a function asynchronously
    d. To create a new instance of the Promise object

11. What is the purpose of the `await` keyword in JavaScript?
    a. To pause the execution of an async function until a Promise is resolved
    b. To define a function that returns a Promise
    c. To create a new instance of the Promise object
    d. To automatically execute a function asynchronously

12. How do you handle errors in an async/await function?
    a. Using a try-catch block
    b. Using the .catch() method
    c. Using the onError event
    d. Using a callback function

13. Which of the following is NOT an advantage of using Asynchronous JavaScript?
    a. Faster page loading times
    b. Improved user experience
    c. Better code readability
    d. Automatic error handling

14. What is a common use case for Asynchronous JavaScript in web applications?
    a. Loading new content without refreshing the page
    b. Validating form data before submission
    c. Creating and displaying animations
    d. Storing data in the browser

15. What mechanism allows the XMLHttpRequest object to communicate with a server without reloading the web page?
    a. HTTP requests
    b. WebSocket connections
    c. Event listeners
    d. Callback functions

16. In a chat application, how does Asynchronous JavaScript help improve the user experience?
    a. By allowing users to send messages without reloading the page
    b. By validating user input before sending a message
    c. By automatically updating the user's profile information
    d. By encrypting the chat messages

17. Which of the following can be used to manage asynchronous tasks in JavaScript?
    a. Callbacks
    b. Promises
    c. Async/await functions
    d. All of the above

18. What is the main difference between synchronous and asynchronous code execution?
    a. The order in which code is executed
    b. The amount of memory used by the code
    c. The number of functions that can be executed simultaneously
    d. The way errors are handled

19. Which of the following is an example of an asynchronous operation?
    a. Fetching data from a server
    b. Calculating the factorial of a number
    c. Sorting an array using a sorting algorithm
    d. Validating form data

20. In a web application, what is the main advantage of using Asynchronous JavaScript to load images from a server?
    a. It allows images to be displayed in a specific order
    b. It reduces the amount of data that needs to be transferred
    c. It allows images to load without blocking the rest of the page
    d. It automatically compresses images for faster loading times

<!--
Answers:
1. a
2. c
3. a
4. a
5. b
6. a
7. a
8. a
9. a
10. b
11. a
12. a
13. d
14. a
15. a
16. a
17. d
18. a
19. a
20. c
-->

#### Examples and Exercises

Here are examples for each concept to help your students understand Asynchronous JavaScript:

1. Fetch API:

```javascript
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function displayPosts(posts) {
  const postContainer = document.getElementById("post-container");
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
    postContainer.appendChild(postElement);
  });
}

fetchPosts();
```

2. setTimeout:

```javascript
function delayedMessage(msg, delay) {
  setTimeout(() => {
    console.log(msg);
  }, delay);
}

delayedMessage("This message will be displayed after 3 seconds", 3000);
```

3. setInterval:

```javascript
function displayTime() {
  const currentTime = new Date();
  console.log(currentTime.toLocaleTimeString());
}

const intervalId = setInterval(displayTime, 1000);

// Stop the interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped after 10 seconds");
}, 10000);
```

4. Callbacks continued & Callback Hell:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = "Sample data";
    callback(null, data);
  }, 2000);
}

function processAndDisplay(data, callback) {
  setTimeout(() => {
    const processedData = data.toUpperCase();
    callback(null, processedData);
  }, 1000);
}

function displayResult(result) {
  console.log("Result:", result);
}

fetchData((error, data) => {
  if (error) {
    console.error("Error fetching data:", error);
  } else {
    processAndDisplay(data, (error, processedData) => {
      if (error) {
        console.error("Error processing data:", error);
      } else {
        displayResult(processedData);
      }
    });
  }
});

// Callback Hell Example
function fetchData1(callback) {
  setTimeout(() => {
    const data = "First data";
    callback(null, data);
  }, 1000);
}

function fetchData2(callback) {
  setTimeout(() => {
    const data = "Second data";
    callback(null, data);
  }, 2000);
}

function fetchData3(callback) {
  setTimeout(() => {
    const data = "Third data";
    callback(null, data);
  }, 3000);
}

fetchData1((error, data1) => {
  if (error) {
    console.error("Error fetching data1:", error);
  } else {
    fetchData2((error, data2) => {
      if (error) {
        console.error("Error fetching data2:", error);
      } else {
        fetchData3((error, data3) => {
          if (error) {
            console.error("Error fetching data3:", error);
          } else {
            console.log("All data:", data1, data2, data3);
          }
        });
      }
    });
  }
});
```

These examples demonstrate the key concepts of Asynchronous JavaScript, including the Fetch API, setTimeout, setInterval, and callbacks (including callback hell). These examples should help your students understand the concepts and learn how to use them in their own projects.

You can fix the callback hell issue in the last example by using Promises to make the code more readable and easier to manage. Here's the updated example using Promises:

```javascript
function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "First data";
      resolve(data);
    }, 1000);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Second data";
      resolve(data);
    }, 2000);
  });
}

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Third data";
      resolve(data);
    }, 3000);
  });
}

fetchData1()
  .then((data1) => {
    console.log("Data1:", data1);
    return fetchData2();
  })
  .then((data2) => {
    console.log("Data2:", data2);
    return fetchData3();
  })
  .then((data3) => {
    console.log("Data3:", data3);
    console.log("All data:", data1, data2, data3);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
```

In this updated example, we converted the `fetchData` functions to return Promises instead of using callbacks. Then, we chained the Promises using `.then()` to handle the resolved values in a more readable and manageable way. This eliminates the callback hell issue and makes the code cleaner and easier to understand.

Here are some simple project ideas related to Asynchronous JavaScript and AJAX:

1. Weather App:
   Fetch weather data from a weather API (e.g., OpenWeatherMap) based on user input (city name or coordinates) and display the current weather conditions and forecast.

2. Currency Converter:
   Fetch exchange rates from an API (e.g., ExchangeRate-API) and create a simple currency converter that allows users to input an amount and convert it to different currencies.

3. Random Quote Generator:
   Fetch random quotes from an API (e.g., QuoteGarden) and display them on the page with a button to load a new random quote.

4. Movie Search App:
   Fetch movie data from an API (e.g., The Movie Database API) based on user input (movie title) and display the search results, including movie posters, titles, and descriptions.

5. Todo List App:
   Create a todo list app that stores the tasks in a server using an API (e.g., JSONPlaceholder). Users can add, edit, and delete tasks, and the app will fetch the updated data from the server.

6. News Reader:
   Fetch news articles from a news API (e.g., NewsAPI) based on user-selected topics or sources and display the headlines, images, and descriptions with links to the full articles.

7. Photo Gallery:
   Fetch random or trending images from an API (e.g., Unsplash API or Pixabay API) and display them in a responsive grid layout. Users can click on the images to view them in a larger format or download them.

8. Dictionary App:
   Fetch word definitions, synonyms, and antonyms from a dictionary API (e.g., WordsAPI or Merriam-Webster API) based on user input and display the results.

9. Trivia Quiz:
   Fetch random trivia questions from an API (e.g., Open Trivia API) and create a quiz game where users can answer multiple-choice questions and keep track of their score.

10. Recipe Finder:
    Fetch recipe data from an API (e.g., Spoonacular API or TheMealDB API) based on user input (ingredients or dish name) and display the search results, including images, ingredients, and cooking instructions.

These project ideas will help your students practice Asynchronous JavaScript and AJAX by working with various APIs and creating interactive web applications.

Here are detailed explanations and basic structures for 5 of the project ideas using HTML, CSS, and JavaScript:

1. Weather App:

HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weather App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="weather-app">
      <input type="text" id="city" placeholder="Enter city name" />
      <button id="get-weather">Get Weather</button>
      <div id="weather-info"></div>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

CSS (styles.css):

```css
body {
  font-family: Arial, sans-serif;
}

.weather-app {
  width: 300px;
  margin: 0 auto;
  text-align: center;
}

#city {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

#weather-info {
  margin-top: 20px;
}
```

JavaScript (app.js):

```javascript
const apiKey = "your_openweathermap_api_key";

document.getElementById("get-weather").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  fetchWeatherData(city);
});

async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const weatherData = await response.json();
    displayWeatherData(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function displayWeatherData(weatherData) {
  const weatherInfo = document.getElementById("weather-info");
  weatherInfo.innerHTML = `<h3>${weatherData.name}</h3>
                           <p>Temperature: ${weatherData.main.temp}K</p>
                           <p>Weather: ${weatherData.weather[0].description}</p>`;
}
```

2. Currency Converter:

HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Currency Converter</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="converter">
      <input type="number" id="amount" placeholder="Enter amount" />
      <select id="from-currency">
        <!-- Add currency options here -->
      </select>
      <select id="to-currency">
        <!-- Add currency options here -->
      </select>
      <button id="convert">Convert</button>
      <div id="result"></div>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

CSS (styles.css):

```css
body {
  font-family: Arial, sans-serif;
}

.converter {
  width: 300px;
  margin: 0 auto;
  text-align: center;
}

input,
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

#result {
  margin-top: 20px;
}
```

JavaScript (app.js):

```javascript
document.getElementById("convert").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("tooption1.value = currency;
    option1.textContent = currency;
    fromCurrencySelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = currency;
    option2.textContent = currency;
    toCurrencySelect.appendChild(option2);
  }
}

populateCurrencyOptions();
```

3. Random Quote Generator:

HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Random Quote Generator</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="quote-generator">
      <div id="quote"></div>
      <button id="get-quote">Get Random Quote</button>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

CSS (styles.css):

```css
body {
  font-family: Arial, sans-serif;
}

.quote-generator {
  width: 300px;
  margin: 0 auto;
  text-align: center;
}

#quote {
  margin-bottom: 20px;
}
```

JavaScript (app.js):

```javascript
document.getElementById("get-quote").addEventListener("click", () => {
  fetchRandomQuote();
});

async function fetchRandomQuote() {
  try {
    const response = await fetch(
      "https://quote-garden.herokuapp.com/api/v3/quotes/random"
    );
    const quoteData = await response.json();
    displayQuote(quoteData.data[0]);
  } catch (error) {
    console.error("Error fetching random quote:", error);
  }
}

function displayQuote(quote) {
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = `<p>${quote.quoteText}</p><p>- ${quote.quoteAuthor}</p>`;
}

fetchRandomQuote();
```

4. Movie Search App:

HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Movie Search App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="movie-search">
      <input type="text" id="movie-title" placeholder="Enter movie title" />
      <button id="search-movie">Search</button>
      <div id="movie-results"></div>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

CSS (styles.css):

```css
body {
  font-family: Arial, sans-serif;
}

.movie-search {
  width: 300px;
  margin: 0 auto;
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

#movie-results {
  margin-top: 20px;
}
```

JavaScript (app.js):

```javascript
const apiKey = "your_tmdb_api_key";

document.getElementById("search-movie").addEventListener("click", () => {
  const movieTitle = document.getElementById("movie-title").value;
  searchMovie(movieTitle);
});

async function searchMovie(title) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`
    );
    const movieData = await response.json();
    displayMovies(movieData.results);
  } catch (error) {
    console.error("Error searching for movie:", error);
  }
}

function displayMovies(movies) {
  const movieResults = document.getElementById("movie-results");
  movieResults.innerHTML = "";

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.innerHTML = `<h4>${movie.title}</h4>
                              <p>Release Date: ${movie.release_date}</p>
                              <p>Overview: ${movie.overview}</p>`;
    movieResults.appendChild(movieElement);
  });
}
```

5. Recipe Finder:

HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recipe Finder</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="recipe-finder">
      <input
        type="text"
        id="search-ingredient"
        placeholder="Enter ingredient or dish name"
      />
      <button id="search-recipe">Search</button>
      <div id="recipe-results"></div>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

CSS (styles.css):

```css
body {
  font-family: Arial, sans-serif;
}

.recipe-finder {
  width: 300px;
  margin: 0 auto;
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

#recipe-results {
  margin-top: 20px;
}
```

JavaScript (app.js):

```javascript
const apiKey = "your_spoonacular_api_key";

document.getElementById("search-recipe").addEventListener("click", () => {
  const searchIngredient = document.getElementById("search-ingredient").value;
  searchRecipe(searchIngredient);
});

async function searchRecipe(ingredient) {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredient}`
    );
    const recipeData = await response.json();
    displayRecipes(recipeData);
  } catch (error) {
    console.error("Error searching for recipe:", error);
  }
}

function displayRecipes(recipes) {
  const recipeResults = document.getElementById("recipe-results");
  recipeResults.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeElement = document.createElement("div");
    recipeElement.innerHTML = `<h4>${recipe.title}</h4>
                              <img src="${recipe.image}" alt="${recipe.title}">
                              <p>Used Ingredients: ${recipe.usedIngredientCount}</p>
                              <p>Missing Ingredients: ${recipe.missedIngredientCount}</p>`;
    recipeResults.appendChild(recipeElement);
  });
}
```

These examples demonstrate how to use HTML, CSS, and JavaScript to create interactive web applications. Each example fetches data from an API using Asynchronous JavaScript (AJAX) and displays the results on the web page.
