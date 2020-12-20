function GetBookings(){
    let url = 'https://api.sheety.co/e4e1e3ba7d813589a03b055bfb0ae62f/bookingApp/bookings';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
        // Do something with the data
        console.log(json.bookings);
        let bookingList = document.getElementById("bookingList");
        bookingList.innerHTML = "";

        let jsonDiv = document.getElementById("json");
        jsonDiv.innerHTML = "";
        jsonDiv.innerHTML = json.bookings;

        for (let i = 0; i < json.bookings.length; i++) {
            let gName = json.bookings[i].name;
            let gEmail = json.bookings[i].email;
            let gPax = json.bookings[i].pax;
            let gId = json.bookings[i].id;

            bookingList.innerHTML += gId + "-" + gName + ", " +
                gEmail + ", pax:" + gPax + "<br>";
        }
    });
}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click", function () {
GetBookings();
});