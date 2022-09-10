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

// const arr = [1, 2, 4, 5, 6, "a"];

// function checkArray (a) {
//     const res = a.filter(el => !isNaN(el))
//     // return a.length = res.length ? getSumma(a) : false // почему-то ошибка
//     if (a.length === res.length) {
//        return getSumma(a) //или тут передаем res?
//     } else{
//         return false
//     }
// }

// function getSumma (b) {
//     const sum = b.reduce((sum,el) => {
//         return sum + el
//     }, 0)
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
//     if (a.length === res.length) {
//         return getSummaOfStrings(a)
//     } else {
//         return false
//     }
// }

// function getSummaOfStrings(b) {
//     const sum = b.reduce((sum, el) => {
//         return sum + el
//     }, "")               // надо ли тут кавычки пустые в конце
//     return sum
// }
// console.log(checkArray(arr));

// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами



// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива
// 10. На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4
// 11. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово палиндром и false в противном случае
// 12. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае