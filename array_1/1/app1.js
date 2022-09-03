//вывести ряд, где каждый элемент - это сумма двух предыдущих (0 1 1 2 3 5 8 13)

const value = 6;
const arr = [0, 1]; //0 1 1 2 3 5 8 13

for (let i = 0; i < value - 2; i++) {
    arr.push(arr[i] + arr[i + 1])
}
console.log(arr);

for (let i = 2; i < value; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
}
console.log(arr);