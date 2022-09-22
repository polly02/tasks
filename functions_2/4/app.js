// 3. На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

let count = +prompt("enter number of array's elements");
let n = +prompt("enter random number");

function getBigElements(arr, n) {
    let res = arr.filter(el => el>n)
    return res
}

function doArr(count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(prompt("enter array's elements"))
    }
    return arr
}

const data = doArr(count);
console.log(getBigElements(data, n));