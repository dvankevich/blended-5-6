//! Callback - module 5
//TODO:============task-01=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

// function performOperation(a, b, callback) {
//   return callback(a * b);
// }

// function callbackFunction(num) {
//   if (num % 2 === 0) {
//     return Math.pow(num, 2);
//   } else {
//     return Math.sqrt(num);
//   }
// }
// function callbackFunction(num) {
//   return num % 2 === 0 ? Math.pow(num, 2) : Math.sqrt(num);
// }

// const result = performOperation(20, 40, callbackFunction);
// console.log(result);

//TODO:============task-02=========================
// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

// function findElement(array, callback) {
//   for (const element of array) {
//     if (callback(element)) {
//       return element;
//     }
//   }
//   return null;
// }
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function startWithO(str) {
//   if (str[0].toLowerCase() === 'o') {
//     return true;
//   }
//   return false;
// }

// const numbers = [1, 3, 5, 7, 9, 20];
// const words = ['apple', 'banana', 'orange', 'pear'];

// function findElement(array, callback) {
//   let result = null;
//   array.forEach(element => {
//     if (callback(element) && result === null) {
//       result = element;
//     }
//   });
//   return result;
// }
// function isEven(num) {
//   return num % 2 === 0;
// }
// function startWithO(str) {
//   return str.toLowerCase().startsWith('o');
// }

// const numbers = [1, 3, 6, 7, 9, 20];
// const words = ['apple', 'banana', 'orange', 'pear'];

// const res = findElement(numbers, isEven);
// console.log(res);
// const res2 = findElement(words, startWithO);
// console.log(res2);

//! Array methods
//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const getNewArray = array => array.map(number =>number * number)

// const res = getNewArray([1, 2, 3,4,5]);
// console.log(res);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const flatArray = array =>  array.flatMap(item =>  item.values)

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const res = flatArray(data);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const  checkAge= array=>array.some(item=> item.age < 20)

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const res = checkAge(people);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const checkEvenArray= array=> array.every(number=> number %2 === 0)

// const numbers = [2, 4, 6, 8, 10];

// const res = checkEvenArray(numbers);
// console.log(res);

//TODO:=========task-05=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const getNumber= array=> array.find(number=> number >3 )

// const numbers = [1, 2, 3, 4, 5];

// const res = getNumber(numbers);
// console.log(res);

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const sortedArray = array => array.toSorted ((a,b) => a - b)

// const numbersArray = [4, 2, 5, 1, 3];

// const res = sortedArray(numbersArray);
// console.log(res);

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const sortedArray = array => array.toSorted((a,b) => a.localeCompare(b))

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const res = sortedArray(stringArray);
// console.log(res);

//TODO:===============task-8===============================
//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const ageSortedUsers = (arr) => [...arr].toSorted((a, b) => a.age - b.age);

// const res = ageSortedUsers(users);
// console.log(res);

//TODO:=========task-09=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const getAge = array => array.filter(item => item.age > 20)

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const res = getAge(user, 25);
// console.log(res);

//TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const sum = array => array.reduce((acc, number) => acc += number, 20 )

// const numbers = [1, 2, 3, 4, 5];

// const res = sum(numbers);
// console.log(res);

//TODO:=========task-11=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.

// const averageValue = array => array.reduce((acc, number) => acc + number / array.length, 0)

// const arr = [1, 2, 3, 4, 5];

// const res = averageValue(arr);
// console.log(res);

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const res = user.map(item => item.name).toSorted((a,b) => a.localeCompare(b))

// console.log(res);

//! Module 6
//* Модуль 6. Заняття 12. Прототипи та класи
//TODO:=========task-01=================
/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */

// class Calculator {
//   constructor() {
//     this.result = 0;
//   }
//   number(num) {
//     this.result = num;
//     return this;
//   }
//   getResult() {
//     return this.result;
//   }
//   add(num) {
//     this.result += num;
//     return this;
//   }
//   substruct(num) {
//     this.result -= num;
//     return this;
//   }
//   divide(num) {
//     this.result /= num;
//     return this;
//   }
//   multiply(num) {
//     this.result *= num;
//     return this;
//   }
// }

// const calculator = new Calculator();
// console.log(calculator);

// const res = calculator
//   .number(10)
//   .add(10)
//   .divide(2)
//   .multiply(4)
//   .substruct(5)
//   .getResult();

// console.log(res);

// const res2 = calculator
//   .number(20)
//   .substruct(40)
//   .multiply(-8)
//   .divide(160)
//   .add(20)
//   .getResult();

// console.log(res2);

//! Приватні властивості
//TODO:=========task-02=================
/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 */

class Client {
  #login;
  #email;
  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }
  get getLogin() {
    return this.#login;
  }
  set changeLogin(newLogin) {
    this.#login = newLogin;
  }

  get getEmail() {
    return this.#email;
  }

  set changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

console.log('=========task-02=================');

const client = new Client('Mango', 'mango@gmail.com');

//client.changeLogin = '12343';
//console.log('client object: ', client);
console.dir('client object: ', client);

client.changeEmail = 'mango555@gmail.com';
console.log(client.getEmail);
client.changeLogin = '12345';
console.log(client.getLogin);
//

//! Практика наслідування у класах.
//TODO:=========task-04=================
/**
  |============Person================
  | Cтворіть клас `Person`, який містить наступні властивості:
  |  - `name` - ім'я людини;
  |  - `age`- вік людини;
  |  - `gender` - стать людини;
  |  - `email`- електронна пошта людини.
  |
  | ##### Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.
  |============================
*/

class Person {
  constructor(name, age, gender, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }
  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

console.log('=========task-04=================');

const person = new Person('John', 30, 'male', 'john@hmail.com');
console.log(person.getDetails());

/**
  |=============Employee===============
  |Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  |  - salary - зарплата співробітника;
  |  - department - відділ, в якому працює співробітник.
  |  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.
  |============================
*/
class Employee extends Person {
  constructor(salary, department, ...params) {
    super(...params);
    this.salary = salary;
    this.department = department;
  }

  getEmployeeDetails() {
    // let employee = {};
    // https://understandinges6.denysdovhan.com/manuscript/04-Objects.html
    // Метод Object.assign() спрощує зміну кількох властивостей одного об’єкту одночасно.
    //
    // Базовий порядок переліку власних властивостей такий:
    // Всі нумеровані ключі у порядку зростання.
    // Всі рядкові ключі у порядку, в якому вони були додані до об’єкту.
    // Всі символьні ключі (описано у Главі 6) у порядку, в якому вони були додані до об’єкту.

    // Object.assign(
    //   employee,
    //   { salary: this.salary, department: this.department },
    //   super.getDetails()
    // );
    // return employee;
    return {
      salary: this.salary,
      department: this.department,
      ...super.getDetails(),
    };
  }
}

console.log('=========task-05=================');
const employee = new Employee(
  5000,
  'developer',
  'Bob',
  45,
  'male',
  'bob@hmail.com'
);
console.log(employee.getEmployeeDetails());
