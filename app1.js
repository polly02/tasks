//22.08
// 1. Дана строка в виде числа. Необходимо просуммиоровать все элементы числа
// ‘123’ -> 6
// ‘111111111111’ -> 12

// const a = "123";
// let b = 0;
// for (let i = 0; i < a.length; i++) {
//     b += +a[i];
// }
// console.log(b);

// 2. Дан статичный массив элементов. С помощью цикла for найдите произведение
// всех элементов массива
// const a = [1, 2, 3, 4];
// let b = 1;
// for (let i = 0; i < a.length; i++) {
//     b += +a[i];
// }
// console.log(b);

// 3. На вход подается число. Необходимо вывести все числа от 1 до введенного числа
// кратные 3.

// const a = 33;
// for (let i = 1; i <= a; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// 4. Дан статичный массив с элементами и число вводимое с клавиатуры. С помощью
// цикла for и оператора if проверьте есть ли в массиве введенное число. Если есть,
// то остановите выполнение цикла. Если нет, то найдите среднее арифметическое
//всех чисел

// const a = [1, 2, 3, 4, 5];
// let b = 4;
// let c = 0;

// for (let i = 0; i < a.length; i++) {
//     if (a[i] === b) {
//         continue;
//     } else {
//         c += a[i];
//     }
// }
// if (a.includes(b)) {
//     console.log('ошибка');
// } else {
//     console.log(c / a.length);
// }

// 5. Найдите максимальное значение в статичном массиве используя цикл. 

// let arr = [-1, -2, -3, -4, -5, -2, -1];
// let b = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > b) {
//         b = arr[i]
//     }
// }
// console.log(b);

// 6. Выведите на экран случайное целое число от 1 до 100. (Math.random)

// console.log(Math.round(Math.random() * 100));

// 7. Преобразуйте первую букву строки в верхний регистр несколькими способами

// const a = "hschool";
// res = a[0].toUpperCase();
// for (let i = 1; i < a.length; i++) {
//     res += a[i] 
// }
// console.log(res);

//2 способ

// const a = "hschool";
// console.log(a[0].toUpperCase() + a.slice(1))

// 8. Преобразуйте первую букву каждого слова строки в верхний регистр.

// const a = "abc dfe ghi";
// let res = "";

// for (let i = 0; i < a.length; i++) {
//     if (i === 0) {
//         res += a[i].toUpperCase()
//     }

//     if (a[i - 1] === " ") {
//         res += a[i].toUpperCase();
//     } else if (a[i - 1] !== " " && i !== 0) {
//         res += a[i];
//     }
// }
// console.log(res);

// 9. На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный прямоугольник размерами n×10 несколькими способами.
// 2 -> **********
// **********

// const n = 5;
// let a = "*".repeat(10);
// for (let i = 0; i < n; i++) {
//     console.log(a);
// }

// 10. Задача на слово палиндром. 

// const a = "mem";
// if (a === a.split("").reverse().join("")) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 11. Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами

// const a = "дорога".split("").sort().join("");
// const b = "города".split("").sort().join("");

// if ( a === b) {
//     console.log("введенные слова - анаграммы");
// } else {
//     console.log("введенные  слова не являются анаграммами");
// }

// 12. На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный треугольник.
// 7 -> *******
// ******
// *****
// ****
// ***
// **
// *

// const n = 5;

// for (let i = n; i > 0; i--) {
//     console.log("*".repeat(i));
// }

// 13. Найдите минимальное значение в массиве используя цикл

// const arr = [1, 2, 5, 0, 7 , -4];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log(min);












// const value = 6;
// const arr = [0, 1]; //0 1 1 2 3 5 8 13

// for (let i = 0; i < value - 2; i++) {
//     arr.push(arr[i] + arr[i + 1])
// }
// console.log(arr);

// for (let i = 2; i < value; i++) {
//     arr.push(arr[i - 2] + arr[i - 1])
// }
// console.log(arr);



// массив

// 1. Выведите столбец чисел от 1 до 50. for, while

// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// let a = 1;
// while (a <= 50) {
//     console.log(a);
//     a++
// }

// 2. [1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами

// const arr = [1, 2, 3, 4, 5];
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }

// const arr = [1, 2, 3, 4, 5];
// let i = 0;
// do {
//     console.log(arr[i]);
//     i++
// } while (i < arr.length)

// const arr = [1, 2, 3, 4, 5];
// for (const item of arr) {
//     console.log(item);
// }

// 3. Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение
// элементов этого массива.

// const arr = [2, 3, 4, 5];
// let i = 0;
// let res = 1;
// while (i < arr.length) {
//     res *= arr[i];
//     i++
// }
// console.log(res);

// const arr = [2, 3, 4, 5];
// let res = 1;
// for (let i of arr) {
//     res *= i;
// }
// console.log(res);

// const arr = [2, 3, 4, 5];
// let res = 1;
// for (let i = 0; i < arr.length; i++) {
//     res *= arr[i];
// }
// console.log(res);

// 4. Выведите столбец чисел от 11 до 33 циклом while

// let i = 11;
// while (i <= 33) {
//     console.log(i);
//     i++
// }

// 5. Выведите столбец четных чисел в промежутке от 0 до 100 (for)

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// let i = 0;
// do {
//     if ( i % 2 === 0) {
//         console.log(i);
//     }
//     i++
// } while (i <= 100)

// 6. С помощью цикла while найдите сумму чисел от 1 до 100.

// const a = 100;
// let i = 1;
// let res = 0;
// while (i <= a) {
//     res += i;
//     i++;
// }
// console.log(res);

// 7. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for of найдите сумму
// элементов этого массива

// const arr = [1, 2, 3, 4, 5];
// let res = 0;
// for (let i of arr) {
//     res += i
// }
// console.log(res);

//добавили ввод через prompt

// let value = 5;
// const arr = [];
// let res = 0;

// for (let i=0; i< value; i++){
//     const a = +prompt("enter value"); //подключить html для проверки
//     arr.push(a);
// }

// for (let i of arr) {
//     res += i
// }
// console.log(res);


// 8. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите каждый элемент массива
// без повторений -> [1, 2, 3, 4, 5] (for, for of)

// const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
// const arr_2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr_2.includes(arr[i])) {
//         continue
//     } else {
//         arr_2.push(arr[i])
//     }
// }
// console.log(arr_2);

// const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
// const arr_2 = [];
// for (const i of arr) {
//     if (!arr_2.includes(i)){
//         arr_2.push(i)
//     } 
// }
// console.log(arr_2);

// 9. Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 3 циклом for of

// const arr = [2, 5, 9, 15, 0, 4];
// const arr_2 = [];
// for (const i of arr) {
//     if (i % 3 === 0) {
//         arr_2.push(i)
//     }
// }
// console.log(arr_2);

// const arr = [2, 5, 9, 15, 0, 4];
// const arr_2 = [];
// for (let i = 0; i < arr.length; i++ ) {
//     if (arr[i] % 3 === 0) {
//         arr_2.push(arr[i])
//     }
// }
// console.log(arr_2);

// 10. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите только уникальные
// значения массива -> [1, 5] (for)

// const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
// const arr_2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1] || arr[i] === arr[i - 1]) {
//         continue
//     } else {
//         arr_2.push(arr[i])
//     }
// }
// console.log(arr_2);


// const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
// const arr_2 = [];
// let i = 0;

// do {
//     if (!(arr[i] === arr[i + 1] || arr[i] === arr[i - 1])) {
//         arr_2.push(arr[i]);
//     }
//     i++;
// } while (i < arr.length);

// console.log(arr_2);

// 11. У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива

// const arr = ["avc", 1, 13, 15, "src", "%"];
// const arr_2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!isNaN(arr[i])) {
//         arr_2.push(arr[i])
//     }
// }
// console.log(arr_2);

// const arr = ["avc", 1, 13, 15, "src", "%"];
// const arr_2 = [];
// let i = 0;
// do {
//     if (!isNaN(arr[i])) {
//         arr_2.push(arr[i])
//     }
//     i++
// } while (i < arr.length) 
// console.log(arr_2);

// 12. Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 5 циклом while

// const arr = [2, 5, 9, 15, 0, 4];
// const arr_2 = []; 
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 5 === 0) {
//         arr_2.push(arr[i])
//     }
//     i++
// }
// console.log(arr_2);

// 13. Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму всех положительных элементов массива циклом for of

// const arr = [-1, 2, 4, 6, -3, -22, 0, 5];
// let res = 0;
// for (const i of arr) {
//     if (i >= 0) {
//         res += i
//     }
// }
// console.log(res);

// 14. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235

// const arr = [10, 20, 30, 50, 235, 3000];
// const arr_2 = [];
// for (let i = 0; i < arr.length; i++) {
//     let b = String(arr[i])
//     if (b.startsWith("1") || b.startsWith("2") || b.startsWith("5")) {
//         arr_2.push(+b)
//     }
// }
// console.log(arr_2);

// 15. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку
// '-1-2-3-4-5-6-7-8-9-

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = "-"
// for (let i = 0; i < arr.length; i++) {
//     res += arr[i] + "-"
// }
// console.log(res);

// 16. Дано число 7, найдите все числа кратные 7 до 100

// const n = 7;
// const b = 100;
// for (let i = n; i < 100; i++) {
//     if (i % 7 === 0) {
//         console.log(i);
//     }
// }

// 17. Дано предложение и количество раз которое его надо повторить. Напишите
// программу, которая повторяет данное предложение нужное количество раз.

// const a = "I study at hschool";
// const n = 5;
// let i = 0;
// while (i < n) {
//     console.log(a);
//     i++
// }

// 18. Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt.

// let a = +prompt("enter a number");
// const arr = [];

// for (let i = 0; i < a; i++) {
//     arr[i] = prompt("enter");
// }
// console.log(arr);

// 19. Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. Проверить каждый
// prompt на число (ввод строки, проверка на isNaN)

// let a = +prompt("enter a number");
// const arr = [];

// for (let i = 0; i < a; i++) {
//     b = prompt("enter");
//     if (isNaN(b)) {
//         arr[i] = b;
//     }
// }
// console.log(arr);

// 20.Пользователь вводит многозначное число. Необходимо вставить двоеточие
// между двумя нечетными числами. Работать с числом как с массивом.
// Использовать for
// 55639217 -> 5:563:921:7.

// let n = prompt("enter").split("");
// let res = "";
// for (let i = 0; i < n.length; i++) {
//     if (n[i] % 2 !== 0 && n[i + 1] % 2 !== 0) {
//         res += n[i] + ":";
//     } else {
//         res += n[i]
//     }
// }
// console.log(res);