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

//TODO: 4 ===================================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMaksim = 1200;

//  function checkAge(age) {

//   if ( age >= 0 && age <= 16) {
//      return "діти"

//   } else if ( age >= 17 && age <= 60) {
//     return "дорослі"
//   }

//   else if ( age >= 61 && age <= 100) {
//     return "пенсіонери"
//   }else{
//     return "error"
//   }

//  }
//   console.log(checkAge(ageMaksim));

//TODO: 5 ===================================
//* Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

// const drink = prompt("Який напій бажаєте?").toLowerCase();

// function orderDrink(drinkName) {
  //   switch (drinkName) {
  //     case "кава":
  //       return "Сума до сплати 60 грн.";

  //     case "чай":
  //       return "Сума до сплати 40 грн.";

  //     case "сік":
  //       return "Сума до сплати 30 грн.";

  //     default:
  //       return "Такого напою не існує";
//   }
    
    
//   let price = 0;
//   switch (drinkName) {
//     case "кава":
//       price = 60;
//       break;

//     case "чай":
//       price = 40;
//       break;

//     case "сік":
//       price = 30;
//       break;

//     default:
//       return "Такого напою не існує";
//   }

//   return `Сума до сплати ${price} грн.`;
// }

// console.log(orderDrink(drink));


//TODO: 6 ===================================
//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *****

// let i = 1;
// while (i <= 100) {
//   console.log(i); 
//   i++;
// }

// for (let i = 0; i <= 10000; i++) {
//   console.log(i); 
// }

// let star= "*"

// for (let i = 0; i < 7; i++) {
//   console.log(star);
//   star += "*"

// }