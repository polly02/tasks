// 6. На входе статичный объект. Необходимо числовые значения удвоить на выходе.

const obj = {
    a: 1,
    b: 3,
    c: 2,
    d: 4
}
const arr = []
for (const key in obj) {
    if (!isNaN(obj[key])) {
        arr.push(obj[key] * 2)
    }
}
console.log(arr);