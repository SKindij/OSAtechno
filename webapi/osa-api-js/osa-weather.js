
// block with weather
const weatherBlock = document.querySelector('#weather');

// main function apploading
async function loadWeather() {
    weatherBlock.innerHTML = `<div class='weather-loading'>
      <img src='#' alt='Loading...'> </div>`;

  const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=24883a46f08b0d4095b60874835fc09b'
  const response = await fetch(server, {
    method: 'GET',
  });
  const responseResult = await response.json();

  if (response.ok) {
    gerWeather(responseResult);
  } else {
    weatherBlock.innerHTML =  responseResult.message;
  }
}

function gerWeather(data) {
  // work with data
  console.log(data);

  const location = data.name;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;

  // HTML templates
  const template = `
  <div class="weather-header">
    <div class="weather-main">
      <div class="weather-city">${location}</div>
      <div class="weather-status">${weatherStatus}</div>
    </div>
    <div class="weather-icon">
      <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
    </div>
  </div>
  <div class="weather-temp">${temp}</div>
  <div class="weather-feels-like">Feels like: ${feelsLike}</div>`;

  weatherBlock.innerHTML = template;

}


if(weatherBlock) {
    loadWeather();
}










