// 15. Пользователь вводит 6 значений и распределяет их поровну между 2 массивами.
// Cоздать новый массив, добавить туда значения всех массивов. Spread, rest

const arr = []
const arr2 = []
for (let i = 0; i < 6; i++) {
    let input = prompt("")
    if (i < 3) {
        arr.push(input)
    } else {
        arr2.push(input)
    }
}

const res = [...arr, ...arr2]; //spread
console.log(res);