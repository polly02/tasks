// 1. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10

// interface iObj {
//     id?: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iObj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function filter(array: iObj[]): iObj[] {
//     const filtered = array.filter((elem) => elem.count > 10)
//     return filtered
// }

// console.log(filter(array));

// 2. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары в обратном порядке

// interface iObj {
//     id?: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iObj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function revers(array: iObj[]): iObj[] {
//     const result = array.reverse()
//     return result
// }

// console.log(revers(array));

// 3. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары, количество которых внутри массива кратно 3

// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iProduct[] =
//     [
//         { id: 1, title: 'Часы', count: 10, price: 500 },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//         { id: 5, title: 'Планшет', count: 22, price: 2100 },
//     ]

// function filter(array: iProduct[]): iProduct[] {
//     const filtered = array.filter((elem) => elem.count % 3 === 0)
//     return filtered
// }
// console.log(filter(array));

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...

// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iProduct[] =
//     [
//         { id: 1, title: 'Часы', count: 10, price: 500 },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//         { id: 5, title: 'Планшет', count: 22, price: 2100 },
//     ]

// function reduce(array: iProduct[]): number {
//     const res = array.reduce((sum, elem) => {
//         return sum + elem.count * elem.price
//     }, 0)
//     return res
// }

// console.log(reduce(array));

// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом

// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iProduct[] =
//     [
//         { id: 1, title: 'Часы', count: 10, price: 500 },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//         { id: 5, title: 'Планшет', count: 22, price: 2100 },
//     ]

// function getMaxPrice(array: iProduct[]): number {
//     let max = 0
//     for (let i = 0; i < array.length; i++) {
//         array[i].price > max ? max = array[i].price : null
//     }
//     return max
// }

// console.log(getMaxPrice(array));

// 6. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов

// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iProduct[] =
//     [
//         { id: 1, title: 'Часы', count: 10, price: 500 },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//         { id: 5, title: 'Планшет', count: 22, price: 2100 },
//     ]

// function getAveragePrice(array: iProduct[]): number {
//     const summa = array.reduce((sum, elem) => sum + elem.price, 0)
//     return summa/array.length
// }

// console.log(getAveragePrice(array));

// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением

// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iProduct[] =
//     [
//         { id: 1, title: 'Часы', count: 10, price: 500 },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//         { id: 5, title: 'Планшет', count: 22, price: 2100 },
//     ]

// function maxCost(array: iProduct[]): number {
//     let max = 0
//     for (let i = 0; i < array.length; i++) {
//         let prod = array[i].count * array[i].price
//         prod > max ? max = prod : null
//     }
//     return max
// }

// console.log(maxCost(array));

// 8. У вас есть массив строковых значений. Необходимо вывести значения массива
// без дубликатов. Добавить проверки на тип данных, почту

// const emails: string[] = ["test@mail.ru", "teeest@mail.ru", "teast@mail.ru", "test@mail.ru"]

// function isValid(emails: string[]): never | void {
//     for (let i = 0; i < emails.length; i++) {
//         if (typeof emails[i] !== "string") throw new Error(`email not a string ${emails[i]}`)
//         if (!/^[a-z0-9]+@[a-z]+\.[a-z]+$/g.test(emails[i])) throw new Error(`email is invalid ${emails[i]}`)
//     }
// }

// function getUnicEmail(emails: string[]): any {
//     try {
//         isValid(emails)
//         const newArr: string[] = []
//         for (let i = 0; i < emails.length; i++) {
//             if (newArr.indexOf(emails[i]) === -1) {
//                 newArr.push(emails[i])
//             }
//         }
//         return newArr
//     } catch (error: any) {
//         console.log(error.message);
//     }
// }

// console.log(getUnicEmail(emails));

// 9. У вас есть массив объектов вида приведенного в приложении. Необходимо
// посчитать количество вызовов функции, которая находит минимальный прайс

// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iProduct[] =
//     [
//         { id: 1, title: 'Часы', count: 10, price: 500 },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//         { id: 5, title: 'Планшет', count: 22, price: 2100 },
//     ]

// function wrapper(array: iProduct[]) {
//     let count = 0
//     let min = array[0].price
//     return function (elem: iProduct) {
//         count++
//         console.log(`количество : ${count}`);
//         elem.price < min ? min = elem.price : null
//         console.log(`мин цена: ${min}`);

//     }
// }
// const wrap = wrapper(array)

// for (let i = 0; i < array.length; i++) {
//     wrap(array[i])
// }

// 10. У вас есть массив объектов вида приведенного в приложении. Пользователь
// вводит значение id: например, 1. Необходимо отобразить в консоль найденный
// объект используя алгоритм бинарного поиска.

//                ОШИБКА 

// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: iProduct[] =
//     [
//         { id: 1, title: 'Часы', count: 10, price: 500 },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//         { id: 5, title: 'Планшет', count: 22, price: 2100 },
//     ]

// const btn: Element | null = document.querySelector(".btn")
// const value: any | null = document.querySelector(".input")

// btn?.addEventListener("click", () => {
//     searchBinary(array)
// })

// function searchBinary(array: iProduct[]): object {
//     let left = 1
//     let right = array.length
//     let middle = Math.floor((left + right) / 2)
//     for (let i = 0; i < array.length; i++) {
//         if (middle === value.value) {
//             alert(`Данные по id: ${array[middle]}`)
//             return value.value
//         } else {
//             if (middle < value.value) {
//                 left = middle + 1
//             } else {
//                 right = middle - 1
//             }
//             middle = Math.floor((left + right) / 2)
//         }
//     }
//     return array[middle]
// }






// 11. У вас есть массив строковых значений. Необходимо вывести количество
// дубликатов в массиве:
// [1, 2, 1, 2, 3, 4, 5, 1] -> 3

//                ОШИБКА в npx tsc app

// const array: string[] = ["aaa", "bbb", "aaa", "bbb", "ccc", "ddd", "aaa"]

// function countDublicate(array: string[]): number {
//     const newArr: [] = []
//     for (let i = 0; i < array.length; i++) {
//         if (newArr.indexOf(array[i]) === -1) {
//             newArr.push(array[i])
//         }
//     }
//     return array.length - newArr.length
// }

// console.log(countDublicate(array));

// 12. Напишите программу для вывода чисел Фибоначчи используя рекурсию

// без рекурсии

// function fibonachi(num: number): number[] | number {
//     let arr: number[] = [0, 1]
//     if (num < 2) {
//         return arr[num - 1]
//     }
//     for (let i = 2; i <= num; i++) {
//         arr.push(arr[i - 1] + arr[i - 2])
//     }
//     return arr
// }

// console.log(fibonachi(5));

// function fibonachi(num: number): number {
//     if (num < 2) return num
//     return fibonachi(num - 2) + fibonachi(num - 1)
// }
// console.log(fibonachi(4));

// 13. Напишите программу для сортировки массива объектов из приложения по id,
// использующую метод пузырька.

// interface iProduct {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const arr: iProduct[] = [
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function sortBubble(array: iProduct[]): iProduct[] {
//     for (let j = array.length - 1; j > 0; j--) {
//         for (let i = 0; i < j; i++) {
//             if (array[i].id > array[i + 1].id) {
//                 let middle = array[i]
//                 array[i] = array[i + 1]
//                 array[i + 1] = middle
//             }
//         }
//     }
//     return array
// }

// console.log(sortBubble(arr));

// 14. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование

// ???????????????????????
// function summa(a: number): number {
//     return (b: number) => {
//         return a + b
//     }
// }
// console.log(summa(2)(3));

// let sum = (x: number) => (y: number) => x + y;
// console.log(sum(2)(3));

// 15. Более сложный вариант. Реализовать функцию f: при вызове f(1, 2, 3) -> вернет 6,
// при вызове f(1)(2)(3)(), тоже вернет 6. Использовать каррирование

// let sum = (x: number) => (y: number) => (z: number) => x + y + z
// console.log(sum(1)(2)(3));

// let multiply = (x: number) => (y: number) => (z: number) => x * y * z
// console.log(multiply(1)(2)(3));

// 16. Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}

// interface iInformation {
//     name: string;
//     value: number;
// }

// const arr: iInformation[] = [
//     { name: 'width', value: 10 },
//     { name: 'height', value: 20 }
// ]

// function transform(arr: iInformation[]): object {
//     let res = {} as any
//     for (let i = 0; i < arr.length; i++) {
//         let { name, value } = arr[i]
//         res[name] = value
//     }
//     return res
// }

// console.log(transform(arr));

//17.

// 18. Дан массив с объектами даты. Необходимо отсортировать по датам.

interface iDate {
    date: string;
}

const arr: iDate[] = [
    { date: "10.01.2017" },
    { date: "05.11.2016" },
    { date: "21.12.2002" },
]

function sort(arr: iDate[]): iDate[] {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            let day = arr[i].date.replaceAll(".", "").split(" ")
            let day2 = arr[i + 1].date.replaceAll(".", "").split(" ")
            if (day[0] > day2[0]) {
                let middle = arr[i].date
                arr[i].date = arr[i + 1].date
                arr[i + 1].date = middle
            }
        }
    }
    return arr
}
console.log(sort(arr));