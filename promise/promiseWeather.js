function promiseWeather(cityId){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(`weather data fetch city id: ${cityId}`)
            resolve("weather data fetched"+cityId)
        }, 1000);
    })
}

promiseWeather(1).then(()=>{
    console.log("fetching weather for city 2")
    return promiseWeather(2)
}).then(()=>{
    console.log("fetching weather for city 3")
    return promiseWeather(3)
}) .then(()=>{
    console.log("fetching weather for city 4")
    return promiseWeather(4)
})