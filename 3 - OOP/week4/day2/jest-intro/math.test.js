// import { sum, multiply } from "./math.js"
const math = require("./math.js")

test("adds 2 + 3 to equal 5", () => {
    // expect(math.sum(2,3)).toBe(5)
    expect(math.sum(2, 3)).toEqual(5)
});

test("adds 4 + 6 to equal 10", () => {
    expect(math.sum(4,6)).toBe(10)
})

test("multipy 4 * 4 to be equal 16", () => {
    expect(math.multiply(4, 4)).toBe(16)
})

test("multipy 5 * 4 to be equal 20", () => {
    expect(math.multiply(5, 4)).toBe(20)
})

test("multipy 0 * 4 to be equal 0", () => {
    expect(math.multiply(0, 4)).toBe(0)
})

test("two plus two is four", () => {
    expect(2 + 2).toBe(4)
}) // passed

test("object assignment", () => {
    let obj = { name: "joel" };
    obj["age"] = 21;

    expect(obj).toEqual({name: "joel", age: 21})
})

test("adding positive numbers is not zero", () => {
    for(let a = 1; a < 10; a++){
        for(let b = 1; b < 10; b++){
            expect(a + b).not.toBe(0)
        }
    }
})

// Truthiness

test("null", () => {
    const n = null;

    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test("zero", () => {
    let a = 0;

    expect(a).not.toBeNull();
    expect(a).toBeDefined();
    expect(a).not.toBeUndefined();
    expect(a).not.toBeTruthy();
    expect(a).toBeFalsy();
});

