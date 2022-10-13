// 1. Реализуйте класс Singer, который будет иметь следующие свойства: name,
// surname. Также класс должен иметь метод getАutograph, который будет выводить
// “{name} {surname), с наилучшими пожеланиями”.

// class Singer {
//     constructor(name, surname){
//         this.name = name
//         this.surname = surname
//     }

//     getАutograph() {
//         return `${this.name} ${this.surname}, с наилучшими пожеланиями!`
//     }
// }

// const singer = new Singer("Polina", "Zdanovich")
// console.log(singer.getАutograph());



// 2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
// разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
// соответствующие функции. Добавить проверки на ввод

// class Calculator {
//     // constructor(value1, value2){
//     //     this.value1 = value1
//     //     this.value2 = value2
//     // }
//     // getDiff() {
//     //     return this.value1 - this.value2
//     // }

//     getSum(value1, value2) {
//         return value1 + value2
//     }

//     getDiff(value1, value2) {
//         return value1 - value2
//     }

//     getProizv(value1, value2) {
//         return value1 * value2
//     }

//     getDelenie(value1, value2) {
//         return value1 / value2
//     }
// }

// const calculator = new Calculator()
// console.log(calculator.getSum(2, 3));
// console.log(calculator.getDiff(2, 3));
// console.log(calculator.getProizv(2, 3));
// console.log(calculator.getDelenie(2, 3));


// 5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
// замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
// если слова являются анаграммами. Добавить проверки на ввод.

// class Anagram{
//     constructor(str1, str2){
//         this.str1 = str1
//         this.str2 = str2
//     }

//     checkStr(){
//         const sortedStr1 = this.str1.split("").sort().join("")
//         const sortedStr2 = this.str2.split("").sort().join("")
//         return sortedStr1 === sortedStr2 ? true : false  
//     }
// }

// const anagram = new Anagram("города", "дорога")
// console.log(anagram.checkStr());

//2способ

// class Anagram {
//     checkStr(str1, str2) {
//         const sortedStr1 = str1.split("").sort().join("")
//         const sortedStr2 = str2.split("").sort().join("")
//         return sortedStr1 === sortedStr2 ? true : false
//     }
// }

// const anagram = new Anagram()
// console.log(anagram.checkStr("города", "дорога"));


// 6. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// controller -> service -> repository, где:
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие
// с этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// Необходимо вывести в консоль весь массив

// class ServerGetAll {
//     controller() {
//         try {
//             return this.service()
//         } catch (error) {
//             return error.message
//         }
//     }

//     service() {
//         const db = this.repository()
//         if (!db.length) throw new Error("array is empty")
//         return db
//     }

//     repository() {
//         const arr = `[{ "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//         { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
//         { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }]`
//         return JSON.parse(arr)
//     }
// }

// const serverGetAll = new ServerGetAll()
// console.log(serverGetAll.controller());



// 7. Реализуйте класс ServerById. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие
// с этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": "javascript"
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// имеется. В противном случае бросить исключение. Добавить проверки 

class ServerById {
    middleware(parseData) {
        if(!typeof parseData.id === "string") throw new Error("id isn't string")
    }

    controller(obj) { //главная функция
        try {
            const parsedData = JSON.parse(obj)
            this.middleware(parsedData)
            const gotData = this.service(parsedData)
            return gotData
        } catch (error) {
            return error.message
        }
    }

    service(parseData) {
        const gotData = this.repository(parseData)
        if (!gotData.length) throw new Error("array is empty")
        return gotData
    }

    repository(parseDataClient) {
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

const serverById = new ServerById()
console.log(serverById.controller(`{"id": "javascript"}`)); // результат
// console.log(serverById.controller(`{"id": "test"}`)); //пустой