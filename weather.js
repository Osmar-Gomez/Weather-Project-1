var x = document.getElementById("location");



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "You're position is" + "<br>Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}



getLocation();
