function fetchWeather(cityId, getNextCity) {
    setTimeout(()=>{
        console.log(`city Id: ${cityId}`)
        if(getNextCity){
            getNextCity()
        }
    }, 2000)
}

fetchWeather(1, ()=>{
    console.log("fetching weather for city 2")
    fetchWeather(2, ()=>{
        console.log("fetching weather for city 3")
        fetchWeather(3, ()=>{
            console.log("fetching weather for city 4")
            fetchWeather(4)
        })
    })
})
