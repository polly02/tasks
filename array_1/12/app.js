// 11. У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива

// const arr = ["avc", 1, 13, 15, "src", "%"];
// const arr_2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!isNaN(arr[i])) {
//         arr_2.push(arr[i])
//     }
// }
// console.log(arr_2);

const arr = ["avc", 1, 13, 15, "src", "%"];
const arr_2 = [];
let i = 0;
do {
    if (!isNaN(arr[i])) {
        arr_2.push(arr[i])
    }
    i++
} while (i < arr.length) 
console.log(arr_2);