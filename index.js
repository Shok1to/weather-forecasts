//API Key
var apiKey ='ddb387d2d48c85a91cbb8f7cf6c4f50a'


var searchBtn = document.querySelector('#search-button');
var searchInput = document.querySelector('#search-input');

var oneDayForecast = document.querySelector('.one-day-forecast')


function getweather(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        // console.log('Humidity: ', data.main.humidity);
        // console.log('Pressure: ',data.main.pressure);
        // console.log('Icon: ',data.weather[0].icon)

        oneDayForecast.innerHTML = "";

        // create the element
        var h2El = document.createElement('h2');
        var tempEl = document.createElement('p');
        var windEl = document.createElement('p');
        var humidityEl = document.createElement('p');
        // populate the element
        h2El.textContent = cityName
        tempEl.textContent = `Temp: ${data.main.temp} C` 
        humidityEl.textContent = `Humidity: ${data.main.humidity} %`
        windEl.textContent = `Wind: ${data.wind.speed} km/h`
        // append the element
        oneDayForecast.append(h2El, tempEl, windEl, humidityEl);

        fiveDay(data.coord.lat, data.coord.lon)

    })
}

function fiveDay(lat, lon) {
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log('Five Day', data)
    })
}

function getCity () {
    var cityName = searchInput.value;
    getweather(cityName)
}

searchBtn.addEventListener('click', getCity)