// 6. Реализуйте функцию, которая принимает любое неотрицательное целое число и
// возвращает его числа в порядке убывания. По сути, переставьте цифры, чтобы
// получить максимально возможное число. Добавить проверки
// 42145 –> 54421
// 145263 –> 654321
// 123456789 –> 987654321

const n = 42145;

function doMaxValue(n) {
    try {
        if (n < 0) throw new Error("отрицательное число")
        let middleValue = String(n).split("").sort().reverse().join("")
        return middleValue
    } catch (error) {
        return error.message
    }
}

console.log(doMaxValue(n));