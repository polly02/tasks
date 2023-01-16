// 1. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10

// interface Obj {
//     id?: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function filter(array: Obj[]): Obj[] {
//     const filtered = array.filter((elem) => elem.count > 10)
//     return filtered
// }

// console.log(filter(array));

// 2. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары в обратном порядке

// interface Obj {
//     id?: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// function revers(array: Obj[]): Obj[] {
//     const result = array.reverse()
//     return result
// }

// console.log(revers(array));

// 3. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары, количество которых внутри массива кратно 3

// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: Product[] =
//     [
//         { id: 1, title: 'Часы', count: 10, price: 500 },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//         { id: 5, title: 'Планшет', count: 22, price: 2100 },
//     ]

// function filter(array: Product[]): Product[] {
//     const filtered = array.filter((elem) => elem.count % 3 === 0)
//     return filtered
// }
// console.log(filter(array));

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...

// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: Product[] =
//     [
//         { id: 1, title: 'Часы', count: 10, price: 500 },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//         { id: 5, title: 'Планшет', count: 22, price: 2100 },
//     ]

// function reduce(array: Product[]): number {
//     const res = array.reduce((sum, elem) => {
//         return sum + elem.count * elem.price
//     }, 0)
//     return res
// }

// console.log(reduce(array));

// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом

// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: Product[] =
//     [
//         { id: 1, title: 'Часы', count: 10, price: 500 },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//         { id: 5, title: 'Планшет', count: 22, price: 2100 },
//     ]

// function getMaxPrice(array: Product[]): number {
//     let max = 0
//     for (let i = 0; i < array.length; i++) {
//         array[i].price > max ? max = array[i].price : null
//     }
//     return max
// }

// console.log(getMaxPrice(array));

// 6. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов

// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: Product[] =
//     [
//         { id: 1, title: 'Часы', count: 10, price: 500 },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//         { id: 5, title: 'Планшет', count: 22, price: 2100 },
//     ]

// function getAveragePrice(array: Product[]): number {
//     const summa = array.reduce((sum, elem) => sum + elem.price, 0)
//     return summa/array.length
// }

// console.log(getAveragePrice(array));

// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением

// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }

// const array: Product[] =
//     [
//         { id: 1, title: 'Часы', count: 10, price: 500 },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//         { id: 5, title: 'Планшет', count: 22, price: 2100 },
//     ]

// function maxCost(array: Product[]): number {
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

interface Product {
    id: number;
    title: string;
    count: number;
    price: number;
}

const array: Product[] =
    [
        { id: 1, title: 'Часы', count: 10, price: 500 },
        { id: 2, title: 'Смартфон', count: 33, price: 1500 },
        { id: 3, title: 'Моноблок', count: 6, price: 2200 },
        { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
        { id: 5, title: 'Планшет', count: 22, price: 2100 },
    ]

function wrapper(array: Product[]) {
    let count = 0
    let min = array[0].price
    return function (elem: Product) {
        count++
        console.log(`количество : ${count}`);
        elem.price < min ? min = elem.price : null
        console.log(`мин цена: ${min}`);

    }
}
const wrap = wrapper(array)

for (let i = 0; i < array.length; i++) {
    wrap(array[i])
}