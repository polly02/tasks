// 8. Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// // месяца (2 способа)

let a = +prompt("Введите число от 1 до 12");
let result;
switch (a) {
    case 1:
    case 2:
    case 12:
        result = "зима";
        break;
    case 3:
    case 4:
    case 5:
        result = "весна";
        break;
    case 6:
    case 7:
    case 8:
        result = "лето";
        break;
    case 9:
    case 10:
    case 11:
        result = "осень";
        break;
    default:
        result = "некорректный ввод";
}
console.log(result);