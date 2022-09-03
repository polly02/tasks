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
//     let b = prompt("enter");
//     if (isNaN(b)) {
//         arr.push(b);
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


// 01.09

// 1. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполяет массив. Далее необходимо создать массив только из чисел. Если длина
// массива равна 0, то вывести ‘Массив пуст’. filter

// const arr = [];
// for (let i = 0; i < 5; i++) {
//     arr.push(prompt(""))
// }
// let result = arr.filter(function (elem) {
//     if (!isNaN(elem)) {
//         return true;
//     }
// })
// console.log(result.length === 0 ? "массив пуст" : result);


// 2. На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет
// 5 первыми значениями массив. Далее необходимо создать массив из тех
// значений, которые являются числами и НЕ равны 2 другим введенным. Если
// длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента. forEach

// const arr = [];
// const arr2 = []
// let i = 0
// while (i < 7) {
//     if (i < 5) {
//         let input = prompt("");
//         if (!isNaN(input)) {
//             arr.push(input)
//         }
//     } else {
//         let input = prompt("");
//         if (!isNaN(input)) {
//             arr2.push(input)
//         }
//     }
//     i++
// }
// console.log(arr);
// console.log(arr2);

// const arr_res = []

// arr.forEach(element => {
//     if (!arr2.includes(element)) {
//         arr_res.push(element)
//     }
// })
// console.log(arr_res);

// 3. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести значения массива без дублирования.
// Если длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента.
// 1, 1, 3, 4, 4, 4, 2, 5 -> 1, 2, 3, 4, 5

// const arr = [];
// const arr2 = [];
// let n = +prompt("");

// for (let i = 0; i < n; i++) {
//     let input = prompt("");
//     if (!isNaN(input)) {
//         arr.push(input)
//     }
// }

// // arr.forEach((elem) => {
// //     if(!arr2.includes(elem)) {
// //         arr2.push(elem)
// //     }
// // })
// // console.log(arr2);

// for (let elem of arr) {
//     if (!arr2.includes(elem)) {
//         arr2.push(elem)
//     }
// }
// console.log(arr2.length === 0 ? "массив пуст" : arr2);

// 4. Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// равна 5. Вывести массив в консоль (цикл for, while)

// let arr = [];
// while (arr.length !== 5) {
//     let someData = prompt("")
//     if (!isNaN(someData)) {
//         arr.push(+someData)
//     }
// }
// console.log(arr);

//2 sposob

// let arr = [];
// for (; ;) {                     // бесконечный цикл
//     let someData = prompt("");
//     if (!isNaN(someData)) {
//         arr.push(+someData)
//     }
//     if (arr.length === 5) break;
// }
// console.log(arr);

//3 sp

// let arr = []
// while (1) {
//     let someData = prompt("");
//     if (!isNaN(someData)) {
//         arr.push(+someData)
//     }
//     if (arr.length === 5) break;
// }
// console.log(arr);

// 5. На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false. forEach

// const arr = []
// const arr2 = []

// for (let i = 0; i < 10; i++) {
//     let input = +prompt("enter")
//     if (i < 5) {
//         arr.push(input)
//     } else {
//         arr2.push(input)
//     }
// }

// let arr_res = 0;
// arr.forEach(elem => {
//     if (arr2.includes(elem)) {
//         arr_res += 1;
//     }
// })
// console.log(arr_res === 5 && arr.length === arr2.length ? true : false);

// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// число. Some, forEach

// let n = +prompt("");
// const arr = [];

// for (let i = 0; i < n; i++) {
//     arr.push(+prompt(""));
// }

// let chek = arr.some(elem => {
//     if (Number.isInteger()) {
//         return true
//     }
// })
// console.log(chek);

// 10. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите массив строк из четност и нечетности, в
// соответствии с тестом ниже:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// [1, 24, 5] -> [“нечет”, “чет”, “нечет”]
// Использовать map

// let n = 5;
// let arr = [];
// let i = 0;
// while (i < n) {
//     arr.push(prompt(""))
//     i++
// }
// let arr_res = arr.map(function (elem) {
//     return elem
// })



// сама

// 1. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполяет массив. Далее необходимо создать массив только из чисел. Если длина
// массива равна 0, то вывести ‘Массив пуст’. filter

// let n = 5;
// const arr = [];
// for (let i = 0; i < n; i++) {
//     arr.push(prompt(""))
// }
// let res = arr.filter((item) => {
//     if(!isNaN(item)) {
//         return true
//     }
// })
// if (res.length === 0) {
//     console.log("Массив пуст");
// } else {
//     console.log(res);
// }

// 2. На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет
// 5 первыми значениями массив. Далее необходимо создать массив из тех
// значений, которые являются числами и НЕ равны 2 другим введенным. Если
// длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента. forEach

// const arr = [];
// const arr2 = [];
// for (let i = 0; i < 7; i++) {
//     let input = prompt("")
//     if (i < 5 && !isNaN(input)) {
//         arr.push(input)
//     } else if (i > 5 && !isNaN(input)){
//         arr2.push(input)
//     }
// }
// arr.forEach(item => {
//     if (!arr2.includes(item)) {
//         arr2.push(item)
//     }
// })
// console.log(arr2.length === 0 ? "массив пуст" : arr2);


// 3. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести значения массива без дублирования.
// Если длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента.
// 1, 1, 3, 4, 4, 4, 2, 5 -> 1, 2, 3, 4, 5

// const arr = []
// let n = +prompt("")
// for (let i = 0; i < n; i++) {
//     let input = prompt("enter");
//     if(!isNaN(input) && !arr.includes(input)) {
//         arr.push(input)
//     }
// }

// console.log(arr.length === 0 ? "массив пуст" : arr);

// 4. Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// равна 5. Вывести массив в консоль (цикл for, while)

// const arr = [];
// for (; ;) {
//     let input = prompt('');
//     if (!isNaN(input)) {
//         arr.push(input)
//     }
//     if (arr.length === 5) break
// }
// console.log(arr);

// const arr = [];
// while (1) {
//     let input = prompt('');
//     if (!isNaN(input)) {
//         arr.push(input)
//     }
//     if (arr.length === 5) break
// }
// console.log(arr);

// 5. На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false. forEach

// const arr = []
// const arr2 = []

// for (let i = 0; i < 10; i++) {
//     let input = prompt("")
//     if (i<5) {
//         arr.push(input)
//     } else {
//         arr2.push(input)
//     }
// }

// let chek = 0;
// arr.forEach(elem => {
//     if(arr2.includes(elem)) {
//         chek++
//     }
// })
// console.log(chek === 5 && arr.length === arr2.length ? true : false);

// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// число. Some, forEach


// let n = prompt("")
// const arr = []
// for (let i = 0; i < n; i++) {
//     let input = prompt("")
//     arr.push(input)
// }

// let res = arr.some(elem => {
//     if(!isNaN(elem)) {
//         return true
//     }
// })
// console.log(res);


// let n = prompt("")
// const arr = []
// for (let i = 0; i < n; i++) {
//     let input = prompt("")
//     arr.push(input)
// }

// let chek = 0
// arr.forEach(elem => {
//     if(!isNaN(elem)) {
//         chek++
//     }
// })
// if (chek > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// 7. На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам

// const arr = ['hschool', 'hschool_0', 'hschool_1']

// console.log(arr[0], arr[arr.length - 1]);

// 8. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach

// let n = +prompt("");
// const arr = [];
// for (let i = 0; i < n; i++) {
//     arr.push(prompt(""))
// }
// let res = arr.every(elem => {
//     if(!isNaN(elem)) {
//         return true
//     } 
// })
// console.log(res);



// let n = +prompt("");
// const arr = [];
// for (let i = 0; i < n; i++) {
//     arr.push(prompt(""))
// }
// let chek = 0;
// arr.forEach(elem => {
//     if (!isNaN(elem)) {
//         chek++
//     }
// })
// if(chek > n) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 9. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

// let n = +prompt("");
// const arr = [];
// for (let i = 0; i < n; i++) {
//     let input = prompt("")
//     if (!isNaN(input)) {
//         arr.push(+input)
//     }
// }
// let res = 0;
// arr.forEach(elem => {
//     res += elem
// })
// console.log(res);


// let n = +prompt("");
// const arr = [];
// for (let i = 0; i < n; i++) {
//     let input = prompt("")
//     if (!isNaN(input)) {
//         arr.push(+input)
//     }
// }
// let result = arr.reduce((sum, elem) => {
//     return sum + elem
// }, 0)
// console.log(result);

// 10. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите массив строк из четност и нечетности, в
// соответствии с тестом ниже:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// [1, 24, 5] -> [“нечет”, “чет”, “нечет”]
// Использовать map

// let n = +prompt("");
// const arr = [];
// for (let i = 0; i < n; i++) {
//     let input = prompt("")
//     if(!isNaN(input)) {
//         arr.push(input)
//     }
// }

// const result = arr.map (elem => {
//     if (elem % 2 === 0) {
//         return "четн"
//     } else {
//         return "нечетн"
//     }
// })
// console.log(result);

// 11. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce

// let n = +prompt("");
// const arr = [];
// for (let i = 0; i < n; i++) {
//     let input = prompt("")
//     if (!isNaN(input)) {
//         arr.push(input)
//     }
// }

// let res = 1
// arr.forEach(elem => {
//     res *= elem
// })
// console.log(res);

// 12. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из отфильтрованных
// значений, где строка начинается на [a, h]. Проверка на ввод только текстовых
// значений на заполнение массива. filter
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]


// let n = +prompt("")
// const arr = []
// for (let i = 0; i < n; i++) {
//     let input = prompt("")
//     if(isNaN(input)) {
//         arr.push(input)
//     }
// }
// let res = arr.filter( elem => {
//     if(elem.startsWith("a") || elem.startsWith("h")){
//         return true
//     }
// })
// console.log(res);

// 13. На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичный массив данных
// [“javascript”, “c#”, “c”, “java”]. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значения статичного массива.
// Проверка на ввод только текстовых значений на заполнение массива. forEach

//??????????????????????

// let n = +prompt("");
// const arr = [];
// const arr2 = ["javascript", "c#", "c", "java"]

// for (let i = 0; i < n; i++) {
//     let input = prompt("")
//     if(isNaN(input)) {
//         arr.push(input)
//     }
// }

// arr.forEach(elem => {
//     elem.includes()
// })


// 14. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name
// [“hschool”, “company”] -> [“#hschool”, “#company”]

// let n = +prompt("");
// const arr = [];
// for (let i = 0; i < n; i++) {
//     arr.push(prompt(""))
// }
// let res = arr.map(elem => {
//     return "#" + elem
// })
// console.log(res);

// 15. Пользователь вводит 6 значений и распределяет их поровну между 2 массивами.
// Cоздать новый массив, добавить туда значения всех массивов. Spread, rest

// const arr = []
// const arr2 = []
// for (let i = 0; i < 6; i++) {
//     let input = prompt("")
//     if (i < 3) {
//         arr.push(input)
//     } else {
//         arr2.push(input)
//     }
// }

// const res = [...arr, ...arr2]; //spread
// console.log(res);

// rest ?????????

// 16. *На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n.
// Необходимо разбить данный одномерный массив на маленькие массивы в
// зависимости от того, какого число ввел пользователь. Добавить проверки на ввод
// числа (значение n не должно быть больше длины массива, 0, пустая строка,
// строковый тип данных). Использовать любой цикл / метод перебора массива
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]



// 17. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Значения могут быть строкового либо числового типа
// данных. Необходимо из этих элементов составить 2 массива: со строками и
// второй массив, соответственно, с числами. forEach

// let n = +prompt("")
// const arr = [];
// const arr_s = [];
// const arr_n = [];

// for (let i = 0; i < n; i++) {
//     arr.push(prompt(""))
// }

// arr.forEach( elem => {
//     if(isNaN(elem)) {
//         arr_s.push(elem)
//     } else {
//         arr_n.push(elem)
//     }
// })
// console.log(`массив со строками: ${arr_s}, массив с числами ${arr_n}`);

// 18. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map

// let n = +prompt("")
// const arr = []
// for (let i = 0; i < n; i++) {
//     arr.push(+prompt(""))
// }

// let res = arr.map(elem => {
//     return elem**2
// })
// console.log(res);

// 19. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел.

// let n = +prompt("")
// const arr = []
// let sum = 0

// for (let i = 0; i < n; i++) {
//     let input = prompt("")
//     if (!isNaN(input)) {
//         arr.push(+input)
//     }
// }

// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] !== 0) {
//         sum += arr[j]
//     } else {
//         break
//     }
// }
// console.log(sum);

// 20.На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filter

// let n = +prompt("")
// const arr = []
// for (let i = 0; i < n; i++) {
//     let input = prompt("")
//     if (!isNaN(input)) {
//         arr.push(+input)
//     }
// }

// let res = arr.filter(elem => {
//     if (elem > 0){
//         return true
//     }
// })
// console.log(res);