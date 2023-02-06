// 2. По клику на кнопку собрать данные из input и проверить вводимую строку на
// палиндром
import { TextField, Button } from '@mui/material';
import { useState } from 'react';

function Task11() {
    const [value, setValue] = useState()

    function changeValue(event) {
        setValue(event.target.value)
    }

    function doPalindrom() {
        let reversed = value.split("").reverse().join("")
        if (value === reversed) alert("this word is palindrom")
        else alert("this word is not palindrom")
    }

    return (
        <>
            <TextField id="standard-basic" label="Standard" variant="standard" onChange={changeValue} />
            <Button variant="outlined" onClick={doPalindrom}>Outlined</Button>
        </>
    )
}

export default Task11