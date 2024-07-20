//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

const str = "Abcde";

if (str.toLowerCase().startsWith("a")) {
  console.log("так");
} else {
  console.log("ні");
}

str.toLowerCase()[0] === "a" ? console.log("так") : console.log("ні");
