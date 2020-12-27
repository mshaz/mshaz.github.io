function GetBookings(){
    let url = 'https://api.sheety.co/7bbdfd111fe62d895c526fc8c8b6a2ed/data/rfid';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
        // Do something with the data
        console.log(json.rfid);
        let bookingList = document.getElementById("bookingList");
        bookingList.innerHTML = "";

        let jsonDiv = document.getElementById("json");
        jsonDiv.innerHTML = "";
        jsonDiv.innerHTML = json.rfid;

        for (let i = 0; i < json.rfid.length; i++) {
            let gName = json.rfid[i].date;
            let gEmail = json.rfid[i].time;
            let gPax = json.rfid[i].card;
            let gId = json.rfid[i].access;

            bookingList.innerHTML += gId + "-" + gName + ", " +
                gEmail + ", pax:" + gPax + "<br>";
        }
    });
}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click", function () {
GetBookings();
});


function BookNow(guestName, guestEmail, guestPax) {

    let url = 'https://api.sheety.co/e4e1e3ba7d813589a03b055bfb0ae62f/bookingApp/bookings';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            pax: guestPax
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            //console.log(json.booking);
            let bookMsg = document.getElementById("bookMsg");
            bookMsg.innerHTML = json.booking.name + " added!"
            GetBookings();
        });
}

let bookNow = document.getElementById("bookNow");
bookNow.addEventListener("click", function () {
    let gName = document.getElementById("guestName").value;
    let gEmail = document.getElementById("guestEmail").value;
    let gPax = document.getElementById("guestPax").value;

    BookNow(gName, gEmail, gPax);
});