class ShoppingCart {
  constructor() {
    this.cart = [];
  }

  getTotal() {
    // calculate the total price of the items in the cart
    let total = 0;
    for(let item of this.items){
        total += item.product.price * item.quantity;
    }
    return total;
  }
  render() {
    // render the total and a button `order now` in a `<section>` element
    const section = document.createElement("section");
    const table = document.createElement("table");

    this.items.forEach((item) => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.innerText = item.product.title;
        const quantityCell = document.createElement("td");
        quantityCell.innerText = item.quantity;

        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        table.appendChild(row);
    });

    const total = document.createElement("p");
    total.innerText = `Total: ${this.getTotal()}`
    section.appendChild(table);
    section.appendChild(total);

    return section;
  }
}
