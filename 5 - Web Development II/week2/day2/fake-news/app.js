// https://newsapi.org/docs/endpoints/everything API documentation for this example

const APIKEY = "b8c64537921744da965e499c802ca142";

const container = document.querySelector(".news");
const englishButton = document.querySelector("#english-btn");
const frenchButton = document.querySelector("#french-btn");
const pageSizeSelection = document.querySelector("#pageSize");

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");

let language = 'en';
let pageSize = 10;

const getNews = (language = "en", pageSize = "10", search) => {
    // fetch(
    // "https://newsapi.org/v2/everything" +
    // `?q=${search}` +
    // `&language=${language}` +
    // `&pageSize=${pageSize}` +
    // `&apiKey=${APIKEY}`
    // )
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     let news = data.articles; // []
    //     let newCards = "";
    //     news.forEach((item) => {
    //         let date = new Date(item.publishedAt);
    //         newCards += `
    //             <div class="card">
    //                 <img width="100%" src="${item.urlToImage ? item.urlToImage : "./assets/noimage.jpg"}" />
    //                 <h3>${item.title}</h3>
    //                 <p>${item.description}</p>
    //                 <p><b>Date:</b> ${date.toDateString()}</p>
    //                 <a id="goto-btn" href="${item.url}">Go to News</a>
    //             </div>
    //         `;
    //     })
    //     container.innerHTML = newCards;
    // })
    // .catch(err => console.log(err));
    axios.get(
        "https://newsapi.org/v2/everything" +
        `?q=${search}` +
        `&language=${language}` +
        `&pageSize=${pageSize}` +
        `&apiKey=${APIKEY}`
    ).then((data) => {
        displayNews(data.data);
    }).catch((err) => {
        console.log(err);
    })
}

function displayNews(data) {
    let news = data.articles;
    let newCards = "";
    news.forEach((item) => {
        let date = new Date(item.publishedAt);
        newCards += `
            <div class="card">
                <img width="100%" src="${item.urlToImage ? item.urlToImage : "./assets/noimage.jpg"}" />
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p><b>Date:</b> ${date.toDateString()}</p>
                <a id="goto-btn" href="${item.url}">Go to News</a>
            </div>
        `;
    })
    container.innerHTML = newCards;
}

englishButton.addEventListener("click", () => {
    language = "en";
    getNews(language, pageSize)
})

frenchButton.addEventListener("click", () => {
    language = "fr"
    getNews(language, pageSize)
})

pageSizeSelection.addEventListener("change", (ev) =>{
    pageSize = ev.target.value;
    getNews(language, pageSize)
})

searchButton.addEventListener("click", () => {
    if(searchInput.value.length >= 2){
        getNews(language, pageSize, searchInput.value)
    }
})

// getNews(language, pageSize)

// function checkImage(image){
//     if(image !== null){
//         return image
//     }else{
//         return "./assets/noimage.jpg"
//     }
// }

// Ternary Operator

// item.urlToImage ? item.urlToImage : "./assets/noimage.jpg"
// condition ? true : false
// console.log(5 > 4 ? "Yes, it is" : "No, its not");  
// if(5>4){
//     console.log("Yes, it is");
// }else{
//     console.log("No, its not");
// }
// after ?(question mark) you can return true or after :(colon) you can return false
// console.log(3 > 4 && "Yes, its is"); // only check true


let name = "kubilay";
name += " cakmak";

// name // kubilay cakmak

console.log(`Hello my name is ${name}`);