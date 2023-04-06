// PWZZ9jK96vQTc041FYbaNUdR6SQ0Z2Uspi8luqDaD3M /access
// LfmIsPEUCtikCp53dAqIilFBb5pAe66IQoOsKNCJ4EY /secret
// https://api.unsplash.com/photos/?client_id=

const ACCESSKEY = "PWZZ9jK96vQTc041FYbaNUdR6SQ0Z2Uspi8luqDaD3M";
const api = `https://api.unsplash.com/search/photos/?client_id=${ACCESSKEY}&query=`

const form = document.querySelector("#search-form");
const imageContainer = document.querySelector(".image-container");
const searchInput = document.querySelector("#search-input");

const fetchImages = async (query) => {
    const response = await axios.get(`${api}${query}`);
    const images = response.data.results;
    return images;
}

const displayImages = async (query) => {
    const images = await fetchImages(query);

    imageContainer.innerHTML = "";

    images.forEach((image) => {
        const card = document.createElement("div");
        const cardOverlay = document.createElement("div");
        const img = document.createElement("img");
        const userInformation = document.createElement("div");

        card.classList.add("card");

        cardOverlay.classList.add("card--overlay");

        img.src = image.urls.regular;
        img.classList.add("card--image");

        userInformation.innerHTML = `
            <div>
                <img class="image--information--pp" src="${image.user.profile_image.medium}" />
            </div>
            <div>
                <p class="image--information--name">${image.user.name}</p>
                <p class="image--information--likes">${image.likes} likes</p>
            </div>
        `

        userInformation.classList.add("card--information")

        card.appendChild(img);
        card.appendChild(userInformation);
        card.appendChild(cardOverlay);

        imageContainer.appendChild(card)
    });
}

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    displayImages(searchInput.value)
});

