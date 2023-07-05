class Shop {
    constructor(){
        this.productList = new ProductList();
        this.shoppingCart = new ShoppingCart();
    }

    async init(){
        await this.productList.fetchProducts();
    }

    render() {
        // render the shop by calling the render method of ProductList and ShoppingCart classes
        const app = document.querySelector("#app");

        app.innerHTML = "";

        app.appendChild(this.productList.render());
        app.appendChild(this.shoppingCart.render());
    }
}