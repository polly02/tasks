// 19. Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения
//                 ax^2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания

let a = +prompt("Введите число a");
let b = +prompt("Введите число b");
let c = +prompt("Введите число c");

let d = b ** 2 - 4 * a * c;

if (d > 0) {
    let x1 = (-b - Math.sqrt(d)) / 2 * a;
    let x2 = (-b + Math.sqrt(d)) / 2 * a;

    if (x1 > x2) {
        console.log(`x1 = ${x1}, x2 = ${x2}`);
    } else {
        console.log(`x2 = ${x2}, x1 = ${x1}`);
    }

} else if (d === 0) {
    console.log(`x = ${-b / 2 * a}`);
} else if (d < 0) {
    console.log("Корней нет");
}