let title = document.querySelector("h1");

// const promises = [
//     fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => response.json()),
//     fetch('https://jsonplaceholder.typicode.com/posts/2').then((response) => response.json()),
//     fetch('https://jsonplaceholder.typicode.com/posts/3').then((response) => response.json())
//   ];

// Promise.all(promises)
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.error(error);
// });

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    title.innerHTML = `<h5>User Id: ${data.userId}</h5>
    <h1>${data.title}</h1> 
    <p>${data.body}</p>`;
  })
  .catch((err) => {
    console.log(err);
  });
