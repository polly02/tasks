// 15. Реализуйте класс ServerDelete. Обязательными функциями считаются функции
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
// "id": "javascript"
// }`
// Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
// проверки

class ServerDelete{
    middleware(parsedData){
        if(Number.isInteger(parsedData.id)) throw new Error("id число")
    }

    controller(obj){
        try {
            const parsedData = JSON.parse(obj)
            this.middleware(parsedData)
            
            document.querySelector(".res").innerHTML = JSON.stringify(this.service(parsedData))
        } catch (error) {
            alert(error.message)
        }
    }

    service(parsedData){
        const serv = this.repository(parsedData)
        if(!serv.length) throw new Error("пустая БД")
        return serv
    }

    repository(parsedData){
        let arr = [
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
            ]
        const filtered = arr.filter(el => el.id !== parsedData.id)
        if(arr.length === filtered.length) throw new Error("Ошибка: совпадений нет")
        arr = filtered
        return arr
    }
}
const serverDelete = new ServerDelete()
serverDelete.controller(`{"id": "javascript"}`)