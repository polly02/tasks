// 12. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из отфильтрованных
// значений, где строка начинается на [a, h]. Проверка на ввод только текстовых
// значений на заполнение массива. filter
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]


let n = +prompt("")
const arr = []
for (let i = 0; i < n; i++) {
    let input = prompt("")
    if(isNaN(input)) {
        arr.push(input)
    }
}
let res = arr.filter( elem => {
    if(elem.startsWith("a") || elem.startsWith("h")){
        return true
    }
})
console.log(res);
