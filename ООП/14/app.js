// 14. Реализуйте класс ServerPut. Обязательными функциями считаются функции
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
// "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1
// }`
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
// обновление значений для соответствующих ключей.
// Если совпадения по id нет – ошибка. Добавить проверки 

class ServerPut{
    middleware(parseData){
        if(!typeof parseData.id === "string") throw new Error("id isn't string")
    }

    controller(obj){
        try {
            const parsedData = JSON.parse(obj)
            this.middleware(parsedData)
            const gotData = this.service(parsedData)
            return gotData
        } catch (error) {
            return error.message
        }
    }
    
    service(parseData){
        const gotData = this.repository(parseData)
        if (!gotData.length) throw new Error("array is empty")
        return gotData
    }

    repository(parseDataClient){
        const arr = `[{ "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
                 { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
                 { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
                 { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
                 { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }]`

        const parseDB = JSON.parse(arr)
        const found = parseDB.filter(el => el.id === parseDataClient.id)
        return found
    }
}

const serverPut = new ServerPut()
console.log(serverPut.controller(`{"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1}`));