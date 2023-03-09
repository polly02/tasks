import { useState } from "react"

function Task19() {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [age, setAge] = useState()

    function showValues() {
        console.log({ name, surname, age });
    }

    return (
        <>
            <input onChange={(event) => { setName(event.target.value) }} />
            <input onChange={(event) => { setSurname(event.target.value) }} />
            <input onChange={(event) => { setAge(event.target.value) }} />
            <button onClick={showValues}>send</button>
        </>
    )
}

export default Task19