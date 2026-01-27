function asyncWeather(cityId){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(`weather data fetch city id: ${cityId}`)
            resolve("weather data fetched"+cityId)
        }, 1000);
    })
}

async function fetchAsyncWeather(){
    try {
        await asyncWeather(1);
        console.log("fetching weather for city 2");

        await asyncWeather(2);
        console.log("fetching weather for city 3");

        await asyncWeather(3);
        console.log("fetching weather for city 4");

        await asyncWeather(4);
    } catch (error) {
        console.log(error)
    }
}

fetchAsyncWeather()

