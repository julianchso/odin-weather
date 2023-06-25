import { apiForecastDaily, apiForecastHourly, processData } from './apiFunctions';
import {
  renderDataHourly,
  renderTemperature,
  renderFeelsLike,
  clearInfo,
  renderTime,
} from './render';

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
    window.refreshIntervalId;
    renderDataHourly(weatherDataHourly);
  } catch (err) {
    console.log(err);
  }
};

const search__btn = document.querySelector('.btn--search');
search__btn.addEventListener('click', getWeather);

const temperatureToggle = document.querySelector('input[type="checkbox"]');

temperatureToggle.addEventListener('change', function () {
  renderTemperature();
  renderFeelsLike();
});

const stopSubmitEnter = function () {
  // const form = document.querySelector('form#getWeather');
  const form = document.querySelector('#getWeather');
  form.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      getWeather();
    }
  });
};

// initial load
getWeather();
stopSubmitEnter();
