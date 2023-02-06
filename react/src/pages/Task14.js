// 5. По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
// state, первоначальное значение которого {name: ‘’, surname: ‘’}. Сравнить значения
// 2 input. Структура state

import { TextField, Button } from '@mui/material';
import { useState } from "react"

function Task14() {
    const [form, setForm] = useState({ name: "", surname: "" })

    function changeForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })

    }

    function showResult() {
        try {
            if (!form.name) throw new Error("name is empty")
            if (!form.surname) throw new Error("surname is empty")
            alert("success")
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <TextField name='name' id="standard-basic" label="Standard" variant="standard" onChange={changeForm} />
            <TextField name='surname' id="standard-basic" label="Standard" variant="standard" onChange={changeForm} />
            <Button variant="outlined" onClick={showResult}>Outlined</Button>
        </>
    )
}
export default Task14