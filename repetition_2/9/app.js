// 9. Middleware – cвязующее программное обеспечение. Прежде чем запрос попадет
// на сервер, запрос поступает в middleware, где находятся функции валидаторы.
// Необходимо реализовать функцию валидатор, которая обрабатывает 2 поля:
// почту, имя пользователя. Для проверки полей воспользуйтесь регулярными
// выражениями. Middleware-функция возвращает true, если оба условия
// отработали успешно и false в противном случае

const emale = "polina@gmail.com";
const name = "Polina";
const number = "+375(29)155-91-55"

function getValid(emale, name, number) {
    try {
        if (!/^[a-zA-Z0-9_\.]+$/g.test(name)) throw new Error("некорректное имя")
        if (!/^[a-zA-Z0-9_\.]+@[a-z]+\.[a-z]{1,3}$/g.test(emale)) throw new Error("некорректная запись почты")
        if (!/^\+[0-9]{1,3}\([0-9]{1,2}\)[0-9]{1,3}-[0-9]{1,2}-[0-9]{1,2}$/g.test(number)) throw new Error("некорректная запись")
        return true
    } catch (error) {
        return error.message
    }
}
console.log(getValid(emale, name, number));