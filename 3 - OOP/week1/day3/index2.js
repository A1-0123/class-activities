class Person{
    constructor(name, lastname, age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }

    greeting() {
        return `Hello, My name is ${this.name} ${this.lastname}`
    }
}

class Student extends Person{
    constructor(name, lastname, age, studentId, school){
        super(name, lastname, age);
        this.studentId = studentId;
        this.school = school;
    }

    getStudentInfo(){
        return `Hello, My name is ${this.name} ${this.lastname} and my student id is ${this.studentId} `
    }
}

class Instructor extends Person {
    constructor(name, lastname, age, teacherId, department){
        super(name, lastname, age);
        this.teacherId = teacherId;
        this.department = department;
    }

    getTeacherInfo(){
        return `Hello, My name is ${this.name} ${this.lastname} and I am teaching ${this.department}`
    }
}

const kubilay = new Instructor("Kubilay", "Cakmak", 27, 123456, "Software Development");
console.log(kubilay.greeting());
console.log(kubilay.getTeacherInfo());

const francisco = new Student("Francisco", "Murcia", 21, 28422, "CICC");
console.log(francisco.greeting());
console.log(francisco.getStudentInfo());