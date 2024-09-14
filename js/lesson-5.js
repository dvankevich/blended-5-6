import { refs } from './helpers/refs.js';
import {
  addDataToLocalSrtorage,
  getDataFromLocalStorage,
} from './helpers/localStorage-ip.js';
import { LS_k } from './helpers/keys.js';
document.addEventListener('DOMContentLoaded', renderPage);
refs.checkbox.addEventListener('click', onClick);

function onClick(event) {
  console.log(event.target.checked);
  if (event.target.checked) {
    refs.body.classList.replace('light', 'dark');
    addDataToLocalSrtorage(LS_k, 'dark');
  } else {
    refs.body.classList.replace('dark', 'light');
    addDataToLocalSrtorage(LS_k, 'light');
  }
}
function renderPage() {
  const lsData = getDataFromLocalStorage(LS_k);
  if (lsData === 'dark') {
    refs.body.classList.replace('light', 'dark');
  } else {
    refs.body.classList.replace('dark', 'light');
  }
}
