const API_KEY = "e83cf8d4a4d3d08de250fbab8e92be42"

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector(".weather-info span:first-child")
    const city = document.querySelector(".weather-info span:nth-child(2)")
    const weatherIconCode = data.weather[0].icon;
    const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.src = `img/weather/${weatherIconCode}.png`;
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
  })
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

