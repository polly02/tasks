// 3. Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо также отображать только уникальные значения массива
// [1, 1, 4, 2, 3, 3] -> [4, 2]


class Dom {
    constructor() {
        this.fillArray()
    }

    fillArray() {
        let newArr = []
        document.querySelector(".btn").addEventListener("click", () => {
            const inp = document.querySelector(".input").value
            if (!isNaN(inp)) newArr.push(inp)
            let arrUnique = []
            newArr = newArr.sort()
            document.querySelector(".resArr").innerHTML = newArr
            for (let i = 0; i < newArr.length; i++) {
                if (newArr[i] !== newArr[i - 1] && newArr[i] !== newArr[i + 1]) {
                    arrUnique.push(newArr[i])
                }
            }
            document.querySelector(".resArrUnique").innerHTML = arrUnique
        })
    }
}
const dom = new Dom()