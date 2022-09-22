// 12. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае

const str1 = "дорога".split("").sort().join("");
const str2 = "города".split("").sort().join("");

function getWordAnagramma(a, b) {
    return a === b && a.length === b.length ? true : false
}

console.log(getWordAnagramma(str1, str2));