// 1. Реализуйте класс DomHtml, который будет считать количество кликов по html
// кнопке

// const obj = { //замыкание для объекта
//     count: 0,
//     getCount: function () {
//         this.obj.count++
//         return this.obj.count
//     }
// }
// console.log(obj.getCount());


// class DomHtml { //замыкание на ООП
//     count = 0
//     getCount() {
//         this.count++
//         return this.count
//     }
// }

// const domHtml = new DomHtml()
// console.log(domHtml.getCount());


class DomHtml {
    constructor() {
        this.click()
    }

    count = 0

    click() {
        const btn = document.querySelector(".btn")
        btn.addEventListener("click", () => {
            this.count++
            console.log(this.count);
        })
    }
}

const domHtml = new DomHtml()
