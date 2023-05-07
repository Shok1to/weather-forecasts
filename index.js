//API Key
var apiKey ='2385eb75852e33fb63118cdf18e9a748'


var searchBtn = document.querySelector('#search-button');
var searchInput = document.querySelector('#search-input');
var dayDisplay = document.querySelector('.day')
var day1Display = document.querySelector('.day1')
var day2Display = document.querySelector('.day2')
var day3Display = document.querySelector('.day3')
var day4Display = document.querySelector('.day4')

var oneDayForecast = document.querySelector('.one-day-forecast');
var fiveDayForecast = document.querySelector('.five-day-forecast');
let currentDate = new Date().toJSON().slice(0, 10);
// console.log(currentDate);

function getweather(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        console.log('Temp: ', data.temp);
        // console.log('Pressure: ',data.main.pressure);
        // console.log('Icon: ',data.weather[0].icon)

        oneDayForecast.innerHTML = "";

        // create the element
        var h2El = document.createElement('h2');
        var dateEl = document.createElement('currentDate')
        var tempEl = document.createElement('p');
        var windEl = document.createElement('p');
        var humidityEl = document.createElement('p');
        // populate the element
        h2El.textContent = cityName
        dateEl.textContent = currentDate
        tempEl.textContent = `Temp: ${data.main.temp} C` 
        humidityEl.textContent = `Humidity: ${data.main.humidity} %`
        windEl.textContent = `Wind: ${data.wind.speed} km/h`
        // append the element
        oneDayForecast.append(h2El,dateEl, tempEl, windEl, humidityEl);

        fiveDay(data.coord.lat, data.coord.lon)

    })
}

function fiveDay(lat, lon) {
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log('Five Day', data);
        console.log('Temp: ',data.list[0].main.temp)
        console.log('Temp: ',data.list[9].main.temp)
       
        fiveDayForecast.innerHTML = "";

        // create the element
       
        var dateEl = document.createElement('currentDate')
        var tempEl1 = document.createElement('day1-temp');
        var windEl1 = document.createElement('day1-humid');
        var humidityEl1 = document.createElement('day1-wind');
        // populate the element
       
        dateEl.textContent = currentDate
        tempEl1.textContent = `Temp: ${'Five Day',data.list[0].main.temp} C` 
        humidityEl1.textContent = `Humidity: ${'Five Day',data.list[0].main.humidity} %`
        windEl1.textContent = `Wind: ${'Five Day',data.list[0].wind.speed} km/h`
        oneDayForecast.append(dateEl, tempEl1, windEl1, humidityEl1);

        var tempEl2 = document.createElement('day2-temp');
        var humidityEl2 = document.createElement('day2-humid');
        var windEl2 = document.createElement('day2-wind');

        tempEl2.textContent = `Temp: ${'Five Day',data.list[9].main.temp} C` 
        humidityEl2.textContent = `Humidity: ${'Five Day',data.list[9].main.humidity} %`
        windEl2.textContent = `Wind: ${'Five Day',data.list[9].wind.speed} km/h`
        // append the element
        oneDayForecast.append(tempEl2, windEl2, humidityEl2);

         
    
    })
}

function getCity () {
    var cityName = searchInput.value;
    getweather(cityName)
}

searchBtn.addEventListener('click', getCity)