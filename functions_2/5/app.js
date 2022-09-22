// 3.1.Напишите функцию, которая принимает два параметра: строку и букву. Функция
// должна подсчитывать количество вхождений указанной буквы в строке. Добавить
// проверки

let str = "asdasdfghjyfsgd";
let l = "s";

function getNumber(str, l) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === l) {
            count++
        }
    }
    return count
}

console.log(getNumber(str, l));