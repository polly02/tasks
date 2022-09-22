// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

const arr = ["asd", "sdf", "fgh"];

function checkArray (a) {
    const res = a.filter(el => isNaN(el))
    return a.length === res.length ? getSummaOfStrings(a) : false
}

function getSummaOfStrings(b) {
    const sum = b.reduce((sum, el) => sum + el, "")               
    return sum
}
console.log(checkArray(arr));