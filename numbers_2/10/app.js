// Задача 10
// Напишите программу вычисления значения функции 𝑓(𝑎, 𝑏) = 3 ∗ (𝑎 +
// 𝑏)^3 + 275 ∗ 𝑏^2 − 127 ∗ 𝑎 − 41 по введеным целым значениям a и b.

let a = +prompt("Введите число");
let b = +prompt("Введите число");

console.log(3 * (a + b) ** 3 + 275 * b ** 2 - 127 * a - 41);