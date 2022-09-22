// 6. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / знаечение. IIFE

const obj = {
    a: 1,
    b: 2,
    c: 3
}

function getNumberOfPair(object) {
    let count = 0
    for(let key in object){
        if(key) {
            count++
        }
    }
    return count
}

console.log(getNumberOfPair(obj));