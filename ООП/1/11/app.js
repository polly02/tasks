// 11. Дополнить класс Validator. Добавить метод isPhone для проверки на номер
// телефона.

class Validator {
    isEmail(email) {
        try {
            if (!/^[\w\.\-\/]+@[a-z]+\.[a-z]{1,3}$/g.test(email)) throw new Error("incorrect email")
            return true
        } catch (error) {
            return error.message
        }
    }

    isPhone(phone) {
        try {
            if (!/^\+[\d]{3}\([\d]{2}\)[\d]{3}-[\d]{2}-[\d]{2}$/g.test) throw new Error("incorrect phone")
            return true
        } catch (error) {
            return error.message
        }
    }
}

const validator = new Validator()
console.log(validator.isEmail("polina.zd@gmail.com"));
console.log(validator.isPhone("+375(29)265-19-05"));