// 2. На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет
// 5 первыми значениями массив. Далее необходимо создать массив из тех
// значений, которые являются числами и НЕ равны 2 другим введенным. Если
// длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента. forEach

const arr = [];
const arr2 = []
let i = 0
while (i < 7) {
    let input = prompt("");
    if (i < 5) {
        if (!isNaN(input)) {
            arr.push(input)
        }
    } else {
        if (!isNaN(input)) {
            arr2.push(input)
        }
    }
    i++
}
console.log(arr);
console.log(arr2);

const arr_res = []

arr.forEach(element => {
    if (!arr2.includes(element)) {
        arr_res.push(element)
    }
})
console.log(arr_res);