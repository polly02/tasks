//18.09 - errors

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

//22.09

// 12. *Реализуйте функцию, которая будет принимать 2 параметра: строку в виде
// бинарного числа и число. Создайте функцию, которая будет, во-первых,
// проверять подходит ли бинарное число под шаблон регулярного выражения
// (состоит только из 1 и 0), и, во-вторых, определять, является ли число после
// перевода из двоичной системы в десятичную равно 2 параметру передаваемому
// в функцию.
// Написать свой алгоритм. Не использовать методы преобразования числа из 1
// системы в 2 (например, parseInt).
// Задача на позицию middle JavaScript Dev.
// На собеседовании давали 5 минут на решение задачи.





