//API Key
var apiKey ='2385eb75852e33fb63118cdf18e9a748'


var searchBtn = document.querySelector('#search-button');
var searchInput = document.querySelector('#search-input');


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
        console.log('Temp: ',data.list[7].main.temp)
        
        console.log(data.list[0].dt_txt.substring(0, 10))
       

        // create the element
        var day1Display = document.querySelector('.day1')
        var dateEl1 = document.createElement('p')
        var tempEl1 = document.createElement('p');
        var windEl1 = document.createElement('p');
        var humidityEl1 = document.createElement('p');
        // populate the element
       
        dateEl1.textContent = `${'Five Day',data.list[0].dt_txt.substring(0, 10)}`
        tempEl1.textContent = `Temp: ${'Five Day',data.list[0].main.temp} C` 
        humidityEl1.textContent = `Humidity: ${'Five Day',data.list[0].main.humidity} %`
        windEl1.textContent = `Wind: ${'Five Day',data.list[0].wind.speed} km/h`
        day1Display.append(dateEl1, tempEl1, windEl1, humidityEl1);

        
        //day2
        var day2Display = document.querySelector('.day2')
        var dateEl2 = document.createElement('p')
        var tempEl2 = document.createElement('p');
        var humidityEl2 = document.createElement('p');
        var windEl2 = document.createElement('p');

        dateEl2.textContent = `${'Five Day',data.list[8].dt_txt.substring(0, 10)}`
        tempEl2.textContent = `Temp: ${'Five Day',data.list[8].main.temp} C` 
        humidityEl2.textContent = `Humidity: ${'Five Day',data.list[8].main.humidity} %`
        windEl2.textContent = `Wind: ${'Five Day',data.list[8].wind.speed} km/h`
        // append the element
        day2Display.append(dateEl2, tempEl2, windEl2, humidityEl2);
        

        //day3
        var day3Display = document.querySelector('.day3')
        var dateEl3 = document.createElement('p')
        var tempEl3 = document.createElement('p');
        var humidityEl3 = document.createElement('p');
        var windEl3 = document.createElement('p');

        dateEl3.textContent = `${'Five Day',data.list[16].dt_txt.substring(0, 10)}`
        tempEl3.textContent = `Temp: ${'Five Day',data.list[16].main.temp} C` 
        humidityEl3.textContent = `Humidity: ${'Five Day',data.list[16].main.humidity} %`
        windEl3.textContent = `Wind: ${'Five Day',data.list[16].wind.speed} km/h`
        
        day3Display.append(dateEl3, tempEl3, windEl3, humidityEl3);       
       

        //day4
        var day4Display = document.querySelector('.day4')
        var dateEl4 = document.createElement('p')
        var tempEl4 = document.createElement('p');
        var humidityEl4 = document.createElement('p');
        var windEl4 = document.createElement('p');

        dateEl4.textContent = `${'Five Day',data.list[24].dt_txt.substring(0, 10)}`
        tempEl4.textContent = `Temp: ${'Five Day',data.list[24].main.temp} C` 
        humidityEl4.textContent = `Humidity: ${'Five Day',data.list[24].main.humidity} %`
        windEl4.textContent = `Wind: ${'Five Day',data.list[24].wind.speed} km/h`
        // append the element
        day4Display.append(dateEl4, tempEl4, windEl4, humidityEl4);

        //day5
        var day5Display = document.querySelector('.day5')
        var dateEl5 = document.createElement('p')
        var tempEl5 = document.createElement('p');
        var humidityEl5 = document.createElement('p');
        var windEl5 = document.createElement('p');

        dateEl5.textContent = `${'Five Day',data.list[32].dt_txt.substring(0, 10)}`
        tempEl5.textContent = `Temp: ${'Five Day',data.list[32].main.temp} C` 
        humidityEl5.textContent = `Humidity: ${'Five Day',data.list[32].main.humidity} %`
        windEl5.textContent = `Wind: ${'Five Day',data.list[32].wind.speed} km/h`
        // append the element
        day5Display.append(dateEl5, tempEl5, windEl5, humidityEl5);






    
    })
}

function getCity () {
    var cityName = searchInput.value;
    getweather(cityName)
}

searchBtn.addEventListener('click', getCity)