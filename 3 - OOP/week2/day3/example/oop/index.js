var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.greet = function () {
        return "".concat(this.name, " says hello, and he/she is ").concat(this.age, " years old!");
    };
    return Person;
}());
// class Student extends Person {
//     grade: string;
//     constructor(name: string, age: number, grade: string){
//         super(name, age);
//         this.grade = grade;
//     }
//     readGrade(){
//         return `${this.name} gets ${this.grade} as a grade!`
//     }
// }
var newPerson = new Person("Joel", 25);
// const newStudent = new Student("Jane", 18, "B");
console.log(newPerson.greet());
console.log(newPerson.getName);
// console.log(newPerson.name);
// console.log(newStudent.greet());
// console.log(newStudent.readGrade());
