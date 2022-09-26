// 10. На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

const email = "polina@gmail.com";

function checkEmail(mail) {
    try {
        const bool = mail.includes("@")
        if (!bool) throw new Error("неверный формат почты")
        return true
    } catch (error) {
        return error.message
    }
}

console.log(checkEmail(email));
