import { searchLocation } from './apiFunctions';

const eventListeners = function () {
  const search__btn = document.querySelector('.btnSearch');

  search__btn.addEventListener('click', searchLocation);
  search__btn.addEventListener('click', function () {
    console.log('click');
  });
};

export { eventListeners };
