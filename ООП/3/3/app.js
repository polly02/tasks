// 3. Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив) при условии, что email уникальный. Создать
// генерацию нового id. Обязательными функциями считаются функции middleware,
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие
// с этим массивом осуществляется только в repository. Массив находится в
// приложении

// [
// { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
// { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
// { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
// { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
// { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
// ]



class Client {
    constructor() {
        this.sendRequest()
    }

    sendRequest() {
        const btn = document.querySelector(".btn")
        btn.addEventListener("click", () => {
            try {
                let mail = document.querySelector(".email").value
                let pwd = document.querySelector(".pwd").value

                this.checkValue(mail, pwd)

                const clientData = JSON.stringify({ email: mail, pswd: pwd })
                const server = new Server()
                const response = server.controller(clientData)

                document.querySelector(".res").innerHTML =

                    server.controller(clientData)
            } catch (error) {
                alert(error.message)
            }
        })
    }

    checkValue(mail, pwd) {
        if (!mail.length > 0) throw new Error("error")
        if (!pwd.length > 0) throw new Error("error")
        return true
    }
}

const client = new Client()
client.sendRequest()


class Server {
    middleware(email) {
        if (!email) throw new Error("email пуст")
    }

    controller(clientData) {
        try {
            const parsedClientData = JSON.parse(clientData)
            this.middleware(parsedClientData.email)
            return JSON.stringify(this.service(parsedClientData))
        } catch (error) {
            return error.message
        }
    }

    service(parsedClientData) {
        const rep = this.repository(parsedClientData)
        if (!rep.length) throw new Error("пустая БД")
        return rep
    }

    repository(parsedClientData) {
        const arr = `[
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
        ]`
        let parsedDB = JSON.parse(arr)
        const filtered = parsedDB.filter(el => el.email !== parsedClientData.email)
        if (parsedDB.length !== filtered.length) throw new Error("совпадение есть")
        filtered.push({ id: Math.floor(Math.random() * 100), ...parsedClientData })
        parsedDB = filtered
        return parsedDB
    }
}
