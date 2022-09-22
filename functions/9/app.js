// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива

const arr = [1, 2, 4, 5, 67, 8];

function getArrayWithEvenNumbers(a) {
    let newArr = a.filter(el => el % 2 === 0)
    return newArr
}

function checkArray(b) {
    let res = b.filter(el => !isNaN(el))
    return b.length === res.length ? getArrayWithEvenNumbers(b) : false
}
console.log(checkArray(arr));