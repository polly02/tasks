// 13. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива

const arr = [1, 2, 3, 10, -7, 0, 9];

function getMaxValue(a) {
    return Math.max(...a)
}

function checkArray(b) {
    let res = b.filter(el => !isNaN(el))
    return b.length === res.length ? getMaxValue(b) : false
}

console.log(getMaxValue(arr));