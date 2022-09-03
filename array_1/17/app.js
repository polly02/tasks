// 16. Дано число 7, найдите все числа кратные 7 до 100

const n = 7;
const b = 100;
for (let i = n; i < 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}