import { eventListeners } from './listeners.js';

const searchLocation = async function () {
  const location = document.querySelector('#location');
  const locationValue = location.value;
  const apiKey = 'a1d41c729faca0f723357cd6979c2c45';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationValue}&APPID=${apiKey}`;

  const response = await fetch(url);
  // console.log(response);

  const data = response.json();

  console.log(data);
};

export { searchLocation };

// http://api.openweathermap.org/data/2.5/weather?q=London,UK&APPID=a1d41c729faca0f723357cd6979c2c45
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a1d41c729faca0f723357cd6979c2c45
