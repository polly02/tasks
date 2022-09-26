// 10. Реализуйте функцию, которая принимает строку из 2 повторяющихся символов.
// Необходимо проверить, содержит ли строка одинаковое количество символов.
// Функция возвращает true, если строка содержит одинаковое количество
// символов и false в противном случае. Добавить проверки
// ooxx –> true
// xooxx –> false
// ooxXm –> ИСКЛЮЧЕНИЕ (3 символа)

const str = "xooxX".toLowerCase();

function checkStr(str) {
    try {
        const arr = [];
        for (let i = 0; i < str.length; i++) {
            if (!arr.includes(str[i])) arr.push(str[i])
        }

        if (arr.length > 2 || arr.length < 2) throw new Error("неподходящее количество символов")
        else {
            let countA = 0
            let countB = 0
            for (let i = 0; i < str.length; i++) {
                if (str[i] === arr[0]) countA++
                if (str[i] === arr[1]) countB++
            }
            if (countA === countB) return true
            else return false
        }
    } catch (error) {
        return error.message
    }
}
console.log(checkStr(str));