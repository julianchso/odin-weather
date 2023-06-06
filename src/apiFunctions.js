import { eventListeners } from './listeners.js';

const apiCall = async function () {
  const location = document.querySelector('#location');
  const locationValue = location.value;
  const apiKey = 'a1d41c729faca0f723357cd6979c2c45';
  const noOfCalls = 1;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${locationValue}&APPID=${apiKey}&cnt=${noOfCalls}`;

  try {
    const response = await fetch(url);
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (err) {
    console.log(err);
  }
};

const getLocationName = async function () {
  let weatherData = await apiCall();
  let locationName = weatherData['city']['name'];
  console.log(locationName);
  return locationName;
};

export { apiCall, getLocationName };
