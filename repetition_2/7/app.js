// 7. Реализуйте функцию, принимающую строку. Ваша задача – вернуть средний
// символ слова. Если длина слова нечетная, вернуть средний символ. Если длина
// слова четная, верните средние 2 символа. Добавить проверки
// test –> es
// testing –> t

const str = "trtt"

function findMiddle(str) {
    if (str.length % 2 === 0) {
        let n = str.length % 2
        return `${str[n + 1]}${str[n + 2]}`
    } else {
        let n = str.length % 2 + 1
        return str[n]
    }
}

console.log(findMiddle(str));