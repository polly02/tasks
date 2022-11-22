// 1. Реализуйте класс Client, содержащий метод doRegistration. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» для последующей записи в массив

class Client {
    constructor() {
        this.doRegistration()
    }

    isEmpty(email, password) {
        if (!email) throw new Error("error email")
        if (!password) throw new Error("error password")
    }

    doRegistration() {
        document.querySelector(".btn").addEventListener("click", () => {
            try {
                const email = document.querySelector(".email").value
                const password = document.querySelector(".pwd").value
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
}
const client = new Client()

class Server {
    middleware(object) {
        if (!/^[\w\d_\.]+@[a-z]+\.[a-z]{2,5}$/g.test(object.email)) throw new Error("incorrect email")
    }

    controller(object) {
        try {
            this.middleware(object)
            const dataFromBD = this.service(object)
            return dataFromBD
        } catch (error) {
            console.log(error.message);
            throw new Error(error.message)
        }
    }

    service(object) {
        const dataFromBD = this.repository(object)
        if (!dataFromBD) throw new Error("такой пользователь уже есть")
        return dataFromBD
    }

    repository(object) {
        const DB = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
        ]

        const res = DB.filter(el => el.email === object.email ? el : null)
        if (res.length == 0) {
            DB.push(object)
            return true
        }
        return false
    }
}