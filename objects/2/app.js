// 2. На входе статичный объект. Необходимо вывести все числовые ключи.

const obj = {
    a: 1,
    10: "abc",
    c: 2,
    3: "dfe"
}

for (const elem in obj) {
    if (!isNaN(elem)) {         //обращаемся к ключам; obj[elem] - к значению
        console.log(elem);
    }
}
