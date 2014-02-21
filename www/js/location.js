function initialize() {
    app.receivedEvent('showing location');
    var options = { maximumAge: 0, timeout: 10000, enableHighAccuracy: true };
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    return false;
};

function onSuccess(position) {
    var myLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    map = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: myLocation,
        zoom: 15
    });

    var marker = new google.maps.Marker({
        position: myLocation,
        map: map,
        title: 'You are here!'
    });
};

function onError(error) {
    app.receivedEvent('code: ' + error.code + '\n' + 'message: ' + error.message + '\n', "Error");
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}

$(document).ready(loadScript);