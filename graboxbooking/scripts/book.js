function BookNow(guestName, guestEmail, guestLocker, guestDate, guestRemarks) {
    let url = 'https://api.sheety.co/e4e1e3ba7d813589a03b055bfb0ae62f/bookingApp/bookings';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            locker: guestLocker,
            date: guestDate,
            remarks: guestRemarks
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
            alert(json.booking.name + " added!");
        });
}

window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userLocker = document.getElementById("userLocker").value;
        let userDate = document.getElementById("userDate").value;
        let userRemarks = document.getElementById("userRemarks").value;

        BookNow(userName, userEmail, userLocker, userDate, userRemarks);
    });
});