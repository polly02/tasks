// 1. На входе число n. Напишите функцию, которая переворачивает число.

let n = 517;

function doReverse(number) {
    return String(number).split("").reverse().join("")
}

console.log(doReverse(n));