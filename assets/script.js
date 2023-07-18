// if(navigator.geolocation) {

//     function success(postion) {
//         console.log(position)
//     }


//     navigator.geolocation.getCurrentPosition(success, function() {
//         console.log('Error with geolocation')
//     })
// } else {
//     console.log('Geolocation API is not supported')
// }


const apiKey = '767baab1ba615005b7b57e268ed513fe';

var cityEl = $('h2#city');
var dateEL = $('h3#date');
var weatherIconEl = $('img#weather-icon');
var temperatureEl = $('span#temperature');
var humidityEl = $('span#humidity');
var windEl = $('span#wind');
var uvIndexEl = $('span#uv-index');
var cityListEl = $('div.cityList');

var cityInput = $('#city-input');

// Store past searched cities
var pastCities = [];

function compare(a, b) {
    var cityA = a.city.toUpperCase();
    var cityB = b.city.toUpperCase();


    var comparison = 0;
    if (cityA > cityB) {
        comparison = 1;
    } else if (cityA < cityB) {
        comparison = -1;
    } return comparison
}


function loadCities() {
    var storedCities = JSON.parse(localStorage.getItem('pastCities'));
    if (storedCities) {
        pastCities = storedCities;
    }
}


function storeCities() {
    localStorage.setItem('pastCities', JSON.stringify(pastCities));
}


function buildURLFromId(id) {
    return `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}`;
}

function displayCities(pastCities) {
    cityListEl.empty();
    pastCities.splice(5);
    let sortedCities = [...pastCities];
    sortedCities.sort(compare);
    sortedCities.forEach(function (location) {
        let cityDiv = $('<div>').addClass('col-12 city');
        let cityBtn = $('<button>').addClass('btn btn-light city-btn').text(location.city);
        cityDiv.append(cityBtn);
        cityListEl.append(cityDiv);
    });
}

function setUVIndexColor(uvi) {
    if (uvi < 3) {
        return 'green';
    } else if (uvi >= 3 && uvi < 6) {
        return 'yellow';
    } else if (uvi >= 6 && uvi < 8) {
        return 'orange';
    } else if (uvi >= 8 && uvi < 11) {
        return 'red';
    } else return 'purple';
}