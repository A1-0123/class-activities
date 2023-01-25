###### REGEX

A regular expression, or "regex" for short, is a special sequence of characters that helps you match or find other strings or sets of strings, using a specialized syntax held in a pattern. It's like a search pattern to help you search for a certain text in a string.

For example, if you wanted to find the word "cat" in the string "The cat in the hat", you could use the regular expression `/cat/` to search for the word `"cat"`.

Here is an example of a simple regular expression in JavaScript:

```js
let string = "The cat in the hat";
let pattern = /cat/;
let result = string.match(pattern);
console.log(result);
```
This will output "cat" in the console, because it found the word "cat" in the string "The cat in the hat".

Finding a specific character:

```js
let string = "The cat in the hat";
let pattern = /t/;
let result = string.match(pattern);
console.log(result);
```
This will output "t" in the console, because it found the first "t" in the string "The cat in the hat".

Finding a specific word in a string:

```js
let string = "The cat in the hat";
let pattern = /hat/;
let result = string.match(pattern);
console.log(result);
```

This will output "hat" in the console, because it found the word "hat" in the string "The cat in the hat".

Finding a specific word that starts with a specific letter:


```js
let string = "The cat in the hat";
let pattern = /[c]at/;
let result = string.match(pattern);
console.log(result);
```

This will output "cat" in the console, because it found the word "cat" in the string "The cat in the hat" that starts with letter 'c'.

Finding a specific word that ends with a specific letter:

```js
let string = "The cat in the hat";
let pattern = /at$/;
let result = string.match(pattern);
console.log(result);
```

This will output "hat" in the console, because it found the word "hat" in the string "The cat in the hat" that ends with letter 'at'

###### More Regex

Regular expressions, or "regex" for short, are a way to match patterns in strings. They are often used in JavaScript for tasks such as validating email addresses, phone numbers, and credit card numbers.

Here are some common regex symbols and their meanings:

- `.` (dot) - Matches any single character
- `*` - Matches zero or more of the preceding character or / group
- `+` - Matches one or more of the preceding character or group
- `?` - Matches zero or one of the preceding character or group
- `^` - Matches the start of a string
- `$` - Matches the end of a string
- `[ ]` - Matches any character within the brackets
- `[a-z]` - Matches any character in the range of "a" to "z"
- `\d` - Matches any digit (same as [0-9])
- `\w`- Matches any word character (same as [a-zA-Z0-9_])
- `\s` - Matches any whitespace character (space, tab, newline, etc.)
- `\D` - Matches any non-digit (same as [^0-9])
- `\W` - Matches any non-word character (same as [^a-zA-Z0-9_])
- `\S` - Matches any non-whitespace character (same as [^ \t\n\r\f\v])
- `|` - Matches either the preceding or following character or group
- `{ }` - Matches the preceding character or group a specific number of times
- `{n}` - Matches the preceding character or group exactly n times
- `{n,}` - Matches the preceding character or group at least n times
- `{n,m}` - Matches the preceding character or group at least n times, but no more than m times
- `/` - Delimits the beginning and end of a regular expression
- `@` - Matches the preceding character or group at the beginning of a string

For example, the regex `\d{3}-\d{2}-\d{4}` would match a string like "123-45-6789", which is a Social Security number in the format of "xxx-xx-xxxx".

- To match any email address:

```js
let emailRegex = /\S+@\S+\.\S+/;
console.log(emailRegex.test("example@gmail.com"));  // true
console.log(emailRegex.test("examplegmailcom"));   // false
```

- To match a specific word:

```js
let wordRegex = /hello/;
console.log(wordRegex.test("hello world"));   // true
console.log(wordRegex.test("goodbye world")); // false
```

- To match a specific pattern in a string:

```js
let patternRegex = /\d{3}-\d{2}-\d{4}/;
console.log(patternRegex.test("123-45-6789"));   // true
console.log(patternRegex.test("123-456-789")); // false
```

JavaScript also provides several methods that you can use with regular expressions, such as `replace()`, `search()`, and `match()`, which can be used to manipulate strings in various ways.
