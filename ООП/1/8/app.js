// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.

class Validator {
    isEmail(email) {
        try {
            if (!/^[\w\.\-\/]+@[a-z]+\.[a-z]{1,3}$/g.test(email)) throw new Error("incorrect email")
            return true
        } catch (error) {
            return error.message
        }
    }
}

const validator = new Validator()
console.log(validator.isEmail("polina.zd@gmail.com"));