// 1. Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»

// const nme = prompt("enter name");
// const surname = prompt("enter surname");

// function getName (name, surname){
//     return `Привет, ${name} ${surname}`
// }
// console.log(getName(nme, surname));

// 2. Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company

// const str = "hschool company".split(" ");

// function getToUpperCaseData(string) {
//     const res = string.map(el => {
//         return el[0].toUpperCase() + el.slice(1).toLowerCase()
//     })
//     return res.join(" ")
// }

// console.log(getToUpperCaseData(str));

// 3. Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

// const arr = ["by", "belarus", "de", "ru", "germany"];

// function getArray (a) {
//     let res = a.filter(el => el.length <=2)
//     return res
// }
// console.log(getArray(arr));

// 4. На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

// const arr = [1, 2, 3, 4, "asd"];

// function getResultOfCheck (a){
//     let res = a.filter(el => !isNaN(el))
//     return a.length === res.length ? true : false
// }
// console.log(getResultOfCheck(arr));

// 5. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования
// массива. Вторая для нахождения количества элементов массива

// let n = +prompt("enter n");

// function getSumma(a) {
//     return a.length
// }
// function doArr(value) {
//     const arr = []
//     for (let i = 0; i < value; i++) {
//         arr.push(prompt("enter elements of array"))
//     }
//     let count = getSumma(arr)
//     return count
// }

// console.log(doArr(n));

// 6. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива

// const arr = [1, 2, 4, 5, 6];

// function checkArray (a) {
//     const res = a.filter(el => !isNaN(el))
//     return a.length === res.length ? getSumma(a) : false 
// }

// function getSumma (b) {
//     const sum = b.reduce((sum,el) => sum + el, 0)
//     return sum
// }
// console.log(checkArray(arr));

// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

// const arr = ["asd", "sdf", "fgh"];

// function checkArray (a) {
//     const res = a.filter(el => isNaN(el))
//     return a.length === res.length ? getSummaOfStrings(a) : false
// }

// function getSummaOfStrings(b) {
//     const sum = b.reduce((sum, el) => sum + el, "")               // надо ли тут кавычки пустые в конце
//     return sum
// }
// console.log(checkArray(arr));

// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами

// const arr = [1, 2, 3, 4, 5];

// function getDoubleValues(a) {
//     let res = a.map(el => el * 2)
//     return res
// }

// function checkArray(b) {
//     let res = b.filter(el => !isNaN(el))
//     return b.length === res.length ? getDoubleValues(b) : false
// }

// console.log(checkArray(arr));

// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива

// const arr = [1, 2, 4, 5, 67, 8];

// function getArrayWithEvenNumbers(a) {
//     let newArr = a.filter(el => el % 2 === 0)
//     return newArr
// }

// function checkArray(b) {
//     let res = b.filter(el => !isNaN(el))
//     return b.length === res.length ? getArrayWithEvenNumbers(b) : false
// }
// console.log(checkArray(arr));

// 10. На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4

// let n = +prompt("enter number");
// // let n = 4

// function getFactorial(a) {
//     let res = 1
//     for (let i = 1; i <= a; i++) {
//         res *= i
//     }
//     return res
// }

// console.log(getFactorial(n));

// 11. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово палиндром и false в противном случае

// const str = "mem"

// function getWordPalindrom(a) {
//     return a === a.split("").reverse().join("") ? true : false
// }

// console.log(getWordPalindrom(str));

// 12. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае

// const str1 = "дорога".split("").sort().join("");
// const str2 = "города".split("").sort().join("");

// function getWordAnagramma(a, b) {
//     return a === b && a.length === b.length ? true : false
// }

// console.log(getWordAnagramma(str1, str2));

// 13. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива

// const arr = [1, 2, 3, 10, -7, 0, 9];

// function getMaxValue(a) {
//     return Math.max(...a)
// }

// function checkArray(b) {
//     let res = b.filter(el => !isNaN(el))
//     return b.length === res.length ? getMaxValue(b) : false
// }

// console.log(getMaxValue(arr));

// 14. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования
// массива. Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива

// let n = +prompt("enter number");

// function doArr(a) {
//     const arr = []
//     for (let i = 0; i < a; i++) {
//         arr.push(prompt(""))
//     }
//     return checkArray(arr)
// }

// function checkArray(b) {
//     let res = b.filter(el => !isNaN(el))
//     return b.length === res.length ? getResult(b) : false
// }

// function getResult(c) {
//     let result = c.reduce((pr,el) => pr*el, 1)
//     return result
// }

// console.log(doArr(n));

// 15. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования
// массива. Вторая для проверки, что в массиве только числа. Третья для
// формирования массива из всех четных чисел, возведенных в квадрат. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив из всех четных чисел, возведенных в квадрат

// let n = +prompt("enter number");

// function doArr(a) {
//     const arr = [];
//     for (let i = 0; i < a; i++) {
//         arr.push(prompt(""))
//     }
//     return checkArray(arr)
// }

// function checkArray(b) {
//     let res = b.filter(el => !isNaN(el))
//     return b.length === res.length ? getResult(b) : false
// }

// function getResult(c) {
//     let res = c.filter(el => el % 2 === 0)
//     let result = res.map(el => el**2)
//     return result
// }

// console.log(doArr(n));


//12.09

// 1. На входе число n. Напишите функцию, которая переворачивает число.

// let n = 517;

// function doReverse(number) {
//     return String(number).split("").reverse().join("")
// }

// console.log(doReverse(n));

// 2. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки

// let n = +prompt("enter number");

// function findLength(arr) {
//     if (checkArray(arr)) {
//         let res = arr[0]
//         arr.forEach(element => element.length > res.length ? res = element : null);
//         return res
//     } else {
//         return "error"
//     }
// }

// function doArr(number) {
//     const arr = []
//     for (let i = 0; i < number; i++) {
//         arr.push(prompt(""))
//     }
//     return arr
// }

// function checkArray(arr) {
//     let res = arr.filter(el => isNaN(el))
//     return arr.length === res.length ? true : false
// }

// const data = doArr(n);
// console.log(findLength(data));

// 3. Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае

// const email = "asd@.com";

// function getEmail(mail) {
//     const obj = {
//         email: mail
//     }
//     if (mail.includes("@") && mail.endsWith(".com") || mail.endsWith(".ru")) {
//         obj.active = true
//         return obj 
//     } else {
//         obj.active = false
//         return obj 
//     }
// }

// console.log(getEmail(email));

// 4. Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное числа соответственно. Добавить проверки на ввод и если
// значения массива не соответствуют условию задания, вывести сообщение об
// ошибке.

// let n = +prompt("enter number");

// function getMinMaxValue(arr) {
//     if (checkArray(arr)) { 
//         return `min ${Math.min(...arr)}, max ${Math.max(...arr)}` 
//     } else return "error"
// }

// function checkArray(newArr) {
//     let res = newArr.filter(el => !isNaN(el))
//     return newArr.length === res.length ? true : false
// }

// function doArr(number) {
//     const arr = []
//     for (let i = 0; i < number; i++) {
//         arr.push(prompt("enter elements of array"))
//     }
//     return arr
// }

// const data = doArr(n)
// console.log(getMinMaxValue(data));

// 5. На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

// const pass = "Asdf1234".split("")

// function checkPassword (password) {
//     let res1 = password.some(elem => elem.toUpperCase() ? true : false)
//     let res2 = password.some(elem => !isNaN(elem) ? true : false)
//     return res1 && res2 && password.length >= 8 ? true : false
// }

// console.log(checkPassword(pass));

// 6. Работа с замыканием. Реализуйте функцию, которая будет считать количество
// своих вызовов

// function multiply() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     }
// }

// const wrapper = multiply();
// console.log(wrapper());
// console.log(wrapper());
// console.log(wrapper());
// console.log(wrapper());

// 1. Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
// последующем вызове функции

// function multiply() {
//     let str = ""
//     return function() {
//         str += prompt("")
//         return str
//     }
// }

// const wrapper = multiply();
// console.log(wrapper());
// console.log(wrapper());
// console.log(wrapper());
// console.log(wrapper());

// 2. Напишите функцию, принимающую в качестве параметра строку. Необходимо
// оставить в строке только униакльные символы. IIFE
// Позволяеткопироватьтекстиз -> позвляеткираьс

// const str = "Позволяеткопироватьтекстиз".toLowerCase().split("");

// function getUniqueSymbols(string) {
//     let newString = []
//     for(let i = 0; i< string.length; i++) {
//         if(!newString.includes(string[i])) {
//             newString.push(string[i])
//         }
//     }
//     return newString.join("")
// }

// console.log(getUniqueSymbols(str));

// 3. На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

// let count = +prompt("enter number of array's elements");
// let n = +prompt("enter random number");

// function getBigElements(arr, n) {
//     let res = arr.filter(el => el>n)
//     return res
// }

// function doArr(count) {
//     const arr = [];
//     for (let i = 0; i < count; i++) {
//         arr.push(prompt("enter array's elements"))
//     }
//     return arr
// }

// const data = doArr(count);
// console.log(getBigElements(data, n));

// 3.1.Напишите функцию, которая принимает два параметра: строку и букву. Функция
// должна подсчитывать количество вхождений указанной буквы в строке. Добавить
// проверки

// let str = "asdasdfghjyfsgd";
// let l = "s";

// function getNumber(str, l) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] === l) {
//             count++
//         }
//     }
//     return count
// }

// console.log(getNumber(str, l));

// 4. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

// const obj = {

// }

// 5. Работа с замыканием. Напишите функцию, каждый вызов который будет
// генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока
// не будут перебраны все числа из этого промежутка.

// function multiply() {
//     let str = "";
//     return function () {
//         let n = Math.round(Math.random() * 100)
//         if (!str.includes(n)){
//             return n
//         }
//     }
// }

// const wrapper = multiply()
// console.log(wrapper());
// console.log(wrapper());
// console.log(wrapper());

// 6. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / знаечение. IIFE

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// function getNumberOfPair(object) {
//     let count = 0
//     for(let key in object){
//         if(key) {
//             count++
//         }
//     }
//     return count
// }

// console.log(getNumberOfPair(obj));

// 7. Напишите функцию, генерирующую надежный пароль. (Math.random)

// const n = 8; // length of password

// function getPassword(pass) {
//     let pas = []
//     for (let i = 0; i < pass; i++) {
//         pas.push(Math.round(Math.random() * 100))
//     }
//     return pas.join("")
// }

// console.log(getPassword(n));

// 1. *Напишите функцию, рассчитывающую ряд Фибоначчи используя рекурсию.
// Числа Фибоначчи – ряд натуральных (целых и положительных) чисел, каждое из
// которых является суммой двух предыдущих: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

// const value = 8
// const arr = [1, 1];

// // for (let i = 0; i < value - 2; i++) {
// //     arr.push(arr[i] + arr[i + 1])
// // }
// // console.log(arr);

// function getFibonacciSeries(array, number) {
//     let i = 0;
//     if (i < number - 2) {
//         array.push(array[i] + array[i + 1])
//         i++
//     } 
//     // for (let i = 0; i < number - 2; i++) {
//     //     array.push(array[i] + array[i + 1])
//     // }
//     return getFibonacciSeries(array, number)
// }

// console.log(getFibonacciSeries(arr, value));

// 2. *Вычислите сумму массива целых чисел статичного массива используя рекурсию

// const arr = [1, 2, 5, 6, -7, 5];

// function getSumma(array) {
//     if (array.length === 1) {
//         return array[0]
//     } else {
//         return array[0] + getSumma(array.slice(1))
//     }
// }
// console.log(getSumma(arr));


//15.09

// 1. На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

// const pwd = "passwoRD@77".split("");

// function isValid(pas) {
//     const symbols = ["@", "-", "_", "&", "#", "1"]
//     let boolUpperValue = pas.some(el => el === el.toUpperCase() ? true : false);
//     let boolNumValue = pas.some(el => !isNaN(el) ? true : false);
//     let boolStrValue = pas.some(el => isNaN(el) ? true : false);
//     let count = 0;
//     for (let i = 0; i < pas.length; i++) {
//         if (symbols.includes(pas[i])) {
//             count++
//         }
//     }

//     return boolUpperValue && boolNumValue && boolStrValue && count > 0 && pas.length > 8
// }

// console.log(isValid(pwd));

// 2. Реализуйте функцию searchBinary, которая принимает 2 параметра: значение и
// массив. Функция возвращает индекс, где значение встречается в массиве, если
// найдено. Если значение не найдено, возвращается сообщение об ошибке.

//бинарный поиск

// function searchBinary(value, array) {
//     let start = 0;
//     let end = array.length - 1;
//     let middle = Math.floor((start + end) / 2);
//     for (let i = 0; i < array.length; i++) {
//         if (array[middle] === value) {
//             return middle;
//         } else {
//             if(array[middle] < value){
//                 start = middle + 1;
//             } else {
//                 end = middle - 1;
//             }
//             middle = Math.floor((start + end) / 2);
//         }
//     }
//     return middle
// }

// console.log(searchBinary(8, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 3. Реализуйте функцию, которая определяет корректную расположение скобок.
// ( ) [ ] { } -> true
// ( ) [ ] { } ) ( ) ) -> false

// function isValid(str) {
//     const block = {
//         ")": "(",
//         "]": "[",
//         "}": "{"
//     }
//     const res = []
//     const close = ["}", "]", ")"]
//     for (let el of str){
//         if(close.includes(el)) {
//             if(block[el] != res.pop()) return false
//         } else {
//             res.push(el)
//         }
//     }
//     return true
// }

// console.log(isValid("(){}[]"));

// 4. Реализуйте функцию на генерацию ряда Фибоначчи используя рекурсию
//вернуть 5 чило Фибоначчи (0, 1, 1, 2, 3, 5, 8, 13, 21)

// function fibon(num) {
//     if (num < 2) return num;
//     return fibon(num - 2) + fibon(num - 1)
// }
// console.log(fibon(5));

// без рекурсии
// // function fibon(num) {
// //     let arr = [0, 1]
// //     if (num < 2) {
// //         return arr[num - 1]
// //     }
// //     for (let i = 2; i <= num; i++) {
// //         arr.push(arr[i - 1] + arr[i - 2])
// //     }
// //     return arr[num]
// // }

// 5. Вычислите сумму массива целых чисел статичного массива используя рекурсию