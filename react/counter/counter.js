let count = 0
function Counter(){
    const increment = ()=>{
        count ++
        App()
    }
    const decrement = ()=>{
        count --
        App()
    }
    return(
        <>
        <h1>Counter : {count}</h1>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
        </>

    )
}

function App(){
    ReactDOM.createRoot(document.getElementById("root").render(<Counter/>))
}

App()