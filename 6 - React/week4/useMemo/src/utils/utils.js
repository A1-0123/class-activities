export function fetchProductByLimit(limit = 10){
    const products = [];

    for(let i = 0; i < limit; i++){
        products.push({
            id: i,
            title: "Item " + (i + 1),
            price: Math.random() * 100,
        },)
    }
    console.log("New Array of Products", products);
    return products;  
}

export function fetchProduct() {
    const products = [];

    for(let i = 0; i < 5; i++){
        products.push({
            id: i,
            title: "Item " + (i + 1),
            price: Math.random() * 100,
        },)
    }

    return products;  
}