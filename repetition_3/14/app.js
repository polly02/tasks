// 3. По условию задачи даны инпут и кнопка. Напишите функцию, которая
// преобразует любое предложение инпута в предложение VAPORWAVE.
// предложение VAPORWAVE преобразует все буквы в верхний регистр и
// добавляет 2 пробела между каждой буквой (или специальным символом)
// Why isn't my code working? – W H Y I S N ' T M Y C O D E W O R K I N G ?

const btn = document.querySelector(".btn")

btn.addEventListener("click", ()=>{
    let input = document.querySelector("input").value
    const res = input.toUpperCase().split("").join(" ")
    document.querySelector(".res").innerHTML = res.replaceAll(" ", "  ")
})