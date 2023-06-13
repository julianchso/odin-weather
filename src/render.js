import { apiCall } from './apiFunctions';

const renderData = async function (data) {
  let city = data['city']['name'];
  let country = data['city']['country'];
  let weatherDesc = data['list'][0]['weather'][0]['description'];
  let temperature = Math.round(data['list'][0]['main']['temp']);
  let feelsLike = Math.round(data['list'][0]['main']['feels_like']);
  let chanceOfRain = data['list'][0]['pop'] * 100;
  let wind = Math.round(data['list'][0]['wind']['speed'] * 10) / 10;
  let humidity = data['list'][0]['main']['humidity'];

  const locationLabel = document.querySelector('.location');
  let locationContent = document.createElement('h2');
  locationContent.textContent = `${city}, ${country}`;
  locationLabel.append(locationContent);

  const weatherDescContent = document.querySelector('.weatherDesc');
  weatherDescContent.textContent = `${weatherDesc}`;

  // TODO: change units C or F.
  const temperatureContent = document.querySelector('.temperature');
  temperatureContent.textContent = `${temperature}°C`;

  const feelsLikeContent = document.querySelector('.feels-like');
  feelsLikeContent.textContent = `${feelsLike}°C`;

  const chanceOfRainContent = document.querySelector('.chance-of-rain');
  chanceOfRainContent.textContent = `${chanceOfRain}%`;

  const windContent = document.querySelector('.wind');
  windContent.textContent = `${wind}m/s`;

  const humidityContent = document.querySelector('.humidity');
  humidityContent.textContent = `${humidity}%`;

  const input = document.querySelector('input#input--location');
  input.value = '';
};

const clearInfo = function () {
  const info = document.querySelectorAll('.info');

  for (let i = 0; i < info.length; i++) {
    info[i].textContent = '';
  }
};

export { renderData, clearInfo };
