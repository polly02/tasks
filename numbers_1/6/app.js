// 6. Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так -
// выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и
// само значение деления

let a = +prompt('введите число');
let b = +prompt('введите число');

if (a % b === 0) {
    console.log("Делится", a/b);
} else {
    console.log("Делится с остатком", a%b);
}