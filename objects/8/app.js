// 8. На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение)

const obj = {
    a: 1,
    b: 3,
    c: 2,
    d: 4
}
let count = 0;
for (const key in obj) {
    if (obj[key]) {
        count++
    }
}
console.log(count);