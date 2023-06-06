class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        console.log("addToCart at ProductItem", this.product);
        // just console.log the product for now
    }
    render() {
        // return the product element with the product data (<li>)
        const li = document.createElement("li");
        const addButton = document.createElement("button");

        addButton.innerText = "Add to Cart";
        li.innerText = this.product.title;

        addButton.addEventListener("click", () => this.addToCart());

        li.appendChild(addButton);
        
        return li;
    }
}