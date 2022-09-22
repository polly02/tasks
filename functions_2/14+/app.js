// 4. Реализуйте функцию на генерацию ряда Фибоначчи используя рекурсию
//вернуть 5 чило Фибоначчи (0, 1, 1, 2, 3, 5, 8, 13, 21)

function fibon(num) {
    if (num < 2) return num;
    return fibon(num - 2) + fibon(num - 1)
}
console.log(fibon(5));

// без рекурсии

// function fibon(num) {
//     let arr = [0, 1]
//     if (num < 2) {
//         return arr[num - 1]
//     }
//     for (let i = 2; i <= num; i++) {
//         arr.push(arr[i - 1] + arr[i - 2])
//     }
//     return arr[num]
// }