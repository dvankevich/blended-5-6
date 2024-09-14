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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// };

// console.log(new Date().toLocaleDateString('uk-UA', options));

// console.log(new Date().getTime());
// console.log(new Date().getDay());
// console.log(new Date().getMonth() + 1);

console.log(Date.now());

refs.ageButton.addEventListener('click', calcalateAge);

function calcalateAge() {
  const clientDate = new Date(refs.ageInput.value);

  const currentDate = new Date();
  const diffDate = currentDate - clientDate;

  const result = getAge(diffDate);
  console.log(result);

  refs.ageResult.textContent = `Your age is ${result} year old`;
}

function getAge(ms) {
  return Math.floor(ms / (1000 * 60 * 60 * 24 * 365.25));
}

/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

// console.log('1');
// setTimeout(() => {
//   console.log('2');
// }, 1000);

// setTimeout(() => {
//   console.log('3');
// }, 500);

// console.log('4');

const isSuccess = prompt('Enter number');

function checkIsSuccess(value) {
  return new Promise((resolve, reject) => {
    if (isNaN(value)) {
      return reject('Error: enter number');
    }

    if (value % 2 === 0) {
      setTimeout(() => {
        return resolve('Even');
      }, 1000);
    }

    setTimeout(() => {
      return resolve('Odd');
    }, 2000);
  });
}

checkIsSuccess(isSuccess)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
