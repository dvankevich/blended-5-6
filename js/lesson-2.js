// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-рол');
// styles.unshift('Реп', 'Реггі');
// const newStyles = ['Реп', 'Реггі'];
// const unionStyles = newStyles.concat(styles);
// console.log(unionStyles);
// styles[3] = 'Класика';

// const index = styles.indexOf('Блюз');

// if (index !== -1) {
//   styles[index] = 'Класика';
// }
// console.log(styles.shift());

// styles.pop();

// console.log(styles.includes('Джаwз'));

// console.log(styles);

// for (let i = 0; i < styles.length; i += 1) {
//   console.log(`${i + 1} - ${styles[i]}`);
// }

// for (const style of styles) {
//   console.log(style);
// }

//TODO:=============task-02=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

// const numbers = [20, 10, 30, 50, 60, 70, 80];
// function sumEn(array = []) {
//   if (!Array.isArray(array)) {
//     return 'arguments is not array';
//   }
//   const result = [];
//   for (let index = 0; index < array.length - 1; index++) {
//     const element = array[index];
//     result.push(element + array[index + 1]);
//   }
//   return result;
// }

// console.log(sumEn(numbers));
