// 8. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach

let n = +prompt("");
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(prompt(""))
}
let res = arr.every(elem => {
    if(!isNaN(elem)) {
        return true
    } 
})
console.log(res);

// let n = +prompt("");
// const arr = [];
// for (let i = 0; i < n; i++) {
//     arr.push(prompt(""))
// }
// let chek = 0;
// arr.forEach(elem => {
//     if (!isNaN(elem)) {
//         chek++
//     }
// })
// if(chek > n) {
//     console.log(true);
// } else {
//     console.log(false);
// }