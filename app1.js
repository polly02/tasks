
// массив/методы перебора массива

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