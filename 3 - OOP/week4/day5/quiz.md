1. ```javascript
   const multiply = (a, b) => a * b;

   test("example test", () => {
     const result = multiply(5, 2);
     expect(result).toBe(10);
   });
   ```

   What is the expected output of this test case?

   - A. `true`
   - B. `false`
   - C. `undefined`
   - D. `10`

2. ```javascript
   const divide = (a, b) => a / b;

   test("example test", () => {
     const result = divide(10, 0);
     expect(result).toBeNaN();
   });
   ```

   What is the expected output of this test case?

   - A. `NaN`
   - B. `Infinity`
   - C. `undefined`
   - D. Error: Division by zero

3. ```javascript
   const fetchData = () => Promise.resolve("Data");

   test("example test", () => {
     return fetchData().then((data) => {
       expect(data).toEqual("Data");
     });
   });
   ```

   What is the alternative way to write this test case using Jest's asynchronous syntax?

   - A. Use `async/await` instead of `.then()`.
   - B. Use `setTimeout` to introduce a delay.
   - C. Use `fetchData().sync()` instead of `.then()`.
   - D. Use `fetchData().catch()` instead of `.then()`.

4. ```javascript
   const fetchData = () => Promise.reject(new Error('Failed'));

   test('example test', () => {
     expect(fetchData()).[FILL IN]('Failed');
   });
   ```

   Which matcher should be used to assert that the promise is rejected with a specific error message?

   - A. `.resolves`
   - B. `.resolves.toEqual`
   - C. `.rejects`
   - D. `.rejects.toThrowError`

5. ```javascript
   const fetchData = async () => {
     const response = await fetch("https://example.com/api/data");
     return response.json();
   };

   test("example test", async () => {
     const result = await fetchData();
     expect(result).toHaveProperty("name", expect.any(String));
   });
   ```

   What does the `expect.any(String)` matcher represent in this test case?

   - A. It matches any string value.
   - B. It matches any object with the `String` constructor.
   - C. It matches any value except a string.
   - D. It matches any string longer than three characters.

6. ```javascript
   const fetchData = () => {
     return new Promise((resolve) => {
       setTimeout(() => resolve("Data"), 1000);
     });
   };

   test("example test", async () => {
     const result = await fetchData();
     expect(result).toBe("Data");
   });
   ```

   How can you modify this test case to handle the asynchronous nature of the `fetchData` function?

   - A. Wrap the test case in a `setTimeout` callback.
   - B. Use the `done` callback to mark the end of the test.
   - C. Prefix the test case with the `async` keyword.
   - D. Add a `.then()` chain to handle the promise resolution.

7. ```javascript
   const add = (a, b) => a + b;

   test('example test', () => {
     const result = add(3, 4);
     expect(result).[FILL IN](5);
   });
   ```

   Which matcher should be used to assert that the result is greater than 5?

   - A. `.toBeGreaterThan`
   - B. `.toBeLessThan`
   - C. `.toBe`
   - D. `.toEqual`

8. ```javascript
   const data = { name: "Alice", age: 25 };

   test("example test", () => {
     expect(data).toMatchObject({ name: "Alice" });
   });
   ```

   What does the `toMatchObject` matcher check in this test case?

   - A. It checks if `data` is an object.
   - B. It checks if `data` contains a property named 'name'.
   - C. It checks if the 'name' property has the value 'Alice'.
   - D. It checks if `data` is deeply equal to the expected object.

9. ```javascript
   const fetchData = async () => {
     const response = await fetch('https://example.com/api/data');
     const data = await response.json();
     return data;
   };

   test('example test', () => {
     return expect(fetchData())[FILL IN]];
   });
   ```

   Which matcher should be used to assert that the promise is resolved with any value?

   - A. `.resolves.toEqual`
   - B. `.resolves.toBeTruthy`
   - C. `.resolves.toBeDefined`
   - D. `.resolves.toEqual(expect.anything())`

10. ```javascript
    const fetchData = async () => {
      const response = await fetch("https://example.com/api/data");
      const data = await response.json();
      return data;
    };

    test("example test", async () => {
      const result = await fetchData();
      expect(result).toHaveProperty("id");
    });
    ```

    What does the `toHaveProperty` matcher check in this test case?

    - A. It checks if `result` is an object.
    - B. It checks if `result` contains a property named 'id'.
    - C. It checks if the 'id' property exists in `result`.
    - D. It checks if the 'id' property is truthy in `result`.

11. ```javascript
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Failed"));
        }, 1000);
      });
    };

    test("example test", async () => {
      await expect(fetchData()).rejects.toThrowError(/failed/i);
    });
    ```

    What does the `/failed/i` argument in `toThrowError` matcher represent in this test case?

    - A. It matches any error message containing the word 'failed'.
    - B. It matches any error thrown by `fetchData`.
    - C. It matches any case-insensitive error message.
    - D. It matches any error message that equals 'Failed'.

12. ```javascript
    const fetchData = () => {
      throw new Error("Failed");
    };

    test("example test", () => {
      expect(fetchData).toThrow();
    });
    ```

    What is being tested in this test case?

    - A. The return value of `fetchData`.
    - B. The asynchronous behavior of `fetchData`.
    - C. The absence of an error in `fetchData`.
    - D. The presence of an error in `fetchData`.

13. ```javascript
    const fetchData = async () => {
      const response = await fetch('https://example.com/api/data');
      return response.json();
    };

    test('example test', async () => {
      await expect(fetchData()).[FILL IN]();
    });
    ```

    Which matcher should be used to assert that the promise is resolved with a truthy value?

    - A. `.resolves.toEqual(expect.anything())`
    - B. `.resolves.toHaveProperty('id')`
    - C. `.resolves.toBeTruthy()`
    - D. `.resolves.toEqual(true)`

14. ```javascript
    const fetchData = async () => {
      throw new Error("Failed");
    };

    test("example test", () => {
      expect(fetchData).toThrowError("Failed");
    });
    ```

    What is the expected behavior of this test case?

    - A. It checks if `fetchData` throws an error.
    - B. It checks if the error thrown by `fetchData` matches 'Failed'.
    - C. It verifies that `fetchData` returns a rejected promise.
    - D. It verifies that `fetchData` returns an error object.

15. ```javascript
    const fetchData = async () => {
      throw new Error("Failed");
    };

    test("example test", async () => {
      await expect(fetchData()).rejects.toBeInstanceOf(Error);
    });
    ```

    What does the `.toBeInstanceOf(Error)` matcher check in this test case?

    - A. It checks if the promise returned by `fetchData` is rejected.
    - B. It checks if the promise returned by `fetchData` is resolved.
    - C. It checks if the error thrown by `fetchData` is an instance of `Error`.
    - D. It checks if the error thrown by `fetchData` has the same prototype as `Error`.

16. ```javascript
    const fetchData = async () => {
      const response = await fetch("https://example.com/api/data");
      const data = await response.json();
      return data;
    };

    test("example test", async () => {
      await expect(fetchData()).resolves.toMatchSnapshot();
    });
    ```

    What does the `.resolves.toMatchSnapshot()` matcher do in this test case?

    - A. It compares the resolved value to a stored snapshot.
    - B. It verifies that `fetchData` returns a promise.
    - C. It captures the resolved value as a snapshot for future comparisons.
    - D. It compares the resolved value to a predefined value.

17. ```javascript
    const fetchData = async () => {
      const response = await fetch("https://example.com/api/data");
      const data = await response.json();
      return data;
    };

    test("example test", async () => {
      await expect(fetchData()).resolves.not.toBeFalsy();
    });
    ```

    Which matcher should be used to assert that the promise is resolved with a truthy value?

    - A. `.resolves.toBeNull()`
    - B. `.resolves.toBeFalsy()`
    - C. `.resolves.toBeTruthy()`
    - D. `.resolves.toBeDefined()`

18. ```javascript
    const fetchData = async () => {
      const response = await fetch("https://example.com/api/data");
      const data = await response.json();
      return data;
    };

    test("example test", async () => {
      await expect(fetchData()).resolves.not.toBeUndefined();
    });
    ```

    Which matcher should be used to assert that the promise is resolved with a defined value?

    - A. `.resolves.toBeFalsy()`
    - B. `.resolves.toBeTruthy()`
    - C. `.resolves.toBeNull()`
    - D. `.resolves.toBeDefined()`

19. ```javascript
    const fetchData = async () => {
      const response = await fetch('https://example.com/api/data');
      const data = await response.json();
      return data;
    };

    test('example test', async () => {
      await expect(fetchData()).[FILL IN]();
    });
    ```

    Which matcher should be used to assert that the promise is rejected without throwing an error?

    - A. `.rejects.toBeNull()`
    - B. `.rejects.toBeTruthy()`
    - C. `.rejects.toThrow()`
    - D. `.rejects.not.toThrow()`

20. Which Jest matcher is used to check for equality between two objects?

    - A. toBe
    - B. toEqual
    - C. toStrictEqual
    - D. toBeTruthy

21. Which Jest matcher is used to check if a value is null?

    - A. toBeNull
    - B. toBeFalsy
    - C. toBeTruthy
    - D. toBeUndefined

22. What is the purpose of the `done` parameter in Jest tests?

    - A. It marks the end of an asynchronous test.
    - B. It indicates the start of a test block.
    - C. It specifies the timeout duration for a test.
    - D. It sets the test environment.

23. How can you test asynchronous code in Jest?

    - A. Using the `async/await` syntax.
    - B. Using the `done` callback.
    - C. Using the `setTimeout` function.
    - D. All of the above.

24. What does the `async` keyword do in a Jest test?

    - A. It defines a test as asynchronous.
    - B. It defines a test as synchronous.
    - C. It disables test parallelization.
    - D. It enables code coverage analysis.

25. Which Jest method is used to create a mock function?

    - A. jest.spyOn
    - B. jest.mock
    - C. jest.fn
    - D. jest.mockFunction

26. How can you check if a mock function has been called in Jest?

    - A. Using the `toHaveBeenCalled` matcher.
    - B. Using the `toBeCalled` matcher.
    - C. Using the `toHaveBeenCalledWith` matcher.
    - D. All of the above.

27. What does the `mockReturnValue` method do in Jest?

    - A. It sets the return value of a mock function.
    - B. It configures the behavior of a mock module.
    - C. It resets the mock function to its initial state.
    - D. It verifies the number of times a mock function is called.

28. How can you clear all the mock calls for a mock function in Jest?

    - A. Using the `clearAllMocks` method.
    - B. Using the `resetAllMocks` method.
    - C. Using the `reset` method.
    - D. All of the above.

29. Which Jest matcher is used to compare floating-point numbers?

    - A. toBe
    - B. toEqual
    - C. toBeCloseTo
    - D. toMatch

30. What is the purpose of the `beforeEach` function in Jest?

    - A. It runs before every test case.
    - B. It runs before the entire test suite.
    - C. It runs after every test case.
    - D. It runs after the entire test suite.

31. Which Jest matcher is used to check if an object contains a specific property?

    - A. toContain
    - B. toHaveProperty
    - C. toMatchObject
    - D. toThrowError

32. How can you set a timeout for a specific test case in Jest?

    - A. Using the `timeout` option in the test case definition.
    - B. Using the `jest.setTimeout` function.
    - C. Using the `timeout` method in the test case.
    - D. Test cases cannot have individual timeouts.

33. Which Jest matcher is used to check if a value is undefined?

    - A. toBeFalsy
    - B. toBeDefined
    - C. toBeUndefined
    - D. toBeNull

34. How can you exclude specific tests from running in Jest?

    - A. Using the `test.only` function.
    - B. Using the `test.skip` function.
    - C. Using the `test.ignore` function.
    - D. Using the `test.exclude` function.

35. How can you check the number of assertions made in a test case in Jest?

    - A. Using the `expect.assertions` method.
    - B. Using the `expect.count` method.
    - C. Using the `expect.assertionCount` method.
    - D. Jest automatically tracks the number of assertions.

36. Which Jest matcher is used to check if an array contains a specific item?

    - A. toContain
    - B. toBe
    - C. toHaveLength
    - D. toBeTruthy

37. What does the `toBeCalledTimes` matcher do in Jest?

    - A. It verifies the number of times a mock function is called.
    - B. It checks if a function has been called at least once.
    - C. It compares two values for equality.
    - D. It verifies the length of an array.

38. How can you focus on running only specific test files in Jest?

    - A. Using the `jest.focus` command in the terminal.
    - B. Using the `test.only` function.
    - C. Using the `test.focus` function.
    - D. Using the `jest.only` command in the terminal.

39. What does the `toThrow` matcher do in Jest?

    - A. It checks if a function throws an error.
    - B. It compares two values for equality.
    - C. It verifies the length of an array.
    - D. It checks if an object contains a specific property.

40. Which Jest matcher is used to compare string values using regular expressions?

    - A. toEqual
    - B. toMatch
    - C. toBe
    - D. toHaveLength

41. How can you test that a specific function has been called with certain arguments in Jest?

    - A. Using the `toHaveBeenCalled` matcher.
    - B. Using the `toHaveBeenCalledWith` matcher.
    - C. Using the `toBeCalledWith` matcher.
    - D. All of the above.

42. What does the `toMatchObject` matcher do in Jest?

    - A. It checks if an object contains a specific property.
    - B. It compares two objects for equality.
    - C. It verifies the length of an array.
    - D. It checks if a string matches a regular expression.

43. What does the `toMatchSnapshot` matcher do in Jest?
    - A. It compares a value to a snapshot file.
    - B. It compares two values for equality.
    - C. It verifies the length of an array.
    - D. It checks if a function throws an error.
