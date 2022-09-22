// 4. Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное числа соответственно. Добавить проверки на ввод и если
// значения массива не соответствуют условию задания, вывести сообщение об
// ошибке.

let n = +prompt("enter number");

function getMinMaxValue(arr) {
    if (checkArray(arr)) { 
        return `min ${Math.min(...arr)}, max ${Math.max(...arr)}` 
    } else return "error"
}

function checkArray(newArr) {
    let res = newArr.filter(el => !isNaN(el))
    return newArr.length === res.length ? true : false
}

function doArr(number) {
    const arr = []
    for (let i = 0; i < number; i++) {
        arr.push(prompt("enter elements of array"))
    }
    return arr
}

const data = doArr(n)
console.log(getMinMaxValue(data));