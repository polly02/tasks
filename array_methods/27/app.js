// 7. Найти значение массива, повторяющееся в нем наибольшее количество раз

const arr = [1, 2, 3, 3, 4, 5, 5, 5, 5].sort();
const a = []; //сами элементы
const b = {}; //кол-во повторение элементов

arr.forEach(elem => {
    if (a.includes(elem)) {
        b[elem] += "1"
    } else {
        a.push(elem)
        b[elem] = "1"
    }
})
console.log(b);
let max = 0
for (let i = 0; i < a.length + 1; i++) {

    if (b[i] > b[i + 1]) {
        max = i
    } else if (max < b[i + 1]) {
        max = (i + 1)
    }
}
console.log(max);