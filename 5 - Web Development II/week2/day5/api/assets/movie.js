const api = "http://www.omdbapi.com/?apikey=9de68219&t=";

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");
const container = document.querySelector(".data-container");

function getMovieDataByQuery(query) {
    fetch(api + query)
        .then(res => res.json())
        .then(data => {
            displayData(data);
        })
}

function displayData(data) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class='card--image'>
            <img src=${data.Poster} />
        </div>
        <div class='card--info'>
            <h2>Title: ${data.Title}</h2>
            <p>Released Date: ${data.Released}</p>
        </div>
    `;
    container.appendChild(card);
}

searchButton.addEventListener("click", () => {
    getMovieDataByQuery(searchInput.value)
})