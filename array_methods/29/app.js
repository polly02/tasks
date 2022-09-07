// 9. На вход программе подается строка текста, вида “xxxx-xx-xx”. Разбить на массив.
// Преобразуйте эту дату в формат “xx/xx/xxxx”. Как вы думаете, что здесь применить:
// map, forEach, filter?

// const str = "2022-09-04".replaceAll("-", " ").split(" ").reverse().join("/");
// console.log(str);

const str = "2022-09-04".split("");  // этот способ не совсем корректно возвращает дату
const str1 = []
for (let i = str.length - 1; i >= 0; i--) {
    str1.push(str[i])
}
let res = str1.map(elem => {
    if (elem === "-") {
        return "/"
    } else {
        return elem
    }
})
console.log(res.join(""));