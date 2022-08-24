// записать в массив arr2 числа из arr1 без повторений

// const arr = [1, 2, 3, 2, 1, 2, 4];
// const arr2 = []; //1, 2, 3, 4

// for (let i = 0; i < arr.length; i++) {
//    if (arr2.includes(arr[i])){
//     continue
//    } else {
//     arr2.push(arr[i])
//    }
// }
// console.log(arr2);

//2способ

// for (let i = 0; i < arr.length; i++) {
//     if (!arr2.includes(arr[i])) {
//         arr2.push(arr[i]);
//     } else {
//         arr2.slice(arr[i], arr[i+1])
//     }
// }
// console.log(arr2);


// записать неповторяющиеся значения

// const arr = [1, 2, 3, 2, 1, 2, 4].sort(); //1, 1, 2, 2, 2, 3, 4
// const arr2 = []; //3,4

// for (let i = 0; i < arr.length; i++) {
// if(arr[i] === arr[i+1] || arr[i] === arr[i-1]) {
//     continue;
// } else {
//     arr2.push(arr[i])
// }
// }
// console.log(arr2);

//2cпосoб

// const arr = [1, 2, 3, 2, 1, 2, 4];
// const arr2 = []; //3,4
// let count0 = 0;
// let count1 = 0;
// let count2 = 0;
// let count3 = 0;
// let count4 = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         count0++;
//     } else if (arr[i] === 1) {
//         count1++;
//     } else if (arr[i] === 2) {
//         count2++;
//     } else if (arr[i] === 3) {
//         count3++;
//     } else if (arr[i] === 4) {
//         count4++;
//     }
// }

// if (count0 === 1) {
//     arr2.push("0");
// }
// if (count1 === 1) {
//     arr2.push("1");
// }
// if (count2 === 1) {
//     arr2.push("2");
// }
// if (count3 === 1) {
//     arr2.push("3");
// }
// if (count4 === 1) {
//     arr2.push("4")
// }
// console.log(arr2);


//?неправильный?
// const arr = [1, 2, 3, 2, 1, 2, 4];
// const arr2 = []; //3,4
// var a = [];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     var a = arr[i];
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[j] == a) {
//             count++;
//         }
//     }
//     if (count === 1) {
//         arr2.push(a);
//     }
// }
// console.log(arr2);

let arr = [1, 2, 3, 5, 7, 10, 23, 12];
console.log(arr.sort());