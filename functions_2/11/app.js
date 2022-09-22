// 1. На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const pwd = "passwoRD@77".split("");

function isValid(pas) {
    const symbols = ["@", "-", "_", "&", "#", "1"]
    let boolUpperValue = pas.some(el => el === el.toUpperCase() ? true : false);
    let boolNumValue = pas.some(el => !isNaN(el) ? true : false);
    let boolStrValue = pas.some(el => isNaN(el) ? true : false);
    let count = 0;
    for (let i = 0; i < pas.length; i++) {
        if (symbols.includes(pas[i])) {
            count++
        }
    }

    return boolUpperValue && boolNumValue && boolStrValue && count > 0 && pas.length > 8
}

console.log(isValid(pwd));