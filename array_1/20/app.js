// 19. Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. Проверить каждый
// prompt на число (ввод строки, проверка на isNaN)

let a = +prompt("enter a number");
const arr = [];

for (let i = 0; i < a; i++) {
    let b = prompt("enter");
    if (isNaN(b)) {
        arr.push(b);
    }
}
console.log(arr);