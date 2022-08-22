// 16. Пользователь вводит строку. Необходимо посчитать количество гласных (for)

const str = prompt("");
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === "а" || str[i] === "и" || str[i] === "е" || str[i] === "у" || str[i] === "о" || str[i] === "я") {
        count += 1;
    }
}
console.log(count); //гласные
console.log(str.length - count); //согласные