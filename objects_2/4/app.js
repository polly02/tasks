// 4. На входе объект. Ключи и значения - автоинкремент (генерируется
// автоматически от 1 до n). Написать функцию на поиск в объекте только четных
// ключей.

const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    const obj = {}
    const input = +document.querySelector(".inpt").value
    for (let i = 0; i < input; i++) {
        obj[i] = Math.floor(Math.random() * 100)
    }
    let result = Object.keys(obj).filter(elem => elem % 2 === 0)
    console.log(result);
})