import { renderLocation, clearInfo } from './render.js';

// TODO: find a way to be local variable
const apiCall = async function (location) {
  const apiKey = 'a1d41c729faca0f723357cd6979c2c45';
  const noOfCalls = 1;
  const unitOfMeasurement = 'metric';

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

export { apiCall };
