// 20.На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filter

let n = +prompt("")
const arr = []
for (let i = 0; i < n; i++) {
    let input = prompt("")
    if (!isNaN(input)) {
        arr.push(+input)
    }
}

let res = arr.filter(elem => {
    if (elem > 0){
        return true
    }
})
console.log(res);