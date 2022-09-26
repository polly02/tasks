// 11. Реализуйте функцию, принимающую 2 строки и возвращающую, true, если часть
// одной строки можно переставить так, чтобы она соответствовала 2 строке, и false в
// противном случае, если совпадений нет
// “rkqodlw”, “world” –> true (rkqodlw содержит world)
// “katas”, “steak” –> false (katas не включает steak после перестановки символов)

const str = "rkqodlw"
const str2 = "world"

function checkWords(str1, str2) {
    let count = 0
    for (let i = 0; i < str2.length; i++) {
        if (str1.includes(str2[i])) count++
    }
    if (str2.length === count) return true
    else return false
}
console.log(checkWords(str, str2));