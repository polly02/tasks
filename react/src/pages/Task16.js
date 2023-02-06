// 7. Создайте стейт number, setNumber. Первоначальное значение 1. Компонент
// возвращает 2 кнопки и параграф, в котором отображается значение состояния
// number с помощью jsx. Ваша задача так реализовать функционал, чтобы при клике
// на кнопку +1 автоматически прибавлялась +1 к стейту numberю При клике на -1
// вычиталось 1 числовое значение

import { Button } from '@mui/material';
import { useState } from "react"

function Task16() {
    const [number, setNumber] = useState(10)

    function doMinus() {
        setNumber(number - 1)
    }
    function doPlus() {
        setNumber(number + 1)
    }

    return (
        <>
            <p>{number}</p>
            <Button variant="outlined" onClick={doMinus}>-1</Button>
            <Button variant="outlined" onClick={doPlus}>+1</Button>
        </>
    )
}

export default Task16