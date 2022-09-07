// 10. На вход программе подается число n. Составить массив элементов от 1 до n.
// Найти факториал числа. reduce

let n = +prompt("");
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(i+1)
}
let res = arr.reduce((pr, elem) => {
    return pr * elem
}, 1)
console.log(res);
