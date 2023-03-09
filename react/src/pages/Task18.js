import { useState } from "react"

function Task18() {
    const [name, setName] = useState()

    function getName(event) {
        setName(event.target.value)
    }

    function outputName() {
        console.log(name);
    }

    return (
        <>
            <input onChange={getName}></input>
            <button onClick={outputName}>вывести</button>
        </>
    )
}

export default Task18