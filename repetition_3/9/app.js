// 1. На странице контейнер из 5 инпутов. Необходимо по изменению кнопки
// получить значение соответствующего инпута и отобразить в alert (для того 
// чтобы в контейнере по событию получить определенный элемент необходимо
// восользоваться ...)

const div = document.querySelector("div")

div.addEventListener("dblclick", (event)=>{
    alert(event.target.value)
})