// 3. По нажатию на enter в input onKeyDown выявлять является ли введенное слово
// палиндромом

function Task8(){
    return(
        <>
        <input onKeyDown={(event)=>{
            if(event.key === "Enter") {
                let reverse = event.target.value.split("").reverse().join("")
                if(event.target.value === reverse) alert("success")
                else alert("не палиндром")
            }
        }}/>
        </>
    )
}

export default Task8