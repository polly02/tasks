// 13. Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму всех положительных элементов массива циклом for of

const arr = [-1, 2, 4, 6, -3, -22, 0, 5];
let res = 0;
for (const i of arr) {
    if (i >= 0) {
        res += i
    }
}
console.log(res);