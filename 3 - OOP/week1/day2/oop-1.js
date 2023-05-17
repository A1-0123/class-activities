class Animals {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    sing() {
        return `${this.name} can sing!`
    }
    dance(){
        return `${this.name} can dance!`
    }
}

class Cats extends Animals{ 
    constructor(name, age, whiskerColor){
        super(name, age);
        this.whiskerColor = whiskerColor;
    }

    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}

let pancake = new Cats("pancake", 3, "black");

console.log(pancake);
// let animal1 = new Animals("Doggy", 3);
// console.log(animal1);