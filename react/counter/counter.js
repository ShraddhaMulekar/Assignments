import { useState } from "react"

let count = 0
function Counter(){
    const[count, setCount] = useState(0)
    // const increment = ()=>{
    //     count ++
    //     App()
    // }
    // const decrement = ()=>{
    //     count --
    //     App()
    // }
    return(
        <>
        <h1>Counter : {count}</h1>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>        
        <button onClick={setCount(count++)}>Inc</button>
        <button onClick={setCount(count--)}>Dec</button>
        </>

    )
}

function App(){
    ReactDOM.createRoot(document.getElementById("root").render(<Counter/>))
}

App()