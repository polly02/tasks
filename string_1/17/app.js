// 17. Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести текущую строку в большом регистре

let a = prompt("введите текст");

console.log(isNaN(a) ? a.toUpperCase() : "некорректный ввод");