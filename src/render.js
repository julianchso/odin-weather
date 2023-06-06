import { eventListeners } from './listeners';
import { apiCall, getLocationName } from './apiFunctions';

const renderLocation = async function () {
  const mainInfo = document.querySelector('.mainInfo');
  let locationName = await getLocationName();

  let locationTitle = document.createElement('h2');
  locationTitle.textContent = locationName;
  mainInfo.append(locationTitle);
};

export { renderLocation };
