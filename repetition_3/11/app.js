// 3. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

const obj = {
    1: "a",
    2: "b",
    3: "abc",
    6: "d"
}

    (function getObject(obj) {
        const newObj = {}
        const arr = Object.keys(obj)
        for (let i = 0; i < arr.length; i++) {
            newObj[i] = arr[i]
        }
        return newObj
    })()