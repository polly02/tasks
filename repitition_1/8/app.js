// 8. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение
// элементов этого массива

const a = [2, 3, 4, 5];
let res = 1;
for (let i = 0; i < a.length; i++) {
    res *= a[i];
}
console.log(res);