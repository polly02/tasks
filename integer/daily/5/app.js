// 5. У известного американского писателя Рэя Бредбери есть роман «451 градус по
// Фаренгейту». Напишите скрипт, который определяет, какой температуре по
// шкале Цельсия соответствует указанное значение по шкале Фаренгейта.
// Используйте формулу:
// C = 5/9∙(F-32)

let f = +prompt('введите число');
console.log(`C = ${5/9 * (f-32)}`);
console.log("C =", 5/9 * (f-32));