// 8. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на uuid, введенный в input. Вывести true, если провека
// успешна. 
// 8-4-4-4-12

class DomHtml {
    middleware() {
        const btn = document.querySelector(".btn")
        btn.addEventListener("click", () => {
            try {
                let input = document.querySelector(".input").value
                if (!/^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/g.test(input)) throw new Error("неверный формат uuid")
                alert(true)
            } catch (error) {
                alert(error.message)
            }
        })
    }
}

const domHtml = new DomHtml()
domHtml.middleware()