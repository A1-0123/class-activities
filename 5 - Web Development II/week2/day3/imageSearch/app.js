// PWZZ9jK96vQTc041FYbaNUdR6SQ0Z2Uspi8luqDaD3M /access
// LfmIsPEUCtikCp53dAqIilFBb5pAe66IQoOsKNCJ4EY /secret
// https://api.unsplash.com/photos/?client_id=

const ACCESSKEY = "PWZZ9jK96vQTc041FYbaNUdR6SQ0Z2Uspi8luqDaD3M";
const api = "https://api.unsplash.com/search/photos/?client_id="

const form = document.querySelector("#search-form");
const imageContainer = document.querySelector(".image-container");
const searchInput = document.querySelector("#search-input");

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let searchValue = searchInput.value;
    
    if(!searchValue){
        return
    }

    fetch(api + ACCESSKEY + `&query=${searchValue}`)
        .then((res) => res.json())
        .then((data) => {
            displayImages(data.results);
        })
})

function displayImages(data) {
    data.forEach((image) => {
        // console.log(image);
    })
}