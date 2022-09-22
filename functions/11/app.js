// 11. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово палиндром и false в противном случае

const str = "mem"

function getWordPalindrom(a) {
    return a === a.split("").reverse().join("") ? true : false
}

console.log(getWordPalindrom(str));