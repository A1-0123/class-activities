global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        name: "London",
        main: {
          temp: 280.32,
          humidity: 81,
        },
        wind: {
          speed: 4.1,
        },
        weather: [
          {
            main: "Cloud",
            description: "scattered clouds",
          },
        ],
      }),
  })
);

const {
    getWeather,
    displayWeatherData,
    displayError
} = require("../src/main.js");

beforeEach(() => {
    fetch.mockClear();

    document.body.innerHTML = `
        <main>
            <image id="bg-image" src="../public/images/default.jpg" alt="weather-condition-image" />
            <form id="weather-form">
                <input id="city-input" type="text">
            </form>
            <div id="weather-data">
                <h2 id="city-name"></h2>
                <div id="temperature"></div>
                <div id="humidity"></div>
                <div id="wind"></div>
                <div id="description"></div>
            </div>
        </main>
        `;
});

test("getWeather should return weather data for given city", async () => {
    const data = await getWeather("London");
    expect(data.name).toBe("London");
    expect(fetch).toHaveBeenCalledTimes(1); // fetch should be called once
});

test("displayWeatherData should display weather data", () => {
    const data = {
        name: "London",
        main: {
            temp: 280.32,
            humidity: 81,
        },
        wind: {
            speed: 4.1,
        },
        weather: [
            {
                main: "Clear",
                description: "scattered clouds",
            },
        ],
    }

    displayWeatherData(data);
    expect(document.getElementById("city-name").textContent).toBe(`Weather in London`);
    expect(document.getElementById("temperature").textContent).toBe(`Temperature: 280.32`);
    expect(document.getElementById("humidity").textContent).toBe(`Humidity: 81`);
    expect(document.getElementById("wind").textContent).toBe(`Wind: 4.1 m/s`);
    expect(document.getElementById("description").textContent).toBe(`Description: scattered clouds`);
});

test("displayError should display error message", () => {
    const weatherDataDiv = document.getElementById("weather-data");
    displayError(weatherDataDiv, "No weather found.");
    expect(weatherDataDiv.textContent).toBe("No weather found.");
});