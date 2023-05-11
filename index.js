//API Key
var apiKey ='2385eb75852e33fb63118cdf18e9a748'


var searchBtn = document.querySelector('#search-button');
var searchInput = document.querySelector('#search-input');
var oneDayForecast = document.querySelector('.one-day-forecast');
var fiveDayForecast = document.querySelector('.five-day-forecast');
var historyContainer = document.querySelector('#history-container');
let currentDate = new Date().toLocaleString("en-US", {timeZone: "America/New_York"}).split(',')[0];
var forecastDisplay = document.querySelector('.forecast');
var card = document.querySelector('.card') 
fiveDayForecast.style.display = 'none'
card.style.display = 'none'

function getweather(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        card.style.display = 'block'
        fiveDayForecast.style.display = 'block'
        // console.log('Temp: ', data.temp);
        // console.log('Pressure: ',data.main.pressure);
        // console.log('Icon: ',data.weather[0].icon)

        
        forecastDisplay.innerHTML = "";

        // create the element
        
        var h2El = document.createElement('h2');
        var dateEl = document.createElement('p');
        var tempEl = document.createElement('p');
        var windEl = document.createElement('p');
        var humidityEl = document.createElement('p');

        // populate the element
        h2El.textContent = cityName
        dateEl.textContent = currentDate
        tempEl.textContent = `Temp: ${data.main.temp} C` 
        humidityEl.textContent = `Humidity: ${data.main.humidity} %`
        windEl.textContent = `Wind: ${data.wind.speed} km/h`

        var weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        var iconEl = document.createElement('img')
        iconEl.setAttribute('src', weatherIcon)
       

        forecastDisplay.append(h2El, iconEl, dateEl, tempEl, windEl, humidityEl);
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
       
        
        

        // day1 create the element
        var day1Display = document.querySelector('.day1');
        day1Display.innerHTML = "";
        var dateEl1 = document.createElement('p');
        var tempEl1 = document.createElement('p');
        var windEl1 = document.createElement('p');
        var humidityEl1 = document.createElement('p');
        
        // populate the element
        dateEl1.textContent = `${'Five Day',data.list[6].dt_txt.substring(0, 10)}`
        tempEl1.textContent = `Temp: ${'Five Day',data.list[6].main.temp} C` 
        humidityEl1.textContent = `Humidity: ${'Five Day',data.list[6].main.humidity} %`
        windEl1.textContent = `Wind: ${'Five Day',data.list[6].wind.speed} km/h`

        var weatherIcon1 = `https://openweathermap.org/img/w/${data.list[6].weather[0].icon}.png`;
        var icon1El = document.createElement('img')
        icon1El.setAttribute('src', weatherIcon1)

        // append the element
        day1Display.append(dateEl1, icon1El, tempEl1, windEl1, humidityEl1);

        
        //day2
        var day2Display = document.querySelector('.day2');
        day2Display.innerHTML = "";
        var dateEl2 = document.createElement('p');
        var tempEl2 = document.createElement('p');
        var humidityEl2 = document.createElement('p');
        var windEl2 = document.createElement('p');

        dateEl2.textContent = `${'Five Day',data.list[14].dt_txt.substring(0, 10)}`
        tempEl2.textContent = `Temp: ${'Five Day',data.list[14].main.temp} C` 
        humidityEl2.textContent = `Humidity: ${'Five Day',data.list[14].main.humidity} %`
        windEl2.textContent = `Wind: ${'Five Day',data.list[14].wind.speed} km/h`
        

        var weatherIcon2 = `https://openweathermap.org/img/w/${data.list[14].weather[0].icon}.png`;
        var icon2El = document.createElement('img')
        icon2El.setAttribute('src', weatherIcon2)

        day2Display.append(dateEl2, icon2El, tempEl2, windEl2, humidityEl2);
        

        //day3
        var day3Display = document.querySelector('.day3');
        day3Display.innerHTML = "";
        var dateEl3 = document.createElement('p');
        var tempEl3 = document.createElement('p');
        var humidityEl3 = document.createElement('p');
        var windEl3 = document.createElement('p');

        dateEl3.textContent = `${'Five Day',data.list[22].dt_txt.substring(0, 10)}`
        tempEl3.textContent = `Temp: ${'Five Day',data.list[22].main.temp} C` 
        humidityEl3.textContent = `Humidity: ${'Five Day',data.list[22].main.humidity} %`
        windEl3.textContent = `Wind: ${'Five Day',data.list[22].wind.speed} km/h`
        
        var weatherIcon3 = `https://openweathermap.org/img/w/${data.list[22].weather[0].icon}.png`;
        var icon3El = document.createElement('img')
        icon3El.setAttribute('src', weatherIcon3)

        day3Display.append(dateEl3, icon3El, tempEl3, windEl3, humidityEl3);       
       

        //day4
        var day4Display = document.querySelector('.day4');
        day4Display.innerHTML = "";
        var dateEl4 = document.createElement('p');
        var tempEl4 = document.createElement('p');
        var humidityEl4 = document.createElement('p');
        var windEl4 = document.createElement('p');

        dateEl4.textContent = `${'Five Day',data.list[30].dt_txt.substring(0, 10)}`
        tempEl4.textContent = `Temp: ${'Five Day',data.list[30].main.temp} C` 
        humidityEl4.textContent = `Humidity: ${'Five Day',data.list[30].main.humidity} %`
        windEl4.textContent = `Wind: ${'Five Day',data.list[30].wind.speed} km/h`
        
        var weatherIcon4 = `https://openweathermap.org/img/w/${data.list[30].weather[0].icon}.png`;
        var icon4El = document.createElement('img')
        icon4El.setAttribute('src', weatherIcon4)

        day4Display.append(dateEl4, icon4El, tempEl4, windEl4, humidityEl4);

        //day5
        var day5Display = document.querySelector('.day5');
        day5Display.innerHTML = "";
        var dateEl5 = document.createElement('p');
        var tempEl5 = document.createElement('p');
        var humidityEl5 = document.createElement('p');
        var windEl5 = document.createElement('p');

        dateEl5.textContent = `${'Five Day',data.list[38].dt_txt.substring(0, 10)}`
        tempEl5.textContent = `Temp: ${'Five Day',data.list[38].main.temp} C` 
        humidityEl5.textContent = `Humidity: ${'Five Day',data.list[38].main.humidity} %`
        windEl5.textContent = `Wind: ${'Five Day',data.list[38].wind.speed} km/h`

        var weatherIcon5 = `https://openweathermap.org/img/w/${data.list[38].weather[0].icon}.png`;
        var icon5El = document.createElement('img')
        icon5El.setAttribute('src', weatherIcon5)
        
        day5Display.append(dateEl5, icon5El, tempEl5, windEl5, humidityEl5);






    
    })
}

function getCity () {
    var cityName = searchInput.value;
    getweather(cityName)
    var searchCity = JSON.parse(localStorage.getItem('cityName')) || [];

    if(!cityName){
        alert("You must put a valid city")
        return
    }

    let searchHistory = JSON.parse(localStorage.getItem('cityName')) || [];

    searchHistory.push(cityName)
    
    localStorage.setItem('cityName', JSON.stringify(searchHistory));

    displayHistory();
}

function displayHistory (){

    var storedCity = JSON.parse(localStorage.getItem('cityName'))
    storedCity.forEach(function(city) {
        // Create the button element for the city
        var buttonEl = document.createElement('button');
        // give it text content
        buttonEl.textContent = city;
        // add a click listener
        buttonEl.addEventListener('click', function(){
            getweather(city)
        });
        // append it to the page
        historyContainer.append(buttonEl)

    })
}

displayHistory();



searchBtn.addEventListener('click', getCity)