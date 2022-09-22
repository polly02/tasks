// 14. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования
// массива. Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива

let n = +prompt("enter number");

function doArr(a) {
    const arr = []
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
    let result = c.reduce((pr,el) => pr*el, 1)
    return result
}

console.log(doArr(n));