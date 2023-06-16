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
    const data = await response.json();

    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const convertCtoF = function (celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
};

export { apiForecastHourly, convertCtoF };
