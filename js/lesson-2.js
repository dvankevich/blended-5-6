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


//!  Літерал об'єкта
//!  Властвості та методи об'єкта
//TODO:============task-01=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'



// const humen = {
//   username: "Mango",
//   hobbi: "footbol",
//   age: 45,

//   greed() {
//     return `Hello ${this.username}`
//   }
// }
// const newHumen = Object.create(humen)
// newHumen.username = "qiwi"
// console.log(newHumen.greed());


// console.log(humen.greed());


// console.log(humen.hobbi);

// console.log(humen["hobbi"]);


// humen.mood = 'happy'
// // humen["mood"] = 'happy'

// humen.hobbi = 'skydiving';

// humen.departament = "IT"

// console.log(humen);

// for (const key in newHumen) {
//   if (newHumen.hasOwnProperty(key)) {
//     console.log(key);
//   }
  
// }

// console.log(Object.keys(newHumen));

// console.log(Object.values(humen));

// console.log(Object.entries(humen));

// const saleris = {
//   oleg: 3000,
//   igor: 2000,
//   vasya: 5000,
//   petro: 1500,

// }
// let total = 0;
// for (const key in saleris) {
//   if (saleris.hasOwnProperty(key)) {
//     total += saleris[key]
//   }
  
// }

// console.log(total);

// const values = Object.values(saleris)

// for (const value of values) {
//   total += value;
// }

// console.log(total);