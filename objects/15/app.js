// 15. На входе массив чисел. На основе этого массива сформировать объект, где ключ –
// число массива, значение – true/false. True – число четное, false – нечетное

const arr = [1, 2, 3, 4, 5];
const obj = arr.reduce((newObj, elem) => {
    if (elem % 2 === 0) {
        newObj[elem] = true;
    } else {
        newObj[elem] = false;
    }
    return newObj
}, {})
console.log(obj);