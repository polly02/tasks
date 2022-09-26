// 7. На вход подается строка в виде пароля. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать.
// Пароль должен содержать:
// • Буквы в UPPER регистре
// • Буквы в LOWER регистре
// • Числа
// • Специальные символы
// • Длина не менее 8 символов

const pass = "abcABC_01"

function checkPassword(pswrd) {
    try {
        if (!(/[a-z]+/g.test(pswrd))) throw new Error("нет букв в нижнем регистре")
        if (!(/[A-Z]+/g.test(pswrd))) throw new Error("нет букв в верхнем регистре")
        if (!(/[0-9]+/g.test(pswrd))) throw new Error("нет цифр")
        if (!(/[-_\\\/\.]+/g.test(pswrd))) throw new Error("нет специальных символов")
        if (pswrd.length < 8) throw new Error("ненадежный пароль")
        return true
    } catch (error) {
        return error.message
    }
}

console.log(checkPassword(pass));
