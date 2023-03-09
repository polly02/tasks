import { useState, useEffect } from "react"
import Task22Item from "./Task22Item"

function Task22() {
    const [value, setValue] = useState(0)
    const [arr, setArr] = useState([])

    function doRandom() {
        let item = []
        let res = []
        for (let i = 1; i <= 9; i++) {
            item.push(i)
            if(i % 3 == 0){
                res.push(item)
                item = []
            }
        }
        setArr(res)
    }

    useEffect(() => doRandom(), [])


    return (
        <>
            {value}
            {arr.map((el, index) => <Task22Item key={index} item={el} setValue={setValue} />)}
        </>
    )
}

export default Task22