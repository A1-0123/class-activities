#### JQuery

jQuery is a fast, small, and feature-rich JavaScript library that makes it easier to manipulate HTML documents, handle events, create animations, and perform other common tasks on the web. Here's a detailed overview of some of the key features and functions of jQuery:

Include jQuery in your HTML file:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```
##### `DOM Manipulation - Selectors`:

One of the main reasons developers choose to use jQuery is for its powerful and intuitive DOM manipulation capabilities. With jQuery, you can select elements on the page, traverse and modify their content, and add or remove elements from the DOM. For example, to select all the p elements on the page, you can use the following code:

`$(selector).html(content)`: Sets the HTML content of the selected element.

```js
$("p").html("New text");
```

`$(selector).text(content)`: Sets the text content of the selected element.

```js
$("p").text("New text");
```

`$(selector).attr(attributeName, value)`: Sets the value of an attribute for the selected element.

```js
$("img").attr("src", "newimage.png");
// document.getElementById("myImage").src = "newimage.png";
```

`$(selector).addClass(className)`: Adds a CSS class to the selected element.

```js
$("p").addClass("new-class");
```

`$(selector).removeClass(className)`: Removes a CSS class from the selected element.

```js
$("p").removeClass("old-class");
```

`$(selector).css(property, value)`: Sets the value of a CSS property for the selected element.

```js
$("p").css("color", "black");
```

`$(selector).append(content)`: Adds new content to the end of the selected element.

```js
$("ul").append("<li>New item</li>");
```

`$(selector).prepend(content)`: Adds new content to the beginning of the selected element.

```js
$("ul").prepend("<li>New item</li>");
```

---

##### `Event Handling`:

jQuery provides a concise and convenient way to handle events on the page, such as `click` events, `hover` events, and `form` submissions. For example, to attach a click event handler to all the buttons on the page, you can use the following code:

`$(selector).click(function)`: Binds a function to the "click" event of the selected element.

```js
$("button").click(function () {
  alert("Button clicked");
});
```

`$(selector).on(event, function)`: Binds a function to a specified event of the selected element.

```js
$("button").on("mouseover", function () {
  $(this).css("background-color", "yellow");
});
```

`$(selector).off(event)`: Removes a previously attached event handler from the selected element.

```js
$("button").off("click");
```

`$(selector).trigger(event)`: Triggers the specified event for the selected element.

```js
$("button").click(function () {
  $("p").toggle();
});

$("button").trigger("click");
```

`$(document).ready(function)`: Binds a function to the "DOMContentLoaded" event of the document, ensuring that the function is executed when the page is fully loaded.

```js
$(document).ready(function () {
  alert("Page loaded");
});
```

---

```js
// Click Event
$("button").click(function(){
  alert("Clicked!");
});

// Double Click Event
$("button").dblclick(function(){
  alert("Double Clicked!");
});

// Mouse Enter Event
$("button").mouseenter(function(){
  alert("Mouse Entered!");
});

// Mouse Leave Event
$("button").mouseleave(function(){
  alert("Mouse Left!");
});

// Focus Event
$("input").focus(function(){
  $(this).css("background-color", "yellow");
});

// Blur Event
$("input").blur(function(){
  $(this).css("background-color", "white");
});

// Keydown Event
$("input").keydown(function(){
  alert("Key Down!");
});

// Keyup Event
$("input").keyup(function(){
  alert("Key Up!");
});

// Submit Event
$("form").submit(function(){
  alert("Form Submitted!");
});

// Change Event
$("select").change(function(){
  alert("Selection Changed!");
});

---

// 1. Click Event
$("#btn-click").click(function(){
  alert("Button Clicked!");
});

// 2. Hover Event
$(".hover-item").hover(function(){
  $(this).css("background-color", "yellow");
}, function(){
  $(this).css("background-color", "white");
});

// 3. Hide/Show Events
$("#btn-hide").click(function(){
  $(".hide-show").hide();
});

$("#btn-show").click(function(){
  $(".hide-show").show();
});

// 4. Toggle Event
$("#btn-toggle").click(function(){
  $(".toggle-item").toggle();
});

// 5. Fade In/Out Events
$("#btn-fadein").click(function(){
  $(".fade-item").fadeIn();
});

$("#btn-fadeout").click(function(){
  $(".fade-item").fadeOut();
});

// 6. Slide Up/Down Events
$("#btn-slideup").click(function(){
  $(".slide-item").slideUp();
});

$("#btn-slidedown").click(function(){
  $(".slide-item").slideDown();
});

// 7. Add/Remove Class Events
$("#btn-addclass").click(function(){
  $(".class-item").addClass("highlight");
});

$("#btn-removeclass").click(function(){
  $(".class-item").removeClass("highlight");
});

// 8. Append/Prepend Events
$("#btn-append").click(function(){
  $(".append-item").append("<li>New Item</li>");
});

$("#btn-prepend").click(function(){
  $(".append-item").prepend("<li>New Item</li>");
});

// 9. Attribute Manipulation Events
$("#btn-attr").click(function(){
  var attrValue = $("#my-link").attr("href");
  alert("The value of href attribute is " + attrValue);
});

$("#btn-setattr").click(function(){
  $("#my-link").attr("href", "https://www.example.com");
});

// 10. Form Events
$("form").submit(function(){
  alert("Form Submitted!");
});

$("#btn-reset").click(function(){
  $("form").trigger("reset");
});


```

---

##### `Animations`:

With jQuery, you can easily create animations and effects that can make your pages more dynamic and engaging. For example, to slide up an element when it's clicked.

`$(selector).hide(duration, easing, callback)`: Hides the selected element with a specified duration and easing function.

```js
$("button").click(function () {
  $("p").hide("slow");
});
```

`$(selector).show(duration, easing, callback)`: Shows the selected element with a specified duration and easing function.

```js
$("button").click(function () {
  $("p").show("fast");
});
```

`$(selector).toggle(duration, easing, callback)`: Toggles the visibility of the selected element with a specified duration and easing function.

```js
$("button").click(function () {
  $("p").toggle("slow");
});
```

`$(selector).slideUp(duration, easing, callback)`: Slides the selected element up with a specified duration and easing function.

```js
$("button").click(function () {
  $("p").slideUp("slow");
});
```

`$(selector).slideDown(duration, easing, callback)`: Slides the selected element down with a specified duration and easing function.

```js
$("button").click(function () {
  $("p").slideDown("slow");
});
```

`$(selector).slideToggle(duration, easing, callback)`: Toggles the sliding animation of the selected element with a specified duration and easing function.

```js
$("button").click(function () {
  $("p").slideToggle("slow");
});
```

`$(selector).animate({styles}, duration, easing, callback):` Animates the selected element with a specified set of styles, duration, and easing function.

```js
$("button").click(function () {
  $("div").animate(
    {
      left: "250px",
      opacity: "0.5",
      height: "150px",
      width: "150px",
    },
    1000
  );
});
```

---

##### `AJAX`:

jQuery provides a simple and flexible API for making asynchronous HTTP requests (also known as AJAX requests). With jQuery, you can easily load data from a server and update parts of a page without reloading the entire page. For example, to load some data from a JSON file and update a div element with the data, you can use the following code:

```js
$.getJSON("data.json", function (data) {
  $("div").html(data.message);
});
```

### Api calls

To make API calls using jQuery, you can use the `$.ajax` or one of its shorthand methods such as `$.get`, `$.post`, `$.getJSON`, etc.

Here's an example of how you can use the `$.get` method to make a GET request to an API:

```js
$.get("https://api.example.com/data", function (data) {
  // handle the data returned from the API
});
```

The `$.get` method takes two arguments: the URL of the API endpoint, and a callback function that will be called when the API returns data. The data returned by the API will be passed as an argument to the callback function.

Here's an example of how you can use the `$.post` method to make a POST request to an API:

```js
$.post("https://api.example.com/data", { key: "value" }, function (data) {
  // handle the data returned from the API
});
```

The `$.post` method takes three arguments: the URL of the API endpoint, an object containing the data to be sent to the API, and a callback function that will be called when the API returns data.

In addition to the `$.get` and `$.post` methods, there are several other shorthand methods available in jQuery for making API calls, such as `$.getJSON` for making GET requests to APIs that return JSON data, and `$.ajax` for making custom requests with more control over the request and response.

[JQuery AJAX](https://api.jquery.com/jQuery.ajax/)

### JQuery UI

jQuery UI is a collection of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript library. It provides a set of tools for creating highly interactive and dynamic user interfaces using jQuery.

The jQuery UI library includes a wide range of features, such as:

- `Interactions`: Allows you to add interactivity to your page, such as dragging, dropping, resizing, and sorting elements.

- `Effects`: Provides a set of visual effects, such as fading, sliding, and custom animations, to enhance the look and feel of your page.

- `Widgets`: A collection of UI components, such as accordions, tabs, date pickers, dialogs, and sliders, that can be easily integrated into your page.

- `Themes`: A set of pre-designed themes for your UI components, allowing you to quickly and easily style your pages.

Using jQuery UI, you can add rich, interactive functionality to your web pages with just a few lines of code. This makes it an ideal library for creating modern, dynamic, and responsive web applications.

[JQuery UI](https://jqueryui.com/)

### jQuery Selectors

jQuery selectors are used to select elements on the page. Here are some of the most commonly used jQuery selectors:

| Selector | Description |

| --- | --- |

| `*` | Selects all elements |
| `#id` | Selects the element with the specified id |
| `.class` | Selects all elements with the specified class |
| `element` | Selects all elements with the specified tag name |
| `element, element, ...` | Selects all elements that match any of the specified selectors |
| `:first` | Selects the first element |
| `:last` | Selects the last element |
| `:even` | Selects all even elements |
| `:odd` | Selects all odd elements |
| `:eq(index)` | Selects the element at the specified index |
| `:gt(index)` | Selects all elements at an index greater than the specified index |
| `:lt(index)` | Selects all elements at an index less than the specified index |
| `:not(selector)` | Selects all elements that do not match the specified selector |
| `:header` | Selects all elements that are headers |
| `:animated` | Selects all elements that are currently being animated |
| `:focus` | Selects the element that currently has focus |
| `:contains(text)` | Selects all elements that contain the specified text |
| `:empty` | Selects all elements that are empty |
| `:has(selector)` | Selects all elements that have a descendant that matches the specified selector |
| `:parent` | Selects all elements that have at least one child element |
| `selector1 selector2` | Selects all elements that match the second selector that are descendants of the first selector |
| `selector1 > selector2` | Selects all elements that match the second selector that are direct children of the first selector |
| `selector1 + selector2` | Selects all elements that match the second selector that are immediately preceded by the first selector |
| `selector1 ~ selector2` | Selects all elements that match the second selector that are preceded by the first selector |
| `:input` | Selects all input, textarea, select, and button elements |
| `:text` | Selects all input elements with type="text" |
| `:password` | Selects all input elements with type="password" |
| `:radio` | Selects all input elements with type="radio" |
| `:checkbox` | Selects all input elements with type="checkbox" |
| `:submit` | Selects all input elements with type="submit" |
| `:image` | Selects all input elements with type="image" |
| `:reset` | Selects all input elements with type="reset" |
| `:button` | Selects all input elements with type="button" |

| --- | --- |

### jQuery Events

jQuery events are used to bind event handlers to elements on the page. Here are some of the most commonly used jQuery events:

| Event | Description |

| --- | --- |

| `click` | When the user clicks an element |
| `dblclick` | When the user double-clicks an element |
| `mouseenter` | When the user's mouse enters an element |
| `mouseleave` | When the user's mouse leaves an element |
| `keydown` | When the user presses a key on the keyboard |
| `keyup` | When the user releases a key on the keyboard |
| `keypress` | When the user presses a key on the keyboard |
| `focus` | When an element gets focus |
| `blur` | When an element loses focus |
| `change` | When the value of an element changes |
| `submit` | When the user submits a form |
| `load` | When the browser has finished loading the page |
| `resize` | When the browser window is resized |
| `scroll` | When the user scrolls within the page |

| --- | --- |

### jQuery Effects

jQuery effects are used to animate elements on the page. Here are some of the most commonly used jQuery effects:

| Effect | Description |

| --- | --- |

| `hide()` | Hides the selected elements |
| `show()` | Shows the selected elements |
| `toggle()` | Toggles between hiding and showing the selected elements |
| `fadeIn()` | Fades in the selected elements |
| `fadeOut()` | Fades out the selected elements |
| `fadeToggle()` | Toggles between fading in and fading out the selected elements |
| `slideDown()` | Slides down the selected elements |
| `slideUp()` | Slides up the selected elements |
| `slideToggle()` | Toggles between sliding down and sliding up the selected elements |
| `animate()` | Animates the selected elements |

| --- | --- |

### jQuery Cheat Sheet

Here's a cheat sheet of some of the most commonly used jQuery methods:

| Method | Description |

| --- | --- |

| `$(selector).hide()` | Hides the selected elements |
| `$(selector).show()` | Shows the selected elements |
| `$(selector).toggle()` | Toggles between hiding and showing the selected elements |
| `$(selector).addClass(class)` | Adds a class to the selected elements |
| `$(selector).removeClass(class)` | Removes a class from the selected elements |
| `$(selector).css(property, value)` | Sets the CSS properties of the selected elements |
| `$(selector).attr(attribute, value)` | Sets the attributes of the selected elements |
| `$(selector).html(content)` | Sets the inner HTML of the selected elements |
| `$(selector).text(content)` | Sets the text content of the selected elements |
| `$(selector).val(value)` | Sets the value of form fields |
| `$(selector).append(content)` | Appends content to the selected elements |
| `$(selector).prepend(content)` | Prepends content to the selected elements |
| `$(selector).before(content)` | Inserts content before the selected elements |
| `$(selector).after(content)` | Inserts content after the selected elements |
| `$(selector).remove()` | Removes the selected elements and their children |
| `$(selector).empty()` | Removes the children of the selected elements |
| `$(selector).on(event, childSelector, data, handler)` | Adds an event handler for one or more events to the selected elements |
| `$(selector).click(handler)` | Adds an event handler for click events to the selected elements |
| `$(selector).dblclick(handler)` | Adds an event handler for double-click events to the selected elements |
| `$(selector).hover(handlerIn, handlerOut)` | Adds event handlers for mouseenter and mouseleave events to the selected elements |
| `$(selector).focus(handler)` | Adds an event handler for focus events to the selected elements |
| `$(selector).blur(handler)` | Adds an event handler for blur events to the selected elements |
| `$(selector).submit(handler)` | Adds an event handler for submit events to the selected elements |
| `$(selector).keydown(handler)` | Adds an event handler for keydown events to the selected elements |
| `$(selector).keypress(handler)` | Adds an event handler for keypress events to the selected elements |
| `$(selector).keyup(handler)` | Adds an event handler for keyup events to the selected elements |
| `$(selector).change(handler)` | Adds an event handler for change events to the selected elements |
| `$(selector).select(handler)` | Adds an event handler for select events to the selected elements |
| `$(selector).ready(handler)` | Adds an event handler for the document ready event |
| `$.get(url, data, callback)` | Makes a GET request to the specified URL |
| `$.post(url, data, callback)` | Makes a POST request to the specified URL |
| `$.getJSON(url, data, callback)` | Makes a GET request to the specified URL and parses the response as JSON |
| `$.ajax(url, settings)` | Makes a custom AJAX request to the specified URL |

| --- | --- |
