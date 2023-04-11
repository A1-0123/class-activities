const container = document.querySelector(".data-container");
const locationContainer = document.querySelector(".location-container");
const characterApi = "https://rickandmortyapi.com/api/character";
const locationApi = "https://rickandmortyapi.com/api/location";
const episodeApi = "https://rickandmortyapi.com/api/episode";

const displayCharacterData = (arr) => {
    arr.forEach(character => {
        let card = document.createElement("div");
        card.classList.add("card")
        card.innerHTML = `
            <div class='card--image'>
                <img src=${character.image} />
            </div>
            <div>
                <h3>${character.name}</h3>
                <p>${character.species}</p>
            </div>
        `;

        container.appendChild(card)

    })
}

const displayLocationData = (arr) => {
    arr.forEach(location => {
        console.log(location);
        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class='card--image'>
                <h2>${location.name}</h2>
            </div>
            <div>
                <p>${location.type}</p>
                <p>${location.residents.length} people lives</p>
            </div>
        `;

        locationContainer.appendChild(card);
    })
}

const fetchCharacters = () => {
    fetch(characterApi)
        .then(res => res.json())
        .then(data => {
            displayCharacterData(data.results)
        })
}

const fetchLocations = () => {
    fetch(locationApi)
        .then(res => res.json())
        .then(data => {
            displayLocationData(data.results)
        })
}

fetchCharacters()
fetchLocations()
