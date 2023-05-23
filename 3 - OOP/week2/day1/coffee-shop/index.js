function Product (name, price){
    this.name = name;
    this.price = price;
}

function ShoppingCart(){
    this.items = [];
    this.total = 0;
}

ShoppingCart.prototype.addProduct = function (product) {
    const { name, price } = product; // destructure object

    let existingProduct = this.findProduct(name);

    if(existingProduct) {
        existingProduct.quantity++;
    } else {
        product.quantity = 1;
        this.items.push(product);
    }
    this.total += price;
}

ShoppingCart.prototype.removeProduct = function (product) {
    let index = this.items.indexOf(product); // -1 means not found
    if(index !== -1){
        // we found the product index number
        if(product.quantity > 1){
            product.quantity--; // decrease the item quantity
        } else {
            this.items.splice(index, 1);
        }
        this.total -= product.price; // this.total = this.total - product.price;
    }
}

ShoppingCart.prototype.clearCart = function () {
    this.items = [];
    this.total = 0;
}

ShoppingCart.prototype.findProduct = function (name) {
    for(let i = 0; i < this.items.length; i++){
        if(this.items[i].name === name){
            return this.items[i];
        }
    }
    return null;
    // return this.items.find(item => item.name == name); // alternative
}

ShoppingCart.prototype.displayCart = function () {
    let cartItems = document.querySelector("#cart-items");
    cartItems.innerHTML = "";

    for(let i = 0; i < this.items.length; i++){
        let product = this.items[i];
        console.log(product);

        let li = document.createElement("li");
        li.innerHTML = product.name + " - $" + product.price + " x " + product.quantity;

        let increaseButton = document.createElement("button");
        increaseButton.innerHTML = "+";
        increaseButton.className = "button";
        increaseButton.onclick = createIncreaseQuntityHandler(product);

        let decreaseButton = document.createElement("button");
        decreaseButton.innerHTML = "-";
        decreaseButton.className = "button";
        decreaseButton.onclick = createDecreaseQuntityHandler(product);

        let div = document.createElement("div");

        div.append(increaseButton);
        div.append(decreaseButton);

        li.appendChild(div);

        cartItems.appendChild(li);
    }

    document.querySelector("#cart-total").textContent = this.total;
}

function createIncreaseQuntityHandler(product) {
    return function () {
        cart.addProduct(product);
        cart.displayCart();
    }
}

function createDecreaseQuntityHandler(product) {
    return function () {
        cart.removeProduct(product);
        cart.displayCart();
    }
}

let cart = new ShoppingCart();

function addToCart(name, price) {
    let product = new Product(name, price);

    cart.addProduct(product);
    cart.displayCart();
}

function removeFromCart(product) {
    let existingProduct = cart.findProduct(product);

    if(existingProduct){
        cart.removeProduct(product);
        cart.displayCart();
    }
}

function clearCart () {
    cart.clearCart();
    cart.displayCart();
}