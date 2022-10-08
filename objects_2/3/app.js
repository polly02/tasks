// 3. На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values

const obj = {
    id: 1,
    name: "Polina",
    age: 19
}

const str = "Polina"

function check(str, obj) {
    const arrvalues = Object.values(obj)
    let flag = false
    for (let item of arrvalues) {
        if (item === str) {
            flag = true
            break
        }
    }
    return flag
}
console.log(check(str, obj));