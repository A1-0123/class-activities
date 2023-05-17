// movie = {
//     info: {
//         title: "The Matrix",
//         extraName: extraValue,
//     },
//     id: 1,
// }

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");
const movieTitleInput = document.querySelector("#movie-title");
const movieExtraNameInput = document.querySelector("#movie-extra");
const movieExtraValueInput = document.querySelector("#movie-extra-value");
const movieAddButton = document.querySelector("#add-btn");
const listMovies = document.querySelector("#list");

const movies = [];

function addMovie(){
    let title = movieTitleInput.value;
    let extraName = movieExtraNameInput.value;
    let extraValue = movieExtraValueInput.value;
    
    const movie = {
        info: {
            title,
            [extraName]: extraValue,
        },
        id: Math.random(),
    }

    console.log(movie);

    movies.push(movie);
    // one function to render the screen again
    resetInput();
    renderMovies();
}

movieAddButton.addEventListener("click", addMovie);

function renderMovies(filter = "") {
    let selectedMovies = movies;

    if(filter){
        selectedMovies = movies.filter(movie => {
            return movie.info.title.toLowerCase().includes(filter.toLowerCase());
        });
    }

    if(selectedMovies.length == 0){
        listMovies.classList.remove("visible");
        return;
    }else{
        listMovies.classList.add("visible");
    }

    listMovies.innerHTML = "";
    
    for(const movie of selectedMovies){
        const listItem = document.createElement("li");
        let text = movie.info.title + " - ";

        for(const key in movie.info){
            if(key !== "title"){
                const extraName = key;
                const extraValue = movie.info[key];

                text = text + `${extraName}: ${extraValue}`;
            }
        }

        listItem.textContent = text;
        listMovies.append(listItem);
    }
}

function filterMovies(){
    const filter = searchInput.value;
    renderMovies(filter);
}

searchButton.addEventListener("click", filterMovies);

function resetInput(){
    movieTitleInput.value = "";
    movieExtraNameInput.value = "";
    movieExtraValueInput.value = "";
}