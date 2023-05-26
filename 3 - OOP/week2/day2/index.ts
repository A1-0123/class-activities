// string
let firstName: string = "John";
let lastName: string = "Doe";

// number
let age: number = 10;
age = 12;


// any
let isWorking: any = true;
isWorking = 10;
isWorking = "something";

// array 
let numArr: number[] = [1,2,3,4,5,6];
let stringArr: string[] = ["1", "2", "3"];
let booleanArr: boolean[] = [false, true, false, false, true];
let mixArr: any[] = [1,2,3,"a", "b", "c", false, true, {}];

// object
let person: { name: string, age: number } = {
    name: "Joe",
    age: 10
}
let car: object = {
    make: "Ford",
    modal: "Mustang",
    year: 2023,
    seats: [[1,1],[1,1]]
};

// function
function greeting(name: string, age: number): string {
    return `Hello ${name}, you are ${age} years old!`
}

console.log(greeting("Joe", 20));

function hello(): void {
    
}

export {}