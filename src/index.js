import {
  apiForecastDaily,
  apiForecastHourly,
  processData,
  // getLocalStorage,
} from './apiFunctions';
import { renderDataHourly, renderTemperature, renderFeelsLike, clearInfo } from './render';

// import { searchLocation } from './apiFunctions';
import './styles/main.scss';

let initialLoad = true;
const getWeather = async function () {
  try {
    let location;

    if (initialLoad) {
      location = 'Toronto';
      initialLoad = false;
    } else {
      location = document.querySelector('#input--location').value;
    }

    const weatherDataHourly = await apiForecastHourly(location);
    renderDataHourly(weatherDataHourly);
  } catch (err) {
    console.log(err);
  }
};

// initial load
getWeather();

const search__btn = document.querySelector('.btn--search');
search__btn.addEventListener('click', getWeather);

const temperatureToggle = document.querySelector('input[type="checkbox"]');

temperatureToggle.addEventListener('change', function () {
  renderTemperature();
  renderFeelsLike();
});
