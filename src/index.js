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

async function getData(location){
    const response = await fetch(`#http://api.weatherapi.com/v1/current.json?key=8c16a0f9726049ebb9113634232512&q=${location}`,{ mode: "cors" })
    const weatherData = await response.json();

    region.innerHTML = weatherData.location.name
    conditionLogo.src = weatherData.current.condition.icon
    condition.innerHTML = weatherData.current.condition.text
    country.innerHTML = weatherData.location.country
    temperature.innerHTML = `${weatherData.current.temp_c}℃`
    feelsLike.innerHTML = `Feels like ${weatherData.current.feelslike_c}℃`
    lastUpdate.innerHTML = weatherData.current.last_updated
}

getData("jakarta")

searchBtn.addEventListener("click", ()=>{
    getData(searchBar.value)
})

