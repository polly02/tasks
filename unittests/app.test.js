// 1. Написать функцию, которая принимает 2 числа и
// возводит 1 во 2 степень. Добавить необходимые проверки.
// Написать тест для функции

// function doPow(a, b) {
//     if(isNaN(a) || isNaN(b)) return false
//     if(typeof a === "string" || typeof b === "string") return false
//     return a ** b
// }

// describe("test doPow function", () => {
//     test("test toBe, returned number", () => {
//         const res = doPow(2, 2)
//         expect(res).toBe(4)
//     })
//     test("test toBe, returned false", () => {
//         const res = doPow("a", "b")
//         expect(res).toBeFalsy()
//     })
//     test("test toBe, returned error", () => {
//         const res = doPow("2", "2")
//         expect(res).toBeFalsy()
//     })

// })

// 2. Написать функцию , которая принимает 2 числа и
// возвращает результат произведения 2 множителей. Добавить необходимые
// проверки.
// Написать тест для функции

// function doMultiply(a, b) {
//     if(!a || !b) return false
//     if(isNaN(a) || isNaN(b)) return false
//     return a * b
// }

// describe("doMultiply", () => {
//     test("return number", () => {
//         const res = doMultiply(2, 2)
//         expect(res).toBe(4)
//     })
//     test("return undefined", ()=>{
//         const res = doMultiply()
//         expect(res).toBeFalsy()
//     })
//     test("return false", ()=>{
//         const res = doMultiply("a", "b")
//         expect(res).toBeFalsy()
//     })
// })

// 3. Написать функцию , которая принимает массив
// чисел и находит сумму всех элементов. Добавить необходимые проверки.
// Написать тест для функции

// function doSum(array) {
//     if (!array.length) return false
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === "string") {
//             return false
//         }
//         sum += array[i]
//     }
//     return sum
// }

// function doArr(b) {
//     const arr = []
//     for (let i = 0; i < b; i++) {
//         const a = Math.floor(Math.random() * 100)
//         arr.push(a)
//     }
//     return arr
// }

// describe("test doSum", () => {
//     test("returned number", () => {
//         const res = doSum([1, 2, 3, 4])
//         expect(res).toBe(10)
//     })
//     test("returned falsed", () => {
//         const res = doSum([1, 2, 3, "a"])
//         expect(res).toBeFalsy()
//     })
//     test("returned falsed", () => {
//         const res = doSum([])
//         expect(res).toBeFalsy()
//     })

//     test("returned falsed", () => {
//         const b = Math.floor(Math.random() * 10)
//         const arr = doArr(b)
//         const res = doSum(arr)
//         expect(arr).toBeTruthy()
//         expect(res).toBeTruthy()
//         expect(arr).toHaveLength(b)
//     })
// })

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10 и произведены в Германии
// Написать тест для функции

// function getData(arr) {
//     const filtered = arr.filter(el => el.count > 10 && el.producer === "Германия")
//     if(!filtered.length) return false
//     return filtered
// }

// describe("test getData", () => {
//     const arr = [
//         { id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
//         { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
//         { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
//         { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
//     ]
//     test("return toEqual", () => {
//         const equal = [{ id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' }, { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }]
//         const res = getData(arr)
//         expect(res).toHaveLength(2)
//         expect(res).toEqual(equal)
//     })
//     test("return false", () => {
//         const res = getData([])
//         expect(res).toBeFalsy()
//     })
// })

// 5. У вас есть массив строковых значений, состоящий из номеров телефонов.
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции

// function checkArr(arr) {
//     if (isValid(arr)) {
//         const newArr = []
//         for (let i = 0; i < arr.length; i++) {
//             if (!newArr.includes(arr[i])) {
//                 newArr.push(arr[i])
//             }
//         }
//         if (!newArr.length) return false
//         return newArr
//     } else {
//         return false
//     }
// }

// function isValid(arr) {
//     let errors = 0
//     for (let i = 0; i < arr.length; i++) {
//         !/^\+[0-9]{12}$/g.test(arr[i]) ? errors++ : null
//     }
//     return errors > 0 ? false : true
// }

// describe("test checkArr", () => {
//     const arr = ["+375292651905", "+375292848640", "+375292651905"]
//     test("return toEqual", () => {
//         const res = checkArr(arr)
//         expect(res).toEqual(["+375292651905", "+375292848640"])
//         expect(res).toHaveLength(2)
//     })
//     test("return false", () => {
//         const res = checkArr([])
//         expect(res).toBeFalsy()
//     })
//     test("return false", () => {
//         const res = checkArr(["375292651905"])
//         expect(res).toBeFalsy()
//     })
// })

// 6. На входе статичный объект. Необходимо посчитать количество пар (ключ:
//     значение) где значение число и вывести количество. Добавить необходимые
//     проверки.
//     Написать тест для функции

// function findCount(obj) {
//     if(Object.keys(obj).length == 0) return false 
//     let count = 0
//     for (let key in obj) {
//         if (!isNaN(obj[key])) {
//             count++
//         }
//     }
//     return count
// }

// describe("test findCount", () => {
//     const obj = {1: 1, 2: 2, 3: "tfjgbs" }
//     test("return count", ()=>{
//         const res = findCount(obj)
//         expect(res).toBe(2)
//     })
//     test("return false", ()=>{
//         const res = findCount({})
//         expect(res).toBeFalsy()
//     })
// })

// 7. На входе статичный объект. Необходимо числовые значения удвоить на выходе.
// Написать тест для функции

// function getDoubleValue(obj) {
//     if(Object.keys(obj).length == 0) return false  
//     for (const key in obj) {
//         if (!isNaN(obj[key])) {
//             obj[key] * 2
//         }
//     }
//     return obj
// }

// describe("test getDoubleValue", () => {
//     const obj = { 1: 1, 2: 2}
//     test("returned obj", () => {
//         const res = getDoubleValue(obj)
//         expect(res).toEqual({ 1: 2, 2: 4})
//     })
//     test("returned false", ()=>{
//         const res = getDoubleValue({})
//         expect(res).toBeFalsy()
//     })
// })


// 8. На входе статичный объект. Необходимо сформировать массив из всх четных
// значений объекта.
// Написать тест для функции

// function doArr(obj) {
//     const arr = []
//     if(Object.keys(obj).length === 0) return false
//     for (const key in obj) {
//         if (!isNaN(obj[key]) && obj[key] % 2 === 0){
//             arr.push(obj[key])
//         }
//     }
//     return arr
// }

// describe("test doArr", ()=>{
//     const obj = { 1: 1, 2: 2, 3:"a", 4:4}
//     test("returned array", ()=>{
//         const res = doArr(obj)
//         expect(res).toEqual([2, 4])
//     })
//     test("returned false", ()=>{
//         const res = doArr({})
//         expect(res).toBeFalsy()
// })
// })

// 9. На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
// разбить данный одномерный массив на маленькие массивы в зависимости от
// того, какого число ввел пользователь. Добавить необходимые проверки.
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]
// Написать тест для функции

// 11. На входе число. Необходимо перевести число в двоичную систему счисления.
// Добавить необходимые проверки.
// Написать тест для функции

// function conversionToBinary(n){
//     if(!n) return false
//     if(isNaN(n)) return false
//     let res = n.toString(2);
//     return res
// }

// // parseInt("1111", 2); //из двоичной в десятичную

// describe("test conversionToBinary", ()=>{
//     test("returned number(string)", ()=>{
//         const res = conversionToBinary(41)
//         expect(res).toBe("101001")
//     })
//     test("returned false", ()=>{
//         const res = conversionToBinary("fff")
//         expect(res).toBeFalsy()
//     })
//     test("returned false", ()=>{
//         const res = conversionToBinary()
//         expect(res).toBeFalsy()
//     })
// })

// 12. Реализуйте функцию, которая принимает в качестве параметра строку и
// возвращает список элементов без каких-либо элементов с одинаковым
// значением рядом друг с другом.
// Написать тест для функции
// 'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
// 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
// '12233’ -> [1, 2, 3]
// Написать тест для функции

function getUniqueArray(string) {
    if(!string) return false
    if(typeof string !== "string") return false
    const middle = string.split("")
    const arr = []
    for (let i = 0; i < middle.length; i++) {
        if (i == 0) {
            arr.push(middle[i])
        } else if (middle[i] !== middle[i - 1]) {
            arr.push(middle[i])
        }
    }
    return arr
}

describe("test getUniqueArray", () => {
    test("returned array", () => {
        const res = getUniqueArray("AAAABBBCCDAABBB")
        expect(res).toEqual(['A', 'B', 'C', 'D', 'A', 'B'])
    })
    test("returned false", () => {
        const res = getUniqueArray()
        expect(res).toBeFalsy()
    })
    test("returned false", () => {
        const res = getUniqueArray(123)
        expect(res).toBeFalsy()
    })
})