// Задача 6
// Напишите программу, которая находит наименьшее и наибольшее из пяти
// чисел. Предварительно изучите модуль Math и в отдельности Math.min и
// Math.max

let n1 = +prompt ("Введите первое число");
let n2 = +prompt ("Введите второе число");
let n3 = +prompt ("Введите третье число");
let n4 = +prompt ("Введите четвертое число");
let n5 = +prompt ("Введите пятое число");

console.log(`Наименьшее число = ${Math.min(n1, n2, n3, n4, n5)}`);
console.log(`Наибольшее число = ${Math.max(n1, n2, n3, n4, n5)}`);