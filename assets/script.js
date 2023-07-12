if(navigator.geolocation) {

    function success(postion) {
        console.log(position)
    }


    navigator.geolocation.getCurrentPosition(success, function() {
        console.log('Error with geolocation')
    })
} else {
    console.log('Geolocation API is not supported')
}