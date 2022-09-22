// 10. На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4

let n = +prompt("enter number");
// let n = 4

function getFactorial(a) {
    let res = 1
    for (let i = 1; i <= a; i++) {
        res *= i
    }
    return res
}

console.log(getFactorial(n));