// 14. Пользователь вводит 2 числа от 0 до 10. Сложите переменные так, чтобы в
// результате получилось выражение: “I’m хх". Проверки на ввод только чисел.
// Проверки на ввод чисел до 10. Если первое число – 0, то опустить его

let a = prompt("введите число");
let b = prompt("введите число");

if (!isNaN(a) && !isNaN(b) && a >= 0 && a < 10 && b >= 0 && b < 10) {
    console.log(a != 0 ? `I'm ${a}${b}` : `I'm ${b}`);
} else {
    console.log("некорректный ввод");
}