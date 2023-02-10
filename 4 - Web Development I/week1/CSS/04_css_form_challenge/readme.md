###### Register Form CSS Challenge

In this challenge, you will be creating a registration form using HTML and CSS. The form should look like the image below.

![Registration Form](./login.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>
<body>
    <main>
        <form action="">
            <h1>Sign Up</h1>
            <p>It's free and only takes a minute</p>
            <label for="name">First name</label>
            <input type="text" name="name" id="name">
            <label for="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname">
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" name="confirm-password" id="confirm-password">
            <input type="submit" value="Sign Up">
            <p>By clicking the Sign Up button you agree to our <a>Terms & Conditions</a> and <a>Privacy Policy</a></p>
        </form>
        <p>Already have an account? <a>Login Here</a></p>
    </main>
</body>
</html>
```

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

...

/* 

description of the code

*: all elements
margin: 0; : remove the default margin
padding: 0; : remove the default padding
box-sizing: border-box; : make the padding and border included in the width and height of the element

*/
```

[Go to CSS file](./style.css)
[Go to HTML file](./index.html)