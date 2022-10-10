// 3. По условию задачи даны инпут и кнопка. Пользователь 
// вводит в инпут значения и по нажатию на кнопку формирует 
// массив строк. Необходимо вывести: полный массив из всех 
// элементов, а также массив из уникальных значений

const btn = document.querySelector(".btn")
const arr = []
const arrUnic = []

btn.addEventListener("click", () => {
    const input = document.querySelector(".input").value
    arr.push(input)
    document.querySelector(".res").innerHTML = arr
    arr.forEach(el => !arrUnic.includes(el) ? arrUnic.push(el) : null)
    // for (let i = 0; i < arr.length; i++) {
    //     if (!arrUnic.includes(arr[i])) {
    //         arrUnic.push(arr[i])
    //     }
    // }
    document.querySelector(".resunic").innerHTML = arrUnic
})