// 1. Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы

let a = prompt("введите текст").trim();
console.log(isNaN(a) && a.toLowerCase() === "hschool" ? true : false);