import {
  apiForecastHourly,
  temperatureFahrenheit,
  temperatureCelsius,
  feelsLikeFahrenheit,
  feelsLikeCelsius,
  formatDateAndTime,
} from './apiFunctions';

const renderDataHourly = function (data) {
  renderLocation(data);
  renderWeatherDesc(data);
  renderTemperature(data);
  renderFeelsLike(data);
  renderDate();
  renderTime();
  renderRain(data);
  renderWind(data);
  renderHumidity(data);
  clearInput(data);
  // TODO: change units C or F.
};

const renderLocation = function (data) {
  const locationLabel = document.querySelector('.location--name');
  let locationContent = document.createElement('h2');
  locationContent.setAttribute('class', 'location__title');
  locationContent.textContent = `${data.city}, ${data.country}`;
  locationLabel.append(locationContent);
};

const renderWeatherDesc = function (data) {
  const weatherDescContent = document.querySelector('.weatherDesc');
  weatherDescContent.textContent = `${data.weatherDesc}`;
};

// TODO: data is correct outside of the if statement but turns to
// event is called but unable to pass argument
const renderTemperature = function (data) {
  const temperatureContent = document.querySelector('.temperature');
  const temperatureToggle = document.querySelector('input[type="checkbox"]');

  if (temperatureToggle.checked) {
    let fahrenheit = temperatureFahrenheit();
    temperatureContent.textContent = `${fahrenheit}°F`;

    // console.log(data);
  } else {
    let celsius = temperatureCelsius();
    temperatureContent.textContent = `${celsius}°C`;
  }
};

const renderFeelsLike = function () {
  const feelsLikeContent = document.querySelector('.feels-like');
  const temperatureToggle = document.querySelector('input[type="checkbox"]');

  if (temperatureToggle.checked) {
    let fahrenheit = feelsLikeFahrenheit();
    feelsLikeContent.textContent = `${fahrenheit}°F`;

    // console.log(data);
  } else {
    let celsius = feelsLikeCelsius();
    feelsLikeContent.textContent = `${celsius}°C`;
  }
};

const renderDate = function () {
  const date = document.querySelector('.date--current');
  let object = formatDateAndTime();

  date.textContent = `${object.day} ${object.month} ${object.dayNumber}`;
};

const renderTime = function () {
  const time = document.querySelector('.time--current');
  let object = formatDateAndTime();

  time.textContent = `${object.time}`;
};

const renderRain = function (data) {
  const chanceOfRainContent = document.querySelector('.chance-of-rain');
  chanceOfRainContent.textContent = `${data.chanceOfRain}%`;
};

const renderWind = function (data) {
  const windContent = document.querySelector('.wind');
  windContent.textContent = `${data.wind}m/s`;
};

const renderHumidity = function (data) {
  const humidityContent = document.querySelector('.humidity');
  humidityContent.textContent = `${data.humidity}%`;
};

const clearInput = function (data) {
  const input = document.querySelector('input#input--location');
  input.value = '';
};

const setIntervalTimer = function (fn, ms) {
  setInterval(() => {
    fn.call();
  }, ms);
};

const clearIntervalTimer = function (fn) {
  clearInterval(fn);
};

const clearInfo = function () {
  const info = document.querySelectorAll('.info');

  for (let i = 0; i < info.length; i++) {
    info[i].textContent = '';
  }
};

export { renderDataHourly, renderTemperature, renderFeelsLike, clearInfo, renderTime };
