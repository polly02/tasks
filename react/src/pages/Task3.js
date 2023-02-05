// 3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
// странице в тег li только те строки, которые содержат знак @

function Task3() {
    const arr = ["test", "test@mail.ru", "teest@mail", "testtt"]
    let res = arr.map(el => /^[a-zA-z\.-]+@[a-z]+\.[a-z]+$/g.test(el) ? <li>{el}</li> : null)
    return (
        <ul>
            {res}
        </ul>
    )
}

export default Task3