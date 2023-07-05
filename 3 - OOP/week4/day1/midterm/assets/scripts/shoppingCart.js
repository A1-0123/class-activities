class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getTotal() {
    // calculate the total price of the items in the cart
    let total = 0;
    for(let item of this.items){
        total += item.product.price * item.quantity;
    }
    return total;
  }

  addProduct(product){
    const existingProductIndex = this.items.findIndex(
        (item) => item.product.id === product.id
    );

    if(existingProductIndex >= 0){
        this.items[existingProductIndex].quantity++;
    }else{
        this.items.push({
            product, quantity: 1
        })
    }
  }

  removeProduct(id){
    let item = this.items.find((item) => item.product.id === id);

    if(item){
        item.quantity--;
        if(item.quantity <= 0){
            this.items = this.items.filter((item) => item.product.id !== id);
        }
    }
  }

  clear(){
    this.items = [];
    // this.render();
  }

  render() {
    // render the total and a button `order now` in a `<section>` element
    const section = document.createElement("section");
    const table = document.createElement("table");

    const tableColumn1 = document.createElement("th");
    tableColumn1.innerText = "Image";
    const tableColumn2 = document.createElement("th");
    tableColumn2.innerText = "Name";
    const tableColumn3 = document.createElement("th");
    tableColumn3.innerText = "Quantity";
    const tableColumn4 = document.createElement("th");
    tableColumn4.innerText = "Price";

    const tableHeader = document.createElement("tr");
    tableHeader.appendChild(tableColumn1);
    tableHeader.appendChild(tableColumn2);
    tableHeader.appendChild(tableColumn3);
    tableHeader.appendChild(tableColumn4);

    table.appendChild(tableHeader);

    this.items.forEach((item) => {

        const increaseButton = document.createElement("button");
        increaseButton.innerText = "+";
        increaseButton.className = "tool-button";
        const decreaseButton = document.createElement("button");
        decreaseButton.innerText = "-";
        decreaseButton.className = "tool-button";

        increaseButton.addEventListener("click", () => App.addToProductCart(item.product));
        decreaseButton.addEventListener("click", () => App.removeFromProductCart(item.product.id));

        const row = document.createElement("tr");
        const imageCell = document.createElement("td");
        const image = document.createElement("img");
        image.className = "cart-item-image";
        image.src = item.product.image;
        image.alt = item.product.title;
        imageCell.appendChild(image);

        const nameCell = document.createElement("td");

        nameCell.innerText = item.product.title;
        const quantityCell = document.createElement("td");
        let span = document.createElement("span");
        span.innerText = item.quantity;

        
        quantityCell.appendChild(increaseButton);
        quantityCell.appendChild(span);
        quantityCell.appendChild(decreaseButton);

        const priceCell = document.createElement("td");
        priceCell.innerText = item.product.price * item.quantity;

        row.appendChild(imageCell);
        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);
        table.appendChild(row);
    });

    const clearButton = document.createElement("button");
    clearButton.innerText = "Clear Cart";
    clearButton.addEventListener("click", () => App.clearCart());

    const total = document.createElement("p");
    total.innerText = `Total: ${this.getTotal()}`
    section.appendChild(table);
    section.appendChild(total);
    section.appendChild(clearButton);

    return section;
  }
}
