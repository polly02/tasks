// 3. По клику на кнопку собрать данные из input и проверить вводимую строку на
// почту

import { TextField, Button } from '@mui/material';
import { useState } from 'react';

function Task12(){
    const [value, setValue] = useState()

    function onChange(event){
        setValue(event.target.value)
    }

    function checkEmail(){
        if(/^[\w\.-_\!\#\%\^\*\+]+@[a-z]+\.[a-z]{2,5}$/g.test(value)) alert("it is correct email")
        else alert("email is not valid")
    }

    return(
        <>
            <TextField id="standard-basic" label="Standard" variant="standard" onChange={onChange} />
            <Button variant="outlined" onClick={checkEmail}>Outlined</Button>
        </>
    )
}

export default Task12