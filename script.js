async function getWeather(city) {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70f212a69a12e088c162d9df6f69cf5c&units=metric`
  );
  let data = await res.json();
  console.log(data);
  document.querySelector('.location').innerHTML = data.name;
  document.querySelector('.temperature').innerHTML =
    Math.round(data.main.temp) + '°c';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind').innerHTML =
    Math.round(data.wind.speed) + ' km/h';
  if (data.weather[0].main === 'Rain') {
    picture.src = './images/Rain.png';
  } else if (data.weather[0].main === 'Clear') {
    picture.src = './images/clear.png';
  } else if (data.weather[0].main === 'Clouds') {
    picture.src = './images/clouds.png';
  } else if (data.weather[0].main === 'Drizzle') {
    picture.src = './images/drizzle.png';
  } else if (data.weather[0].main === 'mist') {
    picture.src = './images/mist.png';
  } else if (data.weather[0].main === 'Snow') {
    picture.src = './images/snow.png';
  } else if (data.weather[0].main === 'Wind') {
    picture.src = './images/wind.png';
  }
}
let searchInput = document.querySelector('.search input');
let searchBtn = document.querySelector('.search button');
var picture = document.querySelector('.image');
searchBtn.addEventListener('click', () => {
  getWeather(searchInput.value);
});
