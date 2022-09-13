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