// 1. Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» для последующей записи в массив

class Client {
    constructor() {
        this.doRegistration()
        this.doAuth()
    }

    isEmpty(email, pswd) {
        if (!email) throw new Error("error email")
        if (!pswd) throw new Error("error password")
    }

    doRegistration() {
        const btn = document.querySelector(".btn")
        btn.addEventListener("click", () => {
            try {
                const email = document.querySelector(".email").value
                const password = document.querySelector(".password").value
                this.isEmpty(email, password)
                console.log(email, password);
                const server = new Server()
                const dataFromServer = server.controller({ email, password })
                alert(dataFromServer)
            } catch (error) {
                alert(error.message)
            }
        })
    }

    doAuth() {
        document.querySelector(".btn-enter").addEventListener("click", () => {
            try {
                const email = document.querySelector(".email-enter").value
                const password = document.querySelector(".password-enter").value
                this.isEmpty(email, password)
                const server = new Server2()
                const dataFromServer = server.controller({ email, password })
                alert(dataFromServer)
            } catch (error) {
                alert(error.message)
            }
        })
    }
}

const client = new Client()

class Server2 {
    middleware(obj) {
        if (!/^[\w\d_\.]+@[a-z]+\.[a-z]{2,5}$/g.test(obj.email)) throw new Error("error")
    }

    controller(obj) {
        try {
            this.middleware(obj)
            const dataService = this.service(obj)
            return dataService
        } catch (error) {
            return error.message
        }
    }

    service(obj) {
        const bool = this.repository(obj)
        if (!bool) throw new Error("совпадений нет")
        return bool
    }

    repository(obj) {
        const DB = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
        ]

        const res = DB.some(el => el.email === obj.email && el.pwd === obj.password)
        return res ? true : false
    }
}

class Server {

    middleware(obj) {
        if (!/^[\w\d_\.]+@[a-z]+\.[a-z]{2,5}$/g.test(obj.email)) throw new Error("error")
    }

    controller(obj) {
        try {
            this.middleware(obj)
            const bool = this.service(obj)
            return bool
        } catch (error) {
            console.log(error.message);
            throw new Error(error.message)
        }
    }

    service(obj) {
        const bool = this.repository(obj)
        if (!bool) throw new Error("такой пользователь есть")
        return bool
    }

    repository(obj) {
        const DB = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
        ]

        let res = DB.filter(el => el.email === obj.email ? el : null)
        if (res.length == 0) {
            DB.push(obj)
            return true
        }
        return false

    }
}

