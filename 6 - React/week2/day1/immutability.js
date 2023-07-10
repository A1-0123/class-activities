let a = [1, 2, 3, 4];

a.push(5);

a = [...a, 5]; // ...a = 1, 2, 3, 4 (spread operator) / immutable way to add a new element to an array

// ---

let b = {
    name: "Jane",
    age: 25
}

// b.salary = 250;


b = {
    name: "Jane",
    age: 25,
}

// ---

b = {
    ...b,
    salary: 250
} // immutable way to add a new property to an object

console.log(b);