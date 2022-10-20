// 3. Реализуйте класс Html. В нем функцию renderArr, принимающую селектор. Вам
// неоходимо отобразить массив ['Minsk', 'Brest', 'Vitebsk'] в принимаемый селектор

class Html {
    constructor(selector) {
        this.selector = selector
        this.doArray()
    }

    doArray() {
        document.querySelector(".btn").addEventListener("click", () => {
            document.querySelector(this.selector).innerHTML = ""
            const n = +document.querySelector(".input").value
            let arr = []
            for (let i = 0; i < n; i++) {
                arr.push(Math.floor(Math.random() * 10))
            }
            for(let i = 0; i <arr.length; i++){
                const teg = document.createElement("p")
                teg.textContent = arr[i]
                this.renderArr(teg)
            }
        })
    }

    renderArr(teg) {
        document.querySelector(this.selector).appendChild(teg)

    }
}


const html = new Html(".res")