// 16. На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
// проитерировать значения объекта и сформировать на основе этих чисел массив

const obj = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: ""
}
const arr = []
for (const key in obj) {
    let input = +prompt("")
    obj[key] = input;
    arr.push(obj[key])
}
console.log(arr);