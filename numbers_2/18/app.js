// Задача 18
// Напишите программу, в которой рассчитывается сумма и произведение
// цифр положительного трёхзначного числа.

let a = +prompt("Введите положительное трехзначное число");

if (a > 99 && a < 1000) {
    let s = Math.floor(a / 100);
    let d = Math.floor((a - s * 100) / 10);
    let e = a - s * 100 - d * 10;
    console.log(`Сумма цифр = ${s + d + e}`);
    console.log(`Произведение цифр = ${s * d * e}`);
} else {
    console.log("Введено некорректное число");
}
