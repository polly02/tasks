// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// число. Some, forEach

let n = +prompt("");
const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(+prompt(""));
}

let chek = arr.some(elem => {
    if (Number.isInteger()) {
        return true
    }
})
console.log(chek);

// let n = prompt("")
// const arr = []
// for (let i = 0; i < n; i++) {
//     let input = prompt("")
//     arr.push(input)
// }

// let chek = 0
// arr.forEach(elem => {
//     if(!isNaN(elem)) {
//         chek++
//     }
// })
// if (chek > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }