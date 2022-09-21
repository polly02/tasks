// 4. На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

const arr = [1, 2, 3, 4, "asd"];

function getResultOfCheck (a){
    let res = a.filter(el => !isNaN(el))
    return a.length === res.length ? true : false
}
console.log(getResultOfCheck(arr));