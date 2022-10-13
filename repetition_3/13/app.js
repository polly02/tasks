// 2. Напишите алгоритм для нахождения факториала числа

let n = 5

function getFactorial(n) {
    let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    return factorial
}
console.log(getFactorial(n));