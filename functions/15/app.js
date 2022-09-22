// 15. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования
// массива. Вторая для проверки, что в массиве только числа. Третья для
// формирования массива из всех четных чисел, возведенных в квадрат. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив из всех четных чисел, возведенных в квадрат

let n = +prompt("enter number");

function doArr(a) {
    const arr = [];
    for (let i = 0; i < a; i++) {
        arr.push(prompt(""))
    }
    return checkArray(arr)
}

function checkArray(b) {
    let res = b.filter(el => !isNaN(el))
    return b.length === res.length ? getResult(b) : false
}

function getResult(c) {
    let res = c.filter(el => el % 2 === 0)
    let result = res.map(el => el**2)
    return result
}

console.log(doArr(n));