// 2. *Вычислите сумму массива целых чисел статичного массива используя рекурсию

const arr = [1, 2, 5, 6, -7, 5];

function getSumma(array) {
    if (array.length === 1) {
        return array[0]
    } else {
        return array[0] + getSumma(array.slice(1))
    }
}
console.log(getSumma(arr));