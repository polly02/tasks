// 14. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name
// [“hschool”, “company”] -> [“#hschool”, “#company”]

let n = +prompt("");
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(prompt(""))
}
let res = arr.map(elem => {
    return "#" + elem
})
console.log(res);
