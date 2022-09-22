// 1. Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
// последующем вызове функции

function multiply() {
    let str = ""
    return function() {
        str += prompt("")
        return str
    }
}

const wrapper = multiply();
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());