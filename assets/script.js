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
