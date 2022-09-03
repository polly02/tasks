// 18. Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt.

let a = +prompt("enter a number");
const arr = [];

for (let i = 0; i < a; i++) {
    arr[i] = prompt("enter");
}
console.log(arr);