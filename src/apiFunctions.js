import { clearInfo } from './render.js';

// TODO: find a way to be local variable
const apiForecastHourly = async function (location) {
  const apiKey = 'a1d41c729faca0f723357cd6979c2c45';
  const noOfCalls = 10;
  const unitOfMeasurement = 'metric';

  // refers to 4 day, hourly forecast in openWeatherAPI.
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${apiKey}&cnt=${noOfCalls}&units=${unitOfMeasurement}`;

  try {
    if (!location) return;

    clearInfo();
    const response = await fetch(url);
    const weatherData = await response.json();

    const processedWeatherData = processData(weatherData);
    return processedWeatherData;
  } catch (err) {
    console.log(err);
  }
};

// TODO: store data in local storage
const processData = function (data) {
  let processedData = {
    city: data['city']['name'],
    country: data['city']['country'],
    weatherDesc: data['list'][0]['weather'][0]['description'],
    temperature: Math.round(data['list'][0]['main']['temp']),
    // temperature: 'temperature is 19',
    feelsLike: Math.round(data['list'][0]['main']['feels_like']),
    chanceOfRain: data['list'][0]['pop'] * 100,
    wind: Math.round(data['list'][0]['wind']['speed'] * 10) / 10,
    humidity: data['list'][0]['main']['humidity'],
  };

  setLocalStorage(processedData);

  return processedData;
};

const setLocalStorage = function (data) {
  localStorage.setItem('weatherData', JSON.stringify(data));
};

const getLocalStorage = function (data) {
  let returnedData = JSON.parse(localStorage.getItem(data));
  return returnedData;
};

const temperatureFahrenheit = function () {
  let weatherData = getLocalStorage('weatherData');
  let celsius = weatherData.temperature;
  let fahrenheit = Math.round((celsius * 9) / 5 + 32);
  return fahrenheit;
};

const temperatureCelsius = function () {
  let weatherData = getLocalStorage('weatherData');
  let celsius = weatherData.temperature;
  return celsius;
};

const feelsLikeFahrenheit = function () {
  let weatherData = getLocalStorage('weatherData');
  let celsius = weatherData.feelsLike;
  let fahrenheit = Math.round((celsius * 9) / 5 + 32);
  return fahrenheit;
};

const feelsLikeCelsius = function () {
  let weatherData = getLocalStorage('weatherData');
  let celsius = weatherData.feelsLike;
  return celsius;
};

export {
  apiForecastHourly,
  processData,
  temperatureFahrenheit,
  temperatureCelsius,
  feelsLikeFahrenheit,
  feelsLikeCelsius,
};
