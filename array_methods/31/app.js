// 11. Разбить динамичный массив чисел на 2 массива: из четных и нечетных элементов.
// forEach

let n = +prompt("");
const arr = [];
const arr_ch = [];
const arr_n = [];
for (let i = 0; i < n; i++) {
    let input = prompt("")
    if(!isNaN(input)) {
        arr.push(+input)
    }
}
arr.forEach( elem => {
    if (elem % 2 === 0){
        arr_ch.push(elem)
    } else {
        arr_n.push(elem)
    }
})
console.log(arr_ch);
console.log(arr_n);