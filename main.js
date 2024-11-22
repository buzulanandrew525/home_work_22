console.log('#5. JavaScript homework example file')

/*
 * #1
 *
 * Створіть функцію counter(), яка має реалізувати лічильник за допомогою замикання:
 * функція може приймати число як аргумент counter(n)
 * якщо число передано у функцію - лічба починається із зазначеного числа
 * якщо ні - то лічба триває
 */
console.log(`Завданя №1`);
document.write(`Завданя №1 <br>`);
const counter = function(number) {
  let count = number !== undefined ? number : 0;

  return function(newNumber) {
    if (newNumber !== undefined) {
      count = newNumber;
    } else {
      count++;
    }
    return count;
  }
};

const counters = counter();


console.log(counters()); // 0
console.log(counters()); // 1
console.log(counters(100)); // 100
console.log(counters()); // 101
console.log(counters()); // 102
console.log(counters(500)); // 500
console.log(counters()); // 501
console.log(counters()); // 502
console.log(counters(0)); // 0
console.log(counters()); // 0
console.log(counters()); // 1

document.write(counters() + "<br>");
document.write(counters() + "<br>");
document.write(counters(100) + "<br>");
document.write(counters() + "<br>");
document.write(counters() + "<br>");
document.write(counters(500) + "<br>");
document.write(counters() + "<br>");
document.write(counters() + "<br>");
document.write(counters(0) + "<br>");
document.write(counters() + "<br>");
document.write(counters() + "<br>");

/*
 * #2
 *
 * Створіть функцію counterFactory, яка має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника - 0
 * counterFactory.value() - повертає значення лічильника
 * counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() - збільшує значення лічильника на 1
 * counterFactory.decrement() - зменшує значення лічильника на 1
 */
console.log(`Завданя №2`);
document.write(`Завданя №2 <br>`);
const counterFactory = function() {
  let count = 0;
  return {
    value(n) {
      if (n !== undefined) {
        count = n;
      }
      return count;
    }, 

    increment() {
      count++;
      return count;
    },

    decrement() {
      count--
      return count;
    }
  };
};
const count = counterFactory();

console.log(count.value()); // 0
document.write(count.value() + "<br>");
count.increment();
count.increment();
count.increment();
console.log(count.value()) // 3
document.write(count.value() + "<br>");
count.decrement();
count.decrement();
console.log(count.value()); // 1
document.write(count.value() + "<br>");
console.log(count.value(100)); // 100
document.write(count.value(100) + "<br>");
count.decrement();
console.log(count.value()) // 99
document.write(count.value() + "<br>");
console.log(count.value(200)); // 200
document.write(count.value(200) + "<br>");
count.increment();
console.log(count.value()); // 201
document.write(count.value() + "<br>");


/*
 * #3
 *
 * Створіть функцію myPow(a, b, myPrint). Всередині реалізуйте рекурсію для підрахунку результату піднесення числа a до ступеня b.
 * - Функція myPrint(a, b, res) - глобальна функція, що має генерувати з параметрів a, b, res рядок вигляду 'a^b=res' і повертати його.
 * - myPrint() має бути передана в myPow() як параметр і викликана всередині як callback-функція.
 * - функція myPow() як значення, що повертається, приймає результат myPrint().
 * Наприклад:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 * console.log(myPow(2, 0, myPrint))  // 2^0=1
 * console.log(myPow(2, -2, myPrint)) // 2^-2=0.25
 */

function myPrint(a, b, res) {
  return `${a}^${b}=${res}`;
};

const myPow = (a, b, myPrint) => {
  const result = Math.pow(a, b);
  return myPrint(a, b, result); ;
};

console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8
console.log(myPow(2, -2, myPrint)); // 2^-2=0.25
console.log(myPow(2, -2, myPrint)); // 2^-2=0.25
console.log(myPow(2, 0, myPrint)); // 2^0=1
document.write(myPow(3, 4, myPrint) + "<br>");
document.write(myPow(2, 3, myPrint) + "<br>");
document.write(myPow(2, -2, myPrint) + "<br>");
document.write(myPow(2, -2, myPrint) + "<br>");
document.write(myPow(2, 0, myPrint) + "<br>");


/*
 * #4
 * Створіть функцію myMax(arr), яка як параметр приймає
 * довільний числовий масив і повертає максимальне число з переданого їй масиву.
 * У реалізації функції має бути застосовано метод Math.max() і apply().
 */
console.log(`Завданя №4`);
document.write(`Завданя №4 <br>`);
function myMax(arr) {
  return Math.max.apply(null, arr);
};
const list = [12, 23, 100, 34, 56, 9, 233];

console.log(myMax(list)); // 233
document.write(`Максимальне число ${myMax(list)} <br>`);

/*
 * #5
 *
 * Створіть функцію myMul(a, b), яка буде множити числа а і b, повертаючи результат.
 */
console.log(`Завданя №5`);
document.write(`Завданя №5 <br>`);
const myMul = (a, b) => {
  return a * b;
};
document.write("Множення <br>");
console.log("Множення");
console.log(myMul(2, 3));
console.log(myMul(4, 5));
console.log(myMul(8, 4));
document.write(myMul(2, 3) + "<br>");
document.write(myMul(4, 5) + "<br>");
document.write(myMul(8, 4) + "<br>");

/*
 * Створіть функції myDouble(n), яка приймає один параметр і подвоює його.
 * Використовувати множення або інші математичні операції всередині функції - заборонено, тільки bind() і myMul().
 * Функція повертає результат обчислення.
 */

function myDouble(n) {
  const double = myMul.bind(null, 2);
  return double(n);
};

document.write("Подвієння <br>");
console.log("Подвієння");
console.log(myDouble(3));// = myMul(2, 3) = 6
console.log(myDouble(4)); // = myMul(2, 4) = 8
console.log(myDouble(5)); // = myMul(2, 5) = 10
document.write(myDouble(3) + "<br>");
document.write(myDouble(4) + "<br>");
document.write(myDouble(5) + "<br>");

// Аналогічним чином створюємо функцію myTriple(n), яка потроює параметр, що приймає, повертаючи результат.

function myTriple(n) {
  const triple = myMul.bind(null, 3);
  return triple(n);
};
document.write("Потрієння <br>");
console.log("Потрієння");
console.log(myTriple(3)); // = myMul(3, 3) = 9
console.log(myTriple(4)); // = myMul(3, 4) = 12
console.log(myTriple(5)); // = myMul(3, 5) = 
document.write(myTriple(3) + "<br>");
document.write(myTriple(4) + "<br>");
document.write(myTriple(5) + "<br>");