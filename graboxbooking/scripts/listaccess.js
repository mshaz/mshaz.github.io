function GetBookings() {
    let url = 'https://api.sheety.co/7bbdfd111fe62d895c526fc8c8b6a2ed/data/rfid';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            //console.log(json.bookings);
            let bookingList = document.getElementById("booking-list");
            let bookingIds = [];

            //clear the table rows
            for (let k = bookingList.rows.length - 1; k > 0; k--) {
                bookingList.deleteRow(k);
            }

            for (let i = 0; i < json.rfid.length; i++) {
                let gDate = json.rfid[i].date;
                let gTime = json.rfid[i].time;
                let gCard = json.rfid[i].card;
                let gAccess = json.rfid[i].access;
                let gId = json.rfid[i].id;
                let buttonId = "delete" + gId;

                let row = bookingList.insertRow(bookingList.rows.length);
                row.insertCell(0).innerHTML = gId;
                row.insertCell(1).innerHTML = gDate;
                row.insertCell(2).innerHTML = gTime;
                row.insertCell(3).innerHTML = gCard;
                row.insertCell(4).innerHTML = gAccess;
                row.insertCell(5).innerHTML = "<button id='" +
                    buttonId + "' class='btn btn-danger'>Delete</button>";

                bookingIds.push(buttonId);
            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j]);
                el.addEventListener("click", function () {
                    let theId = bookingIds[j].replace("delete", "");
                    DeleteBooking(theId);
                });
            }
        });
}

window.addEventListener("load", function () {
    document.getElementById("refreshList").addEventListener("click", function () {
        GetBookings();
    });
})

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/7bbdfd111fe62d895c526fc8c8b6a2ed/data/rfid/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then((response) => {
            GetBookings();
        });
}