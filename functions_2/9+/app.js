// 1. *Напишите функцию, рассчитывающую ряд Фибоначчи используя рекурсию.
// Числа Фибоначчи – ряд натуральных (целых и положительных) чисел, каждое из
// которых является суммой двух предыдущих: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

const value = 8
const arr = [1, 1];

// for (let i = 0; i < value - 2; i++) {
//     arr.push(arr[i] + arr[i + 1])
// }
// console.log(arr);

function getFibonacciSeries(array, number) {
    let i = 0;
    if (i < number - 2) {
        array.push(array[i] + array[i + 1])
        i++
    } 
    // for (let i = 0; i < number - 2; i++) {
    //     array.push(array[i] + array[i + 1])
    // }
    return getFibonacciSeries(array, number)
}

console.log(getFibonacciSeries(arr, value));