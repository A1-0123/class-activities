class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        // console.log("addToCart at ProductItem", this.product);
        // just console.log the product for now
        App.addToProductCart(this.product);
    }
    render() {
        // return the product element with the product data (<li>)
        // const li = document.createElement("li");
        // const addButton = document.createElement("button");

        // addButton.innerText = "Add to Cart";
        // li.innerText = this.product.title;

        // addButton.addEventListener("click", () => this.addToCart());

        // li.appendChild(addButton);
        
        // return li;
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = this.product.image;
        img.alt = this.product.title;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h3");
        cardTitle.className = "card-title";
        cardTitle.innerText = this.product.title;

        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = this.product.description;

        const cardPrice = document.createElement("p");
        cardPrice.className = "card-text";
        cardPrice.innerText = "$" + this.product.price;

        const addButton = document.createElement("button");
        addButton.className = "btn btn-primary";
        addButton.innerText = "Add to Cart";

        addButton.addEventListener("click", () => this.addToCart());

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(addButton);

        card.appendChild(img);
        card.appendChild(cardBody);

        return card;
    }
}