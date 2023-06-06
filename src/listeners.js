import { apiCall, getLocationName } from './apiFunctions';
import { renderLocation } from './render';

const eventListeners = function () {
  const search__btn = document.querySelector('.btnSearch');

  search__btn.addEventListener('click', apiCall);
  search__btn.addEventListener('click', getLocationName);
  search__btn.addEventListener('click', renderLocation);
};

export { eventListeners };
