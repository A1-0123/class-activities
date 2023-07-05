const math = require("./math.js");
const calculate = require("./calculate");

test("calculate adds numbers correctly", () => {

    jest.fn(math.add)
        .mockImplementationOnce(() => 20)
        .mockImplementationOnce(() => 5);

    const result = calculate(10, 10);

    expect(result).toBe(25);
    // expect(math.add).toHaveBeenCalledTimes(2);
    // check if the function was called with the specified arguments

    math.add.mockRestore();
})