// 6. Реализуйте класс ServerPut. Обязательными функциями считаются функции
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
// "id": 1, "name": "Test", "age": 1
// }`
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
// обновление значений для соответствующих ключей.
// Если совпадения по id нет – ошибка. Добавить проверки 

class ServerPut {
    middleware(parsedData) {
        if(!Number.isInteger(parsedData.id)) throw new Error("id не число")
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
        if(!serv.length) throw new Error("пустая БД")
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
        if(arr.length === filtered.length) throw new Error("Ошибка: совпадений нет")
        filtered.push(parsedData)
        arr = filtered
        return arr
    }
}

const serverPut = new ServerPut()
serverPut.controller(`{"id": 1, "name": "Test", "age": 1}`)