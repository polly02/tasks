// 9. Дополнить класс Validator. Добавить метод isURL для проверки на url.

class Validator {
    isEmail(email) {
        try {
            if (!/^[\w\.\-\/]+@[a-z]+\.[a-z]{1,3}$/g.test(email)) throw new Error("incorrect email")
            return true
        } catch (error) {
            return error.message
        }
    }

    isURL(url) {
        try {
            if (!/^[a-z]{1,5}:\/\/[\w\-\.]+\.[a-z]{1,3}$/g.test(url)) throw new Error("incorrect url")
            return true
        } catch (error) {
            return error.message
        }
    }
}

const validator = new Validator()
console.log(validator.isEmail("polina.zd@gmail.com"));
console.log(validator.isURL("http://hschool.by"));