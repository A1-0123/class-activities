In JavaScript, an object is a collection of key-value pairs, similar to a dictionary in other programming languages. Objects can be used to store and organize data, and can also have methods (functions) associated with them.

Here's an example of an object in JavaScript:

```js
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.firstName); // Output: "John"
console.log(person.getFullName()); // Output: "John Doe"
```

In this example, we have defined an object called person with three properties: firstName, lastName, age and a function getFullName. You can access the properties of an object using the dot notation (.) or bracket notation ([]).

An Array is a special type of object that can store a collection of values. Each value in an array is called an element, and it can be accessed by its index, which is a number that starts from 0.

Here's an example of an array in JavaScript:

```js
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1
console.log(numbers[4]); // Output: 5
```

In this example, we have defined an array called numbers that contains 5 elements. You can access the elements of an array using the bracket notation ([]) and passing the index of the element you want to access.

JavaScript provides many built-in array methods like push() which adds an element to the end of an array, pop() which removes the last element of an array, sort() which sorts the elements of an array and many more.
