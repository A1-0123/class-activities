"use strict";
// tuple
Object.defineProperty(exports, "__esModule", { value: true });
var x; // fixed sized length
x = ["kubilay", 27];
// access tuple 
console.log(x[0]); // "kubilay"
console.log(x[1]); //27
var name1 = x[0], age = x[1]; // destructuring tuple
console.log(name1);
console.log(age);
// enum
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
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
var Status;
(function (Status) {
    Status["Idle"] = "IDLE";
    Status["Running"] = "RUNNING";
    Status["Finished"] = "FINISHED";
    Status["Completed"] = "COMPLETED";
})(Status || (Status = {}));
function setStatus(status) {
    console.log(status);
}
setStatus(Status.Idle); // IDLE
setStatus(Status.Running); // RUNNING
setStatus(Status.Finished); // FINISHED
setStatus(Status.Completed); // COMPLETED
// union
function getStatus(status) {
    console.log(status);
}
getStatus("success"); // IDLE
getStatus(200); // RUNNING
function processValue(value) {
    if (typeof value === "string") {
        console.log("Type is string");
    }
    else if (typeof value === "number") {
        console.log("Type is number");
    }
}
processValue("success"); // Type is string
processValue(200); // Type is number
var myCar = {
    make: "Ford",
    model: "Mustang",
    year: 2023,
    seat: 4,
    engine: "V8",
    color: "black"
};
console.log(myCar);
