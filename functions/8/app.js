// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами

const arr = [1, 2, 3, 4, 5];

function getDoubleValues(a) {
    let res = a.map(el => el * 2)
    return res
}

function checkArray(b) {
    let res = b.filter(el => !isNaN(el))
    return b.length === res.length ? getDoubleValues(b) : false
}

console.log(checkArray(arr));