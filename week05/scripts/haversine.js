function haversine(lat1, lon1, lat2, lon2) {
    let R = 6371; //earth radius in KM
    let dLat = (lat2 - lat1).toRad();
    let dLon = (lon2 - lon1).toRad();
    lat1 = lat1.toRad();
    lat2 = lat2.toRad();

    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    return roundVal(d);

}

if (typeof Number.prototype.toRad == "undefined") {
    Number.prototype.toRad = function () {
        return this * Math.PI / 180;
    }
}

function roundVal(val) {
    let dec = 2;
    let result = Math.round(val * Math.pow(10, dec)) / Math.pow(10, dec);
    return result;
}

function calculateDistances(lat, lon) {
    let d1 = haversine(lat, lon, 2.922562, 101.650965);//de pulze, cyberjaya
    let d2 = haversine(lat, lon, 3.073065, 101.607787);// Sunway Pyramid
    let d3 = haversine(lat, lon, 3.158761, 101.714524);// KLCC

    return [d1, d2, d3];
}

let elLocate = document.getElementById("locate");
elLocate.addEventListener("click", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let elLat = document.getElementById("lat");
            let elLong = document.getElementById("long");
            let elDepulze = document.getElementById("depulze");
            let elSunway = document.getElementById("sunway");
            let elKlcc = document.getElementById("klcc");

            let userLat = position.coords.latitude;
            let userLong = position.coords.longitude;

            let distances = calculateDistances(userLat, userLong);

            elLat.innerHTML = "Your latitute : " + userLat;
            elLong.innerHTML = "Your longitude : " + userLong;
            elDepulze.innerHTML = "Distance to De Pulze, CJ is " + distances[0];
            elSunway.innerHTML = "Distance to Sunway Pyramid is " + distances[1];
            elKlcc.innerHTML = "Distance to KLCC is " + distances[2];

        });
    } else {
        alert("Geolocation is not supported")
    }
});