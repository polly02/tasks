//18.09 - errors

const { arrayBuffer } = require("stream/consumers")

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





// 24-11

// 1. Посчитать количество гласных и согласных в строке

// const str = "I am study at Hschool".toLowerCase()
// const arrA = ['a', 'e', 'y', 'u', 'i','o']
// const arrB = ['q', 'w', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
// let countA = 0;
// let countB = 0;

// for(let i = 0; i < str.length; i++){
//  if(arrA.includes(str[i])){
//     countA ++
//  } else if(arrB.includes(str[i])){
//     countB ++
//  }
// }

// console.log(`Количество гласных ${countA}, количество согласных ${countB}`);


// 2. Вы вводите числа в поле для ввода формируя массив.
// Необходимо отобразить массив, а также отдельно
// все четные элементы этого массива и нечетные
// const arr = []
// const arrCh = []
// const arrN = []

// document.querySelector(".btn-num").addEventListener("click", () => {
//     const inp = document.querySelector(".number").value
//     arr.push(inp)
//     if (inp % 2 === 0) {
//         arrCh.push(inp)
//     } else {
//         arrN.push(inp)
//     }
//     document.querySelector(".res").innerHTML = `${arr} ${arrCh} ${arrN}`
// })

// 3. Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо также отображать только уникальные значения массива
// [1, 1, 4, 2, 3, 3] -> [4, 2]

// const arr = []
// const arrUnique = []

// document.querySelector(".btn-num").addEventListener("click", () => {
//     const inp = document.querySelector(".number").value
//     arr.push(inp)
//     arr.sort()
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] !== arr[i-1] && arr[i] !== arr[i+1]) {
//             arrUnique.push(arr[i])
//         } else{
//             continue
//         }
//     }
//     document.querySelector(".res").innerHTML = `${arr} ${arrUnique}`
// })


// 4. Вы вводите строку. Неоходимо проверить является ли эта строка датой и
// соответствует шаблону вида хх-хх-хххх
// 5. У вас есть 3 инпута. Необходимо вывести в результат конкатенацию всех инпутов



const storage = [
    {
        id: 1,
        title: 'часы',
        price: 333,
        count: 3
    },
    {
        id: 2,
        title: 'смартфон',
        price: 33,
        count: 3
    },
    {
        id: 3,
        title: 'тв',
        price: 353,
        count: 1
    },
]


const arr = []
for (let i = 0; i < storage.length; i++) {
    const { id, title, price, count } = storage[i]
    arr.push(price * count)
}

let res = arr.reduce(function (el, sum) {
    return sum + el
}, 0)

console.log(res);
// price  count + price2  count2 + ...