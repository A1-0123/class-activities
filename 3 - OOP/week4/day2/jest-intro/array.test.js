const getShoppingList = require("./array.js");

test("the shopping list has beer on it", () => {
    expect(getShoppingList()).toContain("beer");
})

test("bla bla", () => {
    expect(2 * 2).toBe(4);
})

test("bla bla", () => {
    expect(5 * 2).toBe(10);
})