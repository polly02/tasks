// 2. Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company

const str = "hschool company".split(" ");

function getToUpperCaseData(string) {
    const res = string.map(el => {
        return el[0].toUpperCase() + el.slice(1).toLowerCase()
    })
    return res.join(" ")
}

console.log(getToUpperCaseData(str));