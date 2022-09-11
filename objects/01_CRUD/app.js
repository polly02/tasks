let arr = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
];

// 2. Create.  Запушить в БД объект только в том случае, если нет совпадений по
// label (добавить ключ id со значением label в toLowerCase). Если совпадение есть – ошибка

// const obj =  { "label": "Test", "category": "test", "priority": 1 }

// const arr1 = arr.filter( elem => elem.label !== obj.label)
// if (arr.length === arr1.length) {
//     arr.push({id : obj.label.toLowerCase(), ...obj})
// } else {
//     console.log("error");
// }

//update
// На входе объект вида { "id": "test", label": “Test", "category": “test", "priority": 1 },
// Необходимо найти id клиента в массиве БД.
// Если совпадение есть, произвести обновление значений для соответствующих ключей.
// Примечание: для удаления объекта в БД можно отфильтровать объект БД не
// включая id клиента. В результативный массив запушить клиентский, тем самым обновить объект БД
// Если совпадения по id нет – ошибка 

// const obj = { "id": "typescript", "label": "Test", "category": "test", "priority": 1 }
// const foundObjs = arr.filter(el => el.id !== obj.id)
// if (arr.length !== foundObjs.length) {
//     foundObjs.push(obj)
//     arr = foundObjs
//     console.log(arr);
// } else {
//     console.log("error");
// }

// Delete
// Удаление объекта из массива по id
// Примечание: для удаления объекта в БД можно отфильтровать объект БД не
// включая id клиента
// Если совпадения по id нет – ошибка 

// const clientID = "sql";

// const arr_new = arr.filter(elem => elem.id !== clientID)
// if (arr.length === arr_new.length) console.log("no found object id");
// else {
//     arr = arr_new
//     console.log(arr);
// }

//update частичное

const obj = { "id": "typescript", "label": "Test"}
const foundObjs = arr.filter(el => el.id !== obj.id)
const foundSameObj = arr.filter(el => el.id ===obj.id)

const newObj = {...foundSameObj[0], ...obj}
if (arr.length !== foundObjs.length) {
    foundObjs.push(newObj)
    arr = foundObjs
    console.log(arr);
} else {
    console.log("error");
}