// 4. Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// равна 5. Вывести массив в консоль (цикл for, while)

let arr = [];
while (arr.length !== 5) {
    let someData = prompt("")
    if (!isNaN(someData)) {
        arr.push(+someData)
    }
}
console.log(arr);

//2 sposob

// let arr = [];
// for (; ;) {                     // бесконечный цикл
//     let someData = prompt("");
//     if (!isNaN(someData)) {
//         arr.push(+someData)
//     }
//     if (arr.length === 5) break;
// }
// console.log(arr);

//3 sp

// let arr = []
// while (1) {
//     let someData = prompt("");
//     if (!isNaN(someData)) {
//         arr.push(+someData)
//     }
//     if (arr.length === 5) break;
// }
// console.log(arr);