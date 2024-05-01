//first we will look for the serach box functionality
let searchBox= document.querySelector(".search_box")
//now we will add event or action to be performed when user search for city
searchBox.addEventListener("keypress",setQuery);
//when keypress takes place then setQuery will be executed
//e is event that we will accept as a parameter to our function
function setQuery(e){
    if(e.keyCode==13){
        callWeatherApi(searchBox.value)//we will the api
    }
}
//url to fetch the data from api
function callWeatherApi(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2`) //url is fetched
        .then(res => res.json()) //response is getting converted to json
        .then(res => {
            console.log(res)
            showResults(res)
        })
}

function showResults(weatherData) {
    let city = document.querySelector(".city")
    let temp = document.querySelector(".temp")

    let weather = document.querySelector(".weather")
    let date = document.querySelector(".date")
    let highLow = document.querySelector(".hi_low")
    city.innerText = `${weatherData.name}, ${weatherData.sys.country}`
    temp.innerText = `${Math.round(weatherData.main.temp)}°c`
    highLow.innerText = `${Math.round(weatherData.main.temp_min)}°c / ${Math.round(weatherData.main.temp_max)}°c`
    weather.innerText = `${weatherData.weather[0].main}`
    date.innerText = formDate();
}
function formDate() {
    let months = ["January", "Februray", "March", "April",
        "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let currentDate = new Date();
    return `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`
}