// 8. Преобразуйте первую букву каждого слова строки в верхний регистр.

const a = "abc dfe ghi";
let res = "";

for (let i = 0; i < a.length; i++) {
    if (i === 0) {
        res += a[i].toUpperCase()
    }

    if (a[i - 1] === " ") {
        res += a[i].toUpperCase();
    } else if (a[i - 1] !== " " && i !== 0) {
        res += a[i];
    }
}
console.log(res);