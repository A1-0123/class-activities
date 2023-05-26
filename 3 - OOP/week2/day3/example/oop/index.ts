class Person {
    private name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    get getName(){
        return this.name;
    }

    greet(){
        return `${this.name} says hello, and he/she is ${this.age} years old!`
    }
}

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

const newPerson = new Person("Joel", 25);
// const newStudent = new Student("Jane", 18, "B");

console.log(newPerson.greet());
console.log(newPerson.getName);

// console.log(newPerson.name);
// console.log(newStudent.greet());
// console.log(newStudent.readGrade());

