import { useState } from "react"
function Count(props){
    const [count, setCount] = useState(props.init)
    useState(() =>{
        const num = setInterval(() => {
            setCount((el) => el + props.inc)
        },props.interval);
        return() =>{
            clearInterval(num)
        }
    })
    return(
        <h1>{count}</h1>
    )
}

export default Count