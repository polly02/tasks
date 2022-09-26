// 7. Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (9^2 === 81, 1^2=== 1)

let n = prompt("enter the number");

function doubleNumbers(num) {
    try {
        if (isNaN(num)) throw new Error("введенное значение не число");
        let a = ""
        for (let i = 0; i < num.length; i++) {
            a += num[i] ** 2
        }
        return a
    } catch (error) {
        return error.message
    }
}

console.log(doubleNumbers(n));