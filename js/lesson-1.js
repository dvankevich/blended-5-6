//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = "Abcde";

// if (str.toLowerCase().startsWith("a")) {
//   console.log("так");
// } else {
//   console.log("ні");
// }

// str.toLowerCase()[0] === "a" ? console.log("так") : console.log("ні");


//TODO: 2 ===================================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.


// const firstName = "asasas"
// const lastName = "asda"

// const firstNameLength = firstName.length;
// const lastNameNameLength = lastName.length;

// if ( firstNameLength > 4  && lastNameNameLength > 5) {
//   console.log(firstNameLength + lastNameNameLength);
// } else {
//   console.log("неможливо виконати умову");
// }


//TODO: 3 ===================================
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон"




// function chekNumber() {
//   const number = Number(prompt("Enter number"))

//   if (isNaN(number)) {
//     return "Це не число"
//   }

//   // if ( number >= 55  &&  number <= 99 ) {
//   //   return "Число потрапляє в діапазон"
//   // }

//   // else {
//   //   return "Число не потрапляє в діапазон"
//   // }

//   return number >= 55 && number <= 99 ? "Число потрапляє в діапазон" : "Число не потрапляє в діапазон";
// }

// console.log(chekNumber());

