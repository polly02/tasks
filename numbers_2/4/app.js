// Задача 4
// У известного американского писателя Рэя Бредбери есть роман
// «451 градус по Фаренгейту». Напишите программу, которая определяет, какой
// температуре по шкале Цельсия соответствует указанное значение по шкале
// Фаренгейта.
// Используйте формулу для перевода 𝐶 = 5/9 ∗ (𝐹 − 32)

let f = +prompt("Введите температуру");

console.log(5 / 9 * (f - 32));