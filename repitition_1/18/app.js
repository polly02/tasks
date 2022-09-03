// 5. Найдите максимальное значение в статичном массиве используя цикл. 

let arr = [-1, -2, -3, -4, -5, -2, -1];
let b = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > b) {
        b = arr[i]
    }
}
console.log(b);