// $(".container").click(() => {
//     // console.log("hello");
//     $(".box").slideDown("slow");
// })

let isOpen = true;

// $("#clickme").click(() => {
//     if(isOpen){
//         $("#camera").slideUp(2000, () => {
//             isOpen = false
//         })
//     }else{
//         $("#camera").slideDown(2000, () => {
//             isOpen = true
//         })
//     }
// })

// $("#clickme").click(() => {
//     $("#camera").slideToggle(2000);
// })

// $("#clickme").click(() => {
//     $("#camera").fadeTo(2000, 0.9, () => {
//         console.log("animation is done");
//     });
// })

// $("#clickme").click(() => {
//     $("#camera").animate(
//         {
//            marginTop: "50px",
//            borderRadius: "10px",
//            width: "50%",
//            height: "50%",
//         //    transform: "rotate(359deg)"
//         },
//         2000
//     ).animate(
//         {
//            marginTop: "50px",
//            borderRadius: "10px",
//            width: "50%",
//            height: "50%",
//         },
//         1000
//     )
// })

// $.getJSON("./data/data.json", function (data) {
//     data.forEach(todo => {
//         let card = $(`<div>${todo.title}</div>`)
//         $(".card-list").append(card);
//     })
// });

// $.get("https://rickandmortyapi.com/api/character", (data) => {
//     console.log(data.results);
//     data.results.forEach(character => {
//         let card = $(`<div><img src=${character.image} /><h3>${character.name}</h3></div>`)

//         $(".card-list").append(card);
//     })
// })

// $.get("https://gorest.co.in/public/v2/users", (data) => {
//     console.log(data);
//     data.forEach(user => {
//         let card = $(`<div><h1>${user.name}</h1><h3>${user.email}</h3></div>`)
//         $(".card-list").append(card);
//     })
// })

// $.post("https://gorest.co.in/public/v2/users?access-token=c8f6db01fe72de403a04d0d2bd5a4f5b57d90890c76e8b973cdb3f44798124c4", 
// { name: "Joe", gender: "male", email:"joe2@male.com", status:"active" }, (data) => {
//     console.log(data);
// })

