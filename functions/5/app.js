// 5. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования
// массива. Вторая для нахождения количества элементов массива

let n = +prompt("enter n");

function getNumber(a) {
    return a.length
}
function doArr(value) {
    const arr = []
    for (let i = 0; i < value; i++) {
        arr.push(prompt("enter elements of array"))
    }
    let count = getNumber(arr)
    return count
}

console.log(doArr(n));