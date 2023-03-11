import { useState } from "react"

function Task20() {
    const [value, setValue] = useState()

    function showValues() {
        console.log(value);
    }

    function getValuesOfInput(event) {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    return (
        <>
            <input name="name" onChange={getValuesOfInput} />
            <input name="surname" onChange={getValuesOfInput} />
            <input name="age" onChange={getValuesOfInput} />
            <button onClick={showValues}>send</button>
        </>
    )
}
export default Task20