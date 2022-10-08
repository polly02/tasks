// 2. Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки

let btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    let input = document.querySelector(".inpt").value
    let obj = {}
    for (let i = 0; i < input; i++) {
        obj[i] = Math.floor(Math.random() * 100)
    }
    const count = qtyOfPair(obj);
    console.log(count);
})

function qtyOfPair(obj) {
    let arr = Object.entries(obj)
    return arr.length
}