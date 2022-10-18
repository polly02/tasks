// class ServerPost {
//     middleware(param) {
//         if (param.hasOwnProperty("id")) throw new Error("нет id")
//         if (param.hasOwnProperty("label")) throw new Error("нет label")
//         if (param.hasOwnProperty("category")) throw new Error("нет category")
//         if (param.hasOwnProperty("priority")) throw new Error("нет priority")
//     }

//     controller(obj) {
//         try {
//             const parseData = JSON.parse(obj)
//             this.middleware(parseData)
//             const dataser = this.ser(parseData)
//             return dataser
//         } catch (error) {
//             return error.message
//         }
//     }

//     ser(data) {
//         const resultDataDBNew = this.rep(data)
//         if (!resultDataDBNew.length) throw new Error("из бд ничего не вернулось")
//         return resultDataDBNew //обновленная БД c NEWJS
//     }

//     rep(parsedata) { //{"id": "javascript", "label": "JavaScriptNEW", "priority": 4}
//         let arrDB = [{ "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//         { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//         { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
//         { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }]
//         // let count = false
//         // for (let i = 0; i < arrDB.length; i++) {
//         //     if (arrDB[i].id === parsedata.id) {
//         //         count = true
//         //         break
//         //     }
//         // }

//         const filtered = arrDB.filter(el => el.id !== parsedata.id) // все кроме совпадения
//         filtered.push(parsedata)
//         arrDB = filtered
//         return arrDB
//     }
// }

// const serverPost = new ServerPost()
// console.log(serverPost.controller(`{"id": "javascript", "label": "JavaScriptNEW", "category": "programmingLanguages", "priority": 4}`));


//частичное обновление

class ServerPost {
    middleware(param) {
        // if (param.hasOwnProperty("id")) throw new Error("нет id")
        // if (param.hasOwnProperty("label")) throw new Error("нет label")
        // if (param.hasOwnProperty("category")) throw new Error("нет category")
        // if (param.hasOwnProperty("priority")) throw new Error("нет priority")
    }

    controller(obj) {
        try {
            const parseData = JSON.parse(obj)
            this.middleware(parseData)
            const dataser = this.ser(parseData)
            return dataser
        } catch (error) {
            return error.message
        }
    }

    ser(data) {
        const resultDataDBNew = this.rep(data)
        if (!resultDataDBNew.length) throw new Error("из бд ничего не вернулось")
        return resultDataDBNew //обновленная БД c NEWJS
    }

    rep(parsedata) { //{"id": "javascript", "label": "JavaScriptNEW", "priority": 4}
        let arrDB = [{ "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
        { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
        { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
        { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
        { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }]


        const filtered = arrDB.filter(el => el.id !== parsedata.id) // все кроме совпадения
        const ourObjInDB = arrDB.filter(el => el.id === parsedata.id)

        const margeObj = { ...ourObjInDB[0], ...parsedata }
        filtered.push(margeObj)

        arrDB = filtered
        return arrDB
    }
}

const serverPost = new ServerPost()
console.log(serverPost.controller(`{"id": "javascript", "label": "JavaScriptNEW"}`));