// 7. Преобразуйте первую букву строки в верхний регистр несколькими способами

const a = "hschool";
res = a[0].toUpperCase();
for (let i = 1; i < a.length; i++) {
    res += a[i] 
}
console.log(res);

//2 способ

// const a = "hschool";
// console.log(a[0].toUpperCase() + a.slice(1))