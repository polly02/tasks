// 19. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел.

let n = +prompt("")
const arr = []
let sum = 0

for (let i = 0; i < n; i++) {
    let input = prompt("")
    if (!isNaN(input)) {
        arr.push(+input)
    }
}

for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
        sum += arr[j]
    } else {
        break
    }
}
console.log(sum);