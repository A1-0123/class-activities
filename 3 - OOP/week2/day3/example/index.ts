// tuple

let x: [string, number]; // fixed sized length
x = ["kubilay", 27];

// access tuple 
console.log(x[0]); // "kubilay"
console.log(x[1]); //27

const [name1, age] = x; // destructuring tuple

console.log(name1);
console.log(age);


// enum
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

console.log(Direction.Up); // UP
console.log(Direction.Down); // DOWN

// let playerDirection: Direction = Direction.Up;

// switch (playerDirection) {
//   case Direction.Up:
//     console.log("Player is facing north.");
//     break;
//   case Direction.Down:
//     console.log("Player is facing south.");
//     break;
//   case Direction.Left:
//     console.log("Player is facing east.");
//     break;
//   case Direction.Right:
//     console.log("Player is facing west.");
//     break;
// }

enum Status {
    Idle = "IDLE",
    Running = "RUNNING",
    Finished = "FINISHED",
    Completed = "COMPLETED"
}

function setStatus(status: Status){
    console.log(status);
}

setStatus(Status.Idle); // IDLE
setStatus(Status.Running); // RUNNING
setStatus(Status.Finished); // FINISHED
setStatus(Status.Completed); // COMPLETED

// union

function getStatus(status: string | number){
    console.log(status);
}

getStatus("success"); // IDLE
getStatus(200); // RUNNING

function processValue(value: string | number){
    if(typeof value === "string"){
        console.log("Type is string");
    } else if (typeof value === "number"){
        console.log("Type is number");
    }
}

processValue("success") // Type is string
processValue(200) // Type is number

// intersaction

type Car = {
    make: string,
    model: string,
    year: number,
    seat: number,
}

type Color = {
    color: string,
}

type Engine = {
    engine: string
}

type ColoredCarWithEngine = Car & Color & Engine;

let myCar: ColoredCarWithEngine = {
    make: "Ford",
    model: "Mustang",
    year: 2023,
    seat: 4,
    color: "black",
    engine: "V8"
}

console.log(myCar);

// literal types

let name: "Joe" | "Joel";


export {}
