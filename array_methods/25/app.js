// 5. Создать массив гласных из динамичного массива. Filter

// let n = +prompt("")
// const arr = [];

// for (let i = 0; i < 0; i++) {
//     let res = prompt("")
//     arr.push(res)
// }

// let res = arr.filter(elem => {
//     if(elem === "a" || elem === "e" || elem === "y" || elem === "i" || elem === "o"){
//         return elem
//     }
// })
// console.log(res);

//cоздать массив с гласными и и через инклюд

let n = +prompt("");
const arr = [];
const arr_v = ["a", "e", "y", "u", "i", "o"];

for (let i = 0; i < n; i++) {
    arr.push(prompt(""))
}

let res = arr.filter(elem => {
    if(arr_v.includes(elem)) {
        return true;
    }
})
console.log(res);