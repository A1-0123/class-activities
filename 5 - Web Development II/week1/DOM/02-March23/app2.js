const container = document.querySelector("#container");

// const heading = document.createElement("h1");
// heading.textContent = "Welcome to my website";

// const paragraph1 = document.createElement("p");
// paragraph1.textContent = "Dolore dolor tempor ad magna aliquip mollit reprehenderit ex mollit do ea. Exercitation eu consectetur anim ex dolor. Anim in anim dolore dolor nulla labore exercitation irure proident quis nisi et ut consequat. Voluptate deserunt ut cupidatat ea. Cupidatat duis et est minim id."

// const paragraph2 = document.createElement("p");
// paragraph2.textContent = "Duis minim eu consectetur deserunt ex ipsum esse voluptate. Occaecat aliquip non irure dolore ad et id fugiat nostrud. Velit excepteur duis enim magna consectetur. Reprehenderit laboris laborum dolor elit ex laboris. Eiusmod consequat laborum eu officia consequat ad voluptate excepteur reprehenderit. Minim cillum Lorem irure elit mollit.";

// const button = document.createElement("button");
// button.textContent = "discover";

// container.appendChild(heading);
// container.appendChild(paragraph1);
// container.appendChild(paragraph2);
// container.appendChild(button);

function body (name) {
    return `<h1 id='title'}>${name}</h1>` + 
    `<p>Duis commodo irure commodo reprehenderit cupidatat voluptate cillum ex adipisicing aliqua cillum anim mollit. </p>`
    +
    `<p>Quis tempor laborum et consequat excepteur.</p>`
    +
    `<button>Discover</button>`;
}

container.innerHTML = body("Joe");

