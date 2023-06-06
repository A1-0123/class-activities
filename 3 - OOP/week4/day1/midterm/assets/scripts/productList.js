class ProductList {
    constructor(){
        this.products = []
    }

    async fetchProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        this.products = data.map((product) => new Product(product.id, product.title, product.price, product.description, product.image))
    }

    render(){
        // render the products by looping through the products array and create a new ProductItem instance for each product. Use render method of ProductItem class to get each product element and append it to the `<ul>`.
        const ul = document.createElement("ul");

        this.products.forEach((product) => {
            // product is instance of Product class;
            const productItem = new ProductItem(product);
            // this will create product instances using product
            ul.appendChild(productItem.render());
            // as we know, productItem.render will return li;
        });

        return ul;
    }
}