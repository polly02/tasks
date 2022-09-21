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


//18.09 - errors

// 1. На входе значение. Необходимо его обработать. Если это число и оно не является
// четным, бросить исключение

// const num = prompt("enter num");

// function doData(num) {
//     try {
//         if (!isNaN(num) || num % 2 === 1) throw new Error("нечетное или строка")
//         return num
//     } catch (error) {
//         return error.message;
//     }
// }
// console.log(doData(num));

// 2. На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение.

// const arr = [1, 2, 3, 4, "text", 5]

// function checkArray(x) {
//     try {
//         let bool = x.every(el => !isNaN(el) ? false : true)
//         if (!bool) throw new Error("одно значение не число")
//         return x
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkArray(arr));

// 3. Дан массив чисел внутри строки. Необходимо строку преобразовать в массив
// используя JSON.parse. Если же после того как вы спарсили данные у вас не
// массив, то бросить исключение. Добавить проверку на числа. Далее вывести
// только те числа, которые кратны 3

// const json = `[
//         { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//         { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
//         { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3}
//         ]`

// let parsedData = JSON.parse(json)

// function checkNum(arr) {
//     let count = 0
//     arr.forEach(el => isNaN(el.priority) ? count++ : null)
//     if (count > 0) throw new Error(("это не число"))
//     return true
// }

// function findPriority(arr) {
//     try {
//         if (checkNum(arr)) {
//             const newArr = arr.filter(el => el.priority % 3 === 0)
//             if (!newArr.length) throw new Error(("нет чисел кратных 3"))
//             return newArr
//         }
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(findPriority(parsedData));

// 4. Дана строка массива. Необходимо спарсить строку и преобразовать в массив.
// Если же после того как вы спарсили данные у вас не массив, то бросить
// исключение. Далее вывести те элементы массива, в котрых id – четное значение

// const json = `[
//         { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//         { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
//         { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3}
//         ]`

// let parsedData = JSON.parse(json)

// function checkArr(arr) {
//     if (!Array.isArray(arr)) throw new Error("это не массив")
//     if (arr.some(el => isNaN(el.id))) throw new Error("есть строки")
//     return true
// }

// function findValue(arr) {
//     try {
//         if(checkArr(arr)) {
//             const newArr = arr.filter( el => el.id % 2 === 0)
//             if(!newArr.length) throw new Error ("нет четных id")
//             return newArr
//         }
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(findValue(parsedData));

// 5. На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в диапазоне 0 <
// 100, то занести в новый массив. Добавить проверки и обработать их.
// Обр диапазоне 10<nатите внимание, тут как минимум 3 функции. Первая:
// формирование массива. Вторая: валидация. Третья: основная логика задачи

// const n = +prompt("enter the number");

// function doArr(n) {
//     const arr = [];
//     for (let i = 0; i < n; i++) {
//         arr.push(Math.floor(Math.random() * 100))
//     }
//     return arr;
// }

// function checkArr(arr) {
//     if (Array.isArray(arr)) throw new Error("не массив")
//     if (arr.some(el => isNaN(el))) throw new Error("в массиве не только числа")
//     if (arr.some(el => el < 0)) throw new Error("в массиве отрицательыне числа")
//     return true
// }

// function doNewArray(arr) {
//     try {
//         if (checkArr(arr)) {
//             const newArr = arr.filter(el => el >= 10 && el <= 100);
//             if (!newArr.length) throw new Error("все элемены не удовлетворяют условию")
//             return newArr
//         }
//     } catch (error) {
//         return error.massage
//     }
// }

// const randomArray = doArr(n)
// console.log(doNewArr(randomArray));

// 6. Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если можно построить треугольник со
// сторонами заданной длины, и false в любом другом случае. Треугольник
// существует только тогда, когда сумма двух его сторон больше третьей. Требуется
// сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
// сторона окажется больше либо равна сумме двух других, то треугольника с
// такими сторонами не существует.

// let a = prompt("enter the number");
// let b = prompt("enter the number");
// let c = prompt("enter the number");

// function buildTriangle(a, b, c) {
//     try {
//         if (isNaN(a) || isNaN(b) || isNaN(c)) throw new Error("одно из введеных значений не число")
//         return (+a + +b > +c && +a + +c > +b && +b + +c > +a) ? true : false
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(buildTriangle(a, b, c));

// 7. Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (9^2 === 81, 1^2=== 1)

// let n = prompt("enter the number");

// function doubleNumbers(num) {
//     try {
//         if (isNaN(num)) throw new Error("введенное значение не число");
//         let a = ""
//         for (let i = 0; i < num.length; i++) {
//             a += num[i] ** 2
//         }
//         return a
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(doubleNumbers(n));

// 8. Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// let arr = ["a", "b", "c", "d", "f"];

// function findLostElement(arr) {
//     try {
//         if (arr.some(el => !isNaN(el))) throw new Error("в массиве не только буквы")
//         const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy'

//     } catch (error) {
//         return error.message
//     }
// }


// console.log(findLostElement(arr));

// 9. Мальчик идет долгим путем со школы домой. Чтобы сделать прогулку веселее, он
// складывает все номера домов, мимо которых проходит. К сожалению, не на всех
// домах написаны номера, к тому же мальчик регулярно меняет улицы по очереди,
// поэтому номера не представляются ему в определенном порядке.
// В какой-то момент во время прогулки мальчик встречает дом с написанным на
// нем 0 номером. Это настолько его удивляет, что он перестает прибавлять числа к
// своей сумме сразу после того, как видит этот дом.
// Для заданной последовательности домов определите сумму, которую получит
// мальчик. Гарантируется, что на пути всегда будет хотя бы один нулевой дом.
// Добавить проверку, что номера домов – только числа.
// [5, 1, 2, 3, 0, 1, 5, 0, 2] –> 11 (5 + 1 + 2 + 3 = 11)

// const arr = [5, 1, 2, 3, 0, 1, 5, 0, 2];

// function checkArr(arr) {
//     if (arr.some(el => isNaN(el))) throw new Error("в массиве есть строки");
//     if (arr.some(el => el < 0)) throw new Error("в массиве отрицательыне числа");
//     return true
// }

// function getSumma(arr) {
//     try {
//         if (checkArr(arr)) {
//             let sum = 0
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] !== 0) {
//                     sum += arr[i]
//                 } else {
//                     break
//                 }
//             }
//             return sum
//         }
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(getSumma(arr));

// 10. На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

// const email = "polina@gmail.com";

// function checkEmail(mail) {
//     try {
//         const bool = mail.includes("@")
//         if(!bool) throw new Error ("неверный формат почты")
//         return true
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkEmail(email));

//19.09

// 1. На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

// const num = "123345s"

// function checkStr(str) {
//     try {
//         if (!/^[\d]+$/g.test(str)) throw new Error("не числа")
//         return true
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkStr(num));

// 2. На вход подается строка вида “имя фамилия возраст”. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

// const str = "Polina Zdanovich 19"

// function checkStr(str){
//     try {
//         if(!/^[a-zA-Z]+ [a-zA-Z]+ [\d]{1,2}$/g.test(str)) throw new Error("не подходит под RegEx")
//         return true
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkStr(str));



// 3. На вход подается строка из 2 и более слов. Необходимо все пробелы заменить на
// “!”. Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

// const str = "Polina Zdanovich student"

// function checkStr(str){
//     try {
//         const change = str.replaceAll(/ /g, "!")
//         if(change.includes(" ")) throw new Error("вы ничего не изменили")
//         return change
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkStr(str));

// 4. На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит
// под регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

// const mail = "polina@gmail.com"

// function checkEmail(email){
//     try {
//         if(!/^[a-zA-Z0-9_\-\.]+@[a-z]+\.[a-z]{1,3}$/g.test(email)) throw new Error("не подходит под формат почты")
//         return email
//     } catch (error) {
//         return error.message
//     }
// }
// console.log(checkEmail(mail));

// 5. На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать

// const str = "https://github.com/Polina"

// function checkURL(str){
//     try {
//         if(!/^(http|https):\/\/[a-zA-Z]+\.[a-z]{1,3}\/[\w]+$/g.test(str)) throw new Error ("error")
//         return str
//     } catch (error) {
//         return error.message
//     }
// }
// console.log(checkURL(str));


// 6. На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

//?
// const road = "C:\Users\Admin\Desktop\test.txt";

// function checkRoad(road) {
//     try {
//         if(!/^[A-Z]{1}:\\[A-Za-z0-9]+\\[A-Za-z0-9]+\\[A-Za-z0-9]+\\[A-Aa-z0-9]+\.[a-z]{1,3}$/g.test(road)) throw new Error("не соответствует формату указания пути")
//         return road
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkRoad(road));

// 7. На вход подается строка в виде пароля. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать.
// Пароль должен содержать:
// • Буквы в UPPER регистре
// • Буквы в LOWER регистре
// • Числа
// • Специальные символы
// • Длина не менее 8 символов

//?

// const pass = "abc_123" 

// function checkPassword(pswrd) {
//     try {
//         if(!(/^[a-zA-Z0-9_\-\.@\/]+$/g.test(pswrd)) && pswrd.length >= 8) throw new Error ("ненадежный пароль")
//         return pswrd
//     } catch (error) {
//         return error.message
//     }
// }

// console.log(checkPassword(pass));

// 8. Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

//???

// const str = "123_as-D".split("");

// function transformString(string) {
//     try {
//         const newStr = string.filter(el => /^[a-zA-Z]+&/g.test(el))
//         if(str.length === newStr.length) throw new Error("в строке только буквы")
//         else return true        
//     } catch (error) {
//         return error.message;
//     }
// }

// console.log(transformString(str));

// 9. Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не
// могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
// "1234“ -> true
// "12345“ -> false
// "a234“ -> false

//? если 5 цифр - undefined

// const pin = 1236;

// function checkPin(pin) {
//     try {
//         if (!/^[\d]{1,4}$|^[\d]{1,6}$/g.test(pin) || /^[\d]{1,5}$/g.test(pin)) throw new Error("неверная длина пинкода")
//         return pin
//     } catch (error) {
//         return error.massage
//     }
// }

// console.log(checkPin(pin));

// 10. Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->

//?

// const html = `<div>
// <!-- asdcf -->
// <input>
// <!-- ad1 -->`

// function editCommit(file) {
//     let a = (/<!--[\w\.\*\(\)-_]+-->/g.exec(file))
//     file.replaceAll(a, " ")
//     return file
// }

// console.log(editCommit(html));