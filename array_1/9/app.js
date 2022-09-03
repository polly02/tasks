// 8. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите каждый элемент массива
// без повторений -> [1, 2, 3, 4, 5] (for, for of)

const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
const arr_2 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr_2.includes(arr[i])) {
        continue
    } else {
        arr_2.push(arr[i])
    }
}
console.log(arr_2);

// const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
// const arr_2 = [];
// for (const i of arr) {
//     if (!arr_2.includes(i)){
//         arr_2.push(i)
//     } 
// }
// console.log(arr_2);