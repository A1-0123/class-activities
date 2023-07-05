const weatherForm = document.querySelector("#weather-form");
const cityInput = document.querySelector("#city-input");
const weatherDataDiv = document.querySelector("#weather-data");

if(weatherForm){
    weatherForm.addEventListener("submit", (e) => {
        e.preventDefault();
        getWeather(cityInput.value).then((data) => {
            displayWeatherData(data);
        }).catch((error) => {
            displayError(weatherDataDiv, error);
        });
    });
}

function getWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7c8ee65a1885c371ce76d9431951809e`;
    return fetch(url).then(response => {
        if(!response.ok) {
            throw new Error("No weather found.")
        }
        return response.json();
    })
}

function displayWeatherData(data) {
    document.getElementById("city-name").textContent = `Weather in ${data.name}`;
    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}`;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}`;
    document.getElementById("wind").textContent = `Wind: ${data.wind.speed} m/s`;
    document.getElementById("description").textContent = `Description: ${data.weather[0].description}`;

    const bgImage = document.getElementById("bg-image");

    switch (data.weather[0].main) {
        case "Rain":
            bgImage.src = "../public/images/rain.jpg"
            break;
        case "Cloud":
            bgImage.src = "../public/images/cloud.jpg"
            break;
        case "Clear":
            bgImage.src = "../public/images/clear.jpg"
            break;
        case "Sunny":
            bgImage.src = "../public/images/sunny.jpg"
            break;
        case "Snow":
            bgImage.src = "../public/images/snow.jpg"
            break;
        default:
            bgImage.src = "../public/images/default.jpg"
            break;
    }
}

function displayError(element, error) {
    element.textContent = error;
}

module.exports = {
    getWeather,
    displayWeatherData,
    displayError
}