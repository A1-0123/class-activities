// Step 1 - Product class
class Product {
  id;
  title;
  price;
  description;
  image;

  // Removed constructor
}

// Step 2 - Product Item
class ProductItem {
  product;

  addToCart() {
    shoppingCart.addItem(this.product);
  }

  render() {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="product-item">
        <img src="${this.product.image}" alt="${this.product.title}" />
        <div class="product-item__content">
        <h3>${this.product.title}</h3>
        <p>${this.product.description}</p>
        <span class="price">$${this.product.price}</span>
        <button class="add-to-cart" onclick="app.addProductToCart(${this.product.id})">Add to Cart</button>
        </div>
      </div>
    `;
    return li;
  }
}

// Step 3 - Product List
class ProductList {
  products = [];

  async fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      this.products = data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  render() {
    const ul = document.createElement("ul");
    ul.classList.add('product-list')
    ul.id = "prod-list";
    for (const product of this.products) {
      const productItem = new ProductItem();
      productItem.product = product;
      ul.append(productItem.render());
    }
    return ul;
  }
}

// Step 4 – ShoppingCart
class ShoppingCart {
  items = [];

  addItem(product) {
    this.items.push(product);
    this.render();
  }

  getTotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }
    return total;
  }

  render() {
    const section = document.createElement("section");
    section.classList.add('cart');
    section.innerHTML = `
      <h2>Shopping Cart</h2>
      <p>Total: $${this.getTotal()}</p>
      <button class="order-now">Order Now</button>
    `;
    return section;
  }
}

// Step 5 – Shop
class Shop {
  productList = new ProductList();
  shoppingCart = new ShoppingCart();

  async render() {
    await this.productList.fetchProducts(); // Fetch products from the API
    const main = document.getElementById("app");
    main.innerHTML = "";
    main.appendChild(this.productList.render());
    main.appendChild(this.shoppingCart.render());
  }
}

// Step 6 – Adding products to the cart
const app = {
  async init() {
    const shop = new Shop();
    await shop.render();
  },

  addProductToCart(productId) {
    const product = shop.productList.products.find((product) => product.id === productId);
    if (product) {
      shop.shoppingCart.addItem(product);
    }
  },
};

// Step 7 – Update total amount

// Call the `app.init()` to initialize the application
app.init();
