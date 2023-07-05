// class Student {
//     static studentClassName = "React";

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         const studentName = name;
//     }

//     test(){
//         // console.log(studentName);
//         console.log(Student.studentClassName); // React

//         // console.log("static", studentClassName)
//     }
// }

// let obj = new Student("Alex", 23);
// console.log(obj);

// obj.test()

// ---------

class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    eat(){
        return `${this.name} is eating!`;
    }
}

class Dog extends Animal {
    bark() {
        return `${this.name} is barkking!`;
    }
    // overriding
    eat(){
        return `${super.eat()} from doggy box`
    } // super, super is Animal class, and you can call a class method using dot(.) notation.
}

class Bird extends Animal {
    fly(){
        return `${this.name} is flying!`;
    }
    // overriding
    eat(){
        return `${this.name} is eating from plate!`;
    } // this is method overriding
}


let dog = new Dog("Bingo", 3);
let bird = new Bird("Ricky", 4);

console.log(dog.eat());
console.log(dog.bark()); 

console.log(bird.eat());
console.log(bird.fly());