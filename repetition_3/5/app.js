// 1. По условию задачи даны 2 инпута и кнопка. Необходимо 
// вернуть true, если часть символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false

const btn = document.querySelector(".btn")

function checkInputs(first, second) {
    if (first === "" || second === "") throw new Error("Пустая строка")
    if (!/[\w]/g.test(first) || !/[\w]/g.test(second)) throw new Error("error")
}

btn.addEventListener("click", () => {
    try {
        const input1 = document.querySelector(".input1").value.trim()
        const input2 = document.querySelector(".input2").value.trim()
        let count = 0
        checkInputs(input1, input2)
        for (let i = 0; i < input2.length; i++) {
            if (input1.includes(input2[i])) {
                count++
            }
        }
        alert(count === input2.length)
    } catch (error) {
        alert(error.message)
    }
})