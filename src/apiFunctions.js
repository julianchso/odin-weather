import { da } from 'date-fns/locale';
import { clearInfo } from './render.js';
import { addSeconds, fromUnixTime } from 'date-fns';

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
    console.log(weatherData);

    const processedWeatherData = processData(weatherData);
    return processedWeatherData;
  } catch (err) {
    console.log(err);
  }
};

const processData = function (data) {
  let weatherData = getLocalStorage('weatherDataDay');

  let timezoneFromUTC = weatherData.timezoneFromUTC;
  let processedData = {
    chanceOfRain: data['list'][0]['pop'] * 100,
    city: data['city']['name'],
    country: data['city']['country'],
    feelsLike: Math.round(data['list'][0]['main']['feels_like']),
    humidity: data['list'][0]['main']['humidity'],
    sunrise: data['city']['sunrise'],
    sunset: data['city']['sunset'],
    temperature: Math.round(data['list'][0]['main']['temp']),
    timezoneFromUTC: data['city']['timezone'],
    weatherDesc: data['list'][0]['weather'][0]['description'],
    wind: Math.round(data['list'][0]['wind']['speed'] * 10) / 10,
  };
  // TODO: fix local time
  let newDate = new Date();
  let difference = new Date().getTimezoneOffset() * 60;
  let timezone = data['city']['timezone'];
  let localTime = addSeconds(newDate, difference + timezone);

  // console.log(`local date: ${newDate}`);
  // console.log(`difference: ${difference}`);
  // console.log(`timezone: ${timezone}`);
  // console.log(processedData.localTime);

  setLocalStorage(processedData);
  return processedData;
};

const setLocalStorage = function (data) {
  localStorage.setItem('weatherDataDay', JSON.stringify(data));
};

const getLocalStorage = function (data) {
  let returnedData = JSON.parse(localStorage.getItem(data));
  return returnedData;
};

const temperatureFahrenheit = function () {
  let weatherData = getLocalStorage('weatherDataDay');
  let celsius = weatherData.temperature;
  let fahrenheit = Math.round((celsius * 9) / 5 + 32);
  return fahrenheit;
};

const temperatureCelsius = function () {
  let weatherData = getLocalStorage('weatherDataDay');
  let celsius = weatherData.temperature;
  return celsius;
};

const feelsLikeFahrenheit = function () {
  let weatherData = getLocalStorage('weatherDataDay');
  let celsius = weatherData.feelsLike;
  let fahrenheit = Math.round((celsius * 9) / 5 + 32);
  return fahrenheit;
};

const feelsLikeCelsius = function () {
  let weatherData = getLocalStorage('weatherDataDay');
  let celsius = weatherData.feelsLike;
  return celsius;
};

// get time of location

const convertDateAndTime = function () {
  let weatherData = getLocalStorage('weatherDataDay');

  let timezoneFromUTC = weatherData.timezoneFromUTC;
  let UTC;
  // timezoneFromUTC is the difference from local time zone to UTC+00:00.
  // getTimezoneOffset() returns the difference between UTC time and local time.
  let localTime = addSeconds(new Date(), timezoneFromUTC + new Date().getTimezoneOffset() * 60);

  console.log(`timezoneFromUTC: ${timezoneFromUTC}`);
  console.log(`difference: ${new Date().getTimezoneOffset() * 60}`);
  return localTime;
};

const formatDateAndTime = function () {
  const dateAndTime = convertDateAndTime().toString();

  let day = dateAndTime.slice(0, 3);
  let month = dateAndTime.slice(4, 7);
  let dayNumber = dateAndTime.slice(8, 10);
  let year = dateAndTime.slice(11, 15);

  let time = dateAndTime.slice(16, 21);

  // console.log(`${day} ${month} ${dayNumber}, ${year}, ${time}`);
  return { day, month, dayNumber, year, time };
};

export {
  apiForecastHourly,
  processData,
  temperatureFahrenheit,
  temperatureCelsius,
  feelsLikeFahrenheit,
  feelsLikeCelsius,
  formatDateAndTime,
};
