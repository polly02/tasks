// 9. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

let n = +prompt("");
const arr = [];
for (let i = 0; i < n; i++) {
    let input = prompt("")
    if (!isNaN(input)) {
        arr.push(+input)
    }
}
let res = 0;
arr.forEach(elem => {
    res += elem
})
console.log(res);


// let n = +prompt("");
// const arr = [];
// for (let i = 0; i < n; i++) {
//     let input = prompt("")
//     if (!isNaN(input)) {
//         arr.push(+input)
//     }
// }
// let result = arr.reduce((sum, elem) => {
//     return sum + elem
// }, 0)
// console.log(result);