// 18. Пользователь вводит строку. Необходимо вывести все гласные отдельной
// строкой (for)
// fullstack => ua

let a = prompt("");
let count;
for (let i = 0; i < a.length; i++) {
    if (a[i] === "s" || a[i] === "v" || a[i] === "n") {
        count += a[i];
    }
}
console.log(count);