// 12. Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 5 циклом while

const arr = [2, 5, 9, 15, 0, 4];
const arr_2 = []; 
let i = 0;
while (i < arr.length) {
    if (arr[i] % 5 === 0) {
        arr_2.push(arr[i])
    }
    i++
}
console.log(arr_2);