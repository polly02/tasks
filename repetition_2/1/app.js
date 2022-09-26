// 1. Реализуйте функцию, которая принимает динамичный массив и находит сумму
// всех положительных чисел. Добавить проверки

const n = +prompt("enter")

function doArr(n) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(+prompt(""))
    }
    return arr
}

function getSumma(arr) {
    const res = arr.reduce((sum, el) => {
        if (el > 0) {
            return sum + el
        } else {
            return sum + 0
        }
    }, 0)
    return res
}

const data = doArr(n);
console.log(getSumma(data));