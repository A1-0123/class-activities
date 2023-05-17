class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start(){
        return `${this.make} - ${this.model} is start working.`
    }
    move(){
        return `${this.make} - ${this.model} is start moving.`
    }
    stop(){
        `${this.make} - ${this.model} is stop.`
    }
}

const mustang = new Car("Ford", "Mustang", 2022);
const camoro = new Car("Chevrolet", "Comoro", 2020);

console.log(mustang.start());
console.log(mustang.year);
console.log(camoro.start());