// 5. На входе статичный объект. Необходимо сформировать массив из всех нечетных
// значений объекта.

const obj = {
    1 : "a",
    2 : "b",
    3 : "c",
    4 : "d"
}
const arr = []
for (const elem in obj) {
    if (elem % 2 !== 0) {
        arr.push(elem)
    }
}
console.log(arr);