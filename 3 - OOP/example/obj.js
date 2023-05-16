// Object in JavaScript

// simple object
const person = {
    id: 1,
    name: "Alex",
    lastName: "Smith",
};

console.log(person); // { id: 1, name: 'Alex', lastName: 'Smith' }
console.log(person.id); // 1
console.log(person['id']); // 1
// ------------------------------------------------
console.log(person.name); // Alex
console.log(person["name"]); // Alex
// ------------------------------------------------
console.log(person.lastName); // Smith
console.log(person["lastName"]); // Smith

// ------------------------------------------------

// complex object
const person2 = {
    id: 2,
    name: "Jane",
    lastName: "Doe",
    hobbies: ["Swimming", "Basketball", "Reading", "Coding"],
    greet: function () {
        console.log("Hello My name is ...");
    },
    address: {
        street: "1150 Jervis",
        postCode: "V6E 2C8",
        phone: ["123-456-7891", "123-456-7890"]
    }
};

console.log(person2.hobbies); // ["Swimming", "Basketball", "Reading", "Coding"]
console.log(person2["hobbies"]); // ["Swimming", "Basketball", "Reading", "Coding"]
// ------------------------------------------------
console.log(person2.greet()); // Hello My name is ...
// ------------------------------------------------
console.log(person2.address["street"]); // "1150 Jervis",
console.log(person2.address.street); // "1150 Jervis",
// ------------------------------------------------
console.log(person2.address.phone[1]); // "123-456-7890"

// Work with the object, Adding, removing ...

const person3 = {
    id: 3, 
    name: "Josh",
    lastName: "Smith",
    age: 30,
    email: "josh@smith.com"
};

// ADD NEW PROPERTY TO OBJECT

// I want to add isAdmin property to my Object
// WRONG WAY TO DO
// person3 = {
//     id: 3,
//     name: "Josh",
//     lastName: "Smith",
//     age: 30,
//     email: "josh@smith.com",
//     isAdmin: true
// }

// CORRECT WAY TO WRITE
person3.isAdmin = true;
person3["isMember"] = true;
person3.address = {
    street: "1150 Jervis",
    postCode: "V6E 2C8"
}
person3.greeting = function() {
    console.log("Hello");
}

console.log(person3);
console.log(person3.greeting()); 

// MODIFY PROPERTY FROM OBJECT

const person4 = {
    id: 4,
    name: "Yale",
    age: 30
}

person4.name; // Yale
person4.name = "Kubilay";
person4.name; // Kubilay
console.log(person4);

// DELETE PROPERTY FROM OBJECT

const person5 = {
    id: 5,
    name: "Megan",
    age: 31,
    salary: 6000
}
console.log(person5); // { id: 5, name: 'Megan', age: 31, salary: 6000 }
delete person5.salary;
console.log(person5); // { id: 5, name: 'Megan', age: 31 }

// ------------------------------------------------
// SPECIAL NAMES

const person6 = {
    "name and lastname": "kubilay cakmak",
    "birth-date": "18 march",
}

console.log(person6["name and lastname"]); //"kubilay cakmak"
console.log(person6["birth-date"]); // "18 march"

// ------------------------------------------------

const person7 = {
    id: 7,
    name: "Marry",
    lastName: "Jane"
}

let keyName = "lastName";

console.log(person7.name); // Marry

console.log(person7[keyName]); // Jane
console.log(person7.keyName); // undefined

// ------------------------------------------------
const propKey = "lastName";

const person8 = {
    id: 8,
    name: "Arthur",
    propKey: "Smith",
    [propKey]: "Smith"
}

console.log(person8); // { id: 8, name: 'Arthur', propKey: 'Smith', lastName: 'Smith' }

// ------------------------------------------------
// Object Spread Operator & Object Assign

const person9 = {
    id: 9,
    name: "Holy",
    lastName: "Meredith",
    age: 42,
    address: {
        street: "1150 Jervis"
    }
}

// const newPerson = person9; // reference the same object as person9, so if you delete something from person9, you also deleting from newPerson object too.
const newPerson = { ...person9, address: { ...person9.address }, password: 123456 }; // real copy, 2 different value stored.
delete person9.address.street; 

console.log(newPerson); 
// {
//     id: 9,
//     name: 'Holy',
//     lastName: 'Meredith',
//     age: 42,
//     address: { street: '1150 Jervis' },
//     password: 123456
// }

// if you have nested object, so also should using Spread operator to copy to your new variable,
// if you don't its going to be referance.
// ------------------------------------------------

const person10 = {
    id: 10,
    name: "test-person",
    address: {
        street: "200 Granvile",
    }
}

const newPerson1 = Object.assign({}, person10);
// console.log(newPerson1); // { id: 10, name: 'test-person', address: { street: "200 Granvile" } }

// ------------------------------------------------
// Object Destructuring

const person11 = {
    id: 11,
    name: "Maiko",
    lastName: "Yorino",
    address: {
        type: "town house"
    }
}

console.log(person11.name); // "Maiko",
console.log(person11.lastName); // "Yorino"

// const {id, name, lastName} = person11;
const { type } = person11.address;

// console.log(name); // Maiko
// console.log(lastName); // Yorino
// console.log(type); // town house

// ------------------------------------------------

const person12 = {
    id:12, 
    firstName: "test first name",
    lastName: "test last name",
    isSubscribe: false
}

const { id, firstName: fn, lastName: ln, isSubscribe: subs } = person12;

console.log(fn);
console.log(ln);
console.log(subs);

// ------------------------------------------------'

const person13 = {
    id: 13,
    name: "name13",
    lastName: "lastname13",
}

if("age" in person13) {
    console.log("yes it is");
}else{
    console.log("no, its not");
}

// ------------------------------------------------'

const name = "Josh"
const personKubilay = {
    id: 14,
    name: "Kubilay",
    lastName: "Cakmak",
    greeting: function () {
        console.log("Hi, My name is " + this.name + " and my last name is " + this.lastName);
    }
}

console.log(personKubilay.greeting());

// ------------------------------------------------'
// Methods

const person14 = {
    id: 14,
    name: "Keith",
    lastName: "Alex",
    // greeting: function () {
    //     console.log("Hello " + this.name);
    // },
    greeting(age) {
        console.log("Hello " + this.name + " and i am " + age + " years old");
    },
}

const { greeting } = person14;

let greet = greeting.bind(person14);
greet(21);

// greeting.call(person14, 19);

// greeting.apply(person14, [18]);

// const person15 = {
//     id: 15,
//     name: "Kubilay",
//     greeting: () => {
//         console.log("Hello " + this.name);
//     }
// }

// const { greeting } = person15;
// const newGreeting = greeting.bind(person15);
// newGreeting();