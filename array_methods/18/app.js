// 18. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map

let n = +prompt("")
const arr = []
for (let i = 0; i < n; i++) {
    arr.push(+prompt(""))
}

let res = arr.map(elem => {
    return elem**2
})
console.log(res);
