// 7. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for of найдите сумму
// элементов этого массива

// const arr = [1, 2, 3, 4, 5];
// let res = 0;
// for (let i of arr) {
//     res += i
// }
// console.log(res);

//добавили ввод через prompt

let value = 5;
const arr = [];
let res = 0;

for (let i=0; i< value; i++){
    const a = +prompt("enter value");
    arr.push(a);
}

for (let i of arr) {
    res += i
}
console.log(res);
