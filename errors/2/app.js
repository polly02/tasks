// 2. На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение.

const arr = [1, 2, 3, 4, "text", 5]

function checkArray(x) {
    try {
        let bool = x.every(el => !isNaN(el) ? false : true)
        if (!bool) throw new Error("одно значение не число")
        return x
    } catch (error) {
        return error.message
    }
}

console.log(checkArray(arr));