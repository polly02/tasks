// 7. Реализуйте класс ServerDelete. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": 1
// }`
// Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
// проверки

class ServerDelete {
    middleware(parsedData) {
        if (!Number.isInteger(parsedData.id)) throw new Error("id не число")
    }
    controller(obj) {
        try {
            const parsedData = JSON.parse(obj)
            this.middleware(parsedData)
            document.querySelector(".res").innerHTML = JSON.stringify(this.service(parsedData))
        } catch (error) {
            alert(error.message)
        }
    }

    service(parsedData) {
        const serv = this.repository(parsedData)
        if (!serv.length) throw new Error("пустая БД")
        return serv
    }

    repository(parsedData) {
        let arr = [
            { "id": 1, "name": "Yesenia", "age": 22 },
            { "id": 2, "name": "Hanna", "age": 22 },
            { "id": 3, "name": "Stanislau", "age": 25 },
            { "id": 4, "name": "German", "age": 18 },
            { "id": 5, "name": "Maria", "age": 27 }
        ]
        const filtered = arr.filter(el => el.id !== parsedData.id)
        if (arr.length === filtered.length) throw new Error("Ошибка: совпадений нет")
        arr = filtered
        return arr
    }
}

const serverDelete = new ServerDelete()
serverDelete.controller(`{"id": 1}`)