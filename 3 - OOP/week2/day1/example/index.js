function Animal(name){
    this.name = name;
}

Animal.prototype.eat = function () {
    console.log(`${this.name} can eat`);
}

const bird1 = new Animal("birdy");
const bird2 = new Animal("Foo");

console.log(bird1);
console.log(bird2);