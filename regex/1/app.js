// 1. На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

const num = "123345s"

function checkStr(str) {
    try {
        if (!/^[\d]+$/g.test(str)) throw new Error("не числа")
        return true
    } catch (error) {
        return error.message
    }
}

console.log(checkStr(num));