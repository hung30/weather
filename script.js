const bgColor = [
  "linear-gradient(145deg, #ffa6ae, #f8b1d5)",
  "linear-gradient(135deg, #00feba, #5b548a)",
  "linear-gradient(145deg, #2193b0, #6dd5ed)",
];

const apiKey = "0e8a1751ffe9d1a9a8b34acf2bb53645";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=vi&q=";
const DEFAULT_VALUE = "--";

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  document.querySelector(".city-name").innerHTML = data.name || DEFAULT_VALUE;
  document.querySelector(".weather-status").innerHTML =
    data.weather[0].description;
  document
    .querySelector("#weather-icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) || DEFAULT_VALUE;
  document.querySelector(".humidity").innerHTML =
    data.main.humidity + " %" || DEFAULT_VALUE + " %";
  document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed * 3.6) + " km/h" || DEFAULT_VALUE + " km/h";
}

function randomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

searchButton.addEventListener("click", () => {
  document.querySelector(".container").style.background =
    randomElement(bgColor);
  console.log(randomElement(bgColor));
  checkWeather(searchInput.value);
});
