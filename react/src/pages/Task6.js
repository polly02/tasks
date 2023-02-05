// 1. На входе 2 статичные переменные пароля. По клику на кнопку необходимо
// реализовать метод валидации. Написать регулярное выражение: пароль от 8
// символов, содержит числа, буквы, !@#$%^&*+= 

function Task6() {
    const pwd1 = "qwerty123"
    const pwd2 = "qwerty123"

    function isValid() {
        try {
            if(!/^[\w\.\!\@\#\%\^\*\+\=]{8,}$/g.test(pwd1)) throw new Error("error in pwd1")
            if(!/^[\w\.\!\@\#\%\^\*\+\=]{8,}$/g.test(pwd2)) throw new Error("error in pwd2")
            if(pwd1 !== pwd2) throw new Error("not auth")
            alert("success")
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <>
            <button onClick={isValid}>Send</button>
        </>
    )
}

export default Task6