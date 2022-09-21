// function isValid(str){
//     const block = {
//         ")":"(",
//         "]":"[",
//         "}":"{"
//     }
//     const res = [] //для открывающихся скобок
//     const close = ["}", "]", ")"]
//     for (let el of str) {
//         if (close.includes(el)) {
//             if(block[el] != res.pop()) return false
//         } else {
//             res.push(el)
//         }
//     }
//     return true
// }

// console.log(isValid("({]})"));



// const obj = [1, 2, 3, 4, 1, 2, 3, 4, 5, 11, 2, 2, 3].reduce((acc, el) => {
//     if(acc[el]) {
//         acc[el] += 1;
//     } else {
//         acc[el] = 1;
//     }
//     return acc
// }, {})

// console.log(obj);



// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// const str = "deg";
// const first = alphabet.indexOf(str[0]);
// let strIndex = 0;

// for(let i = first; i < alphabet.length; i++) {
//     if(str[strIndex] === alphabet[i]) {
//         strIndex++
//     } else {
//         console.log(alphabet[i]);
//         break
//     }
// }