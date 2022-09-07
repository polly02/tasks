// 9. На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение) где значение число и вывести количество

const obj = {
    a: 1,
    b: 3,
    c: "asd",
    d: 4
}
let count = 0;
for (let key in obj) {
    if(!isNaN(obj[key])) {
        count++
    }
}
console.log(count);