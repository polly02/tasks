// Задача 9
// Напишите программу, вычисляющую объём куба и площадь его
// полной поверхности, по введённому значению длины ребра.
// Объём куба и площадь полной поверхности можно
// вычислить по формулам 𝑉 = 𝑎^3 𝑆 = 6 ∗ 𝑎^2.

let a = +prompt("Введите длину ребра");

console.log(`Объем = ${a ** 3}`);
console.log(`Площадь полной поверхности = ${6 * a ** 2}`);