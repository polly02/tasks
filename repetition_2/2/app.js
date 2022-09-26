// 2. Реализайте функцию, которая принимает статичный массив и возвращает новый
// массив с отфильтрованными значениями. Массив считается отфильтрованным,
// если в нем присутствуют только числа
// [ 1, 2, “a”, ”b” ] –> [ 1, 2 ]
// [ 1, 2, “aasf”, “b”, “123”, 123 ] –> [ 1, 2, 123 ]

const arr = [1, 2, "aasf", 123];

function getFilterArr(arr) {
    return arr.filter(el => !isNaN(el))
}

console.log(getFilterArr(arr));