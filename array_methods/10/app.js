// 10. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите массив строк из четност и нечетности, в
// соответствии с тестом ниже:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// [1, 24, 5] -> [“нечет”, “чет”, “нечет”]
// Использовать map

let n = +prompt("");
const arr = [];
for (let i = 0; i < n; i++) {
    let input = prompt("")
    if(!isNaN(input)) {
        arr.push(input)
    }
}

const result = arr.map (elem => {
    if (elem % 2 === 0) {
        return "четн"
    } else {
        return "нечетн"
    }
})
console.log(result);