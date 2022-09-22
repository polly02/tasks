// 5. На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const pass = "Asdf1234".split("")

function checkPassword (password) {
    let res1 = password.some(elem => elem.toUpperCase() ? true : false)
    let res2 = password.some(elem => !isNaN(elem) ? true : false)
    return res1 && res2 && password.length >= 8 ? true : false
}

console.log(checkPassword(pass));
