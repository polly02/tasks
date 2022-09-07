
// 3. На входе статичный объект. Необходимо вывести все числовые значения.

const obj = {
    a: 1,
    10: "abc",
    c: 2,
    3: "dfe"
}
for (const elem in obj) {
    if (!isNaN(obj[elem])) {
        console.log(obj[elem]);
    }
}