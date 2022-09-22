// 6. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива

const arr = [1, 2, 4, 5, 6];

function checkArray (a) {
    const res = a.filter(el => !isNaN(el))
    return a.length === res.length ? getSumma(a) : false 
}

function getSumma (b) {
    const sum = b.reduce((sum,el) => sum + el, 0)
    return sum
}
console.log(checkArray(arr));