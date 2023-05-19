class Pizza {
    constructor() {
        this.topping = ["cheese"];
    }

    addTopping(topping) {
        this.topping.push(topping)
    }

    set size(size){
        if(size === "s" || size === "m" || size === "l"){
            this._size = size;
        }else{
            this._size = "m"
        }
    }

    get size(){
        return this._size;
    }

    get price(){
        const basePrice = 5;
        const sizes = {
            s: 4,
            m: 6,
            l: 8
        }
        const toppingPrice = 2;

        return basePrice + sizes[this._size] + (this.topping.length * toppingPrice);
    }

    info(){
        return `The pizza has ${this.topping.toString()} toppings and the size of this pizza is ${this._size}`
    }
    // setSize(size){

    // }
    // getSize(){
    //     return this.size;
    // }
    // getPrice(){
    // }
    
}

// let order1 = new Pizza();
// order1.addTopping("cheddar");
// order1.addTopping("peperoni");
// order1.addTopping("mushroom");
// order1.setSize("xl");
// console.log(order1.getPrice());
// console.log(order1._topping);

let order = new Pizza();

order.addTopping("peperoni");
order.addTopping("chicken");
order.addTopping("mushroom");
order.addTopping("olives");

order.size = "s";
console.log(order.info());
console.log(order.price);