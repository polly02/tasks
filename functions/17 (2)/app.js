// 2. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки

let n = +prompt("enter number");

function findLength(arr) {
    if (checkArray(arr)) {
        let res = arr[0]
        arr.forEach(element => element.length > res.length ? res = element : null);
        return res
    } else {
        return "error"
    }
}

function doArr(number) {
    const arr = []
    for (let i = 0; i < number; i++) {
        arr.push(prompt(""))
    }
    return arr
}

function checkArray(arr) {
    let res = arr.filter(el => isNaN(el))
    return arr.length === res.length ? true : false
}

const data = doArr(n);
console.log(findLength(data));