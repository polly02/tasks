// 17. Пользователь вводит строку. Необходимо посчитать количество согласных (for)

let a = prompt("");
let count = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] === "s" || a[i] === "v" || a[i] === "n") {
        count += 1;
    }
}
console.log(count);