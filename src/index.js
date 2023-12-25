import './style.css'

const searchBar = document.querySelector("#searchBar")
const searchBtn = document.querySelector("#searchBtn")
const region = document.querySelector("#region")
const country = document.querySelector("#country")
const conditionLogo = document.querySelector("#conditionLogo")
const condition = document.querySelector("#condition")
const temperature = document.querySelector("#temperature")
const feelsLike = document.querySelector("#feelsLike")
const lastUpdate = document.querySelector("#lastUpdate")


let unit = "c"
let weatherJson


async function getData(location){
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8c16a0f9726049ebb9113634232512&q=${location}`,{ mode: "cors" })
        const weatherData = await response.json();
        weatherJson = weatherData
    }catch(err){
        console.error(err);
    }
}

function weatherDom(){
    region.innerHTML = weatherJson.location.name
    conditionLogo.src = weatherJson.current.condition.icon
    condition.innerHTML = weatherJson.current.condition.text
    country.innerHTML = weatherJson.location.country
    if (unit=="c"){
        temperature.innerHTML = `${weatherJson.current.temp_c}℃`
        feelsLike.innerHTML = `Feels like ${weatherJson.current.feelslike_c}℃`
    }else{
        temperature.innerHTML = `${weatherJson.current.temp_f}℉`
        feelsLike.innerHTML = `Feels like ${weatherJson.current.feelslike_f}℉`
    }
    lastUpdate.innerHTML = weatherJson.current.last_updated
}

async function getWeather(location){
    await getData(location)
    await weatherDom()
}


getWeather("jakarta")


searchBtn.addEventListener("click", ()=>{
    getWeather(searchBar.value)
})

temperature.addEventListener("click",()=>{
    if (unit=="c"){
        unit = "f"
    }else{
        unit = "c"
    }
    weatherDom()
})

