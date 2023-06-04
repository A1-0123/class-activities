// Classes
// Step 1 - Product class
const product = {
  id: 1,
  title: "...",
  price: 0,
  description: "...",
  image: "...",
};

// Step 2 - Product Item
const productItem = {
  product: {}, // instance of Product class
  addToCart() {
    // just console.log the product for now
  },
  render() {
    // return the product element with the product data (<li>)
  },
};

// Step 3 - Product List
const productList = {
  products: [],
  fetchProducts: function () {
    // fetch the products from the API
  },
  render() {
    // render the products by looping through the products array and create a new ProductItem instance for each product. Use render method of ProductItem class to get each product element and append it to the `<ul>`.
  },
};

// Step 4 – ShoppingCart 
const shoppingCart = {
  items: [],
  getTotal() {
    // calculate the total price of the items in the cart
  },
  render() {
    // render the total and a button `order now` in a `<section>` element
  },
};

// Step 5 – Shop
const shop = {
  render(){
    // render the shop by calling the render method of ProductList and ShoppingCart classes
  }
}

// Step 6 – Adding products to the cart
const app = {
  init() {
    // initialize the app by creating instance of Shop class and calling the render method of the Shop class
  },
  addProductToCart() {
    // add the product to the cart by calling the addToCart method of Cart class
  },
};

// Step 7 – Update total amount
