import { apiCall } from './apiFunctions';
import { renderData, clearInfo } from './render';

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

    const weatherData = await apiCall(location);
    await renderData(weatherData);
  } catch (err) {
    console.log(err);
  }
};

// initial load
getWeather();

const search__btn = document.querySelector('.btn--search');
search__btn.addEventListener('click', getWeather);
