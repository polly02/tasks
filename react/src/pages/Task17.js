import { useEffect, useState } from "react"
import axios from "axios"

function Task17() {
    const [value, setValue] = useState()

    async function request() {
        const response = await axios.get("https://api.ipify.org/?format=json")
        setValue(response.data.ip)
    }

    useEffect(() => {
        request()
    }, [])

    return (
        <>
            <div>{value}</div>
        </>
    )
}

export default Task17