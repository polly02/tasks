// 9. На вход число. Необходимо вывести все числа от 1 до введенного числа. Добавить
// проверку вводимого значения, если это текст –> сообщение об ошибке

let a = prompt("введите число");

if (!isNaN(a) && +a > 0) {
    a = +a;
    for (let i = 1; i <= a; i++) {
        console.log(i);
    }
} else if (!isNaN(a) && +a < 0) {
    a = +a;
    for (let i = 1; i >= a; i--) {
        console.log(i);
    }
} else {
    console.log("ошибка ввода");
}