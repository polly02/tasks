// 10. Дополнить класс Validator. Добавить метод isDate для проверки на дату

class Validator {
    isEmail(email) {
        try {
            if (!/^[\w\.\-\/]+@[a-z]+\.[a-z]{1,3}$/g.test(email)) throw new Error("incorrect email")
            return true
        } catch (error) {
            return error.message
        }
    }

    isDate(date) {
        try {
            if (!/^[\d]{1,2}\.[\d]{1,2}\.[\d]{4}$/g.test(date)) throw new Error("incorrect date")
            return true
        } catch (error) {
            return error.message
        }
    }
}

const validator = new Validator()
console.log(validator.isEmail("polina.zd@gmail.com"));
console.log(validator.isDate("15.10.2022"));