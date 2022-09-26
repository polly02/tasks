// 6. Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если можно построить треугольник со
// сторонами заданной длины, и false в любом другом случае. Треугольник
// существует только тогда, когда сумма двух его сторон больше третьей. Требуется
// сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
// сторона окажется больше либо равна сумме двух других, то треугольника с
// такими сторонами не существует.

let a = prompt("enter the number");
let b = prompt("enter the number");
let c = prompt("enter the number");

function buildTriangle(a, b, c) {
    try {
        if (isNaN(a) || isNaN(b) || isNaN(c)) throw new Error("одно из введеных значений не число")
        return (+a + +b > +c && +a + +c > +b && +b + +c > +a) ? true : false
    } catch (error) {
        return error.message
    }
}

console.log(buildTriangle(a, b, c));