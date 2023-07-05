class App {

    static shop = new Shop();

    static async init(){
        await App.shop.init();
        await App.shop.render();
    }

    static async addToProductCart (product) {
        App.shop.shoppingCart.addProduct(product)
        await App.shop.render();
    }

    static async clearCart (){
        this.shop.shoppingCart.clear();
        await App.shop.render();
    }

    static async removeFromProductCart(id) {
        this.shop.shoppingCart.removeProduct(id);
        await App.shop.render();
    }
}

App.init();