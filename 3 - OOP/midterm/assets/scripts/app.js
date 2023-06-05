// product.js
class Product {
  constructor(id, title, price, description, image) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}

// productItem.js
class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const li = document.createElement("li");
    li.classList.add('product-item');
    li.innerHTML = `
          <div>
            <img src="${this.product.image}" alt="A Pillow"/>
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
    `;

    const addButton = li.querySelector("button");
    addButton.addEventListener('click', () => this.addToCart());

    return li;
  }
}

// productList.js
class ProductList {
  constructor() {
    this.products = [];
  }

  async fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      this.products = data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  render() {
    const productListElement = document.getElementById('product-list');
    productListElement.innerHTML = ''; // Clear previous product list

    this.products.forEach((product) => {
      const productItem = new ProductItem(product);
      const li = productItem.render();
      productListElement.appendChild(li);
    });
  }
}

// shoppingCart.js
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getTotal() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price;
    });
    return total;
  }

  render() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = ''; // Clear previous cart content

    const total = this.getTotal();
    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;

    const productListElement = document.createElement('ul');
    productListElement.classList.add('cart-product-list');
    cartElement.appendChild(productListElement);

    this.items.forEach((item) => {
      const productItemElement = document.createElement('li');
      productItemElement.classList.add('cart-item');
      productItemElement.innerHTML = `
      <img src="${item.image}" height="100px" alt="A Pillow"/>
      <div class="product-item__content">
        <h2>${item.title}</h2>
        <h3>${item.price}</h3>
      `;
      productListElement.appendChild(productItemElement);
    })

    const orderButton = document.createElement('button');
    orderButton.textContent = 'Order Now';

    cartElement.appendChild(totalElement);
    cartElement.appendChild(orderButton);
  }
}

// shop.js
class Shop {
  constructor() {
    this.productList = new ProductList();
    this.shoppingCart = new ShoppingCart();
  }

  async fetchProducts() {
    await this.productList.fetchProducts();
    this.render();
  }

  render() {
    this.productList.render();
    this.shoppingCart.render();
  }
}

// app.js
class App {

  static shop;

  static async init() {
    this.shop = new Shop();
    await this.shop.fetchProducts();
  }

  static addProductToCart(product) {
    this.shop.shoppingCart.items.push(product);
    this.shop.shoppingCart.render();
  }
}

App.init();
